-- CreateSchema
CREATE SCHEMA IF NOT EXISTS "public";

-- CreateTable
CREATE TABLE "public"."_meta" (
    "key" TEXT NOT NULL,
    "value" TEXT NOT NULL,
    CONSTRAINT "_meta_pkey" PRIMARY KEY ("key")
);

-- CreateTable
CREATE TABLE "public"."settings" (
    "id" INTEGER NOT NULL,
    "data" JSONB NOT NULL,
    CONSTRAINT "settings_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."providerConnections" (
    "id" TEXT NOT NULL,
    "provider" TEXT NOT NULL,
    "authType" TEXT NOT NULL,
    "name" TEXT,
    "email" TEXT,
    "priority" INTEGER,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "data" JSONB NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    CONSTRAINT "providerConnections_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."providerNodes" (
    "id" TEXT NOT NULL,
    "type" TEXT,
    "name" TEXT,
    "data" JSONB NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    CONSTRAINT "providerNodes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."proxyPools" (
    "id" TEXT NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "testStatus" TEXT,
    "data" JSONB NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    CONSTRAINT "proxyPools_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."apiKeys" (
    "id" TEXT NOT NULL,
    "key" TEXT NOT NULL,
    "name" TEXT,
    "machineId" TEXT,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL,
    CONSTRAINT "apiKeys_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."combos" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "kind" TEXT,
    "models" JSONB NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    CONSTRAINT "combos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."kv" (
    "scope" TEXT NOT NULL,
    "key" TEXT NOT NULL,
    "value" JSONB NOT NULL,
    CONSTRAINT "kv_pkey" PRIMARY KEY ("scope","key")
);

-- CreateTable
CREATE TABLE "public"."usageHistory" (
    "id" SERIAL NOT NULL,
    "timestamp" TIMESTAMP(3) NOT NULL,
    "provider" TEXT,
    "model" TEXT,
    "connectionId" TEXT,
    "apiKey" TEXT,
    "endpoint" TEXT,
    "promptTokens" INTEGER NOT NULL DEFAULT 0,
    "completionTokens" INTEGER NOT NULL DEFAULT 0,
    "cost" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "status" TEXT,
    "tokens" JSONB,
    "meta" JSONB,
    CONSTRAINT "usageHistory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."usageDaily" (
    "dateKey" TEXT NOT NULL,
    "data" JSONB NOT NULL,
    CONSTRAINT "usageDaily_pkey" PRIMARY KEY ("dateKey")
);

-- CreateTable
CREATE TABLE "public"."requestDetails" (
    "id" TEXT NOT NULL,
    "timestamp" TIMESTAMP(3) NOT NULL,
    "provider" TEXT,
    "model" TEXT,
    "connectionId" TEXT,
    "status" TEXT,
    "data" JSONB NOT NULL,
    CONSTRAINT "requestDetails_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "providerConnections_provider_idx" ON "public"."providerConnections"("provider");

-- CreateIndex
CREATE INDEX "providerConnections_provider_isActive_idx" ON "public"."providerConnections"("provider", "isActive");

-- CreateIndex
CREATE INDEX "providerConnections_provider_priority_idx" ON "public"."providerConnections"("provider", "priority");

-- CreateIndex
CREATE INDEX "providerNodes_type_idx" ON "public"."providerNodes"("type");

-- CreateIndex
CREATE INDEX "proxyPools_isActive_idx" ON "public"."proxyPools"("isActive");

-- CreateIndex
CREATE INDEX "proxyPools_testStatus_idx" ON "public"."proxyPools"("testStatus");

-- CreateIndex
CREATE UNIQUE INDEX "apiKeys_key_key" ON "public"."apiKeys"("key");

-- CreateIndex
CREATE UNIQUE INDEX "combos_name_key" ON "public"."combos"("name");

-- CreateIndex
CREATE INDEX "kv_scope_idx" ON "public"."kv"("scope");

-- CreateIndex
CREATE INDEX "usageHistory_timestamp_idx" ON "public"."usageHistory"("timestamp" DESC);

-- CreateIndex
CREATE INDEX "usageHistory_provider_idx" ON "public"."usageHistory"("provider");

-- CreateIndex
CREATE INDEX "usageHistory_model_idx" ON "public"."usageHistory"("model");

-- CreateIndex
CREATE INDEX "usageHistory_connectionId_idx" ON "public"."usageHistory"("connectionId");

-- CreateIndex
CREATE INDEX "requestDetails_timestamp_idx" ON "public"."requestDetails"("timestamp" DESC);

-- CreateIndex
CREATE INDEX "requestDetails_provider_idx" ON "public"."requestDetails"("provider");

-- CreateIndex
CREATE INDEX "requestDetails_model_idx" ON "public"."requestDetails"("model");

-- CreateIndex
CREATE INDEX "requestDetails_connectionId_idx" ON "public"."requestDetails"("connectionId");
