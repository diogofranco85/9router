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
    isActive: row.isActive === true,
    createdAt: toIso(row.createdAt),
  };
}

export async function getApiKeys() {
  const prisma = await getPrisma();
  const rows = await prisma.apiKey.findMany({ orderBy: { createdAt: "asc" } });
  return rows.map(rowToKey);
}

export async function getApiKeyById(id) {
  const prisma = await getPrisma();
  return rowToKey(await prisma.apiKey.findUnique({ where: { id } }));
}

export async function createApiKey(name, machineId) {
  if (!machineId) throw new Error("machineId is required");
  const prisma = await getPrisma();
  const { generateApiKeyWithMachine } = await import("@/shared/utils/apiKey");
  const result = generateApiKeyWithMachine(machineId);
  const apiKey = {
    id: uuidv4(),
    name,
    key: result.key,
    machineId,
    isActive: true,
    createdAt: new Date().toISOString(),
  };
  await prisma.apiKey.create({
    data: {
      id: apiKey.id,
      key: apiKey.key,
      name: apiKey.name,
      machineId: apiKey.machineId,
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

export async function validateApiKey(key) {
  const prisma = await getPrisma();
  const row = await prisma.apiKey.findUnique({ where: { key } });
  if (!row) return false;
  return row.isActive === true;
}
