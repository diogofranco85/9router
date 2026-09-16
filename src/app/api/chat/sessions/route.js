import { NextResponse } from "next/server";
import {
  getChatSessions,
  createChatSession,
  importChatSessions,
} from "@/lib/localDb";
import { getAccessSession, PERMS, hasPerm } from "@/lib/auth/accessControl";

export const dynamic = "force-dynamic";

function ownerFilter(session) {
  if (session?.userId) return { ownerUserId: session.userId };
  return {};
}

// GET /api/chat/sessions
export async function GET() {
  try {
    const session = await getAccessSession();
    if (!session?.authenticated || !hasPerm(session, PERMS.chat)) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    const sessions = await getChatSessions(ownerFilter(session));
    return NextResponse.json({ sessions, userId: session.userId || null });
  } catch (error) {
    console.log("Error fetching chat sessions:", error);
    return NextResponse.json({ error: "Failed to fetch chat sessions" }, { status: 500 });
  }
}

// POST /api/chat/sessions
export async function POST(request) {
  try {
    const access = await getAccessSession();
    if (!access?.authenticated || !hasPerm(access, PERMS.chat)) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await request.json().catch(() => ({}));
    const ownerUserId = access.userId || null;

    if (body?.import === true) {
      const imported = await importChatSessions(body.sessions || [], { ownerUserId });
      const sessions = await getChatSessions(ownerFilter(access));
      return NextResponse.json({ sessions, imported: imported.length }, { status: 201 });
    }

    const created = await createChatSession({
      id: body.id,
      title: body.title,
      mode: body.mode,
      requestModel: body.requestModel,
      modelLabel: body.modelLabel,
      messages: body.messages,
      createdAt: body.createdAt,
      updatedAt: body.updatedAt,
      ownerUserId,
    });
    return NextResponse.json(created, { status: 201 });
  } catch (error) {
    console.log("Error creating chat session:", error);
    return NextResponse.json({ error: "Failed to create chat session" }, { status: 500 });
  }
}
