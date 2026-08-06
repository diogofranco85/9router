"use client";

import { useEffect, useState } from "react";
import { Card, Button, Input } from "@/shared/components";

export default function ChangePasswordPage() {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [checking, setChecking] = useState(true);
  const [email, setEmail] = useState("");

  useEffect(() => {
    fetch("/api/auth/status", { cache: "no-store" })
      .then((res) => res.json())
      .then((data) => {
        if (!data.authenticated) {
          window.location.assign("/login");
          return;
        }
        if (!data.mustChangePassword) {
          window.location.assign(data.permissions?.dashboard ? "/dashboard" : "/chat");
          return;
        }
        setEmail(data.email || "");
        setChecking(false);
      })
      .catch(() => {
        window.location.assign("/login");
      });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    if (newPassword !== confirmPassword) {
      setError("New passwords do not match");
      return;
    }
    if (newPassword.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }
    setLoading(true);
    try {
      const res = await fetch("/api/auth/change-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ currentPassword, newPassword }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.error || "Failed to change password");

      const statusRes = await fetch("/api/auth/status", { cache: "no-store" });
      const status = statusRes.ok ? await statusRes.json() : {};
      if (status.permissions?.dashboard) {
        window.location.assign("/dashboard");
      } else if (status.permissions?.chat) {
        window.location.assign("/chat");
      } else {
        window.location.assign("/account");
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  if (checking) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-bg">
        <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-primary" />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-bg p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-primary mb-2">9Router</h1>
          <p className="text-text-muted">You must set a new password before continuing</p>
          {email && <p className="text-sm text-text-muted mt-1">{email}</p>}
        </div>
        <Card>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium">Temporary password</label>
              <Input
                type="password"
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
                required
                autoFocus
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium">New password</label>
              <Input
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                required
                minLength={6}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium">Confirm new password</label>
              <Input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                minLength={6}
              />
            </div>
            {error && <p className="text-xs text-red-500">{error}</p>}
            <Button type="submit" variant="primary" className="w-full" loading={loading}>
              Set new password
            </Button>
            <Button
              type="button"
              variant="ghost"
              className="w-full text-red-500 hover:bg-red-500/10"
              icon="logout"
              onClick={async () => {
                try {
                  const res = await fetch("/api/auth/logout", { method: "POST" });
                  if (res.ok) window.location.assign("/login");
                } catch {
                  window.location.assign("/login");
                }
              }}
            >
              Logout
            </Button>
          </form>
        </Card>
      </div>
    </div>
  );
}
