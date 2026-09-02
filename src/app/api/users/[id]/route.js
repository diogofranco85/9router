import { NextResponse } from "next/server";
import {
  getUserById, updateUser, resetUserPassword, countDashboardUsers, getProjectById,
} from "@/lib/localDb";
import { requireSession, PERMS } from "@/lib/auth/accessControl";

export const dynamic = "force-dynamic";

export async function GET(_request, { params }) {
  const gate = await requireSession({ perm: PERMS.dashboard });
  if (gate.error) return gate.error;

  try {
    const { id } = await params;
    const user = await getUserById(id);
    if (!user) return NextResponse.json({ error: "User not found" }, { status: 404 });
    return NextResponse.json({ user });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function PUT(request, { params }) {
  const gate = await requireSession({ perm: PERMS.dashboard });
  if (gate.error) return gate.error;

  try {
    const { id } = await params;
    const existing = await getUserById(id);
    if (!existing) return NextResponse.json({ error: "User not found" }, { status: 404 });

    const body = await request.json();
    const data = {};
    if (body.name !== undefined) data.name = body.name;
    if (body.isBlocked !== undefined) data.isBlocked = !!body.isBlocked;
    if (body.permDashboard !== undefined) data.permDashboard = !!body.permDashboard;
    if (body.permChat !== undefined) data.permChat = !!body.permChat;
    if (body.permApi !== undefined) data.permApi = !!body.permApi;
    if (body.projectId !== undefined) {
      const projectId = body.projectId ? String(body.projectId) : null;
      if (projectId) {
        const project = await getProjectById(projectId);
        if (!project) return NextResponse.json({ error: "Project not found" }, { status: 400 });
      }
      data.projectId = projectId;
    }

    // Prevent lockout: last dashboard user cannot lose dashboard or be blocked while blockEnvPassword is on
    const losingDashboard =
      (data.permDashboard === false && existing.permDashboard) ||
      (data.isBlocked === true && !existing.isBlocked && existing.permDashboard);

    if (losingDashboard) {
      const { getSettings } = await import("@/lib/localDb");
      const settings = await getSettings();
      if (settings.blockEnvPassword) {
        const others = await countDashboardUsers({ excludeUserId: id });
        if (others < 1) {
          return NextResponse.json(
            { error: "Cannot remove the last user with dashboard access while the shared password is blocked" },
            { status: 400 },
          );
        }
      }
    }

    // Email is immutable — ignore if sent
    const user = await updateUser(id, data);
    return NextResponse.json({ user });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

/**
 * POST /api/users/[id] — reset password (generate random).
 * Returns plaintext password once.
 */
export async function POST(_request, { params }) {
  const gate = await requireSession({ perm: PERMS.dashboard });
  if (gate.error) return gate.error;

  try {
    const { id } = await params;
    const result = await resetUserPassword(id);
    if (!result) return NextResponse.json({ error: "User not found" }, { status: 404 });
    return NextResponse.json({
      user: result.user,
      plainPassword: result.plainPassword,
    });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
