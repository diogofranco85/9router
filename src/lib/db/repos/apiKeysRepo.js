import { v4 as uuidv4 } from "uuid";
import { getPrisma } from "../client.js";
import { toDate, toIso } from "../helpers/dates.js";

function rowToKey(row) {
  if (!row) return null;
  return {
    id: row.id,
    key: row.key,
    name: row.name,
    machineId: row.machineId,
    userId: row.userId || null,
    isActive: row.isActive === true,
    createdAt: toIso(row.createdAt),
  };
}

export async function getApiKeys({ userId } = {}) {
  const prisma = await getPrisma();
  const where = {};
  if (userId !== undefined) {
    where.userId = userId;
  }
  const rows = await prisma.apiKey.findMany({
    where,
    orderBy: { createdAt: "asc" },
  });
  return rows.map(rowToKey);
}

export async function getApiKeysByUserId(userId) {
  return getApiKeys({ userId });
}

export async function getApiKeyById(id) {
  const prisma = await getPrisma();
  return rowToKey(await prisma.apiKey.findUnique({ where: { id } }));
}

export async function getApiKeyByKey(key) {
  const prisma = await getPrisma();
  return rowToKey(await prisma.apiKey.findUnique({ where: { key } }));
}

export async function createApiKey(name, machineId, { userId = null } = {}) {
  if (!machineId) throw new Error("machineId is required");
  const prisma = await getPrisma();
  const { generateApiKeyWithMachine } = await import("@/shared/utils/apiKey");
  const result = generateApiKeyWithMachine(machineId);
  const apiKey = {
    id: uuidv4(),
    name,
    key: result.key,
    machineId,
    userId: userId || null,
    isActive: true,
    createdAt: new Date().toISOString(),
  };
  await prisma.apiKey.create({
    data: {
      id: apiKey.id,
      key: apiKey.key,
      name: apiKey.name,
      machineId: apiKey.machineId,
      userId: apiKey.userId,
      isActive: true,
      createdAt: toDate(apiKey.createdAt),
    },
  });
  return apiKey;
}

export async function updateApiKey(id, data) {
  const prisma = await getPrisma();
  return prisma.$transaction(async (tx) => {
    const row = await tx.apiKey.findUnique({ where: { id } });
    if (!row) return null;
    const merged = { ...rowToKey(row), ...data };
    await tx.apiKey.update({
      where: { id },
      data: {
        key: merged.key,
        name: merged.name,
        machineId: merged.machineId,
        userId: merged.userId || null,
        isActive: !!merged.isActive,
      },
    });
    return merged;
  });
}

export async function deleteApiKey(id) {
  const prisma = await getPrisma();
  try {
    await prisma.apiKey.delete({ where: { id } });
    return true;
  } catch {
    return false;
  }
}

/**
 * Validate an API key for /v1 access.
 * When the key belongs to a user, that user must be active and have permApi.
 * Legacy keys (userId null) remain valid when isActive.
 */
export async function validateApiKey(key) {
  const prisma = await getPrisma();
  const row = await prisma.apiKey.findUnique({ where: { key } });
  if (!row || row.isActive !== true) return false;

  if (!row.userId) return true;

  const user = await prisma.user.findUnique({ where: { id: row.userId } });
  if (!user) return false;
  if (user.isBlocked === true) return false;
  if (user.permApi === false) return false;
  return true;
}
