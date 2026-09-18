"use client";

import { useState, type FormEvent } from "react";
import { KatemWindow } from "@/components/katem/KatemWindow";
import { site } from "@/lib/site";
import { cn } from "@/lib/cn";

export type AnalysisFormCopy = {
  eyebrow: string;
  title: string;
  subtitle: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  website: string;
  submit: string;
  sending: string;
  success: string;
  error: string;
  subject: string;
};

type Props = {
  copy: AnalysisFormCopy;
  className?: string;
};

type Status = "idle" | "sending" | "success" | "error";

const fieldClass =
  "w-full border border-off-white/15 bg-black/50 px-3 py-2.5 font-mono text-[12px] text-off-white outline-none transition-colors placeholder:text-off-white/35 focus:border-pink/50";

export function AnalysisForm({ copy, className }: Props) {
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "sending") return;

    const form = event.currentTarget;
    const data = new FormData(form);

    // Honeypot
    if (String(data.get("_gotcha") || "").trim()) {
      setStatus("success");
      form.reset();
      return;
    }

    setStatus("sending");

    const payload = {
      nombre: String(data.get("nombre") || "").trim(),
      apellido: String(data.get("apellido") || "").trim(),
      email: String(data.get("email") || "").trim(),
      telefono: String(data.get("telefono") || "").trim(),
      website: String(data.get("website") || "").trim(),
      _subject: copy.subject,
      _template: "table",
    };

    try {
      const res = await fetch(`https://formsubmit.co/ajax/${site.email}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error("submit failed");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className={cn("w-full", className)}>
      <KatemWindow
        title="ANALYSIS_REQUEST.exe"
        variant="dark"
        footer={
          <>
            <span className="text-rose">FORM · LIVE</span>
            <span>LEAD INTAKE</span>
          </>
        }
      >
        <div className="p-4 sm:p-5">
          <p className="tech-label text-pink">{copy.eyebrow}</p>
          <h2 className="mt-3 font-display text-xl font-semibold tracking-tight text-off-white sm:text-2xl">
            {copy.title}
          </h2>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-off-white/65 sm:text-base">
            {copy.subtitle}
          </p>

          <form className="mt-6 space-y-3" onSubmit={onSubmit} noValidate={false}>
            <input
              type="text"
              name="_gotcha"
              tabIndex={-1}
              autoComplete="off"
              className="hidden"
              aria-hidden
            />

            <div className="grid gap-3 sm:grid-cols-2">
              <label className="block">
                <span className="mb-1.5 block font-mono text-[10px] uppercase tracking-[0.14em] text-off-white/45">
                  {copy.firstName}
                </span>
                <input
                  required
                  name="nombre"
                  type="text"
                  autoComplete="given-name"
                  className={fieldClass}
                  placeholder={copy.firstName}
                />
              </label>
              <label className="block">
                <span className="mb-1.5 block font-mono text-[10px] uppercase tracking-[0.14em] text-off-white/45">
                  {copy.lastName}
                </span>
                <input
                  required
                  name="apellido"
                  type="text"
                  autoComplete="family-name"
                  className={fieldClass}
                  placeholder={copy.lastName}
                />
              </label>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              <label className="block">
                <span className="mb-1.5 block font-mono text-[10px] uppercase tracking-[0.14em] text-off-white/45">
                  {copy.email}
                </span>
                <input
                  required
                  name="email"
                  type="email"
                  autoComplete="email"
                  className={fieldClass}
                  placeholder={copy.email}
                />
              </label>
              <label className="block">
                <span className="mb-1.5 block font-mono text-[10px] uppercase tracking-[0.14em] text-off-white/45">
                  {copy.phone}
                </span>
                <input
                  name="telefono"
                  type="tel"
                  autoComplete="tel"
                  className={fieldClass}
                  placeholder={copy.phone}
                />
              </label>
            </div>

            <div className="grid gap-3 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-end">
              <label className="block">
                <span className="mb-1.5 block font-mono text-[10px] uppercase tracking-[0.14em] text-off-white/45">
                  {copy.website}
                </span>
                <input
                  required
                  name="website"
                  type="url"
                  inputMode="url"
                  autoComplete="url"
                  className={fieldClass}
                  placeholder="https://"
                />
              </label>
              <button
                type="submit"
                disabled={status === "sending"}
                className="os-btn w-full whitespace-nowrap disabled:cursor-wait disabled:opacity-70 sm:w-auto"
                data-cursor="enter"
              >
                {status === "sending" ? copy.sending : copy.submit}
              </button>
            </div>

            <p
              role="status"
              aria-live="polite"
              className={cn(
                "min-h-[1.25rem] font-mono text-[11px] uppercase tracking-[0.12em]",
                status === "success" && "text-pink",
                status === "error" && "text-rose",
                status === "idle" || status === "sending"
                  ? "text-transparent"
                  : undefined
              )}
            >
              {status === "success"
                ? copy.success
                : status === "error"
                  ? copy.error
                  : "·"}
            </p>
          </form>
        </div>
      </KatemWindow>
    </div>
  );
}
