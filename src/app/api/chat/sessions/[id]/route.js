import { NextResponse } from "next/server";
import {
  getChatSessionById,
  updateChatSession,
  upsertChatSession,
  deleteChatSession,
} from "@/lib/localDb";
import { getAccessSession, PERMS, hasPerm } from "@/lib/auth/accessControl";

export const dynamic = "force-dynamic";

function canAccessSession(access, chatSession) {
  if (!chatSession) return false;
  if (!access?.userId) return true; // legacy admin sees all
  if (!chatSession.ownerUserId) return true; // unowned legacy
  return chatSession.ownerUserId === access.userId;
}

// GET /api/chat/sessions/[id]
export async function GET(_request, { params }) {
  try {
    const access = await getAccessSession();
    if (!access?.authenticated || !hasPerm(access, PERMS.chat)) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    const { id } = await params;
    const session = await getChatSessionById(id);
    if (!session || !canAccessSession(access, session)) {
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
    const access = await getAccessSession();
    if (!access?.authenticated || !hasPerm(access, PERMS.chat)) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    const { id } = await params;
    const body = await request.json().catch(() => ({}));
    const existing = await getChatSessionById(id);

    if (existing && !canAccessSession(access, existing)) {
      return NextResponse.json({ error: "Chat session not found" }, { status: 404 });
    }

    // Never allow client to reassign ownership / share metadata on update
    const {
      ownerUserId: _o,
      sharedFromUserId: _s,
      sharedFromEmail: _e,
      sharedFromName: _n,
      sharedNote: _note,
      ...safeBody
    } = body;

    const session = existing
      ? await updateChatSession(id, {
          ...safeBody,
          // Claim legacy unowned session on first write by a registered user
          ...(access.userId && !existing.ownerUserId ? { ownerUserId: access.userId } : {}),
        })
      : await upsertChatSession({
          ...safeBody,
          id,
          ownerUserId: access.userId || null,
        });
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
    const access = await getAccessSession();
    if (!access?.authenticated || !hasPerm(access, PERMS.chat)) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    const { id } = await params;
    const existing = await getChatSessionById(id);
    if (!existing || !canAccessSession(access, existing)) {
      return NextResponse.json({ error: "Chat session not found" }, { status: 404 });
    }
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
