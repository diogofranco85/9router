import { NextResponse } from "next/server";
import { getUsers } from "@/lib/localDb";
import { getAccessSession, PERMS, hasPerm } from "@/lib/auth/accessControl";

export const dynamic = "force-dynamic";

/**
 * Lightweight user list for chat share picker (chat permission only).
 * GET /api/chat/peers
 */
export async function GET() {
  try {
    const access = await getAccessSession();
    if (!access?.authenticated || !hasPerm(access, PERMS.chat)) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    if (!access.userId) {
      return NextResponse.json({
        peers: [],
        canShare: false,
        hint: "Register under Access Control to share chats with other users.",
      });
    }

    const users = await getUsers();
    const peers = users
      .filter((u) => !u.isBlocked && u.permChat !== false && u.id !== access.userId)
      .map((u) => ({
        id: u.id,
        email: u.email,
        name: u.name || null,
      }))
      .sort((a, b) => (a.name || a.email).localeCompare(b.name || b.email));

    return NextResponse.json({ peers, canShare: true });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
