import { NextResponse } from "next/server";
import {
  getProjects, createProject, countUsersByProject,
} from "@/lib/localDb";
import { requireSession, PERMS } from "@/lib/auth/accessControl";

export const dynamic = "force-dynamic";

export async function GET() {
  const gate = await requireSession({ perm: PERMS.dashboard });
  if (gate.error) return gate.error;

  try {
    const projects = await getProjects();
    const withCounts = await Promise.all(
      projects.map(async (project) => ({
        ...project,
        userCount: await countUsersByProject(project.id),
      })),
    );
    return NextResponse.json({ projects: withCounts });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function POST(request) {
  const gate = await requireSession({ perm: PERMS.dashboard });
  if (gate.error) return gate.error;

  try {
    const body = await request.json();
    const project = await createProject({
      name: typeof body?.name === "string" ? body.name : "",
      code: typeof body?.code === "string" ? body.code : null,
    });
    return NextResponse.json({ project }, { status: 201 });
  } catch (error) {
    const msg = error.message || "Failed to create project";
    const status = /required|already exists/i.test(msg) ? 400 : 500;
    return NextResponse.json({ error: msg }, { status });
  }
}
