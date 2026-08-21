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
      <div className="section__inner grid items-start gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-center lg:gap-16">
        <div>
          <KatemLabel>{dict.label}</KatemLabel>
          <h2
            id="estudio-heading"
            className="section__title whitespace-pre-line"
          >
            {dict.title.join("\n")}
          </h2>
        </div>

        <KatemWindow
          title={`${dict.windowTitle}.exe`}
          className="mx-auto w-full max-w-md lg:max-w-none"
          footer={<span className="text-pink">{dict.windowStatus}</span>}
        >
          <div
            className="group relative overflow-hidden p-5 sm:p-6"
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

            <div className="relative z-10 font-mono text-[12px] leading-relaxed text-off-white/80 sm:text-[13px]">
              <p className="text-pink">{dict.command}</p>

              <div className="mt-5 space-y-4 text-off-white/75">
                {dict.paragraphs.map((paragraph) => (
                  <p key={paragraph} className="flex gap-2 whitespace-pre-line">
                    <span className="shrink-0 select-none text-pink/80" aria-hidden>
                      &gt;
                    </span>
                    <span>{paragraph}</span>
                  </p>
                ))}
              </div>

              <p className="mt-8 border-t border-off-white/10 pt-5 text-[10px] uppercase tracking-[0.2em] text-off-white/55 sm:text-[11px]">
                {dict.meta}
              </p>
            </div>
          </div>
        </KatemWindow>
      </div>
    </section>
  );
}
