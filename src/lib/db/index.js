// Public API barrel — all DB functions
import { getPrisma } from "./client.js";
import { asJson, asObject, toDate, toIso } from "./helpers/dates.js";
import { upsertKv } from "./helpers/kvStore.js";

// Settings
export {
  getSettings, updateSettings, isCloudEnabled, getCloudUrl, exportSettings,
} from "./repos/settingsRepo.js";

// Provider connections
export {
  getProviderConnections, getProviderConnectionById,
  createProviderConnection, updateProviderConnection,
  deleteProviderConnection, deleteProviderConnectionsByProvider,
  reorderProviderConnections, cleanupProviderConnections,
} from "./repos/connectionsRepo.js";

// Provider nodes
export {
  getProviderNodes, getProviderNodeById,
  createProviderNode, updateProviderNode, deleteProviderNode,
} from "./repos/nodesRepo.js";

// Proxy pools
export {
  getProxyPools, getProxyPoolById,
  createProxyPool, updateProxyPool, deleteProxyPool,
} from "./repos/proxyPoolsRepo.js";

// API keys
export {
  getApiKeys, getApiKeyById, createApiKey, updateApiKey, deleteApiKey, validateApiKey,
} from "./repos/apiKeysRepo.js";

// Combos
export {
  getCombos, getComboById, getComboByName,
  createCombo, updateCombo, deleteCombo,
} from "./repos/combosRepo.js";

// Aliases (model + custom + mitm)
export {
  getModelAliases, setModelAlias, deleteModelAlias,
  getCustomModels, addCustomModel, deleteCustomModel,
  getMitmAlias, setMitmAliasAll,
} from "./repos/aliasRepo.js";

// Pricing
export {
  getPricing, getPricingForModel, updatePricing, resetPricing, resetAllPricing,
} from "./repos/pricingRepo.js";

// Disabled models
export {
  getDisabledModels, getDisabledByProvider, disableModels, enableModels,
} from "./repos/disabledModelsRepo.js";

// Usage
export {
  statsEmitter, trackPendingRequest, getActiveRequests,
  saveRequestUsage, getUsageHistory, getUsageStats, getChartData,
  appendRequestLog, getRecentLogs,
} from "./repos/usageRepo.js";

// Request details
export {
  saveRequestDetail, getRequestDetails, getRequestDetailById, getDistinctProviders,
} from "./repos/requestDetailsRepo.js";

function splitConn(c) {
  const { id, provider, authType, name, email, priority, isActive, createdAt, updatedAt, ...rest } = c;
  return {
    id,
    provider,
    authType: authType || "oauth",
    name: name || null,
    email: email || null,
    priority: priority ?? null,
    isActive: isActive !== false,
    data: rest,
    createdAt: toDate(createdAt || new Date().toISOString()),
    updatedAt: toDate(updatedAt || new Date().toISOString()),
  };
}

function splitNode(n) {
  const { id, type, name, createdAt, updatedAt, ...rest } = n;
  return {
    id,
    type: type || null,
    name: name || null,
    data: rest,
    createdAt: toDate(createdAt || new Date().toISOString()),
    updatedAt: toDate(updatedAt || new Date().toISOString()),
  };
}

function splitPool(p) {
  const { id, isActive, testStatus, createdAt, updatedAt, ...rest } = p;
  return {
    id,
    isActive: isActive !== false,
    testStatus: testStatus || "unknown",
    data: rest,
    createdAt: toDate(createdAt || new Date().toISOString()),
    updatedAt: toDate(updatedAt || new Date().toISOString()),
  };
}

export async function exportDb() {
  const prisma = await getPrisma();
  const { exportSettings } = await import("./repos/settingsRepo.js");

  const [
    connections,
    nodes,
    pools,
    apiKeys,
    combos,
    aliases,
    customs,
    mitm,
    pricing,
  ] = await Promise.all([
    prisma.providerConnection.findMany(),
    prisma.providerNode.findMany(),
    prisma.proxyPool.findMany(),
    prisma.apiKey.findMany(),
    prisma.combo.findMany(),
    prisma.kv.findMany({ where: { scope: "modelAliases" } }),
    prisma.kv.findMany({ where: { scope: "customModels" } }),
    prisma.kv.findMany({ where: { scope: "mitmAlias" } }),
    prisma.kv.findMany({ where: { scope: "pricing" } }),
  ]);

  const out = {
    settings: await exportSettings(),
    providerConnections: connections.map((r) => ({
      ...asObject(r.data),
      id: r.id,
      provider: r.provider,
      authType: r.authType,
      name: r.name,
      email: r.email,
      priority: r.priority,
      isActive: r.isActive === true,
      createdAt: toIso(r.createdAt),
      updatedAt: toIso(r.updatedAt),
    })),
    providerNodes: nodes.map((r) => ({
      ...asObject(r.data),
      id: r.id,
      type: r.type,
      name: r.name,
      createdAt: toIso(r.createdAt),
      updatedAt: toIso(r.updatedAt),
    })),
    proxyPools: pools.map((r) => ({
      ...asObject(r.data),
      id: r.id,
      isActive: r.isActive === true,
      testStatus: r.testStatus,
      createdAt: toIso(r.createdAt),
      updatedAt: toIso(r.updatedAt),
    })),
    apiKeys: apiKeys.map((r) => ({
      id: r.id,
      key: r.key,
      name: r.name,
      machineId: r.machineId,
      isActive: r.isActive === true,
      createdAt: toIso(r.createdAt),
    })),
    combos: combos.map((r) => ({
      id: r.id,
      name: r.name,
      kind: r.kind,
      models: asJson(r.models, []),
      createdAt: toIso(r.createdAt),
      updatedAt: toIso(r.updatedAt),
    })),
    modelAliases: {},
    customModels: [],
    mitmAlias: {},
    pricing: {},
  };

  for (const r of aliases) out.modelAliases[r.key] = asJson(r.value);
  for (const r of customs) out.customModels.push(asJson(r.value));
  for (const r of mitm) out.mitmAlias[r.key] = asJson(r.value);
  for (const r of pricing) out.pricing[r.key] = asJson(r.value);

  return out;
}

export async function importDb(payload) {
  if (!payload || typeof payload !== "object" || Array.isArray(payload)) {
    throw new Error("Invalid database payload");
  }
  const prisma = await getPrisma();

  await prisma.$transaction(async (tx) => {
    await tx.settings.deleteMany();
    await tx.providerConnection.deleteMany();
    await tx.providerNode.deleteMany();
    await tx.proxyPool.deleteMany();
    await tx.apiKey.deleteMany();
    await tx.combo.deleteMany();
    await tx.kv.deleteMany({
      where: { scope: { in: ["modelAliases", "customModels", "mitmAlias", "pricing"] } },
    });

    if (payload.settings) {
      await tx.settings.create({
        data: { id: 1, data: payload.settings },
      });
    } else {
      await tx.settings.create({ data: { id: 1, data: {} } });
    }

    for (const c of payload.providerConnections || []) {
      await tx.providerConnection.create({ data: splitConn(c) });
    }
    for (const n of payload.providerNodes || []) {
      await tx.providerNode.create({ data: splitNode(n) });
    }
    for (const p of payload.proxyPools || []) {
      await tx.proxyPool.create({ data: splitPool(p) });
    }
    for (const k of payload.apiKeys || []) {
      await tx.apiKey.create({
        data: {
          id: k.id,
          key: k.key,
          name: k.name || null,
          machineId: k.machineId || null,
          isActive: k.isActive !== false,
          createdAt: toDate(k.createdAt || new Date().toISOString()),
        },
      });
    }
    for (const c of payload.combos || []) {
      await tx.combo.create({
        data: {
          id: c.id,
          name: c.name,
          kind: c.kind || null,
          models: c.models || [],
          createdAt: toDate(c.createdAt || new Date().toISOString()),
          updatedAt: toDate(c.updatedAt || new Date().toISOString()),
        },
      });
    }
    for (const [a, m] of Object.entries(payload.modelAliases || {})) {
      await upsertKv(tx, "modelAliases", a, m);
    }
    for (const m of payload.customModels || []) {
      const k = `${m.providerAlias}|${m.id}|${m.type || "llm"}`;
      await upsertKv(tx, "customModels", k, m);
    }
    for (const [tool, mappings] of Object.entries(payload.mitmAlias || {})) {
      await upsertKv(tx, "mitmAlias", tool, mappings || {});
    }
    for (const [provider, models] of Object.entries(payload.pricing || {})) {
      await upsertKv(tx, "pricing", provider, models || {});
    }
  });

  return await exportDb();
}

export async function initDb() {
  await getPrisma();
}
