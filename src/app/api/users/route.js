import { NextResponse } from "next/server";
import {
  getUsers, createUser, countUsers, countDashboardUsers,
} from "@/lib/localDb";
import { requireSession, PERMS } from "@/lib/auth/accessControl";
import { getSettings, updateSettings } from "@/lib/localDb";

export const dynamic = "force-dynamic";

export async function GET() {
  const gate = await requireSession({ perm: PERMS.dashboard });
  if (gate.error) return gate.error;

  try {
    const [users, settings, userCount, dashboardCount] = await Promise.all([
      getUsers(),
      getSettings(),
      countUsers(),
      countDashboardUsers(),
    ]);
    return NextResponse.json({
      users,
      userCount,
      dashboardCount,
      accessControlEnabled: settings.accessControlEnabled === true,
      blockEnvPassword: settings.blockEnvPassword === true,
    });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function POST(request) {
  const gate = await requireSession({ perm: PERMS.dashboard });
  if (gate.error) return gate.error;

  try {
    const body = await request.json();
    const email = typeof body?.email === "string" ? body.email : "";
    const name = typeof body?.name === "string" ? body.name : null;
    const result = await createUser({
      email,
      name,
      permDashboard: body?.permDashboard !== false,
      permChat: body?.permChat !== false,
      permApi: body?.permApi !== false,
      mustChangePassword: true,
    });

    // Auto-enable access control when first user is created
    const settings = await getSettings();
    if (!settings.accessControlEnabled) {
      await updateSettings({ accessControlEnabled: true });
    }

    return NextResponse.json({
      user: result.user,
      plainPassword: result.plainPassword,
    }, { status: 201 });
  } catch (error) {
    const msg = error.message || "Failed to create user";
    const status = msg.includes("Unique") || msg.includes("email") ? 400 : 500;
    return NextResponse.json({ error: msg }, { status });
  }
}

export async function PATCH(request) {
  const gate = await requireSession({ perm: PERMS.dashboard });
  if (gate.error) return gate.error;

  try {
    const body = await request.json();
    const settings = await getSettings();
    const updates = {};

    if (Object.prototype.hasOwnProperty.call(body, "accessControlEnabled")) {
      updates.accessControlEnabled = !!body.accessControlEnabled;
      if (!updates.accessControlEnabled) {
        updates.blockEnvPassword = false;
      }
    }

    if (Object.prototype.hasOwnProperty.call(body, "blockEnvPassword")) {
      const wantBlock = !!body.blockEnvPassword;
      if (wantBlock) {
        const n = await countUsers();
        if (n < 1) {
          return NextResponse.json(
            { error: "Register at least one user before blocking the shared password" },
            { status: 400 },
          );
        }
        if (!(updates.accessControlEnabled ?? settings.accessControlEnabled)) {
          return NextResponse.json(
            { error: "Enable access control before blocking the shared password" },
            { status: 400 },
          );
        }
      }
      updates.blockEnvPassword = wantBlock;
    }

    const next = await updateSettings(updates);
    return NextResponse.json({
      accessControlEnabled: next.accessControlEnabled === true,
      blockEnvPassword: next.blockEnvPassword === true,
    });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
