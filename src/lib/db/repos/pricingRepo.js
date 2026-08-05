import { getPrisma } from "../client.js";
import { asObject } from "../helpers/dates.js";
import { makeKv, upsertKv } from "../helpers/kvStore.js";

const pricingKv = makeKv("pricing");
const CACHE_TTL_MS = 5000;

let cache = { value: null, expiresAt: 0 };

function invalidate() {
  cache = { value: null, expiresAt: 0 };
}

async function getUserPricing() {
  return await pricingKv.getAll();
}

export async function getPricing() {
  const now = Date.now();
  if (cache.value && cache.expiresAt > now) return cache.value;

  const userPricing = await getUserPricing();
  const { PROVIDER_PRICING } = await import("open-sse/providers/pricing.js");
  const merged = {};

  for (const [provider, models] of Object.entries(PROVIDER_PRICING)) {
    merged[provider] = { ...models };
    if (userPricing[provider]) {
      for (const [model, pricing] of Object.entries(userPricing[provider])) {
        merged[provider][model] = merged[provider][model]
          ? { ...merged[provider][model], ...pricing }
          : pricing;
      }
    }
  }

  for (const [provider, models] of Object.entries(userPricing)) {
    if (!merged[provider]) {
      merged[provider] = { ...models };
    } else {
      for (const [model, pricing] of Object.entries(models)) {
        if (!merged[provider][model]) merged[provider][model] = pricing;
      }
    }
  }

  cache = { value: merged, expiresAt: now + CACHE_TTL_MS };
  return merged;
}

export async function getPricingForModel(provider, model) {
  if (!model) return null;
  const userPricing = await getUserPricing();
  if (provider && userPricing[provider]?.[model]) return userPricing[provider][model];
  const { getPricingForModel: resolveConst } = await import("open-sse/providers/pricing.js");
  return resolveConst(provider, model);
}

export async function updatePricing(pricingData) {
  const prisma = await getPrisma();
  await prisma.$transaction(async (tx) => {
    for (const [provider, models] of Object.entries(pricingData)) {
      const row = await tx.kv.findFirst({ where: { scope: "pricing", key: provider } });
      const current = row ? asObject(row.value) : {};
      const merged = { ...current };
      for (const [model, pricing] of Object.entries(models)) {
        merged[model] = pricing;
      }
      await upsertKv(tx, "pricing", provider, merged);
    }
  });
  invalidate();
  return await getUserPricing();
}

export async function resetPricing(provider, model) {
  if (!provider) return await getUserPricing();
  const prisma = await getPrisma();
  await prisma.$transaction(async (tx) => {
    if (!model) {
      await tx.kv.deleteMany({ where: { scope: "pricing", key: provider } });
      return;
    }
    const row = await tx.kv.findFirst({ where: { scope: "pricing", key: provider } });
    const current = row ? asObject(row.value) : {};
    delete current[model];
    if (Object.keys(current).length === 0) {
      await tx.kv.deleteMany({ where: { scope: "pricing", key: provider } });
    } else {
      await upsertKv(tx, "pricing", provider, current);
    }
  });
  invalidate();
  return await getUserPricing();
}

export async function resetAllPricing() {
  await pricingKv.clear();
  invalidate();
  return {};
}
