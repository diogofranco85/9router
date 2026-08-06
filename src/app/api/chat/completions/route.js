import { NextResponse } from "next/server";
import { handleChat } from "@/sse/handlers/chat.js";
import { getApiKeys, createApiKey } from "@/lib/localDb";
import { getConsistentMachineId } from "@/shared/utils/machineId";
import { initTranslators } from "open-sse/translator/index.js";
import { getAccessSession, hasPerm, PERMS } from "@/lib/auth/accessControl";

let initialized = false;

async function ensureInitialized() {
  if (!initialized) {
    await initTranslators();
    initialized = true;
  }
}

async function resolveChatApiKey(session) {
  if (session?.userId) {
    if (!hasPerm(session, PERMS.api) && !hasPerm(session, PERMS.chat)) {
      return null;
    }
    const own = await getApiKeys({ userId: session.userId });
    const active = own.find((k) => k.isActive !== false);
    if (active?.key) return active.key;

    // Auto-provision a key for chat UI so the browser never needs one
    const machineId = await getConsistentMachineId();
    const created = await createApiKey("Chat (auto)", machineId, { userId: session.userId });
    return created.key;
  }

  const keys = await getApiKeys();
  const activeKey = keys.find((k) => k.isActive !== false);
  return activeKey?.key || null;
}

/**
 * Session-backed chat completions for the /chat UI.
 * Injects an active API key server-side so the browser never sees it.
 */
export async function POST(request) {
  await ensureInitialized();

  const session = await getAccessSession(request);
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  if (!hasPerm(session, PERMS.chat)) {
    return NextResponse.json({ error: "Missing permission: chat" }, { status: 403 });
  }

  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  if (!body?.model || typeof body.model !== "string") {
    return NextResponse.json({ error: "model is required" }, { status: 400 });
  }
  if (!Array.isArray(body.messages)) {
    return NextResponse.json({ error: "messages must be an array" }, { status: 400 });
  }

  const key = await resolveChatApiKey(session);
  if (!key) {
    return NextResponse.json(
      { error: "No active API key found. Create one in Account → API Keys." },
      { status: 400 },
    );
  }

  const headers = new Headers(request.headers);
  headers.set("Authorization", `Bearer ${key}`);
  headers.set("Content-Type", "application/json");
  headers.delete("content-length");

  const payload = {
    ...body,
    stream: body.stream !== false,
  };

  const upstream = new Request(new URL("/v1/chat/completions", request.url), {
    method: "POST",
    headers,
    body: JSON.stringify(payload),
  });

  return await handleChat(upstream);
}
