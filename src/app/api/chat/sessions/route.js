import { NextResponse } from "next/server";
import {
  getChatSessions,
  createChatSession,
  importChatSessions,
} from "@/lib/localDb";

export const dynamic = "force-dynamic";

// GET /api/chat/sessions
export async function GET() {
  try {
    const sessions = await getChatSessions();
    return NextResponse.json({ sessions });
  } catch (error) {
    console.log("Error fetching chat sessions:", error);
    return NextResponse.json({ error: "Failed to fetch chat sessions" }, { status: 500 });
  }
}

// POST /api/chat/sessions
// body: session fields OR { import: true, sessions: [...] } for one-shot localStorage migration
export async function POST(request) {
  try {
    const body = await request.json().catch(() => ({}));

    if (body?.import === true) {
      const imported = await importChatSessions(body.sessions || []);
      const sessions = await getChatSessions();
      return NextResponse.json({ sessions, imported: imported.length }, { status: 201 });
    }

    const session = await createChatSession({
      id: body.id,
      title: body.title,
      mode: body.mode,
      requestModel: body.requestModel,
      modelLabel: body.modelLabel,
      messages: body.messages,
      createdAt: body.createdAt,
      updatedAt: body.updatedAt,
    });
    return NextResponse.json(session, { status: 201 });
  } catch (error) {
    console.log("Error creating chat session:", error);
    return NextResponse.json({ error: "Failed to create chat session" }, { status: 500 });
  }
}
