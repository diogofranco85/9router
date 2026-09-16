"use client";

import Link from "next/link";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { cn } from "@/shared/utils/cn";
import { APP_CONFIG } from "@/shared/constants/config";
import MarkdownMessage from "./MarkdownMessage";
import ShareMessageModal from "./ShareMessageModal";
import { getModelsByProviderId } from "@/shared/constants/models";
import {
  isAnthropicCompatibleProvider,
  isOpenAICompatibleProvider,
} from "@/shared/constants/providers";

const STORAGE_KEYS = {
  sessions: "chat.sessions",
  activeSessionId: "chat.activeSessionId",
  draft: "chat.draft",
  selectedModelId: "chat.selectedModelId",
  sidebarOpen: "chat.sidebarOpen",
  migrated: "chat.migratedToDb",
};

function createId() {
  if (globalThis.crypto?.randomUUID) return globalThis.crypto.randomUUID();
  return `chat_${Date.now()}_${Math.random().toString(16).slice(2)}`;
}

function safeParse(value, fallback) {
  try {
    return JSON.parse(value);
  } catch {
    return fallback;
  }
}

async function apiJson(url, options = {}) {
  const response = await fetch(url, {
    cache: "no-store",
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...(options.headers || {}),
    },
  });
  const data = await response.json().catch(() => ({}));
  if (!response.ok) {
    throw new Error(data.error || data.message || `Request failed (${response.status})`);
  }
  return data;
}

async function persistSession(session) {
  if (!session?.id) return null;
  return apiJson(`/api/chat/sessions/${session.id}`, {
    method: "PUT",
    body: JSON.stringify({
      title: session.title,
      mode: session.mode,
      requestModel: session.requestModel,
      modelLabel: session.modelLabel,
      messages: session.messages || [],
      createdAt: session.createdAt,
      updatedAt: session.updatedAt,
    }),
  });
}

function textValue(value) {
  if (typeof value === "string") return value;
  if (value == null) return "";
  if (Array.isArray(value)) return value.map(textValue).filter(Boolean).join(" ");
  if (typeof value === "object") {
    if (typeof value.message === "string") return value.message;
    if (typeof value.error === "string") return value.error;
    try {
      return JSON.stringify(value);
    } catch {
      return String(value);
    }
  }
  return String(value);
}

function humanize(value = "") {
  return String(value)
    .replace(/[-_]/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase())
    .trim() || "Unknown";
}

function makeSessionTitle(text = "") {
  const normalized = textValue(text).replace(/\s+/g, " ").trim();
  if (!normalized) return "New chat";
  return normalized.length > 52 ? `${normalized.slice(0, 52).trimEnd()}…` : normalized;
}

function buildUserContent(message) {
  const text = textValue(message.content).trim();
  const attachments = Array.isArray(message.attachments) ? message.attachments : [];
  if (attachments.length === 0) return text;

  const content = [];
  if (text) content.push({ type: "text", text });
  for (const attachment of attachments) {
    if (attachment?.dataUrl) {
      content.push({ type: "image_url", image_url: { url: attachment.dataUrl } });
    }
  }
  return content.length > 0 ? content : text;
}

function readAssistantText(chunk) {
  if (!chunk || typeof chunk !== "object") return "";
  const choice = chunk.choices?.[0];
  const delta = choice?.delta || {};
  const pieces = [delta.content, choice?.message?.content, chunk.output_text, chunk.text]
    .map(textValue)
    .filter(Boolean);
  return pieces[0] || "";
}

async function fileToDataUrl(file) {
  return await new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result || ""));
    reader.onerror = () => reject(reader.error || new Error("Failed to read file"));
    reader.readAsDataURL(file);
  });
}

function cloneSession(session) {
  return {
    ...session,
    messages: Array.isArray(session.messages) ? session.messages.map((m) => ({ ...m })) : [],
  };
}

function getProviderLabel(connection) {
  return connection?.name || humanize(connection?.provider || connection?.id || "provider");
}

function normalizeStaticModel(model, connection) {
  if (!model?.id) return null;
  return {
    id: `${connection.provider}/${model.id}`,
    requestModel: `${connection.provider}/${model.id}`,
    name: model.name || model.id,
    providerId: connection.provider,
  };
}

function normalizeLiveModel(model, connection) {
  const rawId = typeof model === "string" ? model : model?.id || model?.name || model?.model || "";
  if (!rawId) return null;
  const displayName = typeof model === "string"
    ? model
    : model?.name || model?.displayName || rawId;
  let requestModel = rawId;
  const isCompatible =
    isOpenAICompatibleProvider(connection.provider) ||
    isAnthropicCompatibleProvider(connection.provider);
  if (isCompatible && !rawId.includes("/")) {
    requestModel = `${connection.provider}/${rawId}`;
  }
  return {
    id: requestModel,
    requestModel,
    name: displayName,
    providerId: connection.provider,
  };
}

function parseProviderModelsPayload(data) {
  if (Array.isArray(data?.models)) return data.models;
  if (Array.isArray(data?.data)) return data.data;
  if (Array.isArray(data?.results)) return data.results;
  if (Array.isArray(data)) return data;
  return [];
}

function dedupeModels(models) {
  const map = new Map();
  for (const model of models) {
    if (!model?.id) continue;
    if (!map.has(model.id)) map.set(model.id, model);
  }
  return Array.from(map.values());
}

function ThinkingIndicator() {
  return (
    <span className="flex items-center gap-2 py-1" role="status" aria-label="Waiting for response">
      <span className="material-symbols-outlined animate-spin text-[20px] text-[var(--chat-accent)]">
        progress_activity
      </span>
      <span className="text-[13px] text-[var(--chat-muted)]">Pensando…</span>
    </span>
  );
}

function emptySession(overrides = {}) {
  const now = new Date().toISOString();
  return {
    id: createId(),
    title: "New chat",
    createdAt: now,
    updatedAt: now,
    messages: [],
    requestModel: "",
    modelLabel: "",
    mode: "provider",
    ...overrides,
  };
}

export default function ChatPageClient() {
  const [isHydrated, setIsHydrated] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [sessions, setSessions] = useState([]);
  const [activeSessionId, setActiveSessionId] = useState("");
  const [draft, setDraft] = useState("");
  const [attachments, setAttachments] = useState([]);
  const [isSending, setIsSending] = useState(false);
  const [streamingMessageId, setStreamingMessageId] = useState("");
  const [streamingText, setStreamingText] = useState("");
  const [loadError, setLoadError] = useState("");
  const [loadingData, setLoadingData] = useState(true);

  const [connections, setConnections] = useState([]);
  const [providerGroups, setProviderGroups] = useState([]);
  const [selectedModelId, setSelectedModelId] = useState("");
  const [modelMenuOpen, setModelMenuOpen] = useState(false);
  const [shareTarget, setShareTarget] = useState(null);
  const [currentUserId, setCurrentUserId] = useState(null);
  const [unreadShareCount, setUnreadShareCount] = useState(0);

  const fileInputRef = useRef(null);
  const abortRef = useRef(null);
  const messagesEndRef = useRef(null);
  const textareaRef = useRef(null);
  const modelMenuRef = useRef(null);

  useEffect(() => {
    let cancelled = false;

    async function hydrate() {
      try {
        setDraft(globalThis.localStorage.getItem(STORAGE_KEYS.draft) || "");
        setSelectedModelId(globalThis.localStorage.getItem(STORAGE_KEYS.selectedModelId) || "");
        const savedSidebar = globalThis.localStorage.getItem(STORAGE_KEYS.sidebarOpen);
        if (savedSidebar != null) setSidebarOpen(savedSidebar !== "false");
        setActiveSessionId(globalThis.localStorage.getItem(STORAGE_KEYS.activeSessionId) || "");
      } catch {
        // ignore prefs read errors
      }

      try {
        let data = await apiJson("/api/chat/sessions");
        let sessionsList = Array.isArray(data.sessions) ? data.sessions : [];

        const alreadyMigrated = globalThis.localStorage.getItem(STORAGE_KEYS.migrated) === "1";
        const localSessions = safeParse(globalThis.localStorage.getItem(STORAGE_KEYS.sessions), []);
        if (
          !alreadyMigrated
          && sessionsList.length === 0
          && Array.isArray(localSessions)
          && localSessions.length > 0
        ) {
          data = await apiJson("/api/chat/sessions", {
            method: "POST",
            body: JSON.stringify({ import: true, sessions: localSessions }),
          });
          sessionsList = Array.isArray(data.sessions) ? data.sessions : [];
          try {
            globalThis.localStorage.setItem(STORAGE_KEYS.migrated, "1");
            globalThis.localStorage.removeItem(STORAGE_KEYS.sessions);
          } catch {
            // ignore
          }
        } else if (!alreadyMigrated) {
          try {
            globalThis.localStorage.setItem(STORAGE_KEYS.migrated, "1");
            globalThis.localStorage.removeItem(STORAGE_KEYS.sessions);
          } catch {
            // ignore
          }
        }

        if (cancelled) return;

        if (sessionsList.length === 0) {
          const created = await apiJson("/api/chat/sessions", {
            method: "POST",
            body: JSON.stringify(emptySession()),
          });
          sessionsList = [created];
        }

        setSessions(sessionsList.map((s) => ({
          ...s,
          messages: Array.isArray(s.messages) ? s.messages : [],
        })));
        if (data.userId) setCurrentUserId(data.userId);
        const preferred = globalThis.localStorage.getItem(STORAGE_KEYS.activeSessionId) || "";
        const active = sessionsList.find((s) => s.id === preferred) || sessionsList[0];
        setActiveSessionId(active?.id || "");

        if (data.userId) {
          try {
            const shareData = await apiJson("/api/chat/share?unread=1");
            if (!cancelled) setUnreadShareCount(Array.isArray(shareData.shares) ? shareData.shares.length : 0);
          } catch {
            // ignore
          }
        }
      } catch (error) {
        if (!cancelled) {
          setLoadError(textValue(error?.message) || "Failed to load chat history.");
          const fallback = emptySession();
          setSessions([fallback]);
          setActiveSessionId(fallback.id);
        }
      } finally {
        if (!cancelled) setIsHydrated(true);
      }
    }

    hydrate();
    return () => { cancelled = true; };
  }, []);

  useEffect(() => {
    let cancelled = false;

    async function loadData() {
      setLoadingData(true);
      setLoadError("");
      try {
        const providersRes = await fetch("/api/providers", { cache: "no-store" });
        const providersData = await providersRes.json().catch(() => ({}));

        const active = Array.isArray(providersData.connections)
          ? providersData.connections.filter((c) => c?.isActive !== false)
          : [];

        if (cancelled) return;
        setConnections(active);

        if (active.length === 0) {
          setProviderGroups([]);
          return;
        }

        const providerMap = new Map();
        for (const connection of active) {
          const providerId = connection.provider || connection.id;
          if (!providerMap.has(providerId)) {
            providerMap.set(providerId, {
              providerId,
              providerName: getProviderLabel(connection),
              connections: [],
              models: [],
            });
          }
          const group = providerMap.get(providerId);
          group.connections.push(connection);
          group.models.push(
            ...getModelsByProviderId(providerId)
              .map((m) => normalizeStaticModel(m, connection))
              .filter(Boolean),
          );
        }

        const liveResults = await Promise.all(
          active.map(async (connection) => {
            try {
              const response = await fetch(`/api/providers/${connection.id}/models`, { cache: "no-store" });
              const data = await response.json().catch(() => ({}));
              if (!response.ok) return { connection, models: [] };
              return {
                connection,
                models: parseProviderModelsPayload(data)
                  .map((m) => normalizeLiveModel(m, connection))
                  .filter(Boolean),
              };
            } catch {
              return { connection, models: [] };
            }
          }),
        );

        for (const result of liveResults) {
          const providerId = result.connection.provider || result.connection.id;
          const group = providerMap.get(providerId);
          if (!group) continue;
          group.models.push(...result.models);
        }

        const normalized = Array.from(providerMap.values())
          .map((group) => ({
            ...group,
            models: dedupeModels(group.models).sort((a, b) => a.name.localeCompare(b.name)),
          }))
          .filter((g) => g.models.length > 0)
          .sort((a, b) => a.providerName.localeCompare(b.providerName));

        if (!cancelled) setProviderGroups(normalized);
      } catch (error) {
        if (!cancelled) {
          setLoadError(textValue(error?.message) || "Failed to load providers.");
          setProviderGroups([]);
        }
      } finally {
        if (!cancelled) setLoadingData(false);
      }
    }

    loadData();
    return () => { cancelled = true; };
  }, []);

  useEffect(() => {
    if (!isHydrated) return;
    try {
      globalThis.localStorage.setItem(STORAGE_KEYS.activeSessionId, activeSessionId);
      globalThis.localStorage.setItem(STORAGE_KEYS.draft, draft);
      globalThis.localStorage.setItem(STORAGE_KEYS.sidebarOpen, String(sidebarOpen));
    } catch {
      // ignore
    }
  }, [isHydrated, activeSessionId, draft, sidebarOpen]);

  const allModels = useMemo(
    () => providerGroups.flatMap((group) =>
      group.models.map((model) => ({
        ...model,
        providerName: group.providerName,
        value: model.id,
        label: `${group.providerName} · ${model.name}`,
      })),
    ),
    [providerGroups],
  );

  const selectedModel = useMemo(
    () => allModels.find((m) => m.id === selectedModelId) || allModels[0] || null,
    [allModels, selectedModelId],
  );

  useEffect(() => {
    if (!isHydrated) return;
    try {
      globalThis.localStorage.setItem(
        STORAGE_KEYS.selectedModelId,
        selectedModel?.id || selectedModelId || "",
      );
    } catch {
      // ignore
    }
  }, [isHydrated, selectedModel?.id, selectedModelId]);

  const requestModel = selectedModel?.requestModel || "";
  const modelLabel = selectedModel?.name || "Selecionar modelo";
  const modelProviderLabel = selectedModel?.providerName || "";

  useEffect(() => {
    if (!modelMenuOpen) return undefined;
    const onPointerDown = (event) => {
      if (!modelMenuRef.current?.contains(event.target)) {
        setModelMenuOpen(false);
      }
    };
    const onKeyDown = (event) => {
      if (event.key === "Escape") setModelMenuOpen(false);
    };
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [modelMenuOpen]);

  useEffect(() => {
    // sessions are created during hydrate; keep active id in sync if list changes
    if (!isHydrated || sessions.length === 0) return;
    if (!sessions.some((s) => s.id === activeSessionId)) {
      setActiveSessionId(sessions[0].id);
    }
  }, [isHydrated, sessions, activeSessionId]);

  const currentSession = useMemo(
    () => sessions.find((s) => s.id === activeSessionId) || null,
    [sessions, activeSessionId],
  );
  const currentMessages = currentSession?.messages || [];
  const sessionItems = useMemo(
    () => [...sessions].sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt)),
    [sessions],
  );

  const canSend = !isSending && !!requestModel && (draft.trim().length > 0 || attachments.length > 0);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [currentMessages, streamingText]);

  // Mark inbound shares as read when opening the shared session
  useEffect(() => {
    if (!currentUserId || !currentSession?.sharedFromUserId || !currentSession?.id) return;
    let cancelled = false;
    (async () => {
      try {
        const data = await apiJson("/api/chat/share");
        const shares = Array.isArray(data.shares) ? data.shares : [];
        const unread = shares.filter(
          (s) => s.targetSessionId === currentSession.id && !s.readAt,
        );
        for (const s of unread) {
          await fetch(`/api/chat/share/${s.id}/read`, { method: "POST" });
        }
        if (!cancelled && unread.length > 0) {
          setUnreadShareCount((n) => Math.max(0, n - unread.length));
        }
      } catch {
        // ignore
      }
    })();
    return () => { cancelled = true; };
  }, [currentUserId, currentSession?.id, currentSession?.sharedFromUserId]);

  const updateSession = useCallback((sessionId, updater) => {
    setSessions((prev) => prev.map((session) => (
      session.id === sessionId ? updater(cloneSession(session)) : session
    )));
  }, []);

  const saveSessionSnapshot = useCallback(async (sessionId, snapshot) => {
    try {
      const saved = await persistSession(snapshot);
      if (saved?.id) {
        setSessions((prev) => prev.map((s) => (s.id === saved.id ? {
          ...saved,
          messages: Array.isArray(saved.messages) ? saved.messages : [],
        } : s)));
      }
    } catch (error) {
      setLoadError(textValue(error?.message) || "Failed to save chat.");
    }
  }, []);

  const createNewChat = async () => {
    try {
      const created = await apiJson("/api/chat/sessions", {
        method: "POST",
        body: JSON.stringify(emptySession({
          requestModel,
          modelLabel,
        })),
      });
      setSessions((prev) => [created, ...prev]);
      setActiveSessionId(created.id);
      setDraft("");
      setAttachments([]);
      setLoadError("");
    } catch (error) {
      setLoadError(textValue(error?.message) || "Failed to create chat.");
    }
  };

  const deleteSession = async (sessionId) => {
    try {
      await apiJson(`/api/chat/sessions/${sessionId}`, { method: "DELETE" });
    } catch {
      // continue local removal even if already gone
    }

    setSessions((prev) => {
      const next = prev.filter((s) => s.id !== sessionId);
      if (sessionId !== activeSessionId) return next;

      if (next.length === 0) {
        const fresh = emptySession({ requestModel, modelLabel });
        apiJson("/api/chat/sessions", {
          method: "POST",
          body: JSON.stringify(fresh),
        }).then((created) => {
          setSessions([created]);
          setActiveSessionId(created.id);
        }).catch((error) => {
          setLoadError(textValue(error?.message) || "Failed to create chat.");
          setSessions([fresh]);
          setActiveSessionId(fresh.id);
        });
        return [];
      }
      setActiveSessionId(next[0].id);
      return next;
    });
  };

  const handleStop = () => {
    abortRef.current?.abort();
  };

  const handleFiles = async (event) => {
    const files = Array.from(event.target.files || []);
    if (fileInputRef.current) fileInputRef.current.value = "";
    if (!files.length) return;
    try {
      const next = [];
      for (const file of files) {
        if (!file.type.startsWith("image/")) continue;
        const dataUrl = await fileToDataUrl(file);
        next.push({
          id: createId(),
          name: file.name,
          type: file.type,
          dataUrl,
        });
      }
      if (next.length) setAttachments((prev) => [...prev, ...next]);
    } catch (error) {
      setLoadError(textValue(error?.message) || "Failed to attach image.");
    }
  };

  const sendMessage = async () => {
    if (!canSend) return;
    const userText = draft.trim();
    let sessionId = activeSessionId;
    let session = sessions.find((s) => s.id === sessionId);
    if (!session) {
      try {
        session = await apiJson("/api/chat/sessions", {
          method: "POST",
          body: JSON.stringify(emptySession({ requestModel, modelLabel })),
        });
        sessionId = session.id;
        setSessions((prev) => [session, ...prev]);
        setActiveSessionId(sessionId);
      } catch (error) {
        setLoadError(textValue(error?.message) || "Failed to create chat.");
        return;
      }
    }

    const userMessage = {
      id: createId(),
      role: "user",
      content: userText,
      attachments: attachments.map((a) => ({
        id: a.id,
        name: a.name,
        type: a.type,
        dataUrl: a.dataUrl,
      })),
      createdAt: new Date().toISOString(),
    };
    const assistantMessageId = createId();
    const assistantMessage = {
      id: assistantMessageId,
      role: "assistant",
      content: "",
      createdAt: new Date().toISOString(),
      status: "streaming",
    };

    const nextMessages = [...(session.messages || []), userMessage, assistantMessage];
    const pendingSession = {
      ...session,
      mode: "provider",
      requestModel,
      modelLabel,
      messages: nextMessages,
      updatedAt: new Date().toISOString(),
      title: session.title === "New chat" ? makeSessionTitle(userText) : session.title,
    };
    setSessions((prev) => prev.map((item) => (item.id === sessionId ? pendingSession : item)));
    setDraft("");
    setAttachments([]);
    setIsSending(true);
    setStreamingMessageId(assistantMessageId);
    setStreamingText("");
    setLoadError("");
    abortRef.current?.abort();
    abortRef.current = new AbortController();

    // Persist user + assistant stub before streaming tokens
    void saveSessionSnapshot(sessionId, pendingSession);

    const requestMessages = nextMessages
      .filter((m) => !(m.role === "assistant" && m.id === assistantMessageId))
      .map((m) => ({
        role: m.role,
        content: m.role === "user" ? buildUserContent(m) : m.content,
      }));

    const finalizeAndPersist = (content, status) => {
      let snapshot = null;
      updateSession(sessionId, (current) => {
        const currentMsg = current.messages.find((m) => m.id === assistantMessageId);
        const nextContent = content != null && content !== ""
          ? content
          : (currentMsg?.content || "");
        snapshot = {
          ...current,
          messages: current.messages.map((m) => (
            m.id === assistantMessageId
              ? { ...m, content: nextContent, status }
              : m
          )),
          updatedAt: new Date().toISOString(),
          title: current.title === "New chat" ? makeSessionTitle(userText) : current.title,
        };
        return snapshot;
      });
      if (snapshot) void saveSessionSnapshot(sessionId, snapshot);
    };

    let assistantText = "";

    try {
      const response = await fetch("/api/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "text/event-stream",
        },
        body: JSON.stringify({
          model: requestModel,
          messages: requestMessages,
          stream: true,
        }),
        signal: abortRef.current.signal,
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(textValue(errorData.error || errorData.message || `Request failed (${response.status})`));
      }

      const reader = response.body?.getReader();
      if (!reader) {
        const data = await response.json().catch(() => ({}));
        const fallbackText = textValue(
          data?.choices?.[0]?.message?.content || data?.output_text || data?.error || data?.message || "",
        );
        finalizeAndPersist(fallbackText, "done");
        return;
      }

      const decoder = new TextDecoder();
      let buffer = "";

      while (true) {
        const { value, done } = await reader.read();
        if (done) break;
        buffer += decoder.decode(value, { stream: true });
        const lines = buffer.split(/\r?\n/);
        buffer = lines.pop() || "";

        for (const line of lines) {
          const trimmed = line.trim();
          if (!trimmed.startsWith("data:")) continue;
          const payload = trimmed.slice(5).trim();
          if (!payload || payload === "[DONE]") continue;
          try {
            const chunk = JSON.parse(payload);
            const text = readAssistantText(chunk);
            if (!text) continue;
            assistantText += text;
            setStreamingText(assistantText);
            updateSession(sessionId, (current) => ({
              ...current,
              messages: current.messages.map((m) => (
                m.id === assistantMessageId
                  ? { ...m, content: assistantText, status: "streaming" }
                  : m
              )),
              updatedAt: new Date().toISOString(),
            }));
          } catch {
            // ignore malformed chunks
          }
        }
      }

      finalizeAndPersist(assistantText, "done");
    } catch (error) {
      if (error.name !== "AbortError") {
        const errorText = textValue(error?.message || error);
        const content = assistantText
          ? `${assistantText}\n\nError: ${errorText}`
          : `Error: ${errorText}`;
        finalizeAndPersist(content, "error");
        setLoadError(errorText || "Failed to send message.");
      } else {
        finalizeAndPersist(assistantText || "(stopped)", "done");
      }
    } finally {
      setIsSending(false);
      setStreamingMessageId("");
      setStreamingText("");
      abortRef.current = null;
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      if (canSend) sendMessage();
    }
  };

  const handleCopyMessage = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      // ignore
    }
  };

  const lastShareableMessage = useMemo(() => {
    if (!currentUserId) return null;
    for (let i = currentMessages.length - 1; i >= 0; i--) {
      const m = currentMessages[i];
      if (m?.id && textValue(m.content) && m.status !== "streaming") return m;
    }
    return null;
  }, [currentMessages, currentUserId]);

  return (
    <div className="flex h-full w-full">
      {/* Sidebar */}
      <aside
        className={cn(
          "flex shrink-0 flex-col transition-all duration-200 min-h-full",
          "bg-[var(--chat-sidebar)]",
          sidebarOpen ? "w-[280px]" : "w-0 overflow-hidden",
        )}
      >
        <div className="flex items-center justify-between px-4 pt-5 pb-3">
          <Link href="/chat" className="text-[17px] font-semibold tracking-tight text-[var(--chat-text)]">
            {APP_CONFIG.name}
          </Link>
          <button
            type="button"
            className="rounded-lg p-1.5 text-[var(--chat-muted)] hover:bg-[var(--chat-sidebar-hover)] hover:text-[var(--chat-text)] lg:hidden"
            onClick={() => setSidebarOpen(false)}
            aria-label="Close sidebar"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        <div className="px-3 pb-3 space-y-0.5">
          <button
            type="button"
            onClick={createNewChat}
            className="flex w-full items-center gap-2.5 rounded-xl px-3 py-2 text-[13.5px] font-medium text-[var(--chat-text)] transition-colors hover:bg-[var(--chat-sidebar-hover)]"
          >
            <span className="material-symbols-outlined text-[18px]">add</span>
            New Chat
          </button>
          <Link
            href="/account"
            className="flex w-full items-center gap-2.5 rounded-xl px-3 py-2 text-[13.5px] font-medium text-[var(--chat-muted)] transition-colors hover:bg-[var(--chat-sidebar-hover)] hover:text-[var(--chat-text)]"
          >
            <span className="material-symbols-outlined text-[18px]">tune</span>
            Conta
          </Link>
        </div>

        <nav className="flex-1 overflow-y-auto custom-scrollbar px-2 pb-2">
          <p className="px-3 mb-1.5 mt-2 text-[11px] font-medium text-[var(--chat-muted)]">
            Conversas
            {unreadShareCount > 0 ? ` · ${unreadShareCount} novo(s)` : ""}
          </p>
          {sessionItems.map((session) => {
            const active = session.id === activeSessionId;
            const isShared = !!session.sharedFromUserId;
            return (
              <div
                key={session.id}
                className={cn(
                  "group relative flex items-center gap-1 rounded-xl mx-1 mb-0.5 transition-colors",
                  active
                    ? "bg-[var(--chat-active)] text-[var(--chat-text)]"
                    : "text-[var(--chat-muted)] hover:bg-[var(--chat-sidebar-hover)] hover:text-[var(--chat-text)]",
                )}
              >
                {active && (
                  <span className="absolute left-0 top-1/2 h-5 w-[3px] -translate-y-1/2 rounded-r bg-[var(--chat-accent)]" />
                )}
                <button
                  type="button"
                  className="min-w-0 flex-1 px-3 py-2 text-left"
                  onClick={() => setActiveSessionId(session.id)}
                >
                  <span className="block truncate text-[13.5px] font-medium leading-snug">
                    {isShared ? "↗ " : ""}
                    {session.title || "New chat"}
                  </span>
                </button>
                <button
                  type="button"
                  className="mr-1 invisible rounded-md p-1 text-[var(--chat-muted)] hover:text-red-500 group-hover:visible"
                  onClick={() => deleteSession(session.id)}
                  aria-label="Delete chat"
                >
                  <span className="material-symbols-outlined text-[15px]">close</span>
                </button>
              </div>
            );
          })}
        </nav>

        <div className="mt-auto border-t border-[var(--chat-border)] px-3 py-3 space-y-0.5">
          <Link
            href="/dashboard"
            className="flex items-center gap-2.5 rounded-xl px-3 py-2 text-[13px] text-[var(--chat-muted)] hover:bg-[var(--chat-sidebar-hover)] hover:text-[var(--chat-text)]"
          >
            <span className="material-symbols-outlined text-[18px]">dashboard</span>
            Dashboard
          </Link>
          <button
            type="button"
            onClick={async () => {
              try {
                const res = await fetch("/api/auth/logout", { method: "POST" });
                if (res.ok) window.location.assign("/login");
              } catch {
                window.location.assign("/login");
              }
            }}
            className="flex w-full items-center gap-2.5 rounded-xl px-3 py-2 text-left text-[13px] text-[var(--chat-muted)] hover:bg-red-500/10 hover:text-red-500"
          >
            <span className="material-symbols-outlined text-[18px]">logout</span>
            Sair
          </button>
        </div>
      </aside>

      {/* Main */}
      <div className="relative flex min-w-0 flex-1 flex-col bg-[var(--chat-bg)]">
        <header className="flex shrink-0 items-center gap-3 px-3 py-3 sm:px-5">
          <button
            type="button"
            className="rounded-lg p-2 text-[var(--chat-muted)] hover:bg-[var(--chat-sidebar)] hover:text-[var(--chat-text)]"
            onClick={() => setSidebarOpen((v) => !v)}
            aria-label="Toggle sidebar"
          >
            <span className="material-symbols-outlined text-[22px]">
              {sidebarOpen ? "left_panel_close" : "menu"}
            </span>
          </button>

          <div className="min-w-0 flex-1">
            <h2 className="truncate text-[15px] font-medium tracking-tight text-[var(--chat-text)]">
              {currentSession?.title || "Nova conversa"}
            </h2>
          </div>

          <div className="flex shrink-0 items-center gap-2">
            {currentUserId && (
              <button
                type="button"
                disabled={!lastShareableMessage}
                onClick={() => lastShareableMessage && setShareTarget(lastShareableMessage)}
                className={cn(
                  "rounded-full border border-[var(--chat-border)] px-3.5 py-1.5 text-[13px] font-medium transition-colors",
                  lastShareableMessage
                    ? "text-[var(--chat-text)] hover:bg-[var(--chat-sidebar)]"
                    : "cursor-not-allowed text-[var(--chat-muted)] opacity-50",
                )}
              >
                Compartilhar
              </button>
            )}
          </div>
        </header>

        {(loadError || (!loadingData && connections.length === 0)) && (
          <div className="mx-4 mb-2 rounded-xl bg-amber-500/10 px-4 py-2 text-sm text-amber-800 dark:text-amber-300 sm:mx-6">
            {loadError || "No active providers. Connect one in the dashboard to chat."}
            {!loadError && connections.length === 0 && (
              <Link href="/dashboard/providers" className="ml-2 underline">
                Open providers
              </Link>
            )}
          </div>
        )}

        {/* Messages */}
        <div className="flex-1 overflow-y-auto">
          {currentSession?.sharedFromUserId && (
            <div className="mx-auto max-w-[720px] px-4 pt-2 text-[13px] text-[var(--chat-muted)] sm:px-6">
              Compartilhado por{" "}
              <span className="font-medium text-[var(--chat-text)]">
                {currentSession.sharedFromName || currentSession.sharedFromEmail || "um usuário"}
              </span>
              {currentSession.sharedNote ? ` — ${currentSession.sharedNote}` : ""}. Você pode continuar.
            </div>
          )}

          {currentMessages.length === 0 ? (
            <div className="mx-auto flex h-full max-w-[720px] flex-col items-center justify-center gap-3 px-6 pb-24 text-center">
              <h1 className="text-3xl font-normal tracking-tight text-[var(--chat-text)]" style={{ fontFamily: "var(--font-serif)" }}>
                Como posso ajudar?
              </h1>
              <p className="max-w-md text-[14px] text-[var(--chat-muted)]">
                {requestModel
                  ? "Escreva sua mensagem para começar."
                  : "Selecione um modelo abaixo para começar."}
              </p>
            </div>
          ) : (
            <div className="mx-auto flex w-full max-w-[720px] flex-col gap-8 px-4 pb-36 pt-4 sm:px-6">
              {currentMessages.map((message) => {
                const isUser = message.role === "user";
                const isStreaming = !isUser && message.id === streamingMessageId && message.status === "streaming";
                const content = textValue(message.content) || (isStreaming ? streamingText : "");
                const canShareMsg = !!currentUserId && !isStreaming && !!content;

                if (isUser) {
                  return (
                    <div key={message.id} className="group/msg flex w-full justify-end">
                      <div className="relative max-w-[85%]">
                        {Array.isArray(message.attachments) && message.attachments.length > 0 && (
                          <div className="mb-2 flex flex-wrap justify-end gap-2">
                            {message.attachments.map((att) => (
                              // eslint-disable-next-line @next/next/no-img-element
                              <img
                                key={att.id}
                                src={att.dataUrl}
                                alt={att.name || "attachment"}
                                className="max-h-40 rounded-2xl border border-[var(--chat-border)]"
                              />
                            ))}
                          </div>
                        )}
                        <div className="rounded-[22px] bg-[var(--chat-user-bubble)] px-4 py-2.5 text-[15px] leading-relaxed whitespace-pre-wrap text-[var(--chat-text)]">
                          {content}
                        </div>
                        {canShareMsg && (
                          <div className="mt-1.5 flex justify-end gap-0.5 opacity-0 transition-opacity group-hover/msg:opacity-100">
                            <button
                              type="button"
                              title="Copiar"
                              className="rounded-lg p-1.5 text-[var(--chat-muted)] hover:bg-[var(--chat-sidebar)] hover:text-[var(--chat-text)]"
                              onClick={() => handleCopyMessage(content)}
                            >
                              <span className="material-symbols-outlined text-[16px]">content_copy</span>
                            </button>
                            <button
                              type="button"
                              title="Compartilhar"
                              className="rounded-lg p-1.5 text-[var(--chat-muted)] hover:bg-[var(--chat-sidebar)] hover:text-[var(--chat-text)]"
                              onClick={() => setShareTarget(message)}
                            >
                              <span className="material-symbols-outlined text-[16px]">ios_share</span>
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  );
                }

                return (
                  <div key={message.id} className="group/msg w-full">
                    <div
                      className={cn(
                        "max-w-none text-[var(--chat-text)]",
                        message.status === "error" && "text-red-600 dark:text-red-300",
                      )}
                    >
                      {Array.isArray(message.attachments) && message.attachments.length > 0 && (
                        <div className="mb-3 flex flex-wrap gap-2">
                          {message.attachments.map((att) => (
                            // eslint-disable-next-line @next/next/no-img-element
                            <img
                              key={att.id}
                              src={att.dataUrl}
                              alt={att.name || "attachment"}
                              className="max-h-40 rounded-2xl border border-[var(--chat-border)]"
                            />
                          ))}
                        </div>
                      )}
                      {content ? <MarkdownMessage content={content} /> : null}
                      {!content && isStreaming ? <ThinkingIndicator /> : null}
                      {isStreaming && content ? (
                        <span className="ml-0.5 inline-block animate-pulse text-[var(--chat-accent)]">▍</span>
                      ) : null}
                    </div>
                    {!isStreaming && content && (
                      <div className="mt-2 flex items-center gap-0.5 opacity-0 transition-opacity group-hover/msg:opacity-100">
                        <button
                          type="button"
                          title="Copiar"
                          className="rounded-lg p-1.5 text-[var(--chat-muted)] hover:bg-[var(--chat-sidebar)] hover:text-[var(--chat-text)]"
                          onClick={() => handleCopyMessage(content)}
                        >
                          <span className="material-symbols-outlined text-[17px]">content_copy</span>
                        </button>
                        {canShareMsg && (
                          <button
                            type="button"
                            title="Compartilhar"
                            className="rounded-lg p-1.5 text-[var(--chat-muted)] hover:bg-[var(--chat-sidebar)] hover:text-[var(--chat-text)]"
                            onClick={() => setShareTarget(message)}
                          >
                            <span className="material-symbols-outlined text-[17px]">ios_share</span>
                          </button>
                        )}
                        {isSending && message.id === streamingMessageId ? null : (
                          <span className="material-symbols-outlined ml-1 text-[14px] text-[var(--chat-accent)] opacity-80">
                            auto_awesome
                          </span>
                        )}
                      </div>
                    )}
                  </div>
                );
              })}
              <div ref={messagesEndRef} />
            </div>
          )}
        </div>

        {/* Floating composer */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-[var(--chat-bg)] via-[var(--chat-bg)] to-transparent pt-10 pb-4 sm:pb-5">
          <div className="pointer-events-auto mx-auto w-full max-w-[720px] px-3 sm:px-6">
            {attachments.length > 0 && (
              <div className="mb-2 flex flex-wrap gap-2 px-2">
                {attachments.map((att) => (
                  <div key={att.id} className="relative">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={att.dataUrl}
                      alt={att.name}
                      className="h-14 w-14 rounded-xl object-cover border border-[var(--chat-border)]"
                    />
                    <button
                      type="button"
                      className="absolute -right-1.5 -top-1.5 rounded-full bg-[var(--chat-bg)] border border-[var(--chat-border)] p-0.5"
                      onClick={() => setAttachments((prev) => prev.filter((a) => a.id !== att.id))}
                    >
                      <span className="material-symbols-outlined text-[14px]">close</span>
                    </button>
                  </div>
                ))}
              </div>
            )}
            <div className="flex items-end gap-1 rounded-full border border-[var(--chat-border)] bg-[var(--chat-bg)] px-2 py-1.5 shadow-[0_2px_16px_-4px_rgba(0,0,0,0.08)] focus-within:border-[var(--chat-accent)]/40 focus-within:shadow-[0_2px_20px_-4px_rgba(201,100,66,0.18)]">
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                multiple
                className="hidden"
                onChange={handleFiles}
              />
              <button
                type="button"
                className="mb-0.5 rounded-full p-2.5 text-[var(--chat-muted)] hover:bg-[var(--chat-sidebar)] hover:text-[var(--chat-text)]"
                onClick={() => fileInputRef.current?.click()}
                aria-label="Anexar imagem"
              >
                <span className="material-symbols-outlined text-[22px]">add</span>
              </button>
              <textarea
                ref={textareaRef}
                value={draft}
                onChange={(e) => setDraft(e.target.value)}
                onKeyDown={handleKeyDown}
                rows={1}
                placeholder={requestModel ? "Escreva uma mensagem..." : "Selecione um modelo primeiro…"}
                className="max-h-36 min-h-[44px] flex-1 resize-none bg-transparent py-2.5 text-[15px] text-[var(--chat-text)] outline-none placeholder:text-[var(--chat-muted)]"
              />
              {isSending ? (
                <button
                  type="button"
                  onClick={handleStop}
                  className="mb-0.5 rounded-full bg-[var(--chat-text)] p-2.5 text-[var(--chat-bg)] hover:opacity-90"
                  aria-label="Parar"
                >
                  <span className="material-symbols-outlined text-[20px]">stop</span>
                </button>
              ) : (
                <button
                  type="button"
                  disabled={!canSend}
                  onClick={sendMessage}
                  className={cn(
                    "mb-0.5 rounded-full p-2.5 transition-colors",
                    canSend
                      ? "bg-[var(--chat-accent)] text-white hover:brightness-110"
                      : "bg-[var(--chat-sidebar)] text-[var(--chat-muted)]",
                  )}
                  aria-label="Enviar"
                >
                  <span className="material-symbols-outlined text-[20px]">arrow_upward</span>
                </button>
              )}
            </div>
            <div className="relative mt-2 flex items-center justify-between gap-3 px-1" ref={modelMenuRef}>
              <button
                type="button"
                disabled={loadingData || allModels.length === 0}
                onClick={() => setModelMenuOpen((open) => !open)}
                className={cn(
                  "inline-flex max-w-[70%] items-center gap-1 rounded-lg px-2 py-1 text-[13px] transition-colors",
                  "text-[var(--chat-muted)] hover:bg-[var(--chat-sidebar)] hover:text-[var(--chat-text)]",
                  "disabled:cursor-not-allowed disabled:opacity-50",
                )}
                aria-haspopup="listbox"
                aria-expanded={modelMenuOpen}
              >
                <span className="truncate font-medium">
                  {loadingData ? "Carregando…" : modelLabel}
                </span>
                {modelProviderLabel ? (
                  <span className="hidden truncate text-[12px] opacity-70 sm:inline">
                    · {modelProviderLabel}
                  </span>
                ) : null}
                <span className="material-symbols-outlined text-[18px] opacity-70">
                  {modelMenuOpen ? "expand_less" : "expand_more"}
                </span>
              </button>

              {modelMenuOpen && (
                <div
                  role="listbox"
                  className="absolute bottom-full left-0 z-30 mb-2 max-h-72 w-[min(100%,320px)] overflow-y-auto rounded-2xl border border-[var(--chat-border)] bg-[var(--chat-bg)] py-1.5 shadow-[0_12px_40px_-12px_rgba(0,0,0,0.25)]"
                >
                  {providerGroups.map((group) => (
                    <div key={group.providerId} className="py-1">
                      <div className="px-3 pb-1 pt-1.5 text-[11px] font-medium uppercase tracking-wide text-[var(--chat-muted)]">
                        {group.providerName}
                      </div>
                      {group.models.map((model) => {
                        const isActive = (selectedModel?.id || "") === model.id;
                        return (
                          <button
                            key={model.id}
                            type="button"
                            role="option"
                            aria-selected={isActive}
                            onClick={() => {
                              setSelectedModelId(model.id);
                              setModelMenuOpen(false);
                            }}
                            className={cn(
                              "flex w-full items-center justify-between gap-2 px-3 py-2 text-left text-[13px] transition-colors",
                              isActive
                                ? "bg-[var(--chat-sidebar)] text-[var(--chat-text)]"
                                : "text-[var(--chat-text)] hover:bg-[var(--chat-sidebar)]",
                            )}
                          >
                            <span className="truncate">{model.name}</span>
                            {isActive ? (
                              <span className="material-symbols-outlined text-[16px] text-[var(--chat-accent)]">
                                check
                              </span>
                            ) : null}
                          </button>
                        );
                      })}
                    </div>
                  ))}
                  {providerGroups.length === 0 && (
                    <div className="px-3 py-3 text-[13px] text-[var(--chat-muted)]">
                      Nenhum modelo disponível.
                    </div>
                  )}
                </div>
              )}

              <span className="truncate text-[11px] text-[var(--chat-muted)]">
                9Router pode cometer erros.
              </span>
            </div>
          </div>
        </div>
      </div>

      <ShareMessageModal
        isOpen={!!shareTarget}
        onClose={() => setShareTarget(null)}
        message={shareTarget}
        sessionId={activeSessionId}
        onShared={() => setShareTarget(null)}
      />
    </div>
  );
}
