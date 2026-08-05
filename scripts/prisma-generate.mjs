#!/usr/bin/env node
import { spawnSync } from "node:child_process";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const jobs = [
  {
    schema: "prisma/postgres/schema.prisma",
    env: { DATABASE_URL: process.env.DATABASE_URL || "postgresql://build:build@localhost:5432/build" },
  },
  {
    schema: "prisma/mongodb/schema.prisma",
    env: { DATABASE_URL: "mongodb://build:build@localhost:27017/build" },
  },
];

let failed = false;
for (const job of jobs) {
  console.log(`[prisma] generate --schema ${job.schema}`);
  const result = spawnSync(
    "npx",
    ["prisma", "generate", "--schema", job.schema],
    {
      cwd: root,
      stdio: "inherit",
      shell: process.platform === "win32",
      env: { ...process.env, ...job.env },
    },
  );
  if (result.status !== 0) {
    failed = true;
    console.error(`[prisma] generate failed for ${job.schema}`);
  }
}

process.exit(failed ? 1 : 0);
