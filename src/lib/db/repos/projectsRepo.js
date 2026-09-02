import { v4 as uuidv4 } from "uuid";
import { getPrisma } from "../client.js";
import { toIso } from "../helpers/dates.js";

function normalizeCode(code) {
  const raw = String(code || "").trim().toUpperCase();
  return raw || null;
}

function rowToProject(row) {
  if (!row) return null;
  return {
    id: row.id,
    name: row.name,
    code: row.code || null,
    createdAt: toIso(row.createdAt),
    updatedAt: toIso(row.updatedAt),
  };
}

export async function getProjects() {
  const prisma = await getPrisma();
  const rows = await prisma.project.findMany({ orderBy: { name: "asc" } });
  return rows.map(rowToProject);
}

export async function getProjectById(id) {
  if (!id) return null;
  const prisma = await getPrisma();
  return rowToProject(await prisma.project.findUnique({ where: { id } }));
}

export async function getProjectMap() {
  const projects = await getProjects();
  const map = {};
  for (const p of projects) map[p.id] = p;
  return map;
}

async function assertUniqueCode(prisma, code, excludeId = null) {
  if (!code) return;
  const existing = await prisma.project.findFirst({
    where: {
      code,
      ...(excludeId ? { id: { not: excludeId } } : {}),
    },
  });
  if (existing) {
    throw new Error("A project with this code already exists");
  }
}

export async function createProject({ name, code = null } = {}) {
  const trimmed = String(name || "").trim();
  if (!trimmed) throw new Error("Project name is required");

  const normalizedCode = normalizeCode(code);
  const now = new Date();
  const prisma = await getPrisma();
  await assertUniqueCode(prisma, normalizedCode);

  const row = await prisma.project.create({
    data: {
      id: uuidv4(),
      name: trimmed,
      code: normalizedCode,
      createdAt: now,
      updatedAt: now,
    },
  });
  return rowToProject(row);
}

export async function updateProject(id, data = {}) {
  const prisma = await getPrisma();
  const row = await prisma.project.findUnique({ where: { id } });
  if (!row) return null;

  const name = data.name !== undefined ? String(data.name || "").trim() : row.name;
  if (!name) throw new Error("Project name is required");

  const code = data.code !== undefined ? normalizeCode(data.code) : row.code;
  await assertUniqueCode(prisma, code, id);

  const updated = await prisma.project.update({
    where: { id },
    data: { name, code, updatedAt: new Date() },
  });
  return rowToProject(updated);
}

export async function deleteProject(id) {
  const prisma = await getPrisma();
  const row = await prisma.project.findUnique({ where: { id } });
  if (!row) return false;

  await prisma.$transaction(async (tx) => {
    await tx.user.updateMany({
      where: { projectId: id },
      data: { projectId: null, updatedAt: new Date() },
    });
    await tx.project.delete({ where: { id } });
  });
  return true;
}

export async function countUsersByProject(projectId) {
  const prisma = await getPrisma();
  return prisma.user.count({ where: { projectId } });
}
