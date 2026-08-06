"use client";

import Link from "next/link";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import {
  Button,
  ModelSelectModal,
  SegmentedControl,
  Select,
} from "@/shared/components";
import { cn } from "@/shared/utils/cn";
import { APP_CONFIG } from "@/shared/constants/config";
import MarkdownMessage from "./MarkdownMessage";
import { getModelsByProviderId } from "@/shared/constants/models";
import {
  isAnthropicCompatibleProvider,
  isOpenAICompatibleProvider,
} from "@/shared/constants/providers";

const STORAGE_KEYS = {
  sessions: "chat.sessions",
  activeSessionId: "chat.activeSessionId",
  draft: "chat.draft",
  mode: "chat.mode",
  autoModel: "chat.autoModel",
  providerId: "chat.providerId",
  providerModel: "chat.providerModel",
  sidebarOpen: "chat.sidebarOpen",
  migrated: "chat.migratedToDb",
};

const MODE_OPTIONS = [
  { value: "automatic", label: "Automatic", icon: "auto_awesome" },
  { value: "provider", label: "Provider", icon: "dns" },
];

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

function formatRelativeTime(value) {
  if (!value) return "Now";
  const time = new Date(value).getTime();
  if (Number.isNaN(time)) return "Now";
  const diffMinutes = Math.max(1, Math.round((Date.now() - time) / 60000));
  if (diffMinutes < 60) return `${diffMinutes}m`;
  const diffHours = Math.round(diffMinutes / 60);
  if (diffHours < 24) return `${diffHours}h`;
  return `${Math.round(diffHours / 24)}d`;
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
    <span className="flex items-center gap-2 py-0.5" role="status" aria-label="Waiting for response">
      <span className="flex items-center gap-1">
        {[0, 1, 2].map((index) => (
          <span
            key={index}
            className="size-1.5 rounded-full bg-brand-500 animate-thinking-dot"
            style={{ animationDelay: `${index * 0.16}s` }}
          />
        ))}
      </span>
      <span className="text-xs text-text-muted">Thinking…</span>
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
    mode: "automatic",
    ...overrides,
  };
}

export default function ChatPageClient() {
  const [isHydrated, setIsHydrated] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [mode, setMode] = useState("automatic");
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
  const [modelAliases, setModelAliases] = useState({});
  const [providerGroups, setProviderGroups] = useState([]);
  const [autoModel, setAutoModel] = useState(null);
  const [modelModalOpen, setModelModalOpen] = useState(false);
  const [selectedProviderId, setSelectedProviderId] = useState("");
  const [selectedProviderModelId, setSelectedProviderModelId] = useState("");

  const fileInputRef = useRef(null);
  const abortRef = useRef(null);
  const messagesEndRef = useRef(null);
  const textareaRef = useRef(null);

  useEffect(() => {
    let cancelled = false;

    async function hydrate() {
      try {
        setDraft(globalThis.localStorage.getItem(STORAGE_KEYS.draft) || "");
        setMode(globalThis.localStorage.getItem(STORAGE_KEYS.mode) || "automatic");
        setAutoModel(safeParse(globalThis.localStorage.getItem(STORAGE_KEYS.autoModel), null));
        setSelectedProviderId(globalThis.localStorage.getItem(STORAGE_KEYS.providerId) || "");
        setSelectedProviderModelId(globalThis.localStorage.getItem(STORAGE_KEYS.providerModel) || "");
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
        const preferred = globalThis.localStorage.getItem(STORAGE_KEYS.activeSessionId) || "";
        const active = sessionsList.find((s) => s.id === preferred) || sessionsList[0];
        setActiveSessionId(active?.id || "");
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
        const [providersRes, aliasRes] = await Promise.all([
          fetch("/api/providers", { cache: "no-store" }),
          fetch("/api/models/alias", { cache: "no-store" }),
        ]);
        const providersData = await providersRes.json().catch(() => ({}));
        const aliasData = await aliasRes.json().catch(() => ({}));

        const active = Array.isArray(providersData.connections)
          ? providersData.connections.filter((c) => c?.isActive !== false)
          : [];

        if (cancelled) return;
        setConnections(active);
        setModelAliases(aliasData?.aliases && typeof aliasData.aliases === "object" ? aliasData.aliases : {});

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
      globalThis.localStorage.setItem(STORAGE_KEYS.mode, mode);
      globalThis.localStorage.setItem(STORAGE_KEYS.autoModel, JSON.stringify(autoModel));
      globalThis.localStorage.setItem(STORAGE_KEYS.providerId, selectedProviderId);
      globalThis.localStorage.setItem(STORAGE_KEYS.providerModel, selectedProviderModelId);
      globalThis.localStorage.setItem(STORAGE_KEYS.sidebarOpen, String(sidebarOpen));
    } catch {
      // ignore
    }
  }, [
    isHydrated, activeSessionId, draft, mode, autoModel,
    selectedProviderId, selectedProviderModelId, sidebarOpen,
  ]);

  const activeProviderGroup = useMemo(
    () => providerGroups.find((g) => g.providerId === selectedProviderId) || providerGroups[0] || null,
    [providerGroups, selectedProviderId],
  );

  const providerModelOptions = useMemo(() => {
    if (!activeProviderGroup) return [];
    return activeProviderGroup.models.map((m) => ({ value: m.id, label: m.name }));
  }, [activeProviderGroup]);

  const activeProviderModel = useMemo(() => {
    if (!activeProviderGroup) return null;
    return activeProviderGroup.models.find((m) => m.id === selectedProviderModelId)
      || activeProviderGroup.models[0]
      || null;
  }, [activeProviderGroup, selectedProviderModelId]);

  useEffect(() => {
    if (!activeProviderGroup) return;
    if (selectedProviderId !== activeProviderGroup.providerId) {
      setSelectedProviderId(activeProviderGroup.providerId);
    }
    if (!activeProviderGroup.models.some((m) => m.id === selectedProviderModelId)) {
      setSelectedProviderModelId(activeProviderGroup.models[0]?.id || "");
    }
  }, [activeProviderGroup, selectedProviderId, selectedProviderModelId]);

  const requestModel = useMemo(() => {
    if (mode === "automatic") return autoModel?.value || "";
    return activeProviderModel?.requestModel || "";
  }, [mode, autoModel, activeProviderModel]);

  const modelLabel = useMemo(() => {
    if (mode === "automatic") return autoModel?.name || autoModel?.value || "Select model";
    return activeProviderModel?.name || "Select model";
  }, [mode, autoModel, activeProviderModel]);

  const modelSubLabel = useMemo(() => {
    if (mode === "automatic") {
      return autoModel?.value ? `Proxy · ${autoModel.value}` : "Combos, aliases & models via 9Router";
    }
    return activeProviderModel?.requestModel || "Pick a connected provider and agent";
  }, [mode, autoModel, activeProviderModel]);

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
          mode,
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
        const fresh = emptySession({ mode, requestModel, modelLabel });
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
          body: JSON.stringify(emptySession({ mode, requestModel, modelLabel })),
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
      mode,
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

  const providerSelectOptions = providerGroups.map((g) => ({
    value: g.providerId,
    label: g.providerName,
  }));

  return (
    <div className="flex h-full w-full bg-bg text-text-main">
      {/* Sidebar — same chrome as dashboard */}
      <aside
        className={cn(
          "flex shrink-0 flex-col border-r border-border-subtle bg-vibrancy backdrop-blur-xl transition-all duration-200 min-h-full",
          sidebarOpen ? "w-72" : "w-0 overflow-hidden border-r-0",
        )}
      >
        {/* Traffic lights */}
        <div className="flex items-center gap-2 px-6 pt-5 pb-2">
          <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
          <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
          <div className="w-3 h-3 rounded-full bg-[#27C93F]" />
        </div>

        {/* Logo */}
        <div className="px-6 py-4 flex flex-col gap-2">
          <Link href="/chat" className="flex items-center gap-3">
            <div className="flex items-center justify-center size-9 rounded-[10px] bg-gradient-to-br from-brand-500 to-brand-700 shadow-[var(--shadow-warm)]">
              <span className="material-symbols-outlined text-white text-[20px]">hub</span>
            </div>
            <div className="flex flex-col">
              <h1 className="text-lg font-semibold tracking-tight text-text-main">
                {APP_CONFIG.name}
              </h1>
              <span className="text-xs text-text-muted">v{APP_CONFIG.version}</span>
            </div>
          </Link>
        </div>

        <div className="px-4 pb-2">
          <button
            type="button"
            onClick={createNewChat}
            className="flex w-full items-center gap-3 rounded-lg bg-primary/10 px-3 py-2 text-primary transition-all hover:bg-primary/15"
          >
            <span className="material-symbols-outlined text-[18px] fill-1">add_comment</span>
            <span className="text-[13px] font-medium">New chat</span>
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto custom-scrollbar px-4 py-1 space-y-0.5">
          <p className="px-3 mb-2 text-xs font-semibold uppercase tracking-wider text-text-muted/60">
            Chats
          </p>
          {sessionItems.map((session) => {
            const active = session.id === activeSessionId;
            return (
              <div
                key={session.id}
                className={cn(
                  "group flex items-center gap-1 rounded-lg px-2 py-1.5 transition-all",
                  active
                    ? "bg-primary/10 text-primary"
                    : "text-text-muted hover:bg-surface-2 hover:text-text-main",
                )}
              >
                <button
                  type="button"
                  className="min-w-0 flex-1 text-left"
                  onClick={() => setActiveSessionId(session.id)}
                >
                  <div className="flex items-center gap-2">
                    <span
                      className={cn(
                        "material-symbols-outlined shrink-0 text-[18px]",
                        active ? "fill-1" : "group-hover:text-primary transition-colors",
                      )}
                    >
                      chat_bubble
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block truncate text-[13px] font-medium">
                        {session.title || "New chat"}
                      </span>
                      <span className={cn("block truncate text-[11px]", active ? "text-primary/70" : "opacity-70")}>
                        {formatRelativeTime(session.updatedAt)}
                        {session.modelLabel ? ` · ${session.modelLabel}` : ""}
                      </span>
                    </span>
                  </div>
                </button>
                <button
                  type="button"
                  className="invisible rounded-md p-1 text-text-muted hover:bg-bg hover:text-red-500 group-hover:visible"
                  onClick={() => deleteSession(session.id)}
                  aria-label="Delete chat"
                >
                  <span className="material-symbols-outlined text-[16px]">delete</span>
                </button>
              </div>
            );
          })}
        </nav>

        <div className="mt-auto border-t border-border-subtle px-4 py-3 space-y-0.5">
          <p className="px-3 mb-2 text-xs font-semibold uppercase tracking-wider text-text-muted/60">
            System
          </p>
          <Link
            href="/account"
            className="flex items-center gap-3 rounded-lg px-3 py-1 text-text-muted transition-all hover:bg-surface-2 hover:text-text-main group"
          >
            <span className="material-symbols-outlined text-[18px] group-hover:text-primary transition-colors">person</span>
            <span className="text-[13px] font-medium">Account</span>
          </Link>
          <Link
            href="/dashboard"
            className="flex items-center gap-3 rounded-lg px-3 py-1 text-text-muted transition-all hover:bg-surface-2 hover:text-text-main group"
          >
            <span className="material-symbols-outlined text-[18px] group-hover:text-primary transition-colors">dashboard</span>
            <span className="text-[13px] font-medium">Dashboard</span>
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
            className="flex w-full items-center gap-3 rounded-lg px-3 py-1 text-left text-text-muted transition-all hover:bg-red-500/10 hover:text-red-500 group"
          >
            <span className="material-symbols-outlined text-[18px] group-hover:text-red-500 transition-colors">logout</span>
            <span className="text-[13px] font-medium">Logout</span>
          </button>
        </div>
      </aside>

      {/* Main */}
      <div className="flex min-w-0 flex-1 flex-col">
        <header className="flex shrink-0 items-center gap-3 border-b border-border-subtle bg-surface/60 backdrop-blur-xl px-3 py-2.5 sm:px-4">
          <button
            type="button"
            className="rounded-[10px] p-2 text-text-muted hover:bg-surface-2 hover:text-text-main"
            onClick={() => setSidebarOpen((v) => !v)}
            aria-label="Toggle sidebar"
          >
            <span className="material-symbols-outlined text-[20px]">
              {sidebarOpen ? "left_panel_close" : "left_panel_open"}
            </span>
          </button>

          <div className="flex min-w-0 flex-1 flex-wrap items-center gap-2">
            <SegmentedControl
              size="sm"
              options={MODE_OPTIONS}
              value={mode}
              onChange={setMode}
            />

            {mode === "automatic" ? (
              <button
                type="button"
                onClick={() => setModelModalOpen(true)}
                className="flex min-w-0 max-w-full items-center gap-2 rounded-[10px] border border-border bg-surface-2 px-3 py-1.5 text-left transition hover:border-brand-500/40"
              >
                <span className="material-symbols-outlined text-[18px] text-brand-500">smart_toy</span>
                <span className="min-w-0">
                  <span className="block truncate text-sm font-medium">{modelLabel}</span>
                  <span className="block truncate text-xs text-text-muted">{modelSubLabel}</span>
                </span>
                <span className="material-symbols-outlined text-[18px] text-text-muted">expand_more</span>
              </button>
            ) : (
              <div className="flex min-w-0 flex-wrap items-center gap-2">
                <Select
                  className="min-w-[140px]"
                  selectClassName="py-1.5"
                  value={activeProviderGroup?.providerId || ""}
                  onChange={(e) => setSelectedProviderId(e.target.value)}
                  options={providerSelectOptions}
                  placeholder={loadingData ? "Loading…" : "Provider"}
                  disabled={loadingData || providerSelectOptions.length === 0}
                />
                <Select
                  className="min-w-[160px]"
                  selectClassName="py-1.5"
                  value={activeProviderModel?.id || ""}
                  onChange={(e) => setSelectedProviderModelId(e.target.value)}
                  options={providerModelOptions}
                  placeholder="Agent / model"
                  disabled={!activeProviderGroup || providerModelOptions.length === 0}
                />
              </div>
            )}
          </div>
        </header>

        {(loadError || (!loadingData && connections.length === 0)) && (
          <div className="border-b border-border bg-amber-500/10 px-4 py-2 text-sm text-amber-700 dark:text-amber-300">
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
          {currentMessages.length === 0 ? (
            <div className="mx-auto flex h-full max-w-2xl flex-col items-center justify-center gap-4 px-6 text-center">
              <div className="flex size-14 items-center justify-center rounded-2xl bg-brand-500/10 text-brand-500">
                <span className="material-symbols-outlined text-[32px]">forum</span>
              </div>
              <div>
                <h1 className="text-2xl font-semibold tracking-tight">9Router Chat</h1>
                <p className="mt-2 text-sm text-text-muted">
                  {mode === "automatic"
                    ? "Automatic mode routes through the 9Router proxy — pick a combo, alias, or model."
                    : "Provider mode sends to a specific connected account and agent."}
                </p>
              </div>
              {!requestModel && (
                <Button
                  variant="secondary"
                  icon={mode === "automatic" ? "auto_awesome" : "dns"}
                  onClick={() => {
                    if (mode === "automatic") setModelModalOpen(true);
                  }}
                >
                  {mode === "automatic" ? "Choose model" : "Select provider & agent above"}
                </Button>
              )}
            </div>
          ) : (
            <div className="mx-auto flex w-full max-w-3xl flex-col gap-4 px-4 py-6 sm:px-6">
              {currentMessages.map((message) => {
                const isUser = message.role === "user";
                const isStreaming = !isUser && message.id === streamingMessageId && message.status === "streaming";
                const content = textValue(message.content) || (isStreaming ? streamingText : "");
                return (
                  <div
                    key={message.id}
                    className={cn("flex w-full", isUser ? "justify-end" : "justify-start")}
                  >
                    <div
                      className={cn(
                        "max-w-[90%] rounded-2xl px-4 py-3 text-sm leading-relaxed break-words",
                        isUser
                          ? "bg-brand-500 text-white whitespace-pre-wrap"
                          : message.status === "error"
                            ? "bg-red-500/10 text-red-600 dark:text-red-300 border border-red-500/20"
                            : "bg-surface border border-border text-text-main",
                      )}
                    >
                      {!isUser && (
                        <div className="mb-1.5 text-[11px] font-medium uppercase tracking-wide text-text-muted">
                          Assistant
                        </div>
                      )}
                      {Array.isArray(message.attachments) && message.attachments.length > 0 && (
                        <div className="mb-2 flex flex-wrap gap-2">
                          {message.attachments.map((att) => (
                            // eslint-disable-next-line @next/next/no-img-element
                            <img
                              key={att.id}
                              src={att.dataUrl}
                              alt={att.name || "attachment"}
                              className="max-h-40 rounded-lg border border-black/10"
                            />
                          ))}
                        </div>
                      )}
                      {isUser ? content : <MarkdownMessage content={content} />}
                      {!content && isStreaming ? <ThinkingIndicator /> : null}
                      {isStreaming && content ? (
                        <span className="ml-0.5 inline-block animate-pulse">▋</span>
                      ) : null}
                    </div>
                  </div>
                );
              })}
              <div ref={messagesEndRef} />
            </div>
          )}
        </div>

        {/* Composer */}
        <div className="shrink-0 border-t border-border bg-surface px-3 py-3 sm:px-6">
          <div className="mx-auto w-full max-w-3xl">
            {attachments.length > 0 && (
              <div className="mb-2 flex flex-wrap gap-2">
                {attachments.map((att) => (
                  <div key={att.id} className="relative">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={att.dataUrl}
                      alt={att.name}
                      className="h-16 w-16 rounded-lg object-cover border border-border"
                    />
                    <button
                      type="button"
                      className="absolute -right-1.5 -top-1.5 rounded-full bg-surface border border-border p-0.5"
                      onClick={() => setAttachments((prev) => prev.filter((a) => a.id !== att.id))}
                    >
                      <span className="material-symbols-outlined text-[14px]">close</span>
                    </button>
                  </div>
                ))}
              </div>
            )}
            <div className="flex items-end gap-2 rounded-2xl border border-border bg-surface-2 p-2 focus-within:border-brand-500/40 focus-within:ring-2 focus-within:ring-brand-500/20">
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
                className="rounded-[10px] p-2 text-text-muted hover:bg-surface hover:text-text-main"
                onClick={() => fileInputRef.current?.click()}
                aria-label="Attach image"
              >
                <span className="material-symbols-outlined text-[20px]">image</span>
              </button>
              <textarea
                ref={textareaRef}
                value={draft}
                onChange={(e) => setDraft(e.target.value)}
                onKeyDown={handleKeyDown}
                rows={1}
                placeholder={requestModel ? "Message 9Router…" : "Select a model first…"}
                className="max-h-40 min-h-[40px] flex-1 resize-none bg-transparent py-2 text-[16px] text-text-main outline-none placeholder:text-text-muted sm:text-sm"
              />
              {isSending ? (
                <Button variant="secondary" icon="stop" onClick={handleStop}>
                  Stop
                </Button>
              ) : (
                <Button
                  variant="primary"
                  icon="send"
                  disabled={!canSend}
                  onClick={sendMessage}
                >
                  Send
                </Button>
              )}
            </div>
            <p className="mt-2 text-center text-[11px] text-text-muted">
              Routed via 9Router · {mode === "automatic" ? "proxy / combo" : "direct provider"}
              {requestModel ? ` · ${requestModel}` : ""}
            </p>
          </div>
        </div>
      </div>

      <ModelSelectModal
        isOpen={modelModalOpen}
        onClose={() => setModelModalOpen(false)}
        onSelect={(model) => {
          setAutoModel(model);
          setModelModalOpen(false);
        }}
        selectedModel={autoModel?.value || ""}
        activeProviders={connections}
        modelAliases={modelAliases}
        kindFilter="llm"
        title="Select model (proxy)"
        closeOnSelect
      />
    </div>
  );
}
