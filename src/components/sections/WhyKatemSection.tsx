"use client";

import type { Dictionary } from "@/i18n/dictionaries/es";
import { KatemButton } from "@/components/katem/KatemButton";
import { KatemLabel } from "@/components/katem/KatemLabel";

type Props = {
  dict: Dictionary["why"];
};

export function WhyKatemSection({ dict }: Props) {
  return (
    <section
      id="why"
      className="section relative overflow-hidden border-y border-off-white/10 bg-black"
      aria-labelledby="why-heading"
    >
      <div className="section__inner">
        <KatemLabel>{dict.label}</KatemLabel>
        <h2 id="why-heading" className="section__title">
          {dict.title}
        </h2>
        <p className="section__lead mt-4 whitespace-pre-line text-off-white/70">
          {dict.lead}
        </p>

        <ul className="mt-14 grid gap-8 md:grid-cols-2 lg:gap-10">
          {dict.reasons.map((reason) => (
            <li
              key={reason.id}
              className="border-t border-off-white/15 pt-5"
            >
              <p className="font-mono text-xs text-pink">{reason.id}</p>
              <h3 className="mt-3 font-display text-xl font-semibold tracking-tight text-off-white sm:text-2xl">
                {reason.title}
              </h3>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-off-white/60 sm:text-base">
                {reason.body}
              </p>
            </li>
          ))}
        </ul>

        <div className="mt-16 border-t border-off-white/10 pt-10">
          <p className="font-display text-2xl font-semibold leading-tight tracking-tight text-off-white sm:text-3xl">
            {dict.closing.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </p>
          <div className="mt-8">
            <KatemButton href={dict.href} target="_blank" rel="noopener noreferrer">
              {dict.cta}
            </KatemButton>
          </div>
        </div>
      </div>
    </section>
  );
}
