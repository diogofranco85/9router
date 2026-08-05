import { NextResponse } from "next/server";
import { handleChat } from "@/sse/handlers/chat.js";
import { getApiKeys } from "@/lib/localDb";
import { initTranslators } from "open-sse/translator/index.js";

let initialized = false;

async function ensureInitialized() {
  if (!initialized) {
    await initTranslators();
    initialized = true;
  }
}

/**
 * Session-backed chat completions for the /chat UI.
 * Injects an active API key server-side so the browser never sees it.
 */
export async function POST(request) {
  await ensureInitialized();

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

  const keys = await getApiKeys();
  const activeKey = keys.find((k) => k.isActive !== false);
  if (!activeKey?.key) {
    return NextResponse.json(
      { error: "No active API key found. Create one in Dashboard → API Keys." },
      { status: 400 },
    );
  }

  const headers = new Headers(request.headers);
  headers.set("Authorization", `Bearer ${activeKey.key}`);
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
