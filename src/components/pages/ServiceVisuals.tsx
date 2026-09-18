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
    <div className="flex flex-col gap-1 border-b border-off-white/10 py-2 sm:flex-row sm:items-center sm:justify-between sm:gap-3">
      <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-off-white/55">
        {label}
      </span>
      {typeof bar === "number" ? (
        <span
          className="font-mono text-[10px] tracking-[0.08em] text-pink"
          data-bar-target={filled}
        >
          <span className="text-off-white/35">[</span>
          <span data-bar-fill>{"░".repeat(10)}</span>
          <span className="text-off-white/35">]</span>
        </span>
      ) : (
        <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-pink">
          [{value}]
        </span>
      )}
    </div>
  );
}

function FlowStrip({ steps }: { steps: string[] }) {
  return (
    <p className="mt-4 break-words font-mono text-[10px] uppercase leading-relaxed tracking-[0.12em] text-off-white/55">
      {steps.map((step, index) => (
        <span key={step} data-flow-step className="inline-block opacity-35">
          {index > 0 ? (
            <span className="mx-1.5 text-pink/80" aria-hidden>
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
    <ol className="mt-2 space-y-1 font-mono text-[10px] uppercase tracking-[0.14em] text-off-white/70">
      {steps.map((step, index) => (
        <li
          key={step}
          data-flow-step={dimmed || undefined}
          className={cn("flex flex-col items-start", dimmed && "opacity-35")}
        >
          <span className="text-pink">{step}</span>
          {index < steps.length - 1 ? (
            <span className="pl-2 text-off-white/30" aria-hidden>
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
    <div ref={root}>
      <RetroCrt frame="beige" label={copy.browserLabel ?? "VIEWPORT"}>
        <KatemWindow
          title={copy.windowTitle}
          variant="dark"
          className="h-full border-0 shadow-none"
          bodyClassName="min-h-[14rem]"
          footer={
            <>
              <span className="text-rose">{copy.status}</span>
              <span>LAYOUT</span>
            </>
          }
        >
          <div className="grid gap-3 p-3 sm:grid-cols-[6.5rem_minmax(0,1fr)] sm:p-4">
            <aside className="border border-off-white/10 bg-black/40 p-2">
              <p className="tech-label text-pink/80">FILES</p>
              <ul className="mt-2 space-y-1 font-mono text-[9px] uppercase tracking-[0.12em] text-off-white/55">
                {(copy.files ?? ["index.html", "styles.css", "components/"]).map(
                  (file) => (
                    <li key={file} className="break-all">
                      {file}
                    </li>
                  )
                )}
              </ul>
            </aside>
            <div className="space-y-2">
              <div className="border border-off-white/15 bg-off-white/5 px-2 py-1.5 font-mono text-[9px] uppercase tracking-[0.14em] text-off-white/40">
                browser · viewport
              </div>
              <div className="grid gap-2">
                <div
                  data-wire
                  className="h-6 border border-dashed border-pink/40 bg-pink/5"
                />
                <div className="grid grid-cols-3 gap-2">
                  <div
                    data-wire
                    className="h-10 border border-off-white/15 bg-off-white/[0.03]"
                  />
                  <div
                    data-wire
                    className="h-10 border border-off-white/15 bg-off-white/[0.03]"
                  />
                  <div
                    data-wire
                    className="h-10 border border-off-white/15 bg-off-white/[0.03]"
                  />
                </div>
                <div
                  data-wire
                  className="h-8 border border-off-white/10 bg-black/30"
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
    <div ref={root}>
      <KatemWindow
        title={copy.windowTitle}
        variant="dark"
        footer={
          <>
            <span className="text-rose">{copy.status}</span>
            <span>OUTBOUND</span>
          </>
        }
      >
        <div className="katem-grid-bg p-4 sm:p-5">
          <p className="tech-label text-pink">MODULE / ACCOUNTS</p>
          <div className="mt-3">
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
    <div ref={root}>
      <KatemWindow
        title={copy.windowTitle}
        variant="dark"
        footer={
          <>
            <span className="text-rose">{copy.status}</span>
            <span>CAMPAIGN</span>
          </>
        }
      >
        <div className="p-4 sm:p-5">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <p data-signal className="tech-label text-pink">
              SIGNAL · ON
            </p>
            <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-off-white/40">
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
        className="w-full max-w-full"
        footer={
          <>
            <span className="text-rose">{copy.status}</span>
            <span>TERMINAL</span>
          </>
        }
      >
        <div className="overflow-hidden bg-black p-3 font-mono text-[10px] uppercase leading-relaxed tracking-[0.1em] text-off-white/65 sm:p-4 sm:tracking-[0.12em]">
          <p data-term-line className="break-all text-pink">
            $ flow --watch
            <span data-caret className="ml-1 text-pink">
              ▍
            </span>
          </p>
          <p data-term-line className="mt-2 break-all text-off-white/35">
            # automation runtime
          </p>
          <div data-term-line className="min-w-0">
            <VerticalFlow steps={copy.flow ?? []} />
          </div>
          <p data-term-line className="mt-4 break-all text-off-white/40">
            status: <span className="text-pink">{copy.status}</span>
          </p>
        </div>
      </KatemWindow>
    </div>
  );
}

export function ServiceVisual({ id, copy, className }: Props) {
  return (
    <div className={cn("mt-10 w-full max-w-xl overflow-hidden", className)}>
      {id === "desarrolloWeb" ? <WebVisual copy={copy} /> : null}
      {id === "prospectionB2b" ? <B2bVisual copy={copy} /> : null}
      {id === "publicidadDigital" ? <AdsVisual copy={copy} /> : null}
      {id === "automatizaciones" ? <AutoVisual copy={copy} /> : null}
    </div>
  );
}
