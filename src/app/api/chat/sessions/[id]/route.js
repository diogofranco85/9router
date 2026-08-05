import { NextResponse } from "next/server";
import {
  getChatSessionById,
  updateChatSession,
  upsertChatSession,
  deleteChatSession,
} from "@/lib/localDb";

export const dynamic = "force-dynamic";

// GET /api/chat/sessions/[id]
export async function GET(_request, { params }) {
  try {
    const { id } = await params;
    const session = await getChatSessionById(id);
    if (!session) {
      return NextResponse.json({ error: "Chat session not found" }, { status: 404 });
    }
    return NextResponse.json(session);
  } catch (error) {
    console.log("Error fetching chat session:", error);
    return NextResponse.json({ error: "Failed to fetch chat session" }, { status: 500 });
  }
}

// PUT /api/chat/sessions/[id]
export async function PUT(request, { params }) {
  try {
    const { id } = await params;
    const body = await request.json().catch(() => ({}));
    const existing = await getChatSessionById(id);
    const session = existing
      ? await updateChatSession(id, body)
      : await upsertChatSession({ ...body, id });
    if (!session) {
      return NextResponse.json({ error: "Chat session not found" }, { status: 404 });
    }
    return NextResponse.json(session);
  } catch (error) {
    console.log("Error updating chat session:", error);
    return NextResponse.json({ error: "Failed to update chat session" }, { status: 500 });
  }
}

// DELETE /api/chat/sessions/[id]
export async function DELETE(_request, { params }) {
  try {
    const { id } = await params;
    const success = await deleteChatSession(id);
    if (!success) {
      return NextResponse.json({ error: "Chat session not found" }, { status: 404 });
    }
    return NextResponse.json({ success: true });
  } catch (error) {
    console.log("Error deleting chat session:", error);
    return NextResponse.json({ error: "Failed to delete chat session" }, { status: 500 });
  }
}
