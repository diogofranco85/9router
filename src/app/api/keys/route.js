import { NextResponse } from "next/server";
import { getApiKeys, createApiKey } from "@/lib/localDb";
import { getConsistentMachineId } from "@/shared/utils/machineId";
import { requireSession } from "@/lib/auth/accessControl";

export const dynamic = "force-dynamic";

// GET /api/keys - List API keys (scoped to user when logged in as user)
export async function GET() {
  const gate = await requireSession();
  if (gate.error) return gate.error;

  try {
    const { session } = gate;
    let keys;
    if (session.userId) {
      keys = await getApiKeys({ userId: session.userId });
    } else if (session.isLegacyAdmin) {
      // Legacy admin sees all keys
      keys = await getApiKeys();
    } else {
      keys = [];
    }
    return NextResponse.json({ keys });
  } catch (error) {
    console.log("Error fetching keys:", error);
    return NextResponse.json({ error: "Failed to fetch keys" }, { status: 500 });
  }
}

// POST /api/keys - Create new API key
export async function POST(request) {
  const gate = await requireSession();
  if (gate.error) return gate.error;

  try {
    const { session } = gate;
    const body = await request.json();
    const { name } = body;

    if (!name) {
      return NextResponse.json({ error: "Name is required" }, { status: 400 });
    }

    if (session.userId && !session.permissions?.api) {
      return NextResponse.json({ error: "Missing permission: api" }, { status: 403 });
    }

    const machineId = await getConsistentMachineId();
    const apiKey = await createApiKey(name, machineId, {
      userId: session.userId || null,
    });

    return NextResponse.json({
      key: apiKey.key,
      name: apiKey.name,
      id: apiKey.id,
      machineId: apiKey.machineId,
      userId: apiKey.userId,
    }, { status: 201 });
  } catch (error) {
    console.log("Error creating key:", error);
    return NextResponse.json({ error: "Failed to create key" }, { status: 500 });
  }
}
