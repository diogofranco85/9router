"use client";

import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Button, Input, Modal } from "@/shared/components";

export default function ShareMessageModal({
  isOpen,
  onClose,
  message,
  sessionId,
  onShared,
}) {
  const [peers, setPeers] = useState([]);
  const [canShare, setCanShare] = useState(false);
  const [hint, setHint] = useState("");
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [toUserId, setToUserId] = useState("");
  const [note, setNote] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => {
    if (!isOpen) return;
    let cancelled = false;
    setError("");
    setSuccess("");
    setToUserId("");
    setNote("");
    setLoading(true);

    fetch("/api/chat/peers", { cache: "no-store" })
      .then(async (res) => {
        const data = await res.json().catch(() => ({}));
        if (!res.ok) throw new Error(data.error || "Failed to load users");
        if (cancelled) return;
        setPeers(data.peers || []);
        setCanShare(data.canShare !== false);
        setHint(data.hint || "");
        if ((data.peers || []).length === 1) setToUserId(data.peers[0].id);
      })
      .catch((err) => {
        if (!cancelled) setError(err.message);
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => { cancelled = true; };
  }, [isOpen]);

  const preview = typeof message?.content === "string"
    ? message.content.slice(0, 160)
    : "";

  const handleShare = async (e) => {
    e.preventDefault();
    if (!toUserId || !message?.id || !sessionId) return;
    setSaving(true);
    setError("");
    setSuccess("");
    try {
      const res = await fetch("/api/chat/share", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          toUserId,
          sourceSessionId: sessionId,
          messageId: message.id,
          note: note.trim() || null,
          contextLimit: 20,
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.error || "Failed to share");
      setSuccess("Shared. The recipient will see a new chat with this message and prior context.");
      onShared?.(data);
      setTimeout(() => onClose?.(), 900);
    } catch (err) {
      setError(err.message);
    } finally {
      setSaving(false);
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Share with user" size="md">
      <form onSubmit={handleShare} className="flex flex-col gap-3 p-1">
        <p className="text-xs text-text-muted">
          Sends this message plus up to 20 previous messages as a new chat the recipient can continue.
        </p>

        {preview && (
          <div className="rounded-lg border border-border bg-bg/60 p-3 text-xs text-text-muted line-clamp-3 whitespace-pre-wrap">
            {preview}
            {message.content?.length > 160 ? "…" : ""}
          </div>
        )}

        {loading ? (
          <p className="text-sm text-text-muted">Loading users…</p>
        ) : !canShare ? (
          <p className="text-sm text-amber-600 dark:text-amber-400">
            {hint || "Chat sharing requires a registered Access Control user."}
          </p>
        ) : peers.length === 0 ? (
          <p className="text-sm text-text-muted">
            No other users with chat access. Create them under Corporativo → Access Control.
          </p>
        ) : (
          <>
            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium">Recipient</label>
              <select
                className="rounded-lg border border-border bg-surface px-3 py-2 text-sm"
                value={toUserId}
                onChange={(e) => setToUserId(e.target.value)}
                required
              >
                <option value="">Select user…</option>
                {peers.map((p) => (
                  <option key={p.id} value={p.id}>
                    {p.name ? `${p.name} (${p.email})` : p.email}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium">Note (optional)</label>
              <Input
                value={note}
                onChange={(e) => setNote(e.target.value)}
                placeholder="Why you are sharing this…"
                maxLength={500}
              />
            </div>
          </>
        )}

        {error && <p className="text-xs text-red-500">{error}</p>}
        {success && <p className="text-xs text-green-600 dark:text-green-400">{success}</p>}

        <div className="flex justify-end gap-2 pt-1">
          <Button type="button" variant="ghost" onClick={onClose}>
            Cancel
          </Button>
          <Button
            type="submit"
            variant="primary"
            loading={saving}
            disabled={!canShare || !toUserId || peers.length === 0}
            icon="ios_share"
          >
            Share
          </Button>
        </div>
      </form>
    </Modal>
  );
}

ShareMessageModal.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  message: PropTypes.object,
  sessionId: PropTypes.string,
  onShared: PropTypes.func,
};
