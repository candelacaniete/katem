"use client";

import type { Dictionary } from "@/i18n/dictionaries/es";
import { KatemLabel } from "@/components/katem/KatemLabel";
import { KatemWindow } from "@/components/katem/KatemWindow";

type Props = {
  dict: Dictionary["estudio"];
};

export function EstudioSection({ dict }: Props) {
  return (
    <section
      id="estudio"
      className="section relative overflow-hidden bg-black"
      aria-labelledby="estudio-heading"
    >
      <div className="section__inner grid items-center gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-16">
        <div>
          <KatemLabel>{dict.label}</KatemLabel>
          <h2
            id="estudio-heading"
            className="section__title whitespace-pre-line"
          >
            {dict.title.join("\n")}
          </h2>
          <div className="mt-8 max-w-xl space-y-4 text-base leading-relaxed text-off-white/70">
            {dict.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          <p className="mt-8 font-mono text-[11px] uppercase tracking-[0.2em] text-pink/80">
            {dict.meta}
          </p>
        </div>

        <KatemWindow
          title="KATEM_PORTRAIT.exe"
          className="mx-auto w-full max-w-md lg:max-w-none"
          footer={<span>SYSTEM 01 · ARCHIVE 002</span>}
        >
          <div
            className="group relative aspect-[4/5] overflow-hidden"
            data-cursor="explore"
          >
            {/* Editorial abstract stand-in — no founder photo asset in repo */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(255,79,216,0.35),transparent_40%),linear-gradient(180deg,#1A171D,#070609)] grayscale contrast-125 transition-[filter] duration-500 group-hover:grayscale-[0.35]" />
            <div className="absolute inset-0 opacity-40 mix-blend-color bg-violet/30 transition-opacity duration-500 group-hover:opacity-20" />
            <div
              aria-hidden
              className="absolute inset-0 opacity-[0.08]"
              style={{
                background:
                  "repeating-linear-gradient(to bottom, transparent 0, transparent 2px, #fff 2px, #fff 3px)",
              }}
            />
            <div className="absolute left-1/2 top-[38%] h-44 w-44 -translate-x-1/2 -translate-y-1/2 rounded-full bg-pink/25 blur-3xl" />
            <div className="absolute inset-x-8 bottom-8 top-[28%] rounded-t-full bg-gradient-to-b from-off-white/10 to-black/60" />
            <p className="absolute bottom-5 left-5 font-mono text-[10px] uppercase tracking-[0.18em] text-off-white/50">
              KATEM_OS · 2026
            </p>
          </div>
        </KatemWindow>
      </div>
    </section>
  );
}
