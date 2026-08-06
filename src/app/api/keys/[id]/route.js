import { NextResponse } from "next/server";
import { getApiKeyById, updateApiKey } from "@/lib/localDb";
import { requireSession } from "@/lib/auth/accessControl";

async function assertKeyAccess(session, key) {
  if (!key) return { error: NextResponse.json({ error: "Key not found" }, { status: 404 }) };
  if (session.isLegacyAdmin) return { ok: true };
  if (session.userId && key.userId === session.userId) return { ok: true };
  return { error: NextResponse.json({ error: "Key not found" }, { status: 404 }) };
}

// GET /api/keys/[id]
export async function GET(_request, { params }) {
  const gate = await requireSession();
  if (gate.error) return gate.error;

  try {
    const { id } = await params;
    const key = await getApiKeyById(id);
    const access = await assertKeyAccess(gate.session, key);
    if (access.error) return access.error;
    return NextResponse.json({ key });
  } catch (error) {
    console.log("Error fetching key:", error);
    return NextResponse.json({ error: "Failed to fetch key" }, { status: 500 });
  }
}

// PUT /api/keys/[id] - Update key (isActive only)
export async function PUT(request, { params }) {
  const gate = await requireSession();
  if (gate.error) return gate.error;

  try {
    const { id } = await params;
    const body = await request.json();
    const { isActive } = body;

    const existing = await getApiKeyById(id);
    const access = await assertKeyAccess(gate.session, existing);
    if (access.error) return access.error;

    const updateData = {};
    if (isActive !== undefined) updateData.isActive = isActive;

    const updated = await updateApiKey(id, updateData);
    return NextResponse.json({ key: updated });
  } catch (error) {
    console.log("Error updating key:", error);
    return NextResponse.json({ error: "Failed to update key" }, { status: 500 });
  }
}

// DELETE disabled — keys can only be disabled
export async function DELETE() {
  return NextResponse.json(
    { error: "API keys cannot be deleted. Disable them instead." },
    { status: 405 },
  );
}
