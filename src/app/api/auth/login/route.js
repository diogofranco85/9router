import { NextResponse } from "next/server";
import { getSettings, countUsers, getUserByEmail, verifyUserPassword } from "@/lib/localDb";
import { cookies } from "next/headers";
import { setDashboardAuthCookie } from "@/lib/auth/dashboardSession";
import { isOidcConfigured } from "@/lib/auth/oidc";
import { isSamlConfigured } from "@/lib/auth/saml.js";
import { checkLock, recordFail, recordSuccess, getClientIp } from "@/lib/auth/loginLimiter";
import { isLocalRequest } from "@/dashboardGuard";
import { permissionsFromUser, fullPermissions } from "@/lib/auth/accessControl";
import bcrypt from "bcryptjs";

const RESET_HINT = "Forgot password? Reset to default via 9Router CLI → Settings → Reset Password to Default.";
const NO_STORE_HEADERS = { "Cache-Control": "no-store" };

function isTunnelRequest(request, settings) {
  const host = (request.headers.get("host") || "").split(":")[0].toLowerCase();
  const tunnelHost = settings.tunnelUrl ? new URL(settings.tunnelUrl).hostname.toLowerCase() : "";
  const tailscaleHost = settings.tailscaleUrl ? new URL(settings.tailscaleUrl).hostname.toLowerCase() : "";
  return (tunnelHost && host === tunnelHost) || (tailscaleHost && host === tailscaleHost);
}

async function issueSession(request, claims) {
  const cookieStore = await cookies();
  await setDashboardAuthCookie(cookieStore, request, claims);
}

export async function POST(request) {
  try {
    const ip = getClientIp(request);
    const lock = checkLock(ip);
    if (lock.locked) {
      return NextResponse.json(
        { error: `Too many failed attempts. Try again in ${lock.retryAfter}s. ${RESET_HINT}`, retryAfter: lock.retryAfter, resetHint: RESET_HINT },
        { status: 429, headers: { "Retry-After": String(lock.retryAfter) } }
      );
    }

    const body = await request.json();
    const password = typeof body?.password === "string" ? body.password : "";
    const email = typeof body?.email === "string" ? body.email.trim().toLowerCase() : "";
    const settings = await getSettings();

    if (isTunnelRequest(request, settings) && settings.tunnelDashboardAccess !== true) {
      return NextResponse.json({ error: "Dashboard access via tunnel is disabled" }, { status: 403 });
    }

    if (
      settings.authMode === "oidc" &&
      (settings.ssoType === "saml" ? isSamlConfigured(settings) : isOidcConfigured(settings)) &&
      !settings.accessControlEnabled
    ) {
      return NextResponse.json({ error: "Password login is disabled. Use SSO sign in." }, { status: 403 });
    }

    const accessControlEnabled = settings.accessControlEnabled === true;
    const userCount = accessControlEnabled ? await countUsers() : 0;
    const envPasswordBlocked =
      accessControlEnabled && settings.blockEnvPassword === true && userCount >= 1;

    // --- User email + password ---
    if (accessControlEnabled && email) {
      const user = await getUserByEmail(email, { includeHash: true });
      if (!user || !(await verifyUserPassword(user, password))) {
        const { remainingBeforeLock } = recordFail(ip);
        const postLock = checkLock(ip);
        if (postLock.locked) {
          return NextResponse.json(
            { error: `Too many failed attempts. Try again in ${postLock.retryAfter}s.`, retryAfter: postLock.retryAfter },
            { status: 429, headers: { "Retry-After": String(postLock.retryAfter) } }
          );
        }
        return NextResponse.json(
          { error: `Invalid email or password. ${remainingBeforeLock} attempt(s) left before lockout.`, remainingBeforeLock },
          { status: 401 }
        );
      }
      if (user.isBlocked) {
        return NextResponse.json({ error: "This account is blocked" }, { status: 403 });
      }

      recordSuccess(ip);
      const permissions = permissionsFromUser(user);
      await issueSession(request, {
        userId: user.id,
        email: user.email,
        mustChangePassword: user.mustChangePassword === true,
        permissions,
      });

      return NextResponse.json({
        success: true,
        mustChangePassword: user.mustChangePassword === true,
        permissions,
        user: {
          id: user.id,
          email: user.email,
          name: user.name,
        },
      }, { headers: NO_STORE_HEADERS });
    }

    // --- Shared / env password (legacy admin) ---
    if (envPasswordBlocked) {
      return NextResponse.json(
        { error: "Shared password login is disabled. Sign in with your email and password." },
        { status: 403 }
      );
    }

    if (accessControlEnabled && !email) {
      // Access control on but no email — only allow shared password if not blocked
      // (already checked above)
    }

    if (
      settings.authMode === "oidc" &&
      (settings.ssoType === "saml" ? isSamlConfigured(settings) : isOidcConfigured(settings)) &&
      !accessControlEnabled
    ) {
      return NextResponse.json({ error: "Password login is disabled. Use SSO sign in." }, { status: 403 });
    }

    const storedHash = settings.password;
    let isValid = false;
    if (storedHash) {
      isValid = await bcrypt.compare(password, storedHash);
    } else {
      const initialPassword = process.env.INITIAL_PASSWORD || "123456";
      isValid = password === initialPassword;
    }

    if (isValid) {
      recordSuccess(ip);
      await issueSession(request, {
        isLegacyAdmin: true,
        permissions: fullPermissions(),
      });

      const mustChangePassword =
        !storedHash && !process.env.INITIAL_PASSWORD && !isLocalRequest(request);

      return NextResponse.json({
        success: true,
        mustChangePassword,
        isLegacyAdmin: true,
        permissions: fullPermissions(),
      }, { headers: NO_STORE_HEADERS });
    }

    const { remainingBeforeLock } = recordFail(ip);
    const postLock = checkLock(ip);
    if (postLock.locked) {
      return NextResponse.json(
        { error: `Too many failed attempts. Try again in ${postLock.retryAfter}s. ${RESET_HINT}`, retryAfter: postLock.retryAfter, resetHint: RESET_HINT },
        { status: 429, headers: { "Retry-After": String(postLock.retryAfter) } }
      );
    }
    return NextResponse.json(
      { error: `Invalid password. ${remainingBeforeLock} attempt(s) left before lockout.`, remainingBeforeLock },
      { status: 401 }
    );
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
