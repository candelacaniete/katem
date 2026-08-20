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
              <p key={p} className="whitespace-pre-line">
                {p}
              </p>
            ))}
          </div>
          <p className="mt-8 font-mono text-[11px] uppercase tracking-[0.2em] text-pink/80">
            {dict.meta}
          </p>
        </div>

        <KatemWindow
          title={`${dict.windowTitle}.exe`}
          className="mx-auto w-full max-w-md lg:max-w-none"
          footer={<span className="text-pink">{dict.windowStatus}</span>}
        >
          <div
            className="group relative aspect-[4/5] overflow-hidden p-5 sm:p-6"
            data-cursor="explore"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_25%,rgba(255,79,216,0.28),transparent_40%),linear-gradient(180deg,#1A171D,#070609)]" />
            <div className="absolute inset-0 opacity-30 mix-blend-color bg-violet/25 transition-opacity duration-500 group-hover:opacity-15" />
            <div
              aria-hidden
              className="absolute inset-0 opacity-[0.08]"
              style={{
                background:
                  "repeating-linear-gradient(to bottom, transparent 0, transparent 2px, #fff 2px, #fff 3px)",
              }}
            />

            <div className="relative z-10 flex h-full flex-col">
              <p className="font-display text-3xl font-semibold tracking-tight text-off-white">
                {dict.windowTitle}
              </p>
              <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.2em] text-pink">
                {dict.windowSubtitle}
              </p>

              <ul className="mt-8 space-y-1 font-mono text-[11px] uppercase tracking-[0.16em] text-off-white/60">
                {dict.windowPlaces.map((place) => (
                  <li key={place}>{place}</li>
                ))}
              </ul>

              <ul className="mt-auto grid grid-cols-2 gap-3 border-t border-off-white/10 pt-6 font-mono text-[10px] uppercase tracking-[0.16em] text-off-white/70">
                {dict.windowCapabilities.map((cap) => (
                  <li key={cap} className="border border-off-white/10 px-2 py-2">
                    {cap}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </KatemWindow>
      </div>
    </section>
  );
}
