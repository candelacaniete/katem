"use client";

import type { Dictionary } from "@/i18n/dictionaries/es";
import { KatemLabel } from "@/components/katem/KatemLabel";
import { cn } from "@/lib/cn";

type Props = {
  dict: Dictionary["servicios"];
};

export function ServiciosSection({ dict }: Props) {
  return (
    <section
      id="servicios"
      className="section relative overflow-hidden border-y border-off-white/10 bg-black"
      aria-labelledby="servicios-heading"
    >
      <div className="section__inner">
        <KatemLabel>{dict.label}</KatemLabel>
        <h2
          id="servicios-heading"
          className="section__title max-w-xl whitespace-pre-line"
        >
          {dict.title.join("\n")}
        </h2>

        <ul className="mt-14 grid gap-0 md:grid-cols-2 lg:grid-cols-4 lg:divide-x lg:divide-off-white/10">
          {dict.items.map((item) => (
            <li key={item.id} className="group relative">
              <article
                className={cn(
                  "h-full border-t border-off-white/10 px-0 py-8 transition-colors duration-300 md:px-5",
                  "hover:bg-purple-black"
                )}
                data-cursor="open"
              >
                <div className="flex items-start justify-between gap-3">
                  <p className="font-mono text-xs text-off-white/40 transition-colors group-hover:text-pink">
                    {item.id}
                  </p>
                  <ServiceIcon index={item.id} />
                </div>
                <h3 className="mt-6 whitespace-pre-line font-display text-2xl font-semibold leading-tight transition-transform duration-300 group-hover:translate-x-1">
                  {item.title}
                </h3>
                <div className="mt-4 h-px w-0 bg-pink transition-all duration-500 group-hover:w-full" />
                <p className="mt-5 text-sm leading-relaxed text-off-white/60">
                  {item.description}
                </p>
                <p className="mt-8 font-mono text-[10px] tracking-[0.18em] text-off-white/30 group-hover:text-pink/70">
                  SIGNAL STABLE
                </p>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function ServiceIcon({ index }: { index: string }) {
  const paths: Record<string, React.ReactNode> = {
    "01": (
      <path d="M4 12h16M12 4v16" stroke="currentColor" strokeWidth="1.2" />
    ),
    "02": (
      <path
        d="M5 7h14M5 12h10M5 17h7"
        stroke="currentColor"
        strokeWidth="1.2"
      />
    ),
    "03": (
      <rect
        x="5"
        y="5"
        width="14"
        height="14"
        stroke="currentColor"
        strokeWidth="1.2"
        fill="none"
      />
    ),
    "04": (
      <path
        d="M6 16V8l6-3 6 3v8l-6 3-6-3z"
        stroke="currentColor"
        strokeWidth="1.2"
        fill="none"
      />
    ),
  };

  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      className="text-pink/70 transition-transform duration-300 group-hover:rotate-12 group-hover:text-pink"
      aria-hidden
    >
      {paths[index]}
    </svg>
  );
}
