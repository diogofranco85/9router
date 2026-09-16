import { v4 as uuidv4 } from "uuid";
import { getPrisma } from "../client.js";
import { toDate, toIso } from "../helpers/dates.js";
import {
  buildShareContext,
  clipTitle,
  createChatSession,
  getChatSessionById,
  CONTEXT_LIMIT_DEFAULT,
} from "./chatRepo.js";
import { getUserById } from "./usersRepo.js";

function rowToShare(row) {
  if (!row) return null;
  return {
    id: row.id,
    fromUserId: row.fromUserId,
    toUserId: row.toUserId,
    sourceSessionId: row.sourceSessionId,
    targetSessionId: row.targetSessionId,
    messageId: row.messageId,
    note: row.note || null,
    createdAt: toIso(row.createdAt),
    readAt: row.readAt ? toIso(row.readAt) : null,
  };
}

export async function getChatSharesForUser(userId, { unreadOnly = false } = {}) {
  if (!userId) return [];
  const prisma = await getPrisma();
  const where = { toUserId: userId };
  if (unreadOnly) where.readAt = null;
  const rows = await prisma.chatShare.findMany({
    where,
    orderBy: { createdAt: "desc" },
    take: 100,
  });
  return rows.map(rowToShare);
}

export async function getChatShareById(id) {
  const prisma = await getPrisma();
  return rowToShare(await prisma.chatShare.findUnique({ where: { id } }));
}

export async function markChatShareRead(id, userId) {
  const prisma = await getPrisma();
  const row = await prisma.chatShare.findUnique({ where: { id } });
  if (!row || row.toUserId !== userId) return null;
  if (row.readAt) return rowToShare(row);
  const updated = await prisma.chatShare.update({
    where: { id },
    data: { readAt: new Date() },
  });
  return rowToShare(updated);
}

/**
 * Share a message + preceding context with another registered user.
 * Creates a new chat session owned by the recipient.
 */
export async function shareChatMessage({
  fromUserId,
  toUserId,
  sourceSessionId,
  messageId,
  note = null,
  contextLimit = CONTEXT_LIMIT_DEFAULT,
} = {}) {
  if (!fromUserId) throw new Error("Only registered users can share chats");
  if (!toUserId) throw new Error("Recipient is required");
  if (fromUserId === toUserId) throw new Error("Cannot share with yourself");
  if (!sourceSessionId || !messageId) throw new Error("Session and message are required");

  const [fromUser, toUser, source] = await Promise.all([
    getUserById(fromUserId),
    getUserById(toUserId),
    getChatSessionById(sourceSessionId),
  ]);

  if (!fromUser || fromUser.isBlocked) throw new Error("Sender not found or blocked");
  if (!toUser || toUser.isBlocked) throw new Error("Recipient not found or blocked");
  if (!toUser.permChat) throw new Error("Recipient does not have chat access");
  if (!source) throw new Error("Source chat not found");

  // Owner check: registered users may only share their own sessions (or legacy null-owner while migrating)
  if (source.ownerUserId && source.ownerUserId !== fromUserId) {
    throw new Error("You can only share your own chats");
  }

  const context = buildShareContext(source.messages, messageId, contextLimit);
  if (!context || context.length === 0) throw new Error("Message not found in this chat");

  const selected = context[context.length - 1];
  const fromLabel = fromUser.name || fromUser.email;
  const title = clipTitle(`De ${fromLabel}: ${selected.content || source.title || "mensagem"}`);

  const targetSession = await createChatSession({
    title,
    mode: source.mode || "automatic",
    requestModel: source.requestModel || "",
    modelLabel: source.modelLabel || "",
    messages: context,
    ownerUserId: toUserId,
    sharedFromUserId: fromUserId,
    sharedFromEmail: fromUser.email,
    sharedFromName: fromUser.name || null,
    sharedNote: note ? String(note).trim().slice(0, 500) : null,
  });

  const prisma = await getPrisma();
  const now = new Date();
  const share = await prisma.chatShare.create({
    data: {
      id: uuidv4(),
      fromUserId,
      toUserId,
      sourceSessionId,
      targetSessionId: targetSession.id,
      messageId,
      note: note ? String(note).trim().slice(0, 500) : null,
      createdAt: now,
      readAt: null,
    },
  });

  return {
    share: rowToShare(share),
    session: targetSession,
  };
}
