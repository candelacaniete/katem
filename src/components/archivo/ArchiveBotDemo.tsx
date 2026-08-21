"use client";

import {
  useCallback,
  useEffect,
  useId,
  useRef,
  useState,
  type FormEvent,
} from "react";
import { createPortal } from "react-dom";
import type { Dictionary } from "@/i18n/dictionaries/es";
import { matchBotIntent, typingDelayMs, type BotIntent } from "@/lib/archive-bot";
import { cn } from "@/lib/cn";

type BotCopy = Dictionary["archivo"]["bot"];

type ChatMessage = {
  id: string;
  role: "bot" | "user";
  text: string;
};

type Props = {
  open: boolean;
  onClose: () => void;
  copy: BotCopy;
};

const MAX_RETRIES = 2;

function uid() {
  return `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
}

export function ArchiveBotDemo({ open, onClose, copy }: Props) {
  const titleId = useId();
  const inputRef = useRef<HTMLInputElement>(null);
  const scrollerRef = useRef<HTMLDivElement>(null);
  const timers = useRef<number[]>([]);
  const [mounted, setMounted] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const [busy, setBusy] = useState(false);
  const [retries, setRetries] = useState(0);
  const [showCta, setShowCta] = useState(false);

  const clearTimers = useCallback(() => {
    timers.current.forEach((id) => window.clearTimeout(id));
    timers.current = [];
  }, []);

  const pushBot = useCallback((text: string) => {
    setMessages((prev) => [...prev, { id: uid(), role: "bot", text }]);
  }, []);

  const pushUser = useCallback((text: string) => {
    setMessages((prev) => [...prev, { id: uid(), role: "user", text }]);
  }, []);

  const showMenu = useCallback(() => {
    pushBot(copy.welcome);
    copy.menu.forEach((line) => pushBot(line));
    setShowCta(false);
    setRetries(0);
  }, [copy.menu, copy.welcome, pushBot]);

  const runFlow = useCallback(
    (intent: BotIntent) => {
      const lines = copy.flows[intent];
      setBusy(true);
      setShowCta(false);
      setRetries(0);

      let delay = 0;
      lines.forEach((line, index) => {
        const startTyping = window.setTimeout(() => {
          setTyping(true);
        }, delay);
        timers.current.push(startTyping);

        delay += typingDelayMs();
        const send = window.setTimeout(() => {
          setTyping(false);
          pushBot(line);
          if (index === lines.length - 1) {
            setBusy(false);
            setShowCta(true);
          }
        }, delay);
        timers.current.push(send);
        delay += 120;
      });
    },
    [copy.flows, pushBot]
  );

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!open) {
      clearTimers();
      return;
    }

    clearTimers();
    setMessages([]);
    setInput("");
    setTyping(false);
    setBusy(false);
    setRetries(0);
    setShowCta(false);

    const boot = window.setTimeout(() => {
      setMessages([
        { id: uid(), role: "bot", text: copy.welcome },
        ...copy.menu.map((line) => ({
          id: uid(),
          role: "bot" as const,
          text: line,
        })),
      ]);
      inputRef.current?.focus();
    }, 40);
    timers.current.push(boot);

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
      clearTimers();
    };
    // Intentionally only re-boot when the overlay opens.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  useEffect(() => {
    const node = scrollerRef.current;
    if (!node) return;
    node.scrollTop = node.scrollHeight;
  }, [messages, typing, showCta]);

  const onSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (busy || typing) return;
    const value = input.trim();
    if (!value) return;

    pushUser(value);
    setInput("");

    const intent = matchBotIntent(value);
    if (intent) {
      runFlow(intent);
      return;
    }

    const nextRetries = retries + 1;
    setRetries(nextRetries);
    setBusy(true);
    setTyping(true);
    const delay = typingDelayMs();
    const timer = window.setTimeout(() => {
      setTyping(false);
      if (nextRetries >= MAX_RETRIES) {
        pushBot(copy.fallbackFinal);
        copy.menu.forEach((line) => pushBot(line));
        setRetries(0);
      } else {
        pushBot(copy.fallback);
      }
      setBusy(false);
    }, delay);
    timers.current.push(timer);
  };

  if (!mounted || !open) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-[140] flex items-end justify-center bg-black/80 p-3 sm:items-center sm:p-6"
      role="presentation"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="katem-window flex max-h-[min(92vh,720px)] w-full max-w-lg flex-col overflow-hidden shadow-glow-pink"
      >
        <div className="katem-window__bar">
          <span id={titleId} className="truncate">
            {copy.windowTitle}
          </span>
          <button
            type="button"
            onClick={onClose}
            className="font-mono text-[10px] uppercase tracking-[0.16em] text-off-white/70 transition-colors hover:text-pink"
          >
            {copy.close}
          </button>
        </div>

        <div
          ref={scrollerRef}
          className="flex min-h-0 flex-1 flex-col gap-3 overflow-y-auto bg-purple-black/80 px-4 py-4"
        >
          {messages.map((message) => (
            <div
              key={message.id}
              className={cn(
                "max-w-[92%] rounded-sm border px-3 py-2 text-sm leading-relaxed",
                message.role === "bot"
                  ? "self-start border-off-white/15 bg-black/50 text-off-white/90"
                  : "self-end border-pink/35 bg-pink/10 text-off-white"
              )}
            >
              <p className="mb-1 font-mono text-[9px] uppercase tracking-[0.16em] text-off-white/40">
                {message.role === "bot" ? "BOT" : "YOU"}
              </p>
              <p>{message.text}</p>
            </div>
          ))}

          {typing ? (
            <div className="self-start border border-off-white/10 bg-black/40 px-3 py-2 font-mono text-[10px] uppercase tracking-[0.16em] text-lavender">
              {copy.typing}
            </div>
          ) : null}

          {showCta && !typing ? (
            <div className="mt-1 self-start border border-pink/30 bg-black/60 px-3 py-3">
              <p className="text-sm text-off-white/90">{copy.ctaText}</p>
              <div className="mt-3 flex flex-wrap gap-3">
                <a
                  href={copy.ctaHref}
                  target="_blank"
                  rel="noreferrer"
                  className="font-mono text-[10px] uppercase tracking-[0.16em] text-pink transition-colors hover:text-off-white"
                  data-cursor="enter"
                >
                  {copy.ctaLink}
                </a>
                <button
                  type="button"
                  onClick={() => {
                    clearTimers();
                    setBusy(false);
                    setTyping(false);
                    setShowCta(false);
                    showMenu();
                  }}
                  className="font-mono text-[10px] uppercase tracking-[0.16em] text-off-white/55 transition-colors hover:text-off-white"
                >
                  {copy.menuAgain}
                </button>
              </div>
            </div>
          ) : null}
        </div>

        <form
          onSubmit={onSubmit}
          className="flex items-center gap-2 border-t border-off-white/10 bg-black px-3 py-3"
        >
          <input
            ref={inputRef}
            value={input}
            onChange={(event) => setInput(event.target.value)}
            placeholder={copy.inputPlaceholder}
            disabled={busy || typing}
            className="min-w-0 flex-1 border border-off-white/15 bg-purple-black px-3 py-2 font-mono text-xs text-off-white outline-none placeholder:text-off-white/30 focus:border-pink/50 disabled:opacity-50"
            autoComplete="off"
          />
          <button
            type="submit"
            disabled={busy || typing || !input.trim()}
            className="shrink-0 border border-pink/40 bg-pink/10 px-3 py-2 font-mono text-[10px] uppercase tracking-[0.16em] text-pink transition-colors hover:bg-pink/20 disabled:opacity-40"
          >
            {copy.send}
          </button>
        </form>
      </div>
    </div>,
    document.body
  );
}
