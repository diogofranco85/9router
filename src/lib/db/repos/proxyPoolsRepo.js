import { v4 as uuidv4 } from "uuid";
import { getPrisma } from "../client.js";
import { asObject, toDate, toIso } from "../helpers/dates.js";

function rowToPool(row) {
  if (!row) return null;
  const extra = asObject(row.data);
  return {
    ...extra,
    id: row.id,
    isActive: row.isActive === true,
    testStatus: row.testStatus,
    createdAt: toIso(row.createdAt),
    updatedAt: toIso(row.updatedAt),
  };
}

function poolToData(p) {
  const { id, isActive, testStatus, createdAt, updatedAt, ...rest } = p;
  return {
    id,
    isActive: isActive !== false,
    testStatus: testStatus ?? null,
    data: rest,
    createdAt: toDate(createdAt),
    updatedAt: toDate(updatedAt),
  };
}

async function upsertPool(tx, p) {
  const r = poolToData(p);
  await tx.proxyPool.upsert({
    where: { id: r.id },
    create: r,
    update: {
      isActive: r.isActive,
      testStatus: r.testStatus,
      data: r.data,
      updatedAt: r.updatedAt,
    },
  });
}

export async function getProxyPools(filter = {}) {
  const prisma = await getPrisma();
  const where = {};
  if (filter.isActive !== undefined) where.isActive = !!filter.isActive;
  if (filter.testStatus) where.testStatus = filter.testStatus;
  const list = (await prisma.proxyPool.findMany({ where })).map(rowToPool);
  list.sort((a, b) => new Date(b.updatedAt || 0) - new Date(a.updatedAt || 0));
  return list;
}

export async function getProxyPoolById(id) {
  const prisma = await getPrisma();
  return rowToPool(await prisma.proxyPool.findUnique({ where: { id } }));
}

export async function createProxyPool(data) {
  const prisma = await getPrisma();
  const now = new Date().toISOString();
  const pool = {
    id: data.id || uuidv4(),
    name: data.name,
    proxyUrl: data.proxyUrl,
    noProxy: data.noProxy || "",
    type: data.type || "http",
    isActive: data.isActive !== undefined ? data.isActive : true,
    strictProxy: data.strictProxy === true,
    testStatus: data.testStatus || "unknown",
    lastTestedAt: data.lastTestedAt || null,
    lastError: data.lastError || null,
    createdAt: now,
    updatedAt: now,
  };
  await upsertPool(prisma, pool);
  return pool;
}

export async function updateProxyPool(id, data) {
  const prisma = await getPrisma();
  return prisma.$transaction(async (tx) => {
    const row = await tx.proxyPool.findUnique({ where: { id } });
    if (!row) return null;
    const merged = { ...rowToPool(row), ...data, updatedAt: new Date().toISOString() };
    await upsertPool(tx, merged);
    return merged;
  });
}

export async function deleteProxyPool(id) {
  const prisma = await getPrisma();
  return prisma.$transaction(async (tx) => {
    const row = await tx.proxyPool.findUnique({ where: { id } });
    if (!row) return null;
    const removed = rowToPool(row);
    await tx.proxyPool.delete({ where: { id } });
    return removed;
  });
}
