"use client";

import { useCallback, useEffect, useState } from "react";
import { Card, Button, Input, Toggle, Modal } from "@/shared/components";
import { ConfirmModal } from "@/shared/components/Modal";

function emptyForm() {
  return {
    email: "",
    name: "",
    permDashboard: true,
    permChat: true,
    permApi: true,
  };
}

export default function AccessControlPageClient() {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);
  const [userCount, setUserCount] = useState(0);
  const [accessControlEnabled, setAccessControlEnabled] = useState(false);
  const [blockEnvPassword, setBlockEnvPassword] = useState(false);
  const [error, setError] = useState("");
  const [showCreate, setShowCreate] = useState(false);
  const [form, setForm] = useState(emptyForm());
  const [saving, setSaving] = useState(false);
  const [editUser, setEditUser] = useState(null);
  const [passwordReveal, setPasswordReveal] = useState(null);
  const [confirmState, setConfirmState] = useState(null);

  const load = useCallback(async () => {
    setError("");
    try {
      const res = await fetch("/api/users", { cache: "no-store" });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Failed to load users");
      }
      const data = await res.json();
      setUsers(data.users || []);
      setUserCount(data.userCount || 0);
      setAccessControlEnabled(!!data.accessControlEnabled);
      setBlockEnvPassword(!!data.blockEnvPassword);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    load();
  }, [load]);

  const patchSettings = async (updates) => {
    const res = await fetch("/api/users", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updates),
    });
    const data = await res.json().catch(() => ({}));
    if (!res.ok) throw new Error(data.error || "Failed to update settings");
    setAccessControlEnabled(!!data.accessControlEnabled);
    setBlockEnvPassword(!!data.blockEnvPassword);
  };

  const handleCreate = async (e) => {
    e.preventDefault();
    setSaving(true);
    setError("");
    try {
      const res = await fetch("/api/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to create user");
      setShowCreate(false);
      setForm(emptyForm());
      setPasswordReveal({
        email: data.user.email,
        plainPassword: data.plainPassword,
        title: "User created",
      });
      await load();
    } catch (err) {
      setError(err.message);
    } finally {
      setSaving(false);
    }
  };

  const handleSaveEdit = async (e) => {
    e.preventDefault();
    if (!editUser) return;
    setSaving(true);
    setError("");
    try {
      const res = await fetch(`/api/users/${editUser.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: editUser.name,
          isBlocked: editUser.isBlocked,
          permDashboard: editUser.permDashboard,
          permChat: editUser.permChat,
          permApi: editUser.permApi,
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to update user");
      setEditUser(null);
      await load();
    } catch (err) {
      setError(err.message);
    } finally {
      setSaving(false);
    }
  };

  const handleResetPassword = (user) => {
    setConfirmState({
      title: "Reset password",
      message: `Generate a new random password for ${user.email}? They must change it on next login.`,
      onConfirm: async () => {
        setConfirmState(null);
        try {
          const res = await fetch(`/api/users/${user.id}`, { method: "POST" });
          const data = await res.json();
          if (!res.ok) throw new Error(data.error || "Failed to reset password");
          setPasswordReveal({
            email: data.user.email,
            plainPassword: data.plainPassword,
            title: "Password reset",
          });
          await load();
        } catch (err) {
          setError(err.message);
        }
      },
    });
  };

  const handleToggleBlocked = (user) => {
    const next = !user.isBlocked;
    setConfirmState({
      title: next ? "Block user" : "Unblock user",
      message: next
        ? `Block ${user.email}? They will not be able to sign in or use API keys.`
        : `Unblock ${user.email}?`,
      onConfirm: async () => {
        setConfirmState(null);
        try {
          const res = await fetch(`/api/users/${user.id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ isBlocked: next }),
          });
          const data = await res.json();
          if (!res.ok) throw new Error(data.error || "Failed to update user");
          await load();
        } catch (err) {
          setError(err.message);
        }
      },
    });
  };

  if (loading) {
    return (
      <div className="p-6 flex items-center justify-center min-h-[40vh]">
        <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-primary" />
      </div>
    );
  }

  return (
    <div className="p-6 max-w-4xl mx-auto flex flex-col gap-6">
      {error && (
        <div className="rounded-lg border border-red-500/30 bg-red-500/10 text-red-600 dark:text-red-400 px-3 py-2 text-sm">
          {error}
        </div>
      )}

      <Card>
        <h2 className="text-lg font-semibold mb-1">Access control</h2>
        <p className="text-sm text-text-muted mb-4">
          Enable per-user login with email and password. Shared .env password can be blocked once at least one user exists.
        </p>
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-sm font-medium">Enable access control</p>
              <p className="text-xs text-text-muted">Allow users to sign in with email and password</p>
            </div>
            <Toggle
              checked={accessControlEnabled}
              onChange={async (checked) => {
                try {
                  await patchSettings({ accessControlEnabled: checked });
                } catch (err) {
                  setError(err.message);
                }
              }}
            />
          </div>
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-sm font-medium">Block shared .env password</p>
              <p className="text-xs text-text-muted">
                Requires at least one registered user ({userCount} registered)
              </p>
            </div>
            <Toggle
              checked={blockEnvPassword}
              disabled={userCount < 1 || !accessControlEnabled}
              onChange={async (checked) => {
                try {
                  await patchSettings({ blockEnvPassword: checked });
                } catch (err) {
                  setError(err.message);
                }
              }}
            />
          </div>
        </div>
      </Card>

      <Card>
        <div className="flex items-center justify-between mb-4 gap-3">
          <div>
            <h2 className="text-lg font-semibold">Users</h2>
            <p className="text-sm text-text-muted">Email cannot be changed after creation</p>
          </div>
          <Button icon="person_add" onClick={() => { setForm(emptyForm()); setShowCreate(true); }}>
            Add user
          </Button>
        </div>

        {users.length === 0 ? (
          <div className="text-center py-10 text-text-muted text-sm">
            No users yet. Create the first user to enable email login.
          </div>
        ) : (
          <div className="flex flex-col divide-y divide-border-subtle">
            {users.map((user) => (
              <div key={user.id} className={`py-3 flex flex-col sm:flex-row sm:items-center gap-3 ${user.isBlocked ? "opacity-60" : ""}`}>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium truncate">{user.email}</p>
                  <p className="text-xs text-text-muted">
                    {user.name || "No name"}
                    {user.mustChangePassword ? " · Must change password" : ""}
                    {user.isBlocked ? " · Blocked" : ""}
                  </p>
                  <p className="text-xs text-text-muted mt-1">
                    {[
                      user.permDashboard && "Dashboard",
                      user.permChat && "Chat",
                      user.permApi && "API",
                    ].filter(Boolean).join(" · ") || "No permissions"}
                  </p>
                </div>
                <div className="flex items-center gap-2 flex-wrap">
                  <Button size="sm" variant="ghost" icon="edit" onClick={() => setEditUser({ ...user })}>
                    Edit
                  </Button>
                  <Button size="sm" variant="ghost" icon="key" onClick={() => handleResetPassword(user)}>
                    Reset password
                  </Button>
                  <Button
                    size="sm"
                    variant="ghost"
                    icon={user.isBlocked ? "lock_open" : "block"}
                    onClick={() => handleToggleBlocked(user)}
                  >
                    {user.isBlocked ? "Unblock" : "Block"}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}
      </Card>

      <Modal
        isOpen={showCreate}
        title="Add user"
        onClose={() => setShowCreate(false)}
      >
        <form onSubmit={handleCreate} className="flex flex-col gap-3">
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium">Email</label>
            <Input
              type="email"
              required
              value={form.email}
              onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
              placeholder="user@example.com"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium">Name</label>
            <Input
              value={form.name}
              onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
              placeholder="Optional display name"
            />
          </div>
          <div className="flex flex-col gap-2 pt-1">
            <label className="text-sm font-medium">Permissions</label>
            {[
              ["permDashboard", "Dashboard"],
              ["permChat", "Chat"],
              ["permApi", "API"],
            ].map(([key, label]) => (
              <label key={key} className="flex items-center gap-2 text-sm">
                <input
                  type="checkbox"
                  checked={!!form[key]}
                  onChange={(e) => setForm((f) => ({ ...f, [key]: e.target.checked }))}
                />
                {label}
              </label>
            ))}
          </div>
          <p className="text-xs text-text-muted">
            A random password will be generated. The user must change it on first login.
          </p>
          <Button type="submit" variant="primary" loading={saving}>
            Create user
          </Button>
        </form>
      </Modal>

      <Modal
        isOpen={!!editUser}
        title="Edit user"
        onClose={() => setEditUser(null)}
      >
        {editUser && (
          <form onSubmit={handleSaveEdit} className="flex flex-col gap-3">
            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium">Email</label>
              <Input value={editUser.email} disabled />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium">Name</label>
              <Input
                value={editUser.name || ""}
                onChange={(e) => setEditUser((u) => ({ ...u, name: e.target.value }))}
              />
            </div>
            <div className="flex flex-col gap-2 pt-1">
              <label className="text-sm font-medium">Permissions</label>
              {[
                ["permDashboard", "Dashboard"],
                ["permChat", "Chat"],
                ["permApi", "API"],
              ].map(([key, label]) => (
                <label key={key} className="flex items-center gap-2 text-sm">
                  <input
                    type="checkbox"
                    checked={!!editUser[key]}
                    onChange={(e) => setEditUser((u) => ({ ...u, [key]: e.target.checked }))}
                  />
                  {label}
                </label>
              ))}
            </div>
            <label className="flex items-center gap-2 text-sm">
              <input
                type="checkbox"
                checked={!!editUser.isBlocked}
                onChange={(e) => setEditUser((u) => ({ ...u, isBlocked: e.target.checked }))}
              />
              Blocked
            </label>
            <Button type="submit" variant="primary" loading={saving}>
              Save
            </Button>
          </form>
        )}
      </Modal>

      <Modal
        isOpen={!!passwordReveal}
        title={passwordReveal?.title || "Password"}
        onClose={() => setPasswordReveal(null)}
      >
        {passwordReveal && (
          <div className="flex flex-col gap-3">
            <p className="text-sm text-text-muted">
              Copy this password now. It will not be shown again.
            </p>
            <p className="text-sm">
              <span className="text-text-muted">Email: </span>
              <span className="font-medium">{passwordReveal.email}</span>
            </p>
            <code className="block p-3 rounded-lg bg-sidebar text-sm font-mono break-all select-all">
              {passwordReveal.plainPassword}
            </code>
            <Button
              variant="primary"
              icon="content_copy"
              onClick={() => {
                navigator.clipboard?.writeText(passwordReveal.plainPassword).catch(() => {});
              }}
            >
              Copy password
            </Button>
          </div>
        )}
      </Modal>

      <ConfirmModal
        isOpen={!!confirmState}
        onClose={() => setConfirmState(null)}
        onConfirm={confirmState?.onConfirm}
        title={confirmState?.title || ""}
        message={confirmState?.message || ""}
        confirmText="Confirm"
        cancelText="Cancel"
        variant="danger"
      />
    </div>
  );
}
