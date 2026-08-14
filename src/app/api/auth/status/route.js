import { NextResponse } from "next/server";
import { getSettings, countUsers } from "@/lib/localDb";
import { isOidcConfigured } from "@/lib/auth/oidc";
import { getAccessSession, isEnvPasswordBlocked } from "@/lib/auth/accessControl";

export async function GET() {
  try {
    const settings = await getSettings();
    const session = await getAccessSession();
    const requireLogin = settings.requireLogin !== false;
    const authMode = settings.authMode || "password";
    const accessControlEnabled = settings.accessControlEnabled === true;
    const userCount = accessControlEnabled ? await countUsers() : 0;
    const envPasswordBlocked = await isEnvPasswordBlocked();

    let displayName = "Password user";
    let loginMethod = "Password";
    if (session?.userId) {
      displayName = session.name || session.email || "User";
      loginMethod = "User";
    } else if (session?.oidc) {
      displayName = session.name || session.email || "OIDC user";
      loginMethod = "OIDC";
    } else if (session?.isLegacyAdmin) {
      displayName = "Admin";
      loginMethod = "Password";
    }

    return NextResponse.json({
      requireLogin,
      authMode,
      ssoType,
      oidcConfigured: isOidcConfigured(settings),
      oidcLoginLabel: (settings.oidcLoginLabel || "Sign in with OIDC").trim() || "Sign in with OIDC",
      samlConfigured: isSamlConfigured(settings),
      samlLoginLabel: (settings.samlLoginLabel || "Sign in with SAML SSO").trim() || "Sign in with SAML SSO",
      hasPassword: !!settings.password,
      accessControlEnabled,
      blockEnvPassword: settings.blockEnvPassword === true,
      envPasswordBlocked,
      userCount,
      displayName,
      loginMethod,
      authenticated: !!session,
      mustChangePassword: session?.mustChangePassword === true,
      permissions: session?.permissions || null,
      isLegacyAdmin: session?.isLegacyAdmin === true,
      userId: session?.userId || null,
      email: session?.email || null,
      oidcName: session?.name && session?.oidc ? session.name : null,
      oidcEmail: session?.email && session?.oidc ? session.email : null,
      oidcLogin: !!session?.oidc,
      samlName: samlName || null,
      samlEmail: samlEmail || null,
      samlLogin: !!session?.saml,
    });
  } catch {
    return NextResponse.json({
      requireLogin: true,
      authMode: "password",
      ssoType: "oidc",
      oidcConfigured: false,
      oidcLoginLabel: "Sign in with OIDC",
      samlConfigured: false,
      samlLoginLabel: "Sign in with SAML SSO",
      hasPassword: false,
      accessControlEnabled: false,
      blockEnvPassword: false,
      envPasswordBlocked: false,
      userCount: 0,
      displayName: "Password user",
      loginMethod: "Password",
      authenticated: false,
      mustChangePassword: false,
      permissions: null,
      isLegacyAdmin: false,
      userId: null,
      email: null,
      oidcName: null,
      oidcEmail: null,
      oidcLogin: false,
      samlName: null,
      samlEmail: null,
      samlLogin: false,
    });
  }
}
