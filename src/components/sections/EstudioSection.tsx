"use client";

import type { Dictionary } from "@/i18n/dictionaries/es";
import { KatemLabel } from "@/components/katem/KatemLabel";
import { KatemWindow } from "@/components/katem/KatemWindow";
import { RetroCrt } from "@/components/katem/RetroCrt";

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
      <div className="section__inner grid items-start gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-center lg:gap-14">
        <div>
          <KatemLabel>{dict.label}</KatemLabel>
          <h2
            id="estudio-heading"
            className="section__title whitespace-pre-line"
          >
            {dict.title.join("\n")}
          </h2>
        </div>

        <RetroCrt frame="rose" label="KATEM_TV · ABOUT">
          <KatemWindow
            title={`${dict.windowTitle}.exe`}
            variant="dark"
            className="border-0 shadow-none"
            footer={<span className="text-rose">{dict.windowStatus}</span>}
          >
            <div className="relative overflow-hidden p-4 sm:p-5" data-cursor="explore">
              <div className="halftone-layer absolute inset-0 opacity-30" aria-hidden />
              <div className="relative z-10 font-mono text-[12px] leading-relaxed text-off-white/80 sm:text-[13px]">
                <p className="text-rose">{dict.command}</p>
                <div className="mt-5 space-y-4 text-off-white/75">
                  {dict.paragraphs.map((paragraph) => (
                    <p key={paragraph} className="flex gap-2 whitespace-pre-line">
                      <span
                        className="shrink-0 select-none text-rose/80"
                        aria-hidden
                      >
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
        </RetroCrt>
      </div>
    </section>
  );
}
