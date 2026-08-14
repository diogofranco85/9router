#!/usr/bin/env node
/**
 * One-shot: import a JSON export (from the old SQLite exportDb / UI) into Prisma.
 *
 * Usage:
 *   DATABASE_PROVIDER=postgres DATABASE_URL=... node scripts/migrate-sqlite-to-prisma.mjs ./export.json
 *
 * To produce export.json from a legacy SQLite file, use the dashboard
 * Settings → Database → Export before upgrading, or any prior backup JSON.
 */
import fs from "node:fs";
import path from "node:path";

const file = process.argv[2];
if (!file) {
  console.error("Usage: node scripts/migrate-sqlite-to-prisma.mjs <export.json>");
  process.exit(1);
}

const abs = path.resolve(file);
if (!fs.existsSync(abs)) {
  console.error(`File not found: ${abs}`);
  process.exit(1);
}

const payload = JSON.parse(fs.readFileSync(abs, "utf8"));
const { importDb, initDb } = await import("../src/lib/db/index.js");
const { disconnectPrisma } = await import("../src/lib/db/client.js");

await initDb();
const result = await importDb(payload);
console.log(`[migrate] imported settings + ${result.providerConnections?.length || 0} connections, ${result.apiKeys?.length || 0} api keys`);
await disconnectPrisma();
