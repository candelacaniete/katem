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
import {
  interpolateFlowText,
  matchBotIntent,
  typingDelayMs,
  type BotIntent,
  type FlowOption,
  type FlowStep,
} from "@/lib/archive-bot";
import { cn } from "@/lib/cn";

type BotCopy = Dictionary["archivo"]["bot"];

type ChatMessage = {
  id: string;
  role: "bot" | "user";
  text: string;
};

/** menu = free-text intent; step = waiting on quick replies; cta = done */
type Phase = "menu" | "step" | "cta";

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

  const intentRef = useRef<BotIntent | null>(null);
  const stepIndexRef = useRef(0);
  const varsRef = useRef<Record<string, string>>({});

  const [mounted, setMounted] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const [phase, setPhase] = useState<Phase>("menu");
  const [options, setOptions] = useState<FlowOption[]>([]);
  const [retries, setRetries] = useState(0);

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

  const sayBot = useCallback(
    (text: string, after?: () => void) => {
      setTyping(true);
      setOptions([]);
      const delay = typingDelayMs();
      const timer = window.setTimeout(() => {
        setTyping(false);
        pushBot(text);
        after?.();
      }, delay);
      timers.current.push(timer);
    },
    [pushBot]
  );

  const resetToMenu = useCallback(() => {
    clearTimers();
    intentRef.current = null;
    stepIndexRef.current = 0;
    varsRef.current = {};
    setTyping(false);
    setOptions([]);
    setRetries(0);
    setPhase("menu");
    setInput("");
    setMessages([
      { id: uid(), role: "bot", text: copy.welcome },
      ...copy.menu.map((line) => ({
        id: uid(),
        role: "bot" as const,
        text: line,
      })),
    ]);
    window.setTimeout(() => inputRef.current?.focus(), 40);
  }, [clearTimers, copy.menu, copy.welcome]);

  const presentStep = useCallback(
    (step: FlowStep) => {
      const text = interpolateFlowText(step.prompt, varsRef.current);
      sayBot(text, () => {
        if (step.options?.length) {
          setOptions(step.options);
          setPhase("step");
        } else {
          setOptions([]);
          setPhase("cta");
        }
      });
    },
    [sayBot]
  );

  const startFlow = useCallback(
    (intent: BotIntent) => {
      clearTimers();
      intentRef.current = intent;
      stepIndexRef.current = 0;
      varsRef.current = {};
      setRetries(0);
      setInput("");
      setPhase("step");
      presentStep(copy.flows[intent][0] as FlowStep);
    },
    [clearTimers, copy.flows, presentStep]
  );

  const advanceAfterChoice = useCallback(
    (option: FlowOption) => {
      const intent = intentRef.current;
      if (!intent) return;

      const steps = copy.flows[intent] as FlowStep[];
      const current = steps[stepIndexRef.current];
      if (!current) return;

      if (current.storeAs) {
        varsRef.current = {
          ...varsRef.current,
          [current.storeAs]: option.label,
        };
      }

      if (current.replyByOption?.[option.id]) {
        sayBot(current.replyByOption[option.id], () => setPhase("cta"));
        return;
      }

      const nextIndex = stepIndexRef.current + 1;
      const next = steps[nextIndex];
      if (!next) {
        setPhase("cta");
        return;
      }

      stepIndexRef.current = nextIndex;
      presentStep(next);
    },
    [copy.flows, presentStep, sayBot]
  );

  const onPickOption = (option: FlowOption) => {
    if (typing || phase !== "step") return;
    setOptions([]);
    pushUser(option.label);
    advanceAfterChoice(option);
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!open) {
      clearTimers();
      return;
    }

    resetToMenu();

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  useEffect(() => {
    const node = scrollerRef.current;
    if (!node) return;
    node.scrollTop = node.scrollHeight;
  }, [messages, typing, options, phase]);

  const onSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (phase !== "menu" || typing) return;
    const value = input.trim();
    if (!value) return;

    pushUser(value);
    setInput("");

    const intent = matchBotIntent(value);
    if (intent) {
      startFlow(intent);
      return;
    }

    const nextRetries = retries + 1;
    setRetries(nextRetries);
    sayBot(
      nextRetries >= MAX_RETRIES ? copy.fallbackFinal : copy.fallback,
      () => {
        if (nextRetries >= MAX_RETRIES) {
          copy.menu.forEach((line) => pushBot(line));
          setRetries(0);
        }
        setPhase("menu");
      }
    );
  };

  const inputEnabled = phase === "menu" && !typing;

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

          {phase === "step" && options.length > 0 && !typing ? (
            <div className="flex flex-wrap gap-2 self-start">
              {options.map((option) => (
                <button
                  key={option.id}
                  type="button"
                  onClick={() => onPickOption(option)}
                  className="border border-pink/40 bg-pink/10 px-3 py-2 font-mono text-[10px] uppercase tracking-[0.14em] text-pink transition-colors hover:bg-pink/20 hover:text-off-white"
                  data-cursor="enter"
                >
                  {option.label}
                </button>
              ))}
            </div>
          ) : null}

          {phase === "cta" && !typing ? (
            <div className="mt-1 self-start border border-pink/30 bg-black/60 px-3 py-3">
              <p className="text-sm text-off-white/90">{copy.ctaText}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                <a
                  href={copy.ctaHref}
                  target="_blank"
                  rel="noreferrer"
                  className="border border-pink/40 bg-pink/10 px-3 py-2 font-mono text-[10px] uppercase tracking-[0.14em] text-pink transition-colors hover:bg-pink/20 hover:text-off-white"
                  data-cursor="enter"
                >
                  {copy.ctaLink}
                </a>
                <button
                  type="button"
                  onClick={resetToMenu}
                  className="border border-off-white/20 bg-black/40 px-3 py-2 font-mono text-[10px] uppercase tracking-[0.14em] text-off-white/70 transition-colors hover:border-off-white/40 hover:text-off-white"
                >
                  {copy.menuAgain}
                </button>
              </div>
            </div>
          ) : null}
        </div>

        {phase === "menu" ? (
          <form
            onSubmit={onSubmit}
            className="flex items-center gap-2 border-t border-off-white/10 bg-black px-3 py-3"
          >
            <input
              ref={inputRef}
              value={input}
              onChange={(event) => setInput(event.target.value)}
              placeholder={copy.inputPlaceholder}
              disabled={!inputEnabled}
              className="min-w-0 flex-1 border border-off-white/15 bg-purple-black px-3 py-2 font-mono text-xs text-off-white outline-none placeholder:text-off-white/30 focus:border-pink/50 disabled:opacity-50"
              autoComplete="off"
            />
            <button
              type="submit"
              disabled={!inputEnabled || !input.trim()}
              className="shrink-0 border border-pink/40 bg-pink/10 px-3 py-2 font-mono text-[10px] uppercase tracking-[0.16em] text-pink transition-colors hover:bg-pink/20 disabled:opacity-40"
            >
              {copy.send}
            </button>
          </form>
        ) : (
          <div className="border-t border-off-white/10 bg-black px-3 py-2 font-mono text-[9px] uppercase tracking-[0.16em] text-off-white/35">
            {phase === "cta" ? copy.ctaHint : copy.stepHint}
          </div>
        )}
      </div>
    </div>,
    document.body
  );
}
