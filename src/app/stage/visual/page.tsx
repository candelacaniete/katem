"use client";

import { useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/cn";

type GrainLevel = "subtle" | "medium" | "strong";
type AccentFont = "pinyon" | "allura" | "imperial";

const GRAIN: Record<
  GrainLevel,
  { label: string; opacity: string; note: string }
> = {
  subtle: {
    label: "Sutil",
    opacity: "0.035",
    note: "3.5% — fotocopia casi invisible, ideal para producción",
  },
  medium: {
    label: "Medio",
    opacity: "0.05",
    note: "5% — se percibe en fondos negros grandes",
  },
  strong: {
    label: "Fuerte",
    opacity: "0.07",
    note: "7% — más “print”; puede competir con UI fina",
  },
};

const ACCENTS: Record<
  AccentFont,
  { label: string; family: string; vibe: string }
> = {
  pinyon: {
    label: "Pinyon Script",
    family: "var(--font-accent-pinyon)",
    vibe: "Caligrafía fina, elegante — la más cercana al collage “creating”.",
  },
  allura: {
    label: "Allura",
    family: "var(--font-accent-allura)",
    vibe: "Script moderna, más redonda y legible en digital.",
  },
  imperial: {
    label: "Imperial Script",
    family: "var(--font-accent-imperial)",
    vibe: "Más flourish / drama — acento fuerte sobre Syne.",
  },
};

export default function VisualStagePage() {
  const [grain, setGrain] = useState<GrainLevel>("subtle");
  const [accent, setAccent] = useState<AccentFont>("pinyon");
  const [halftoneOn, setHalftoneOn] = useState(true);

  return (
    <div
      className="relative min-h-screen bg-black text-off-white"
      style={
        {
          "--grain-opacity": GRAIN[grain].opacity,
        } as React.CSSProperties
      }
    >
      <div className="grain-overlay" aria-hidden />

      <div className="relative z-10 mx-auto max-w-5xl px-5 py-10 sm:px-8 sm:py-14">
        <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-pink">
          STAGE / VISUAL LAB · NOINDEX
        </p>
        <h1 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
          Grain + tipografía de acento
        </h1>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-off-white/65">
          Laboratorio sobre el sistema actual (Syne / DM Sans / JetBrains Mono).
          La home no cambia. Elegí intensidad de grain y script de acento; después
          lo aplicamos en 1 palabra del hero y 1–2 acentos halftone.
        </p>
        <Link
          href="/"
          className="mt-4 inline-block font-mono text-[10px] uppercase tracking-[0.18em] text-off-white/45 transition-colors hover:text-pink"
        >
          ← Volver a home
        </Link>

        {/* Grain controls */}
        <section className="katem-window mt-10">
          <div className="katem-window__bar">
            <span>GRAIN_TEST.exe</span>
            <span className="katem-window__controls" aria-hidden>
              <span>_</span>
              <span>□</span>
              <span>X</span>
            </span>
          </div>
          <div className="space-y-5 p-5 sm:p-6">
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-off-white/45">
              Intensidad (overlay fijo, pointer-events: none)
            </p>
            <div className="flex flex-wrap gap-2">
              {(Object.keys(GRAIN) as GrainLevel[]).map((level) => (
                <button
                  key={level}
                  type="button"
                  onClick={() => setGrain(level)}
                  className={cn(
                    "border px-3 py-2 font-mono text-[10px] uppercase tracking-[0.14em] transition-colors",
                    grain === level
                      ? "border-pink bg-pink/15 text-pink"
                      : "border-off-white/20 text-off-white/60 hover:border-off-white/40"
                  )}
                >
                  {GRAIN[level].label}
                </button>
              ))}
            </div>
            <p className="text-sm text-off-white/70">{GRAIN[grain].note}</p>
            <div className="grid gap-3 sm:grid-cols-3">
              {(Object.keys(GRAIN) as GrainLevel[]).map((level) => (
                <div
                  key={level}
                  className="relative overflow-hidden border border-off-white/10 bg-purple-black p-4"
                  style={
                    {
                      "--grain-opacity": GRAIN[level].opacity,
                    } as React.CSSProperties
                  }
                >
                  <div className="grain-swatch absolute inset-0" aria-hidden />
                  <p className="relative font-mono text-[10px] uppercase tracking-[0.16em] text-off-white/50">
                    {GRAIN[level].label}
                  </p>
                  <p className="relative mt-6 font-display text-2xl font-semibold">
                    KATEM
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Halftone */}
        <section className="katem-window mt-8">
          <div className="katem-window__bar">
            <span>HALFTONE_ACCENT.exe</span>
            <span className="katem-window__controls" aria-hidden>
              <span>_</span>
              <span>□</span>
              <span>X</span>
            </span>
          </div>
          <div className="space-y-4 p-5 sm:p-6">
            <div className="flex flex-wrap items-center gap-3">
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-off-white/45">
                Solo 1–2 bloques (no site-wide)
              </p>
              <button
                type="button"
                onClick={() => setHalftoneOn((v) => !v)}
                className={cn(
                  "border px-3 py-2 font-mono text-[10px] uppercase tracking-[0.14em]",
                  halftoneOn
                    ? "border-pink bg-pink/15 text-pink"
                    : "border-off-white/20 text-off-white/60"
                )}
              >
                {halftoneOn ? "ON" : "OFF"}
              </button>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <div
                className={cn(
                  "relative aspect-[5/4] overflow-hidden border border-off-white/10",
                  halftoneOn && "halftone-panel"
                )}
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_30%,rgba(255,79,216,0.35),transparent_55%),linear-gradient(160deg,#1A171D,#070609)]" />
                {halftoneOn ? (
                  <div className="halftone-layer absolute inset-0" aria-hidden />
                ) : null}
                <div className="relative z-10 flex h-full flex-col justify-end p-4">
                  <p className="font-mono text-[10px] text-off-white/50">
                    ARCHIVE_PREVIEW.EXE
                  </p>
                  <p className="mt-1 font-display text-xl font-semibold">
                    Card con trama
                  </p>
                </div>
              </div>
              <div className="relative aspect-[5/4] overflow-hidden border border-off-white/10">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_30%,rgba(255,79,216,0.35),transparent_55%),linear-gradient(160deg,#1A171D,#070609)]" />
                <div className="relative z-10 flex h-full flex-col justify-end p-4">
                  <p className="font-mono text-[10px] text-off-white/50">
                    CONTROL
                  </p>
                  <p className="mt-1 font-display text-xl font-semibold">
                    Sin halftone
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Accent type */}
        <section className="katem-window mt-8">
          <div className="katem-window__bar">
            <span>ACCENT_TYPE.exe</span>
            <span className="katem-window__controls" aria-hidden>
              <span>_</span>
              <span>□</span>
              <span>X</span>
            </span>
          </div>
          <div className="space-y-5 p-5 sm:p-6">
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-off-white/45">
              Una palabra en script — Syne intacto alrededor
            </p>
            <div className="flex flex-wrap gap-2">
              {(Object.keys(ACCENTS) as AccentFont[]).map((key) => (
                <button
                  key={key}
                  type="button"
                  onClick={() => setAccent(key)}
                  className={cn(
                    "border px-3 py-2 font-mono text-[10px] uppercase tracking-[0.14em] transition-colors",
                    accent === key
                      ? "border-pink bg-pink/15 text-pink"
                      : "border-off-white/20 text-off-white/60 hover:border-off-white/40"
                  )}
                >
                  {ACCENTS[key].label}
                </button>
              ))}
            </div>
            <p className="text-sm text-off-white/70">{ACCENTS[accent].vibe}</p>

            <div className="border border-off-white/10 bg-black/40 p-6 sm:p-10">
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-off-white/40">
                Preview hero-like
              </p>
              <h2 className="mt-4 font-display text-4xl font-semibold leading-[0.95] tracking-tight sm:text-6xl">
                TU MARCA MERECE{" "}
                <span
                  className="inline-block origin-bottom -rotate-2 text-pink"
                  style={{
                    fontFamily: ACCENTS[accent].family,
                    fontWeight: 400,
                    fontSize: "1.15em",
                    lineHeight: 1,
                  }}
                >
                  más
                </span>{" "}
                QUE UNA WEB.
              </h2>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {(Object.keys(ACCENTS) as AccentFont[]).map((key) => (
                <button
                  key={key}
                  type="button"
                  onClick={() => setAccent(key)}
                  className={cn(
                    "border p-4 text-left transition-colors",
                    accent === key
                      ? "border-pink/50 bg-pink/5"
                      : "border-off-white/10 hover:border-off-white/25"
                  )}
                >
                  <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-off-white/40">
                    {ACCENTS[key].label}
                  </p>
                  <p
                    className="mt-3 text-4xl text-pink"
                    style={{ fontFamily: ACCENTS[key].family }}
                  >
                    más
                  </p>
                </button>
              ))}
            </div>
          </div>
        </section>

        <p className="mt-10 font-mono text-[10px] uppercase tracking-[0.18em] text-off-white/35">
          Decisión pendiente: grain + script → después se aplica a home en PR
          separado.
        </p>
      </div>
    </div>
  );
}
