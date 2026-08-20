"use client";

import type { FormEvent } from "react";
import { useEffect, useMemo, useState } from "react";
import type { Dictionary } from "@/i18n/dictionaries/es";
import { KatemWindow } from "@/components/katem/KatemWindow";
import type { Locale } from "@/i18n/config";

type Props = {
  dict: Dictionary["terminal"];
  locale: Locale;
};

type LogLine = { type: "cmd" | "out"; text: string };

export function TerminalSection({ dict, locale }: Props) {
  const [typed, setTyped] = useState<LogLine[]>([]);
  const [done, setDone] = useState(false);
  const [input, setInput] = useState("");
  const [extra, setExtra] = useState<LogLine[]>([]);

  const script = useMemo(() => {
    const lines: LogLine[] = [];
    dict.lines.forEach((row) => {
      lines.push({ type: "cmd", text: `${dict.prompt} ${row.cmd}` });
      row.out.forEach((o) => lines.push({ type: "out", text: o }));
    });
    return lines;
  }, [dict]);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setTyped(script);
      setDone(true);
      return;
    }

    let i = 0;
    const id = window.setInterval(() => {
      i += 1;
      setTyped(script.slice(0, i));
      if (i >= script.length) {
        window.clearInterval(id);
        setDone(true);
      }
    }, 90);

    return () => window.clearInterval(id);
  }, [script]);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const raw = input.trim().toLowerCase();
    if (!raw) return;

    const cmdLine: LogLine = { type: "cmd", text: `${dict.prompt} ${raw}` };
    const key = normalizeCommand(raw, locale);
    const response =
      key && key in dict.responses
        ? dict.responses[key as keyof typeof dict.responses]
        : dict.responses.unknown;

    setExtra((prev) => [
      ...prev,
      cmdLine,
      ...response.map((text) => ({ type: "out" as const, text })),
    ]);
    setInput("");
  };

  return (
    <section
      id="terminal"
      className="section relative overflow-hidden bg-black"
      aria-label="Terminal"
    >
      <div className="section__inner max-w-3xl">
        <KatemWindow title={dict.title} className="bg-ui-gray">
          <div className="min-h-[280px] space-y-1 px-4 py-5 font-mono text-[12px] leading-relaxed text-off-white/80 sm:text-sm">
            {[...typed, ...extra].map((line, idx) => (
              <p
                key={`${line.text}-${idx}`}
                className={line.type === "cmd" ? "text-pink" : "text-off-white/70"}
              >
                {line.text}
              </p>
            ))}
            {done ? (
              <form onSubmit={onSubmit} className="flex items-center gap-2 pt-2">
                <span className="text-pink">{dict.prompt}</span>
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder={dict.placeholder}
                  className="w-full bg-transparent text-off-white outline-none placeholder:text-off-white/25"
                  aria-label={dict.placeholder}
                  autoComplete="off"
                  spellCheck={false}
                />
                <span className="terminal-caret text-pink" aria-hidden>
                  _
                </span>
              </form>
            ) : (
              <p className="text-pink">
                {dict.prompt} <span className="terminal-caret">_</span>
              </p>
            )}
          </div>
        </KatemWindow>
      </div>
    </section>
  );
}

function normalizeCommand(raw: string, locale: Locale) {
  const map: Record<string, keyof Dictionary["terminal"]["responses"]> = {
    ayuda: "ayuda",
    help: "ayuda",
    estudio: "estudio",
    studio: "estudio",
    servicios: "servicios",
    services: "servicios",
    proyectos: "proyectos",
    projects: "proyectos",
    contacto: "contacto",
    contact: "contacto",
  };
  return map[raw] ?? (locale === "en" && raw === "help" ? "ayuda" : null);
}
