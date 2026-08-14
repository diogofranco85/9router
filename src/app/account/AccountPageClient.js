"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { Card, Button, Input, Toggle, Modal } from "@/shared/components";
import { ConfirmModal } from "@/shared/components/Modal";

async function logout() {
  try {
    const res = await fetch("/api/auth/logout", { method: "POST" });
    if (res.ok) window.location.assign("/login");
  } catch {
    window.location.assign("/login");
  }
}

export default function AccountPageClient() {
  const [status, setStatus] = useState(null);
  const [keys, setKeys] = useState([]);
  const [error, setError] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [pwdSaving, setPwdSaving] = useState(false);
  const [pwdOk, setPwdOk] = useState(false);
  const [showAddKey, setShowAddKey] = useState(false);
  const [newKeyName, setNewKeyName] = useState("");
  const [createdKey, setCreatedKey] = useState(null);
  const [visibleKeys, setVisibleKeys] = useState(new Set());
  const [confirmState, setConfirmState] = useState(null);
  const [loading, setLoading] = useState(true);

  const load = useCallback(async () => {
    try {
      const [statusRes, keysRes] = await Promise.all([
        fetch("/api/auth/status", { cache: "no-store" }),
        fetch("/api/keys", { cache: "no-store" }),
      ]);
      if (statusRes.ok) setStatus(await statusRes.json());
      if (keysRes.ok) {
        const data = await keysRes.json();
        setKeys(data.keys || []);
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    load();
  }, [load]);

  const handleChangePassword = async (e) => {
    e.preventDefault();
    setError("");
    setPwdOk(false);
    if (newPassword !== confirmPassword) {
      setError("New passwords do not match");
      return;
    }
    setPwdSaving(true);
    try {
      const res = await fetch("/api/auth/change-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ currentPassword, newPassword }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.error || "Failed to change password");
      setCurrentPassword("");
      setNewPassword("");
      setConfirmPassword("");
      setPwdOk(true);
    } catch (err) {
      setError(err.message);
    } finally {
      setPwdSaving(false);
    }
  };

  const handleCreateKey = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const res = await fetch("/api/keys", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: newKeyName }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to create key");
      setShowAddKey(false);
      setNewKeyName("");
      setCreatedKey(data);
      await load();
    } catch (err) {
      setError(err.message);
    }
  };

  const handleToggleKey = async (id, isActive) => {
    try {
      const res = await fetch(`/api/keys/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ isActive }),
      });
      if (res.ok) {
        setKeys((prev) => prev.map((k) => (k.id === id ? { ...k, isActive } : k)));
      }
    } catch (err) {
      setError(err.message);
    }
  };

  const maskKey = (fullKey) => {
    if (!fullKey || fullKey.length <= 10) return fullKey || "";
    return fullKey.slice(0, 6) + "•".repeat(fullKey.length - 10) + fullKey.slice(-4);
  };

  if (loading) {
    return (
      <div className="flex min-h-dvh items-center justify-center bg-bg">
        <div className="inline-block h-8 w-8 animate-spin rounded-full border-b-2 border-primary" />
      </div>
    );
  }

  const canCreateKeys = !status?.userId || status?.permissions?.api !== false;
  const showDashboard = status?.permissions?.dashboard !== false || status?.isLegacyAdmin;
  const showChat = status?.permissions?.chat !== false || status?.isLegacyAdmin;

  return (
    <div className="min-h-dvh bg-bg">
      <header className="flex items-center justify-between gap-3 border-b border-border-subtle px-4 py-3">
        <div className="flex items-center gap-3">
          <Link href={showDashboard ? "/dashboard" : showChat ? "/chat" : "/account"} className="text-lg font-bold text-primary">
            9Router
          </Link>
          <span className="text-sm text-text-muted">Account</span>
        </div>
        <div className="flex items-center gap-1">
          {showChat && (
            <Link
              href="/chat"
              className="inline-flex items-center gap-1.5 rounded-[10px] px-3 py-2 text-sm text-text-muted transition hover:bg-surface-2 hover:text-text-main"
            >
              <span className="material-symbols-outlined text-[18px]">forum</span>
              <span className="hidden sm:inline">Chat</span>
            </Link>
          )}
          {showDashboard && (
            <Link
              href="/dashboard"
              className="inline-flex items-center gap-1.5 rounded-[10px] px-3 py-2 text-sm text-text-muted transition hover:bg-surface-2 hover:text-text-main"
            >
              <span className="material-symbols-outlined text-[18px]">dashboard</span>
              <span className="hidden sm:inline">Dashboard</span>
            </Link>
          )}
          <button
            type="button"
            onClick={logout}
            className="inline-flex items-center gap-1.5 rounded-[10px] px-3 py-2 text-sm text-text-muted transition hover:bg-red-500/10 hover:text-red-500"
            title="Logout"
          >
            <span className="material-symbols-outlined text-[18px]">logout</span>
            <span className="hidden sm:inline">Logout</span>
          </button>
        </div>
      </header>

      <div className="mx-auto flex max-w-2xl flex-col gap-6 p-6">
        {error && (
          <div className="rounded-lg border border-red-500/30 bg-red-500/10 px-3 py-2 text-sm text-red-600 dark:text-red-400">
            {error}
          </div>
        )}

        <Card>
          <h2 className="mb-1 text-lg font-semibold">Account</h2>
          <p className="mb-4 text-sm text-text-muted">
            {status?.email || status?.displayName || "Signed in"}
            {status?.isLegacyAdmin ? " · Shared admin" : ""}
          </p>
          {status?.permissions && (
            <p className="mb-4 text-xs text-text-muted">
              Permissions:{" "}
              {[
                status.permissions.dashboard && "Dashboard",
                status.permissions.chat && "Chat",
                status.permissions.api && "API",
              ].filter(Boolean).join(" · ") || "None"}
            </p>
          )}

          <form onSubmit={handleChangePassword} className="flex flex-col gap-3">
            <h3 className="text-sm font-semibold">Change password</h3>
            <Input
              type="password"
              placeholder="Current password"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
              required
            />
            <Input
              type="password"
              placeholder="New password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
              minLength={6}
            />
            <Input
              type="password"
              placeholder="Confirm new password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              minLength={6}
            />
            {pwdOk && <p className="text-xs text-green-600 dark:text-green-400">Password updated</p>}
            <Button type="submit" variant="primary" loading={pwdSaving}>
              Update password
            </Button>
          </form>
        </Card>

        <Card>
          <div className="mb-4 flex items-center justify-between gap-3">
            <div>
              <h2 className="text-lg font-semibold">API keys</h2>
              <p className="text-sm text-text-muted">
                Use these keys in IDEs. Keys cannot be deleted — only disabled.
              </p>
            </div>
            {canCreateKeys && (
              <Button icon="add" onClick={() => setShowAddKey(true)}>
                Create key
              </Button>
            )}
          </div>

          {!canCreateKeys && (
            <p className="mb-3 text-sm text-amber-600 dark:text-amber-400">
              Your account does not have API permission.
            </p>
          )}

          {keys.length === 0 ? (
            <p className="py-6 text-center text-sm text-text-muted">No API keys yet</p>
          ) : (
            <div className="flex flex-col divide-y divide-border-subtle">
              {keys.map((key) => (
                <div
                  key={key.id}
                  className={`flex items-center justify-between gap-3 py-3 ${key.isActive === false ? "opacity-60" : ""}`}
                >
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-medium">{key.name}</p>
                    <code className="font-mono text-xs text-text-muted">
                      {visibleKeys.has(key.id) ? key.key : maskKey(key.key)}
                    </code>
                    <div className="mt-1 flex gap-2">
                      <button
                        type="button"
                        className="text-xs text-primary"
                        onClick={() => {
                          setVisibleKeys((prev) => {
                            const next = new Set(prev);
                            if (next.has(key.id)) next.delete(key.id);
                            else next.add(key.id);
                            return next;
                          });
                        }}
                      >
                        {visibleKeys.has(key.id) ? "Hide" : "Show"}
                      </button>
                      <button
                        type="button"
                        className="text-xs text-primary"
                        onClick={() => navigator.clipboard?.writeText(key.key).catch(() => {})}
                      >
                        Copy
                      </button>
                    </div>
                  </div>
                  <Toggle
                    size="sm"
                    checked={key.isActive ?? true}
                    onChange={(checked) => {
                      if (key.isActive && !checked) {
                        setConfirmState({
                          title: "Disable API key",
                          message: `Disable "${key.name}"? It will stop working until re-enabled.`,
                          onConfirm: () => {
                            setConfirmState(null);
                            handleToggleKey(key.id, false);
                          },
                        });
                      } else {
                        handleToggleKey(key.id, checked);
                      }
                    }}
                  />
                </div>
              ))}
            </div>
          )}
        </Card>

        <Modal isOpen={showAddKey} title="Create API key" onClose={() => setShowAddKey(false)}>
          <form onSubmit={handleCreateKey} className="flex flex-col gap-3">
            <Input
              placeholder="Key name"
              value={newKeyName}
              onChange={(e) => setNewKeyName(e.target.value)}
              required
            />
            <Button type="submit" variant="primary" disabled={!newKeyName.trim()}>
              Create
            </Button>
          </form>
        </Modal>

        <Modal isOpen={!!createdKey} title="API key created" onClose={() => setCreatedKey(null)}>
          {createdKey && (
            <div className="flex flex-col gap-3">
              <p className="text-sm text-text-muted">Copy this key now. Store it securely.</p>
              <code className="block break-all rounded-lg bg-sidebar p-3 font-mono text-sm select-all">
                {createdKey.key}
              </code>
              <Button
                variant="primary"
                icon="content_copy"
                onClick={() => navigator.clipboard?.writeText(createdKey.key).catch(() => {})}
              >
                Copy key
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
          confirmText="Disable"
          cancelText="Cancel"
          variant="danger"
        />
      </div>
    </div>
  );
}
