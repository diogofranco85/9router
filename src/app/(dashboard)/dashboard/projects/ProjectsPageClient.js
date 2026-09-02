"use client";

import { useCallback, useEffect, useState } from "react";
import { Card, Button, Input, Modal } from "@/shared/components";
import { ConfirmModal } from "@/shared/components/Modal";

function emptyForm() {
  return { name: "", code: "" };
}

export default function ProjectsPageClient() {
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState([]);
  const [error, setError] = useState("");
  const [showCreate, setShowCreate] = useState(false);
  const [form, setForm] = useState(emptyForm());
  const [editProject, setEditProject] = useState(null);
  const [saving, setSaving] = useState(false);
  const [confirmState, setConfirmState] = useState(null);

  const load = useCallback(async () => {
    setError("");
    try {
      const res = await fetch("/api/projects", { cache: "no-store" });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.error || "Failed to load projects");
      setProjects(data.projects || []);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    load();
  }, [load]);

  const handleCreate = async (e) => {
    e.preventDefault();
    setSaving(true);
    setError("");
    try {
      const res = await fetch("/api/projects", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to create project");
      setShowCreate(false);
      setForm(emptyForm());
      await load();
    } catch (err) {
      setError(err.message);
    } finally {
      setSaving(false);
    }
  };

  const handleSaveEdit = async (e) => {
    e.preventDefault();
    if (!editProject) return;
    setSaving(true);
    setError("");
    try {
      const res = await fetch(`/api/projects/${editProject.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: editProject.name, code: editProject.code }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to update project");
      setEditProject(null);
      await load();
    } catch (err) {
      setError(err.message);
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = (project) => {
    setConfirmState({
      title: "Delete project",
      message: `Delete ${project.name}? Users in this project become unassigned. Past usage stays on this project id.`,
      onConfirm: async () => {
        setConfirmState(null);
        try {
          const res = await fetch(`/api/projects/${project.id}`, { method: "DELETE" });
          const data = await res.json().catch(() => ({}));
          if (!res.ok) throw new Error(data.error || "Failed to delete project");
          await load();
        } catch (err) {
          setError(err.message);
        }
      },
    });
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center py-16 text-text-muted">
        <span className="material-symbols-outlined text-[32px] animate-spin">progress_activity</span>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-6 max-w-3xl">
      {error && (
        <p className="text-sm text-red-500">{error}</p>
      )}

      <Card>
        <div className="flex items-center justify-between mb-4 gap-3">
          <div>
            <h2 className="text-lg font-semibold">Projects</h2>
            <p className="text-sm text-text-muted">
              Assign users to a project to allocate token usage and estimated cost.
            </p>
          </div>
          <Button icon="add" onClick={() => { setForm(emptyForm()); setShowCreate(true); }}>
            Add project
          </Button>
        </div>

        {projects.length === 0 ? (
          <div className="text-center py-10 text-text-muted text-sm">
            No projects yet. Create one, then assign users in Access Control.
          </div>
        ) : (
          <div className="flex flex-col divide-y divide-border-subtle">
            {projects.map((project) => (
              <div key={project.id} className="py-3 flex flex-col sm:flex-row sm:items-center gap-3">
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium truncate">{project.name}</p>
                  <p className="text-xs text-text-muted">
                    {project.code ? `Code ${project.code} · ` : ""}
                    {project.userCount || 0} user{(project.userCount || 0) === 1 ? "" : "s"}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <Button size="sm" variant="ghost" icon="edit" onClick={() => setEditProject({ ...project })}>
                    Edit
                  </Button>
                  <Button size="sm" variant="ghost" icon="delete" onClick={() => handleDelete(project)}>
                    Delete
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}
      </Card>

      <Modal isOpen={showCreate} title="Add project" onClose={() => setShowCreate(false)}>
        <form onSubmit={handleCreate} className="flex flex-col gap-3">
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium">Name</label>
            <Input
              required
              value={form.name}
              onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
              placeholder="Billing team, Product X…"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium">Code (optional)</label>
            <Input
              value={form.code}
              onChange={(e) => setForm((f) => ({ ...f, code: e.target.value }))}
              placeholder="CC-1042"
            />
          </div>
          <Button type="submit" variant="primary" loading={saving}>
            Create project
          </Button>
        </form>
      </Modal>

      <Modal isOpen={!!editProject} title="Edit project" onClose={() => setEditProject(null)}>
        {editProject && (
          <form onSubmit={handleSaveEdit} className="flex flex-col gap-3">
            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium">Name</label>
              <Input
                required
                value={editProject.name}
                onChange={(e) => setEditProject((p) => ({ ...p, name: e.target.value }))}
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium">Code (optional)</label>
              <Input
                value={editProject.code || ""}
                onChange={(e) => setEditProject((p) => ({ ...p, code: e.target.value }))}
              />
            </div>
            <Button type="submit" variant="primary" loading={saving}>
              Save
            </Button>
          </form>
        )}
      </Modal>

      <ConfirmModal
        isOpen={!!confirmState}
        onClose={() => setConfirmState(null)}
        onConfirm={confirmState?.onConfirm}
        title={confirmState?.title || ""}
        message={confirmState?.message || ""}
        confirmText="Delete"
        cancelText="Cancel"
        variant="danger"
      />
    </div>
  );
}
