import { NextResponse } from "next/server";
import {
  getProjectById, updateProject, deleteProject, countUsersByProject,
} from "@/lib/localDb";
import { requireSession, PERMS } from "@/lib/auth/accessControl";

export const dynamic = "force-dynamic";

export async function GET(_request, { params }) {
  const gate = await requireSession({ perm: PERMS.dashboard });
  if (gate.error) return gate.error;

  try {
    const { id } = await params;
    const project = await getProjectById(id);
    if (!project) return NextResponse.json({ error: "Project not found" }, { status: 404 });
    const userCount = await countUsersByProject(id);
    return NextResponse.json({ project: { ...project, userCount } });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function PUT(request, { params }) {
  const gate = await requireSession({ perm: PERMS.dashboard });
  if (gate.error) return gate.error;

  try {
    const { id } = await params;
    const body = await request.json();
    const data = {};
    if (body.name !== undefined) data.name = body.name;
    if (body.code !== undefined) data.code = body.code;
    const project = await updateProject(id, data);
    if (!project) return NextResponse.json({ error: "Project not found" }, { status: 404 });
    return NextResponse.json({ project });
  } catch (error) {
    const msg = error.message || "Failed to update project";
    const status = /required|already exists/i.test(msg) ? 400 : 500;
    return NextResponse.json({ error: msg }, { status });
  }
}

export async function DELETE(_request, { params }) {
  const gate = await requireSession({ perm: PERMS.dashboard });
  if (gate.error) return gate.error;

  try {
    const { id } = await params;
    const ok = await deleteProject(id);
    if (!ok) return NextResponse.json({ error: "Project not found" }, { status: 404 });
    return NextResponse.json({ ok: true });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
