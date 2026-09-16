import { NextResponse } from "next/server";
import {
  getChatSharesForUser,
  shareChatMessage,
} from "@/lib/localDb";
import { getAccessSession, PERMS, hasPerm } from "@/lib/auth/accessControl";

export const dynamic = "force-dynamic";

// GET /api/chat/share — shares received by current user
export async function GET(request) {
  try {
    const access = await getAccessSession();
    if (!access?.authenticated || !hasPerm(access, PERMS.chat)) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    if (!access.userId) {
      return NextResponse.json({
        shares: [],
        error: null,
        hint: "Chat sharing requires a registered user account (Access Control).",
      });
    }
    const { searchParams } = new URL(request.url);
    const unreadOnly = searchParams.get("unread") === "1";
    const shares = await getChatSharesForUser(access.userId, { unreadOnly });
    return NextResponse.json({ shares });
  } catch (error) {
    return NextResponse.json({ error: error.message || "Failed to list shares" }, { status: 500 });
  }
}

// POST /api/chat/share — share message + context with another user
export async function POST(request) {
  try {
    const access = await getAccessSession();
    if (!access?.authenticated || !hasPerm(access, PERMS.chat)) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    if (!access.userId) {
      return NextResponse.json(
        { error: "Chat sharing requires a registered user account. Create one under Access Control." },
        { status: 400 },
      );
    }

    const body = await request.json().catch(() => ({}));
    const result = await shareChatMessage({
      fromUserId: access.userId,
      toUserId: typeof body.toUserId === "string" ? body.toUserId : "",
      sourceSessionId: typeof body.sourceSessionId === "string" ? body.sourceSessionId : "",
      messageId: typeof body.messageId === "string" ? body.messageId : "",
      note: typeof body.note === "string" ? body.note : null,
      contextLimit: body.contextLimit,
    });

    return NextResponse.json(result, { status: 201 });
  } catch (error) {
    const msg = error.message || "Failed to share chat";
    const status = /required|not found|Cannot|only share|does not have|blocked/i.test(msg) ? 400 : 500;
    return NextResponse.json({ error: msg }, { status });
  }
}
