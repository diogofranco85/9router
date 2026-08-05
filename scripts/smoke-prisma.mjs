#!/usr/bin/env node
/**
 * Smoke test against a live DATABASE_URL.
 * Usage:
 *   DATABASE_PROVIDER=postgres DATABASE_URL=... node scripts/smoke-prisma.mjs
 *   DATABASE_PROVIDER=mongodb DATABASE_URL=... node scripts/smoke-prisma.mjs
 */
import { disconnectPrisma, getDatabaseProvider } from "../src/lib/db/client.js";
import {
  initDb,
  getSettings,
  updateSettings,
  createProviderConnection,
  getProviderConnections,
  deleteProviderConnection,
  saveRequestUsage,
  getUsageHistory,
  exportDb,
  importDb,
} from "../src/lib/db/index.js";

const provider = getDatabaseProvider();
console.log(`[smoke] provider=${provider}`);

await initDb();
const settings = await getSettings();
console.log("[smoke] getSettings ok", Object.keys(settings).length, "keys");

await updateSettings({ _smokeAt: new Date().toISOString() });
console.log("[smoke] updateSettings ok");

const conn = await createProviderConnection({
  provider: "openai",
  authType: "apikey",
  name: `smoke-${Date.now()}`,
  apiKey: "sk-smoke-test",
});
console.log("[smoke] createProviderConnection", conn.id);

const list = await getProviderConnections({ provider: "openai" });
console.log("[smoke] connections", list.length);

await saveRequestUsage({
  provider: "openai",
  model: "gpt-smoke",
  connectionId: conn.id,
  tokens: { prompt_tokens: 3, completion_tokens: 5 },
  status: "ok",
  endpoint: "/v1/chat/completions",
});
const hist = await getUsageHistory({ provider: "openai" });
console.log("[smoke] usageHistory", hist.length);

const exported = await exportDb();
const roundtrip = await importDb(exported);
console.log("[smoke] export/import", roundtrip.providerConnections?.length, "connections");

await deleteProviderConnection(conn.id);
console.log("[smoke] cleanup connection");

await disconnectPrisma();
console.log("[smoke] PASS");
