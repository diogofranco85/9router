import { v4 as uuidv4 } from "uuid";
import bcrypt from "bcryptjs";
import crypto from "node:crypto";
import { getPrisma } from "../client.js";
import { toDate, toIso } from "../helpers/dates.js";

function normalizeEmail(email) {
  return String(email || "").trim().toLowerCase();
}

function rowToUser(row, { includeHash = false } = {}) {
  if (!row) return null;
  const user = {
    id: row.id,
    email: row.email,
    name: row.name || null,
    mustChangePassword: row.mustChangePassword === true,
    isBlocked: row.isBlocked === true,
    permDashboard: row.permDashboard !== false,
    permChat: row.permChat !== false,
    permApi: row.permApi !== false,
    createdAt: toIso(row.createdAt),
    updatedAt: toIso(row.updatedAt),
  };
  if (includeHash) user.passwordHash = row.passwordHash;
  return user;
}

export function generateRandomPassword(length = 16) {
  const alphabet = "ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz23456789!@#$%";
  const bytes = crypto.randomBytes(length);
  let out = "";
  for (let i = 0; i < length; i++) {
    out += alphabet[bytes[i] % alphabet.length];
  }
  return out;
}

export async function hashPassword(password) {
  const salt = await bcrypt.genSalt(10);
  return bcrypt.hash(password, salt);
}

export async function verifyUserPassword(user, password) {
  if (!user?.passwordHash || typeof password !== "string" || !password) return false;
  return bcrypt.compare(password, user.passwordHash);
}

export async function countUsers() {
  const prisma = await getPrisma();
  return prisma.user.count();
}

export async function countDashboardUsers({ excludeUserId = null } = {}) {
  const prisma = await getPrisma();
  return prisma.user.count({
    where: {
      isBlocked: false,
      permDashboard: true,
      ...(excludeUserId ? { id: { not: excludeUserId } } : {}),
    },
  });
}

export async function getUsers() {
  const prisma = await getPrisma();
  const rows = await prisma.user.findMany({ orderBy: { createdAt: "asc" } });
  return rows.map((r) => rowToUser(r));
}

export async function getUserById(id, { includeHash = false } = {}) {
  const prisma = await getPrisma();
  return rowToUser(await prisma.user.findUnique({ where: { id } }), { includeHash });
}

export async function getUserByEmail(email, { includeHash = false } = {}) {
  const prisma = await getPrisma();
  const normalized = normalizeEmail(email);
  if (!normalized) return null;
  return rowToUser(
    await prisma.user.findUnique({ where: { email: normalized } }),
    { includeHash },
  );
}

/**
 * Create a user. Returns { user, plainPassword } — plainPassword only when generated.
 */
export async function createUser({
  email,
  name = null,
  password = null,
  permDashboard = true,
  permChat = true,
  permApi = true,
  mustChangePassword = true,
  isBlocked = false,
} = {}) {
  const normalized = normalizeEmail(email);
  if (!normalized || !normalized.includes("@")) {
    throw new Error("A valid email is required");
  }

  const plainPassword = password || generateRandomPassword();
  const passwordHash = await hashPassword(plainPassword);
  const now = new Date();
  const id = uuidv4();

  const prisma = await getPrisma();
  try {
    const row = await prisma.user.create({
      data: {
        id,
        email: normalized,
        name: name ? String(name).trim() : null,
        passwordHash,
        mustChangePassword: mustChangePassword !== false,
        isBlocked: isBlocked === true,
        permDashboard: permDashboard !== false,
        permChat: permChat !== false,
        permApi: permApi !== false,
        createdAt: now,
        updatedAt: now,
      },
    });

    return {
      user: rowToUser(row),
      plainPassword,
    };
  } catch (err) {
    if (String(err?.code) === "P2002" || /unique/i.test(String(err?.message || ""))) {
      throw new Error("A user with this email already exists");
    }
    throw err;
  }
}

export async function updateUser(id, data = {}) {
  const prisma = await getPrisma();
  return prisma.$transaction(async (tx) => {
    const row = await tx.user.findUnique({ where: { id } });
    if (!row) return null;

    const next = {
      name: data.name !== undefined ? (data.name ? String(data.name).trim() : null) : row.name,
      mustChangePassword:
        data.mustChangePassword !== undefined ? !!data.mustChangePassword : row.mustChangePassword,
      isBlocked: data.isBlocked !== undefined ? !!data.isBlocked : row.isBlocked,
      permDashboard: data.permDashboard !== undefined ? !!data.permDashboard : row.permDashboard,
      permChat: data.permChat !== undefined ? !!data.permChat : row.permChat,
      permApi: data.permApi !== undefined ? !!data.permApi : row.permApi,
      passwordHash: data.passwordHash !== undefined ? data.passwordHash : row.passwordHash,
      updatedAt: new Date(),
    };

    const updated = await tx.user.update({
      where: { id },
      data: next,
    });
    return rowToUser(updated);
  });
}

export async function setUserPassword(id, plainPassword, { mustChangePassword = false } = {}) {
  if (!plainPassword || String(plainPassword).length < 6) {
    throw new Error("Password must be at least 6 characters");
  }
  const passwordHash = await hashPassword(plainPassword);
  return updateUser(id, { passwordHash, mustChangePassword });
}

/**
 * Reset to a new random password. Returns { user, plainPassword }.
 */
export async function resetUserPassword(id) {
  const plainPassword = generateRandomPassword();
  const user = await setUserPassword(id, plainPassword, { mustChangePassword: true });
  if (!user) return null;
  return { user, plainPassword };
}

export async function deleteUser(id) {
  const prisma = await getPrisma();
  try {
    await prisma.user.delete({ where: { id } });
    return true;
  } catch {
    return false;
  }
}
