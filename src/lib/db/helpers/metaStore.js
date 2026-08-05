import { getPrisma } from "../client.js";

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
