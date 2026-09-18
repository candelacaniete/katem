"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { KatemWindow } from "@/components/katem/KatemWindow";
import { RetroCrt } from "@/components/katem/RetroCrt";
import { cn } from "@/lib/cn";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export type ServiceVisualId =
  | "desarrolloWeb"
  | "prospectionB2b"
  | "publicidadDigital"
  | "automatizaciones";

export type ServiceVisualCopy = {
  windowTitle: string;
  status: string;
  rows?: { key: string; value: string; bar?: number }[];
  flow?: string[];
  files?: string[];
  browserLabel?: string;
};

type Props = {
  id: ServiceVisualId;
  copy: ServiceVisualCopy;
  className?: string;
};

function StatusRow({
  label,
  value,
  bar,
}: {
  label: string;
  value: string;
  bar?: number;
}) {
  const filled = typeof bar === "number" ? Math.max(0, Math.min(10, bar)) : 0;

  return (
    <div className="flex flex-col gap-1.5 border-b border-off-white/10 py-2.5 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
      <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-off-white/55 sm:text-xs">
        {label}
      </span>
      {typeof bar === "number" ? (
        <span
          className="font-mono text-[11px] tracking-[0.08em] text-pink sm:text-xs"
          data-bar-target={filled}
        >
          <span className="text-off-white/35">[</span>
          <span data-bar-fill>{"░".repeat(10)}</span>
          <span className="text-off-white/35">]</span>
        </span>
      ) : (
        <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-pink sm:text-xs">
          [{value}]
        </span>
      )}
    </div>
  );
}

function FlowStrip({ steps }: { steps: string[] }) {
  return (
    <p className="mt-5 break-words font-mono text-[11px] uppercase leading-relaxed tracking-[0.12em] text-off-white/55 sm:text-xs">
      {steps.map((step, index) => (
        <span key={step} data-flow-step className="inline-block opacity-35">
          {index > 0 ? (
            <span className="mx-2 text-pink/80" aria-hidden>
              →
            </span>
          ) : null}
          {step}
        </span>
      ))}
    </p>
  );
}

function VerticalFlow({
  steps,
  dimmed = false,
}: {
  steps: string[];
  dimmed?: boolean;
}) {
  return (
    <ol className="mt-3 space-y-1.5 font-mono text-[11px] uppercase tracking-[0.14em] text-off-white/70 sm:text-xs">
      {steps.map((step, index) => (
        <li
          key={step}
          data-flow-step={dimmed || undefined}
          className={cn("flex flex-col items-start", dimmed && "opacity-35")}
        >
          <span className="text-pink">{step}</span>
          {index < steps.length - 1 ? (
            <span className="pl-2.5 text-off-white/30" aria-hidden>
              ↓
            </span>
          ) : null}
        </li>
      ))}
    </ol>
  );
}

function WebVisual({ copy }: { copy: ServiceVisualCopy }) {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      gsap.from("[data-wire]", {
        opacity: 0.2,
        scaleY: 0.35,
        transformOrigin: "top",
        duration: 0.55,
        stagger: 0.12,
        ease: "power2.out",
        scrollTrigger: {
          trigger: root.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });
    },
    { scope: root }
  );

  return (
    <div ref={root} className="w-full">
      <RetroCrt frame="beige" label={copy.browserLabel ?? "VIEWPORT"}>
        <KatemWindow
          title={copy.windowTitle}
          variant="dark"
          className="h-full border-0 shadow-none"
          bodyClassName="min-h-[18rem] sm:min-h-[20rem] lg:min-h-[22rem]"
          footer={
            <>
              <span className="text-rose">{copy.status}</span>
              <span>LAYOUT</span>
            </>
          }
        >
          <div className="grid gap-3 p-3 sm:grid-cols-[7.5rem_minmax(0,1fr)] sm:gap-4 sm:p-5">
            <aside className="border border-off-white/10 bg-black/40 p-3">
              <p className="tech-label text-pink/80">FILES</p>
              <ul className="mt-3 space-y-1.5 font-mono text-[10px] uppercase tracking-[0.12em] text-off-white/55 sm:text-[11px]">
                {(copy.files ?? ["index.html", "styles.css", "components/"]).map(
                  (file) => (
                    <li key={file} className="break-all">
                      {file}
                    </li>
                  )
                )}
              </ul>
            </aside>
            <div className="space-y-3">
              <div className="border border-off-white/15 bg-off-white/5 px-3 py-2 font-mono text-[10px] uppercase tracking-[0.14em] text-off-white/40 sm:text-[11px]">
                browser · viewport
              </div>
              <div className="grid gap-2.5">
                <div
                  data-wire
                  className="h-8 border border-dashed border-pink/40 bg-pink/5 sm:h-9"
                />
                <div className="grid grid-cols-3 gap-2.5">
                  <div
                    data-wire
                    className="h-14 border border-off-white/15 bg-off-white/[0.03] sm:h-16"
                  />
                  <div
                    data-wire
                    className="h-14 border border-off-white/15 bg-off-white/[0.03] sm:h-16"
                  />
                  <div
                    data-wire
                    className="h-14 border border-off-white/15 bg-off-white/[0.03] sm:h-16"
                  />
                </div>
                <div
                  data-wire
                  className="h-10 border border-off-white/10 bg-black/30 sm:h-12"
                />
              </div>
            </div>
          </div>
        </KatemWindow>
      </RetroCrt>
    </div>
  );
}

function B2bVisual({ copy }: { copy: ServiceVisualCopy }) {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const fills = gsap.utils.toArray<HTMLElement>("[data-bar-fill]");

      fills.forEach((el) => {
        const target = Number(el.parentElement?.dataset.barTarget ?? 0);
        if (reduce) {
          el.textContent = "█".repeat(target) + "░".repeat(10 - target);
          return;
        }
        const state = { n: 0 };
        gsap.to(state, {
          n: target,
          duration: 0.9,
          ease: "power2.out",
          scrollTrigger: {
            trigger: root.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
          onUpdate: () => {
            const filled = Math.round(state.n);
            el.textContent = "█".repeat(filled) + "░".repeat(10 - filled);
          },
        });
      });

      if (reduce) return;
      gsap.to("[data-flow-step]", {
        opacity: 1,
        duration: 0.35,
        stagger: 0.16,
        ease: "power1.out",
        scrollTrigger: {
          trigger: root.current,
          start: "top 78%",
          toggleActions: "play none none reverse",
        },
      });
    },
    { scope: root }
  );

  return (
    <div ref={root} className="w-full">
      <KatemWindow
        title={copy.windowTitle}
        variant="dark"
        className="w-full"
        bodyClassName="min-h-[18rem] sm:min-h-[20rem]"
        footer={
          <>
            <span className="text-rose">{copy.status}</span>
            <span>OUTBOUND</span>
          </>
        }
      >
        <div className="katem-grid-bg flex h-full flex-col justify-center p-5 sm:p-6 lg:p-7">
          <p className="tech-label text-pink">MODULE / ACCOUNTS</p>
          <div className="mt-4">
            {(copy.rows ?? []).map((row) => (
              <StatusRow
                key={row.key}
                label={row.key}
                value={row.value}
                bar={row.bar}
              />
            ))}
          </div>
          {copy.flow ? <FlowStrip steps={copy.flow} /> : null}
        </div>
      </KatemWindow>
    </div>
  );
}

function AdsVisual({ copy }: { copy: ServiceVisualCopy }) {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      gsap.to("[data-signal]", {
        opacity: 0.4,
        duration: 0.85,
        yoyo: true,
        repeat: -1,
        ease: "sine.inOut",
      });

      gsap.to("[data-flow-step]", {
        opacity: 1,
        duration: 0.4,
        stagger: 0.15,
        ease: "power1.out",
        scrollTrigger: {
          trigger: root.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });
    },
    { scope: root }
  );

  return (
    <div ref={root} className="w-full">
      <KatemWindow
        title={copy.windowTitle}
        variant="dark"
        className="w-full"
        bodyClassName="min-h-[18rem] sm:min-h-[20rem]"
        footer={
          <>
            <span className="text-rose">{copy.status}</span>
            <span>CAMPAIGN</span>
          </>
        }
      >
        <div className="flex h-full flex-col justify-center p-5 sm:p-6 lg:p-7">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <p data-signal className="tech-label text-pink">
              SIGNAL · ON
            </p>
            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-off-white/40 sm:text-xs">
              {copy.status}
            </p>
          </div>
          <VerticalFlow steps={copy.flow ?? []} dimmed />
        </div>
      </KatemWindow>
    </div>
  );
}

function AutoVisual({ copy }: { copy: ServiceVisualCopy }) {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      gsap.from("[data-term-line]", {
        opacity: 0,
        y: 6,
        duration: 0.35,
        stagger: 0.18,
        ease: "power1.out",
        scrollTrigger: {
          trigger: root.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });

      gsap.to("[data-caret]", {
        opacity: 0,
        duration: 0.55,
        yoyo: true,
        repeat: -1,
        ease: "steps(1)",
      });
    },
    { scope: root }
  );

  return (
    <div ref={root} className="w-full min-w-0">
      <KatemWindow
        title={copy.windowTitle}
        variant="dark"
        className="w-full"
        bodyClassName="min-h-[18rem] sm:min-h-[20rem] lg:min-h-[22rem]"
        footer={
          <>
            <span className="text-rose">{copy.status}</span>
            <span>TERMINAL</span>
          </>
        }
      >
        <div className="flex h-full min-h-[inherit] flex-col justify-center overflow-hidden bg-black p-5 font-mono text-xs uppercase leading-relaxed tracking-[0.1em] text-off-white/65 sm:p-6 sm:text-[13px] sm:tracking-[0.12em] lg:p-7">
          <p data-term-line className="break-all text-pink">
            $ flow --watch
            <span data-caret className="ml-1 text-pink">
              ▍
            </span>
          </p>
          <p data-term-line className="mt-3 break-all text-off-white/35">
            # automation runtime
          </p>
          <div data-term-line className="min-w-0">
            <VerticalFlow steps={copy.flow ?? []} />
          </div>
          <p data-term-line className="mt-5 break-all text-off-white/40">
            status: <span className="text-pink">{copy.status}</span>
          </p>
        </div>
      </KatemWindow>
    </div>
  );
}

export function ServiceVisual({ id, copy, className }: Props) {
  return (
    <div className={cn("w-full overflow-hidden", className)}>
      {id === "desarrolloWeb" ? <WebVisual copy={copy} /> : null}
      {id === "prospectionB2b" ? <B2bVisual copy={copy} /> : null}
      {id === "publicidadDigital" ? <AdsVisual copy={copy} /> : null}
      {id === "automatizaciones" ? <AutoVisual copy={copy} /> : null}
    </div>
  );
}
