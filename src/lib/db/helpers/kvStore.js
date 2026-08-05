import { getPrisma } from "../client.js";
import { asJson } from "./dates.js";

export async function getMeta(key, fallback = null) {
  const prisma = await getPrisma();
  const row = await prisma.meta.findUnique({ where: { key } });
  return row ? row.value : fallback;
}

export async function setMeta(key, value) {
  const prisma = await getPrisma();
  await prisma.meta.upsert({
    where: { key },
    create: { key, value: String(value) },
    update: { value: String(value) },
  });
}

/** Upsert compatible with Postgres compound PK and Mongo @@unique([scope,key]) */
export async function upsertKv(client, scope, key, value) {
  const existing = await client.kv.findFirst({ where: { scope, key } });
  if (existing) {
    if (existing.id != null) {
      await client.kv.update({ where: { id: existing.id }, data: { value } });
    } else {
      await client.kv.update({
        where: { scope_key: { scope, key } },
        data: { value },
      });
    }
    return;
  }
  await client.kv.create({ data: { scope, key, value } });
}

export function makeKv(scope) {
  return {
    async get(key, fallback = null) {
      const prisma = await getPrisma();
      const row = await prisma.kv.findFirst({ where: { scope, key } });
      return row ? asJson(row.value, fallback) : fallback;
    },
    async getAll() {
      const prisma = await getPrisma();
      const rows = await prisma.kv.findMany({ where: { scope } });
      const out = {};
      for (const r of rows) out[r.key] = asJson(r.value);
      return out;
    },
    async set(key, value) {
      const prisma = await getPrisma();
      await upsertKv(prisma, scope, key, value);
    },
    async setMany(obj) {
      const prisma = await getPrisma();
      await prisma.$transaction(async (tx) => {
        for (const [k, v] of Object.entries(obj)) {
          await upsertKv(tx, scope, k, v);
        }
      });
    },
    async remove(key) {
      const prisma = await getPrisma();
      await prisma.kv.deleteMany({ where: { scope, key } });
    },
    async clear() {
      const prisma = await getPrisma();
      await prisma.kv.deleteMany({ where: { scope } });
    },
  };
}
