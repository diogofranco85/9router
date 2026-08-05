import { v4 as uuidv4 } from "uuid";
import { getPrisma } from "../client.js";
import { asJson, toDate, toIso } from "../helpers/dates.js";

function rowToCombo(row) {
  if (!row) return null;
  return {
    id: row.id,
    name: row.name,
    kind: row.kind,
    models: asJson(row.models, []),
    createdAt: toIso(row.createdAt),
    updatedAt: toIso(row.updatedAt),
  };
}

export async function getCombos() {
  const prisma = await getPrisma();
  const rows = await prisma.combo.findMany({ orderBy: { createdAt: "asc" } });
  return rows.map(rowToCombo);
}

export async function getComboById(id) {
  const prisma = await getPrisma();
  return rowToCombo(await prisma.combo.findUnique({ where: { id } }));
}

export async function getComboByName(name) {
  const prisma = await getPrisma();
  return rowToCombo(await prisma.combo.findUnique({ where: { name } }));
}

export async function createCombo(data) {
  const prisma = await getPrisma();
  const now = new Date().toISOString();
  const combo = {
    id: uuidv4(),
    name: data.name,
    kind: data.kind || null,
    models: data.models || [],
    createdAt: now,
    updatedAt: now,
  };
  await prisma.combo.create({
    data: {
      id: combo.id,
      name: combo.name,
      kind: combo.kind,
      models: combo.models,
      createdAt: toDate(combo.createdAt),
      updatedAt: toDate(combo.updatedAt),
    },
  });
  return combo;
}

export async function updateCombo(id, data) {
  const prisma = await getPrisma();
  return prisma.$transaction(async (tx) => {
    const row = await tx.combo.findUnique({ where: { id } });
    if (!row) return null;
    const merged = { ...rowToCombo(row), ...data, updatedAt: new Date().toISOString() };
    await tx.combo.update({
      where: { id },
      data: {
        name: merged.name,
        kind: merged.kind,
        models: merged.models || [],
        updatedAt: toDate(merged.updatedAt),
      },
    });
    return merged;
  });
}

export async function deleteCombo(id) {
  const prisma = await getPrisma();
  try {
    await prisma.combo.delete({ where: { id } });
    return true;
  } catch {
    return false;
  }
}
