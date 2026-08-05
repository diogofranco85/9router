import { v4 as uuidv4 } from "uuid";
import { getPrisma } from "../client.js";
import { asObject, toDate, toIso } from "../helpers/dates.js";

const OPTIONAL_FIELDS = [
  "displayName", "email", "globalPriority", "defaultModel",
  "accessToken", "refreshToken", "expiresAt", "tokenType",
  "scope", "projectId", "apiKey", "testStatus",
  "lastTested", "lastError", "lastErrorAt", "rateLimitedUntil", "expiresIn", "errorCode",
  "consecutiveUseCount", "idToken", "lastRefreshAt",
];

function rowToConn(row) {
  if (!row) return null;
  const extra = asObject(row.data);
  return {
    ...extra,
    id: row.id,
    provider: row.provider,
    authType: row.authType,
    name: row.name,
    email: row.email,
    priority: row.priority,
    isActive: row.isActive === true,
    createdAt: toIso(row.createdAt),
    updatedAt: toIso(row.updatedAt),
  };
}

function connToData(c) {
  const { id, provider, authType, name, email, priority, isActive, createdAt, updatedAt, ...rest } = c;
  return {
    id,
    provider,
    authType,
    name: name ?? null,
    email: email ?? null,
    priority: priority ?? null,
    isActive: isActive !== false,
    data: rest,
    createdAt: toDate(createdAt),
    updatedAt: toDate(updatedAt),
  };
}

async function upsertConn(tx, c) {
  const r = connToData(c);
  await tx.providerConnection.upsert({
    where: { id: r.id },
    create: r,
    update: {
      provider: r.provider,
      authType: r.authType,
      name: r.name,
      email: r.email,
      priority: r.priority,
      isActive: r.isActive,
      data: r.data,
      updatedAt: r.updatedAt,
    },
  });
}

function deriveConnectionName(data, fallbackName) {
  if (data.provider === "github") {
    return data.providerSpecificData?.githubLogin
      || data.providerSpecificData?.githubEmail
      || data.email
      || data.providerSpecificData?.githubName
      || fallbackName;
  }
  return fallbackName;
}

async function reorderInTx(tx, providerId) {
  const list = (await tx.providerConnection.findMany({ where: { provider: providerId } }))
    .map(rowToConn);
  list.sort((a, b) => {
    const pDiff = (a.priority || 0) - (b.priority || 0);
    if (pDiff !== 0) return pDiff;
    return new Date(b.updatedAt || 0) - new Date(a.updatedAt || 0);
  });
  for (let i = 0; i < list.length; i++) {
    await tx.providerConnection.update({
      where: { id: list[i].id },
      data: { priority: i + 1 },
    });
  }
}

export async function getProviderConnections(filter = {}) {
  const prisma = await getPrisma();
  const where = {};
  if (filter.provider) where.provider = filter.provider;
  if (filter.isActive !== undefined) where.isActive = !!filter.isActive;
  const rows = await prisma.providerConnection.findMany({ where });
  const list = rows.map(rowToConn);
  list.sort((a, b) => (a.priority || 999) - (b.priority || 999));
  return list;
}

export async function getProviderConnectionById(id) {
  const prisma = await getPrisma();
  const row = await prisma.providerConnection.findUnique({ where: { id } });
  return rowToConn(row);
}

export async function createProviderConnection(data) {
  const prisma = await getPrisma();
  const now = new Date().toISOString();

  return prisma.$transaction(async (tx) => {
    const all = (await tx.providerConnection.findMany({ where: { provider: data.provider } }))
      .map(rowToConn);

    let existing = null;
    if (data.authType === "oauth" && data.email) {
      const incomingUsername = data.providerSpecificData?.username;
      const incomingWs = data.providerSpecificData?.chatgptAccountId;
      existing = all.find((c) => {
        if (c.authType !== "oauth" || c.email !== data.email) return false;
        if (data.provider === "codex") {
          const existingWs = c.providerSpecificData?.chatgptAccountId;
          return !!incomingWs && !!existingWs && incomingWs === existingWs;
        }
        const existingWs = c.providerSpecificData?.chatgptAccountId;
        if (incomingWs && existingWs) return incomingWs === existingWs;
        if (incomingWs && !existingWs) return false;
        if (!incomingWs && existingWs) return false;
        const existingUsername = c.providerSpecificData?.username;
        if (incomingUsername && existingUsername) {
          return incomingUsername === existingUsername;
        }
        if (incomingUsername || existingUsername) return false;
        return true;
      });
    } else if (data.authType === "apikey" && data.name) {
      existing = all.find((c) => c.authType === "apikey" && c.name === data.name);
    }

    if (existing) {
      const merged = { ...existing, ...data, updatedAt: now };
      await upsertConn(tx, merged);
      return merged;
    }

    let connectionName = data.name || null;
    if (!connectionName && (data.authType === "oauth" || data.authType === "access_token")) {
      connectionName = deriveConnectionName(data, data.email || `Account ${all.length + 1}`);
    }
    let connectionPriority = data.priority;
    if (!connectionPriority) {
      connectionPriority = all.reduce((m, c) => Math.max(m, c.priority || 0), 0) + 1;
    }

    const conn = {
      id: uuidv4(),
      provider: data.provider,
      authType: data.authType || "oauth",
      name: connectionName,
      priority: connectionPriority,
      isActive: data.isActive !== undefined ? data.isActive : true,
      createdAt: now,
      updatedAt: now,
    };
    for (const f of OPTIONAL_FIELDS) {
      if (data[f] !== undefined && data[f] !== null) conn[f] = data[f];
    }
    if (data.providerSpecificData && Object.keys(data.providerSpecificData).length > 0) {
      conn.providerSpecificData = data.providerSpecificData;
    }
    if (data.email !== undefined) conn.email = data.email;

    await upsertConn(tx, conn);
    await reorderInTx(tx, data.provider);
    return conn;
  });
}

export async function updateProviderConnection(id, data) {
  const prisma = await getPrisma();
  return prisma.$transaction(async (tx) => {
    const row = await tx.providerConnection.findUnique({ where: { id } });
    if (!row) return null;
    const existing = rowToConn(row);
    const merged = { ...existing, ...data, updatedAt: new Date().toISOString() };
    await upsertConn(tx, merged);
    if (data.priority !== undefined) await reorderInTx(tx, existing.provider);
    return merged;
  });
}

export async function deleteProviderConnection(id) {
  const prisma = await getPrisma();
  return prisma.$transaction(async (tx) => {
    const row = await tx.providerConnection.findUnique({ where: { id } });
    if (!row) return false;
    await tx.providerConnection.delete({ where: { id } });
    await reorderInTx(tx, row.provider);
    return true;
  });
}

export async function deleteProviderConnectionsByProvider(providerId) {
  const prisma = await getPrisma();
  const result = await prisma.providerConnection.deleteMany({ where: { provider: providerId } });
  return result.count;
}

export async function reorderProviderConnections(providerId) {
  const prisma = await getPrisma();
  await prisma.$transaction(async (tx) => {
    await reorderInTx(tx, providerId);
  });
}

export async function cleanupProviderConnections() {
  const prisma = await getPrisma();
  const fieldsToCheck = [
    "displayName", "email", "globalPriority", "defaultModel",
    "accessToken", "refreshToken", "expiresAt", "tokenType",
    "scope", "projectId", "apiKey", "testStatus",
    "lastTested", "lastError", "lastErrorAt", "rateLimitedUntil", "expiresIn",
    "consecutiveUseCount",
  ];
  return prisma.$transaction(async (tx) => {
    const rows = await tx.providerConnection.findMany();
    let cleaned = 0;
    for (const row of rows) {
      const conn = rowToConn(row);
      let dirty = false;
      for (const f of fieldsToCheck) {
        if (conn[f] === null || conn[f] === undefined) {
          if (f in conn) { delete conn[f]; cleaned++; dirty = true; }
        }
      }
      if (conn.providerSpecificData && Object.keys(conn.providerSpecificData).length === 0) {
        delete conn.providerSpecificData;
        cleaned++;
        dirty = true;
      }
      if (dirty) await upsertConn(tx, conn);
    }
    return cleaned;
  });
}
