/**
 * Prisma client factory — one active provider per process.
 * DATABASE_PROVIDER=postgres|postgresql|mongodb
 * DATABASE_URL=...
 */
import { ensureDirs } from "./paths.js";

if (!global._prismaState) {
  global._prismaState = { client: null, provider: null, initPromise: null };
}
const state = global._prismaState;

export function resolveDatabaseProvider(raw = process.env.DATABASE_PROVIDER) {
  const value = String(raw || "").trim().toLowerCase();
  if (value === "postgres" || value === "postgresql" || value === "pg") return "postgres";
  if (value === "mongodb" || value === "mongo") return "mongodb";
  return null;
}

export function getDatabaseProvider() {
  const provider = resolveDatabaseProvider();
  if (!provider) {
    throw new Error(
      "DATABASE_PROVIDER is required (postgres | mongodb). Set DATABASE_PROVIDER and DATABASE_URL.",
    );
  }
  return provider;
}

async function createClient(provider) {
  const url = process.env.DATABASE_URL;
  if (!url || !String(url).trim()) {
    throw new Error("DATABASE_URL is required when using Prisma.");
  }

  if (provider === "postgres") {
    const { PrismaClient } = await import("./generated/postgres/index.js");
    return new PrismaClient({ datasources: { db: { url } } });
  }

  const { PrismaClient } = await import("./generated/mongodb/index.js");
  return new PrismaClient({ datasources: { db: { url } } });
}

async function ensureSeed(prisma) {
  const existingSettings = await prisma.settings.findUnique({ where: { id: 1 } });
  if (!existingSettings) {
    await prisma.settings.create({ data: { id: 1, data: {} } });
  }

  const existing = await prisma.meta.findUnique({ where: { key: "schemaVersion" } });
  if (!existing) {
    await prisma.meta.create({
      data: { key: "schemaVersion", value: "1" },
    });
  }
}

// Prisma wraps MongoDB writes in transactions, which a standalone mongod rejects (P2031).
function explainMongoReplicaSet(err) {
  if (err?.code !== "P2031") return err;
  const url = process.env.DATABASE_URL || "";
  const hint = url.includes("replicaSet=")
    ? "DATABASE_URL already sets replicaSet — confirm the server was started with --replSet and rs.initiate() ran."
    : "Start mongod with --replSet rs0, run rs.initiate(), then append ?replicaSet=rs0 to DATABASE_URL.";
  return new Error(
    `MongoDB must run as a replica set for 9router (Prisma needs transactions). ${hint}`,
    { cause: err },
  );
}

async function initPrisma() {
  ensureDirs();
  const provider = getDatabaseProvider();
  const client = await createClient(provider);
  await client.$connect();
  try {
    await ensureSeed(client);
  } catch (err) {
    await client.$disconnect().catch(() => {});
    throw provider === "mongodb" ? explainMongoReplicaSet(err) : err;
  }
  state.client = client;
  state.provider = provider;
  if (!global._prismaLogged) {
    global._prismaLogged = true;
    console.log(`[DB] Prisma connected (${provider})`);
  }
  return client;
}

/** @returns {Promise<import('./generated/postgres').PrismaClient>} */
export async function getPrisma() {
  // After prisma generate + HMR, a cached client may lack newly added models (e.g. user).
  if (state.client && typeof state.client.user?.findMany !== "function") {
    const stale = state.client;
    state.client = null;
    state.initPromise = null;
    stale.$disconnect().catch(() => {});
  }
  if (state.client) return state.client;
  if (!state.initPromise) {
    state.initPromise = initPrisma().catch((err) => {
      state.initPromise = null;
      throw err;
    });
  }
  return state.initPromise;
}

export function getActiveProvider() {
  return state.provider || resolveDatabaseProvider();
}

export async function disconnectPrisma() {
  if (state.client) {
    await state.client.$disconnect();
    state.client = null;
    state.provider = null;
    state.initPromise = null;
  }
}
