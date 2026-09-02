import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { getDashboardAuthSession } from "@/lib/auth/dashboardSession";
import { getSettings, getUserById, countUsers } from "@/lib/localDb";

export const PERMS = {
  dashboard: "dashboard",
  chat: "chat",
  api: "api",
};

export function permissionsFromUser(user) {
  return {
    dashboard: user?.permDashboard !== false,
    chat: user?.permChat !== false,
    api: user?.permApi !== false,
  };
}

export function fullPermissions() {
  return { dashboard: true, chat: true, api: true };
}

/**
 * Resolve auth session from cookie store or request.
 * Returns normalized session shape or null.
 */
export async function getAccessSession(request = null) {
  let token = null;
  if (request?.cookies?.get) {
    token = request.cookies.get("auth_token")?.value || null;
  } else {
    const cookieStore = await cookies();
    token = cookieStore.get("auth_token")?.value || null;
  }
  const payload = await getDashboardAuthSession(token);
  if (!payload?.authenticated) return null;

  if (payload.userId) {
    const user = await getUserById(payload.userId);
    if (!user || user.isBlocked) return null;
    return {
      authenticated: true,
      isLegacyAdmin: false,
      userId: user.id,
      email: user.email,
      name: user.name,
      mustChangePassword: user.mustChangePassword === true,
      permissions: permissionsFromUser(user),
      user,
    };
  }

  // Shared password / OIDC / SAML session
  return {
    authenticated: true,
    isLegacyAdmin: true,
    userId: null,
    email: payload.oidcEmail || payload.samlEmail || null,
    name: payload.oidcName || payload.samlName || null,
    mustChangePassword: false,
    permissions: fullPermissions(),
    oidc: !!payload.oidc,
    saml: !!payload.saml,
    user: null,
  };
}

export function hasPerm(session, perm) {
  if (!session?.authenticated) return false;
  if (session.isLegacyAdmin) return true;
  return session.permissions?.[perm] === true;
}

export function canManageUsers(session) {
  return hasPerm(session, PERMS.dashboard);
}

export async function isEnvPasswordBlocked() {
  const settings = await getSettings();
  if (!settings.accessControlEnabled) return false;
  if (!settings.blockEnvPassword) return false;
  const n = await countUsers();
  return n >= 1;
}

export function jsonUnauthorized(message = "Unauthorized") {
  return NextResponse.json({ error: message }, { status: 401 });
}

export function jsonForbidden(message = "Forbidden") {
  return NextResponse.json({ error: message }, { status: 403 });
}

/**
 * Gate an API route: require authenticated session with optional permission.
 * Returns { session } or a NextResponse error.
 */
export async function requireSession({ perm = null, allowMustChange = false } = {}) {
  const session = await getAccessSession();
  if (!session) return { error: jsonUnauthorized() };
  if (session.mustChangePassword && !allowMustChange) {
    return { error: jsonForbidden("Password change required") };
  }
  if (perm && !hasPerm(session, perm)) {
    return { error: jsonForbidden(`Missing permission: ${perm}`) };
  }
  return { session };
}
