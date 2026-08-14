import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { setUserPassword } from "@/lib/localDb";
import { setDashboardAuthCookie, verifyDashboardPassword } from "@/lib/auth/dashboardSession";
import { getAccessSession, permissionsFromUser, fullPermissions } from "@/lib/auth/accessControl";
import { updateSettings } from "@/lib/localDb";

const NO_STORE = { "Cache-Control": "no-store" };

/**
 * Change password for the logged-in user (or legacy shared password).
 * Body: { currentPassword, newPassword }
 */
export async function POST(request) {
  try {
    const session = await getAccessSession();
    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await request.json();
    const currentPassword = typeof body?.currentPassword === "string" ? body.currentPassword : "";
    const newPassword = typeof body?.newPassword === "string" ? body.newPassword : "";

    if (!newPassword || newPassword.length < 6) {
      return NextResponse.json({ error: "New password must be at least 6 characters" }, { status: 400 });
    }

    // User account
    if (session.userId) {
      const { getUserById, verifyUserPassword } = await import("@/lib/localDb");
      const user = await getUserById(session.userId, { includeHash: true });
      if (!user) {
        return NextResponse.json({ error: "User not found" }, { status: 404 });
      }
      // First-login forced change still requires knowing the temporary password
      if (!(await verifyUserPassword(user, currentPassword))) {
        return NextResponse.json({ error: "Invalid current password" }, { status: 401 });
      }
      const updated = await setUserPassword(session.userId, newPassword, { mustChangePassword: false });
      const cookieStore = await cookies();
      await setDashboardAuthCookie(cookieStore, request, {
        userId: updated.id,
        email: updated.email,
        mustChangePassword: false,
        permissions: permissionsFromUser(updated),
      });
      return NextResponse.json({ success: true }, { headers: NO_STORE });
    }

    // Legacy shared password
    if (!(await verifyDashboardPassword(currentPassword))) {
      return NextResponse.json({ error: "Invalid current password" }, { status: 401 });
    }
    const bcrypt = (await import("bcryptjs")).default;
    const salt = await bcrypt.genSalt(10);
    const password = await bcrypt.hash(newPassword, salt);
    await updateSettings({ password });
    const cookieStore = await cookies();
    await setDashboardAuthCookie(cookieStore, request, {
      isLegacyAdmin: true,
      permissions: fullPermissions(),
    });
    return NextResponse.json({ success: true }, { headers: NO_STORE });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
