import { v4 as uuidv4 } from "uuid";
import { getPrisma } from "../client.js";
import { asObject, toDate, toIso } from "../helpers/dates.js";

function rowToNode(row) {
  if (!row) return null;
  const extra = asObject(row.data);
  return {
    ...extra,
    id: row.id,
    type: row.type,
    name: row.name,
    createdAt: toIso(row.createdAt),
    updatedAt: toIso(row.updatedAt),
  };
}

function nodeToData(n) {
  const { id, type, name, createdAt, updatedAt, ...rest } = n;
  return {
    id,
    type: type ?? null,
    name: name ?? null,
    data: rest,
    createdAt: toDate(createdAt),
    updatedAt: toDate(updatedAt),
  };
}

async function upsertNode(tx, n) {
  const r = nodeToData(n);
  await tx.providerNode.upsert({
    where: { id: r.id },
    create: r,
    update: {
      type: r.type,
      name: r.name,
      data: r.data,
      updatedAt: r.updatedAt,
    },
  });
}

export async function getProviderNodes(filter = {}) {
  const prisma = await getPrisma();
  const where = {};
  if (filter.type) where.type = filter.type;
  const rows = await prisma.providerNode.findMany({ where });
  return rows.map(rowToNode);
}

export async function getProviderNodeById(id) {
  const prisma = await getPrisma();
  return rowToNode(await prisma.providerNode.findUnique({ where: { id } }));
}

export async function createProviderNode(data) {
  const prisma = await getPrisma();
  const now = new Date().toISOString();
  const node = {
    id: data.id || uuidv4(),
    type: data.type,
    name: data.name,
    prefix: data.prefix,
    apiType: data.apiType,
    baseUrl: data.baseUrl,
    createdAt: now,
    updatedAt: now,
  };
  await upsertNode(prisma, node);
  return node;
}

export async function updateProviderNode(id, data) {
  const prisma = await getPrisma();
  return prisma.$transaction(async (tx) => {
    const row = await tx.providerNode.findUnique({ where: { id } });
    if (!row) return null;
    const merged = { ...rowToNode(row), ...data, updatedAt: new Date().toISOString() };
    await upsertNode(tx, merged);
    return merged;
  });
}

export async function deleteProviderNode(id) {
  const prisma = await getPrisma();
  return prisma.$transaction(async (tx) => {
    const row = await tx.providerNode.findUnique({ where: { id } });
    if (!row) return null;
    const removed = rowToNode(row);
    await tx.providerNode.delete({ where: { id } });
    return removed;
  });
}
