"use client";

import { useEffect, useMemo, useRef } from "react";
import DOMPurify from "dompurify";
import { Marked } from "marked";
import hljs from "highlight.js/lib/core";
import bash from "highlight.js/lib/languages/bash";
import css from "highlight.js/lib/languages/css";
import diff from "highlight.js/lib/languages/diff";
import go from "highlight.js/lib/languages/go";
import ini from "highlight.js/lib/languages/ini";
import java from "highlight.js/lib/languages/java";
import javascript from "highlight.js/lib/languages/javascript";
import json from "highlight.js/lib/languages/json";
import markdown from "highlight.js/lib/languages/markdown";
import php from "highlight.js/lib/languages/php";
import python from "highlight.js/lib/languages/python";
import rust from "highlight.js/lib/languages/rust";
import shell from "highlight.js/lib/languages/shell";
import sql from "highlight.js/lib/languages/sql";
import typescript from "highlight.js/lib/languages/typescript";
import xml from "highlight.js/lib/languages/xml";
import yaml from "highlight.js/lib/languages/yaml";
import { cn } from "@/shared/utils/cn";

const LANGUAGES = {
  bash, css, diff, go, ini, java, javascript, json, markdown,
  php, python, rust, shell, sql, typescript, xml, yaml,
};

for (const [name, definition] of Object.entries(LANGUAGES)) {
  hljs.registerLanguage(name, definition);
}
hljs.registerAliases(["js", "jsx", "mjs", "cjs", "node"], { languageName: "javascript" });
hljs.registerAliases(["ts", "tsx"], { languageName: "typescript" });
hljs.registerAliases(["html", "xhtml", "svg", "vue"], { languageName: "xml" });
hljs.registerAliases(["sh", "zsh", "console"], { languageName: "bash" });
hljs.registerAliases(["py"], { languageName: "python" });
hljs.registerAliases(["yml"], { languageName: "yaml" });
hljs.registerAliases(["env", "toml", "conf"], { languageName: "ini" });
hljs.registerAliases(["md"], { languageName: "markdown" });

const marked = new Marked({ gfm: true, breaks: true });

function escapeHtml(value = "") {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function highlight(code, lang) {
  if (lang && hljs.getLanguage(lang)) {
    try {
      return {
        html: hljs.highlight(code, { language: lang, ignoreIllegals: true }).value,
        label: lang,
      };
    } catch {
      // fall through to auto detection
    }
  }
  try {
    const auto = hljs.highlightAuto(code, Object.keys(LANGUAGES));
    if (auto.relevance > 5) return { html: auto.value, label: lang || auto.language || "code" };
  } catch {
    // fall through to plain text
  }
  return { html: escapeHtml(code), label: lang || "code" };
}

marked.use({
  renderer: {
    code({ text, lang }) {
      const language = (lang || "").split(/\s+/)[0].toLowerCase();
      const { html, label } = highlight(text, language);
      const lineCount = text.split("\n").length;
      const gutter = Array.from({ length: lineCount }, (_, i) => i + 1).join("\n");
      return [
        `<div class="chat-code" data-code="${escapeHtml(text)}">`,
        `<div class="chat-code-head">`,
        `<span class="chat-code-lang">${escapeHtml(label)}</span>`,
        `<button type="button" class="chat-code-copy" data-copy>Copy</button>`,
        `</div>`,
        `<div class="chat-code-body">`,
        `<pre class="chat-code-gutter" aria-hidden="true">${gutter}</pre>`,
        `<pre class="chat-code-pre"><code class="hljs">${html}</code></pre>`,
        `</div>`,
        `</div>`,
      ].join("");
    },
    link({ href, title, tokens }) {
      const label = this.parser.parseInline(tokens);
      const safeTitle = title ? ` title="${escapeHtml(title)}"` : "";
      return `<a href="${escapeHtml(href || "")}"${safeTitle} target="_blank" rel="noopener noreferrer">${label}</a>`;
    },
  },
});

export default function MarkdownMessage({ content, className }) {
  const containerRef = useRef(null);

  const html = useMemo(() => {
    const source = typeof content === "string" ? content : String(content ?? "");
    if (!source.trim()) return "";
    try {
      return DOMPurify.sanitize(marked.parse(source), {
        ADD_ATTR: ["target", "rel", "data-copy", "data-code"],
      });
    } catch {
      return escapeHtml(source);
    }
  }, [content]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const onClick = (event) => {
      const button = event.target.closest("[data-copy]");
      if (!button || !container.contains(button)) return;
      const code = button.closest(".chat-code")?.getAttribute("data-code") || "";
      navigator.clipboard?.writeText(code).then(() => {
        button.textContent = "Copied";
        setTimeout(() => { button.textContent = "Copy"; }, 1500);
      }).catch(() => {
        button.textContent = "Failed";
        setTimeout(() => { button.textContent = "Copy"; }, 1500);
      });
    };

    container.addEventListener("click", onClick);
    return () => container.removeEventListener("click", onClick);
  }, [html]);

  if (!html) return null;

  return (
    <div
      ref={containerRef}
      className={cn("chat-markdown", className)}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
