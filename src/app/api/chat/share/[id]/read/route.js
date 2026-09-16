import { NextResponse } from "next/server";
import { markChatShareRead } from "@/lib/localDb";
import { getAccessSession, PERMS, hasPerm } from "@/lib/auth/accessControl";

export const dynamic = "force-dynamic";

// POST /api/chat/share/[id]/read
export async function POST(_request, { params }) {
  try {
    const access = await getAccessSession();
    if (!access?.authenticated || !hasPerm(access, PERMS.chat) || !access.userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    const { id } = await params;
    const share = await markChatShareRead(id, access.userId);
    if (!share) return NextResponse.json({ error: "Share not found" }, { status: 404 });
    return NextResponse.json({ share });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
