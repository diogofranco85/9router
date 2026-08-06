import { NextResponse } from "next/server";
import { getSettings, validateApiKey, getUserById } from "@/lib/localDb";
import { getConsistentMachineId } from "@/shared/utils/machineId";
import { getDashboardAuthSession, verifyDashboardAuthToken } from "@/lib/auth/dashboardSession";
import { permissionsFromUser, fullPermissions } from "@/lib/auth/accessControl";

const CLI_TOKEN_HEADER = "x-9r-cli-token";
const CLI_TOKEN_SALT = "9r-cli-auth";

let cachedCliToken = null;
async function getCliToken() {
  if (!cachedCliToken) cachedCliToken = await getConsistentMachineId(CLI_TOKEN_SALT);
  return cachedCliToken;
}

async function hasValidCliToken(request) {
  const token = request.headers.get(CLI_TOKEN_HEADER);
  if (!token) return false;
  return token === await getCliToken();
}

const PUBLIC_API_PATHS = [
  "/api/health",
  "/api/init",
  "/api/locale",
  "/api/auth/login",
  "/api/auth/logout",
  "/api/auth/status",
  "/api/auth/oidc",
  "/api/version",
  "/api/settings/require-login",
];

const PUBLIC_PREFIXES = ["/v1", "/v1beta", "/api/v1", "/api/v1beta", "/codex"];

const ALWAYS_PROTECTED = [
  "/api/shutdown",
  "/api/settings/database",
  "/api/version/shutdown",
  "/api/version/update",
  "/api/oauth/cursor/auto-import",
  "/api/oauth/kiro/auto-import",
];

const LOCAL_ONLY_PATHS = [
  "/api/cli-tools/cowork-settings",
  "/api/cli-tools/antigravity-mitm",
  "/api/mcp/",
  "/api/tunnel/tailscale-install",
  "/api/tunnel/tailscale-enable",
  "/api/tunnel/tailscale-disable",
  "/api/tunnel/tailscale-check",
  "/api/tunnel/enable",
  "/api/tunnel/disable",
  "/api/oauth/cursor/auto-import",
  "/api/oauth/kiro/auto-import",
  "/api/auth/reset-password",
  "/api/headroom/start",
  "/api/headroom/stop",
  "/api/headroom/proxy",
];

const LOOPBACK_HOSTS = new Set(["localhost", "127.0.0.1", "::1"]);

const CHANGE_PASSWORD_PATHS = [
  "/account/change-password",
  "/api/auth/change-password",
  "/api/auth/logout",
  "/api/auth/status",
];

function isLoopbackHostname(h) {
  if (!h) return false;
  const name = h.split(":")[0].replace(/^\[|\]$/g, "").toLowerCase();
  return LOOPBACK_HOSTS.has(name);
}

export function isLocalRequest(request) {
  if (request.headers.get("x-9r-via-proxy")) return false;
  const realIp = request.headers.get("x-9r-real-ip");
  if (realIp) {
    if (!isLoopbackHostname(realIp)) return false;
  } else if (!isLoopbackHostname(request.headers.get("host"))) {
    return false;
  }
  const origin = request.headers.get("origin");
  if (origin) {
    try {
      if (!isLoopbackHostname(new URL(origin).hostname)) return false;
    } catch { return false; }
  }
  return true;
}

function isPublicLlmApi(pathname) {
  return PUBLIC_PREFIXES.some((p) => pathname === p || pathname.startsWith(`${p}/`));
}

function extractApiKey(request) {
  const authHeader = request.headers.get("Authorization");
  if (authHeader?.startsWith("Bearer ")) return authHeader.slice(7);
  const apiKeyHeader = request.headers.get("x-api-key");
  if (apiKeyHeader) return apiKeyHeader;
  const googleApiKeyHeader = request.headers.get("x-goog-api-key");
  if (googleApiKeyHeader) return googleApiKeyHeader;
  return request.nextUrl.searchParams?.get("key") || null;
}

async function hasValidApiKey(request) {
  const apiKey = extractApiKey(request);
  if (!apiKey) return false;
  return await validateApiKey(apiKey);
}

async function canAccessPublicLlmApi(request) {
  if (isLocalRequest(request)) return true;
  if (await hasValidCliToken(request)) return true;
  return await hasValidApiKey(request);
}

async function canAccessLocalOnlyRoute(request) {
  if (await hasValidCliToken(request)) return true;
  if (isLocalRequest(request) && await isAuthenticated(request)) return true;
  return false;
}

async function resolveSession(request) {
  const token = request.cookies.get("auth_token")?.value;
  const payload = await getDashboardAuthSession(token);
  if (!payload?.authenticated) return null;

  if (payload.userId) {
    const user = await getUserById(payload.userId);
    if (!user || user.isBlocked) return null;
    return {
      authenticated: true,
      isLegacyAdmin: false,
      userId: user.id,
      mustChangePassword: user.mustChangePassword === true,
      permissions: permissionsFromUser(user),
    };
  }

  return {
    authenticated: true,
    isLegacyAdmin: true,
    userId: null,
    mustChangePassword: false,
    permissions: fullPermissions(),
  };
}

async function hasValidToken(request) {
  const token = request.cookies.get("auth_token")?.value;
  return await verifyDashboardAuthToken(token);
}

async function loadSettings() {
  try {
    return await getSettings();
  } catch {
    return null;
  }
}

async function isAuthenticated(request) {
  if (await hasValidToken(request)) return true;
  const settings = await loadSettings();
  if (settings && settings.requireLogin === false) return true;
  return false;
}

function isPublicApi(pathname) {
  if (isPublicLlmApi(pathname)) return true;
  return PUBLIC_API_PATHS.some((p) => pathname === p || pathname.startsWith(`${p}/`));
}

function sessionHasPerm(session, perm) {
  if (!session) return false;
  if (session.isLegacyAdmin) return true;
  return session.permissions?.[perm] === true;
}

function isChangePasswordAllowed(pathname) {
  return CHANGE_PASSWORD_PATHS.some((p) => pathname === p || pathname.startsWith(`${p}/`));
}

function redirectLogin(request) {
  return NextResponse.redirect(new URL("/login", request.url));
}

function redirectChangePassword(request) {
  return NextResponse.redirect(new URL("/account/change-password", request.url));
}

function forbidApi(message = "Forbidden") {
  return NextResponse.json({ error: message }, { status: 403 });
}

/**
 * Enforce mustChangePassword + permission for UI and API paths.
 * Returns NextResponse to short-circuit, or null to continue.
 */
async function enforceAccessPolicies(request, pathname) {
  const session = await resolveSession(request);
  if (!session) return null;

  if (session.mustChangePassword && !isChangePasswordAllowed(pathname)) {
    if (pathname.startsWith("/api/")) {
      return forbidApi("Password change required");
    }
    return redirectChangePassword(request);
  }

  // Chat UI + chat APIs
  if (pathname.startsWith("/chat") || pathname.startsWith("/api/chat")) {
    if (!sessionHasPerm(session, "chat")) {
      if (pathname.startsWith("/api/")) return forbidApi("Missing permission: chat");
      if (sessionHasPerm(session, "dashboard")) {
        return NextResponse.redirect(new URL("/dashboard", request.url));
      }
      return redirectLogin(request);
    }
  }

  // Dashboard UI
  if (pathname.startsWith("/dashboard")) {
    if (!sessionHasPerm(session, "dashboard")) {
      if (sessionHasPerm(session, "chat")) {
        return NextResponse.redirect(new URL("/chat", request.url));
      }
      return redirectLogin(request);
    }
  }

  // Account page — any authenticated user (password change / own keys)
  if (pathname.startsWith("/account")) {
    return null;
  }

  // Management APIs require dashboard (users, settings, providers, keys list for admin, etc.)
  // User-scoped keys API is allowed for any authenticated user (own keys).
  if (pathname.startsWith("/api/users")) {
    if (!sessionHasPerm(session, "dashboard")) return forbidApi("Missing permission: dashboard");
  }

  if (
    pathname.startsWith("/api/settings") ||
    pathname.startsWith("/api/providers") ||
    pathname.startsWith("/api/provider-nodes") ||
    pathname.startsWith("/api/proxy-pools") ||
    pathname.startsWith("/api/combos") ||
    pathname.startsWith("/api/models") ||
    pathname.startsWith("/api/usage") ||
    pathname.startsWith("/api/oauth") ||
    pathname.startsWith("/api/cloud") ||
    pathname.startsWith("/api/media-providers") ||
    pathname.startsWith("/api/pricing") ||
    pathname.startsWith("/api/tags") ||
    pathname.startsWith("/api/cli-tools") ||
    pathname.startsWith("/api/translator") ||
    pathname.startsWith("/api/tunnel")
  ) {
    // Allow authenticated users without dashboard only for nothing here —
    // these are management. Chat-only users should not hit them.
    if (session.userId && !sessionHasPerm(session, "dashboard")) {
      return forbidApi("Missing permission: dashboard");
    }
  }

  return null;
}

export const __test__ = {
  isLocalRequest,
  isPublicLlmApi,
  extractApiKey,
  canAccessPublicLlmApi,
  canAccessLocalOnlyRoute,
};

export async function proxy(request) {
  const { pathname } = request.nextUrl;

  if (LOCAL_ONLY_PATHS.some((p) => pathname.startsWith(p))) {
    if (!(await canAccessLocalOnlyRoute(request))) {
      return NextResponse.json({ error: "Local only: CLI token required" }, { status: 403 });
    }
  }

  if (ALWAYS_PROTECTED.some((p) => pathname.startsWith(p))) {
    if (await hasValidCliToken(request) || await hasValidToken(request))
      return NextResponse.next();
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  if (isPublicLlmApi(pathname)) {
    if (await canAccessPublicLlmApi(request)) return NextResponse.next();
    return NextResponse.json({ error: "API key required for remote API access" }, { status: 401 });
  }

  if (pathname.startsWith("/api/")) {
    if (isPublicApi(pathname)) return NextResponse.next();
    if (await hasValidCliToken(request) || await isAuthenticated(request)) {
      const denied = await enforceAccessPolicies(request, pathname);
      if (denied) return denied;
      return NextResponse.next();
    }
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  // Account routes (change password) — require auth
  if (pathname.startsWith("/account")) {
    const token = request.cookies.get("auth_token")?.value;
    if (!token || !(await verifyDashboardAuthToken(token))) {
      return redirectLogin(request);
    }
    const denied = await enforceAccessPolicies(request, pathname);
    if (denied) return denied;
    return NextResponse.next();
  }

  if (pathname.startsWith("/dashboard") || pathname.startsWith("/chat")) {
    let requireLogin = true;
    let tunnelDashboardAccess = true;

    try {
      const settings = await loadSettings();
      if (settings) {
        requireLogin = settings.requireLogin !== false;
        tunnelDashboardAccess = settings.tunnelDashboardAccess === true;

        if (!tunnelDashboardAccess) {
          const host = (request.headers.get("host") || "").split(":")[0].toLowerCase();
          const tunnelHost = settings.tunnelUrl ? new URL(settings.tunnelUrl).hostname.toLowerCase() : "";
          const tailscaleHost = settings.tailscaleUrl ? new URL(settings.tailscaleUrl).hostname.toLowerCase() : "";
          if ((tunnelHost && host === tunnelHost) || (tailscaleHost && host === tailscaleHost)) {
            return redirectLogin(request);
          }
        }
      }
    } catch {
      // keep defaults
    }

    if (!requireLogin) return NextResponse.next();

    const token = request.cookies.get("auth_token")?.value;
    if (token) {
      if (await verifyDashboardAuthToken(token)) {
        const denied = await enforceAccessPolicies(request, pathname);
        if (denied) return denied;
        return NextResponse.next();
      }
      return redirectLogin(request);
    }

    return redirectLogin(request);
  }

  if (pathname === "/") {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  return NextResponse.next();
}
