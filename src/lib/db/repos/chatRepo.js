import { v4 as uuidv4 } from "uuid";
import { getPrisma } from "../client.js";
import { asJson, toDate, toIso } from "../helpers/dates.js";

function normalizeMessages(messages) {
  if (!Array.isArray(messages)) return [];
  return messages.map((m) => ({
    id: m?.id || uuidv4(),
    role: m?.role === "assistant" ? "assistant" : "user",
    content: typeof m?.content === "string" ? m.content : (m?.content == null ? "" : String(m.content)),
    createdAt: m?.createdAt || new Date().toISOString(),
    ...(m?.status ? { status: m.status } : {}),
    ...(Array.isArray(m?.attachments) && m.attachments.length > 0
      ? { attachments: m.attachments }
      : {}),
  }));
}

function rowToSession(row) {
  if (!row) return null;
  return {
    id: row.id,
    title: row.title || "New chat",
    mode: row.mode || null,
    requestModel: row.requestModel || "",
    modelLabel: row.modelLabel || "",
    messages: normalizeMessages(asJson(row.messages, [])),
    createdAt: toIso(row.createdAt),
    updatedAt: toIso(row.updatedAt),
  };
}

function toWriteData(session) {
  return {
    title: session.title || "New chat",
    mode: session.mode || null,
    requestModel: session.requestModel || null,
    modelLabel: session.modelLabel || null,
    messages: normalizeMessages(session.messages),
    createdAt: toDate(session.createdAt || new Date().toISOString()),
    updatedAt: toDate(session.updatedAt || new Date().toISOString()),
  };
}

export async function getChatSessions() {
  const prisma = await getPrisma();
  const rows = await prisma.chatSession.findMany({
    orderBy: { updatedAt: "desc" },
  });
  return rows.map(rowToSession);
}

export async function getChatSessionById(id) {
  const prisma = await getPrisma();
  return rowToSession(await prisma.chatSession.findUnique({ where: { id } }));
}

export async function createChatSession(data = {}) {
  const prisma = await getPrisma();
  const now = new Date().toISOString();
  const session = {
    id: data.id || uuidv4(),
    title: data.title || "New chat",
    mode: data.mode || null,
    requestModel: data.requestModel || "",
    modelLabel: data.modelLabel || "",
    messages: normalizeMessages(data.messages),
    createdAt: data.createdAt || now,
    updatedAt: data.updatedAt || now,
  };
  await prisma.chatSession.create({
    data: {
      id: session.id,
      ...toWriteData(session),
    },
  });
  return session;
}

export async function updateChatSession(id, data = {}) {
  const prisma = await getPrisma();
  const row = await prisma.chatSession.findUnique({ where: { id } });
  if (!row) return null;
  const current = rowToSession(row);
  const merged = {
    ...current,
    ...data,
    id: current.id,
    messages: data.messages !== undefined ? normalizeMessages(data.messages) : current.messages,
    updatedAt: new Date().toISOString(),
  };
  await prisma.chatSession.update({
    where: { id },
    data: toWriteData(merged),
  });
  return merged;
}

export async function upsertChatSession(data = {}) {
  if (!data?.id) return createChatSession(data);
  const existing = await getChatSessionById(data.id);
  if (!existing) return createChatSession(data);
  return updateChatSession(data.id, data);
}

export async function deleteChatSession(id) {
  const prisma = await getPrisma();
  try {
    await prisma.chatSession.delete({ where: { id } });
    return true;
  } catch {
    return false;
  }
}

export async function importChatSessions(sessions = []) {
  if (!Array.isArray(sessions) || sessions.length === 0) return [];
  const prisma = await getPrisma();
  const imported = [];
  for (const raw of sessions) {
    if (!raw || typeof raw !== "object") continue;
    const now = new Date().toISOString();
    const session = {
      id: raw.id || uuidv4(),
      title: raw.title || "New chat",
      mode: raw.mode || null,
      requestModel: raw.requestModel || "",
      modelLabel: raw.modelLabel || "",
      messages: normalizeMessages(raw.messages),
      createdAt: raw.createdAt || now,
      updatedAt: raw.updatedAt || now,
    };
    await prisma.chatSession.upsert({
      where: { id: session.id },
      create: { id: session.id, ...toWriteData(session) },
      update: toWriteData(session),
    });
    imported.push(session);
  }
  return imported;
}
