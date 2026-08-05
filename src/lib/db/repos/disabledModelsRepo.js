import { getPrisma } from "../client.js";
import { asJson } from "../helpers/dates.js";
import { upsertKv } from "../helpers/kvStore.js";

const SCOPE = "disabledModels";

export async function getDisabledModels() {
  const prisma = await getPrisma();
  const rows = await prisma.kv.findMany({ where: { scope: SCOPE } });
  const out = {};
  for (const r of rows) out[r.key] = asJson(r.value, []);
  return out;
}

export async function getDisabledByProvider(providerAlias) {
  const prisma = await getPrisma();
  const row = await prisma.kv.findFirst({ where: { scope: SCOPE, key: providerAlias } });
  return row ? (asJson(row.value, []) || []) : [];
}

export async function disableModels(providerAlias, ids) {
  if (!providerAlias || !Array.isArray(ids)) return;
  const prisma = await getPrisma();
  await prisma.$transaction(async (tx) => {
    const row = await tx.kv.findFirst({ where: { scope: SCOPE, key: providerAlias } });
    const current = row ? (asJson(row.value, []) || []) : [];
    const merged = [...new Set([...current, ...ids])];
    await upsertKv(tx, SCOPE, providerAlias, merged);
  });
}

export async function enableModels(providerAlias, ids) {
  if (!providerAlias) return;
  const prisma = await getPrisma();
  await prisma.$transaction(async (tx) => {
    if (!Array.isArray(ids) || ids.length === 0) {
      await tx.kv.deleteMany({ where: { scope: SCOPE, key: providerAlias } });
      return;
    }
    const row = await tx.kv.findFirst({ where: { scope: SCOPE, key: providerAlias } });
    const current = row ? (asJson(row.value, []) || []) : [];
    const removeSet = new Set(ids);
    const next = current.filter((id) => !removeSet.has(id));
    if (next.length === 0) {
      await tx.kv.deleteMany({ where: { scope: SCOPE, key: providerAlias } });
    } else {
      await upsertKv(tx, SCOPE, providerAlias, next);
    }
  });
}
