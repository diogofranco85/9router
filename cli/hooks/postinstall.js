#!/usr/bin/env node

// Postinstall: warm tray runtime. DB is Prisma (Postgres/Mongo) via DATABASE_URL —
// no local SQLite runtime install needed.
const { ensureTrayRuntime } = require("./trayRuntime");

try {
  ensureTrayRuntime({ silent: false });
} catch (e) {
  console.warn(`[9router] tray runtime skipped: ${e.message}`);
}

process.exit(0);
