import { KatemWindow } from "@/components/katem/KatemWindow";
import { RetroCrt } from "@/components/katem/RetroCrt";

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
  return (
    <div className="flex flex-col gap-1 border-b border-off-white/10 py-2 sm:flex-row sm:items-center sm:justify-between sm:gap-3">
      <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-off-white/55">
        {label}
      </span>
      {typeof bar === "number" ? (
        <span className="font-mono text-[10px] tracking-[0.08em] text-pink">
          <span className="text-off-white/35">[</span>
          {"█".repeat(Math.max(0, Math.min(10, bar)))}
          {"░".repeat(Math.max(0, 10 - Math.min(10, bar)))}
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
        <span key={step}>
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

function VerticalFlow({ steps }: { steps: string[] }) {
  return (
    <ol className="mt-2 space-y-1 font-mono text-[10px] uppercase tracking-[0.14em] text-off-white/70">
      {steps.map((step, index) => (
        <li key={step} className="flex flex-col items-start">
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
  return (
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
              <div className="h-6 border border-dashed border-pink/40 bg-pink/5" />
              <div className="grid grid-cols-3 gap-2">
                <div className="h-10 border border-off-white/15 bg-off-white/[0.03]" />
                <div className="h-10 border border-off-white/15 bg-off-white/[0.03]" />
                <div className="h-10 border border-off-white/15 bg-off-white/[0.03]" />
              </div>
              <div className="h-8 border border-off-white/10 bg-black/30" />
            </div>
          </div>
        </div>
      </KatemWindow>
    </RetroCrt>
  );
}

function B2bVisual({ copy }: { copy: ServiceVisualCopy }) {
  return (
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
  );
}

function AdsVisual({ copy }: { copy: ServiceVisualCopy }) {
  return (
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
          <p className="tech-label text-pink">SIGNAL · ON</p>
          <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-off-white/40">
            {copy.status}
          </p>
        </div>
        <VerticalFlow steps={copy.flow ?? []} />
      </div>
    </KatemWindow>
  );
}

function AutoVisual({ copy }: { copy: ServiceVisualCopy }) {
  return (
    <KatemWindow
      title={copy.windowTitle}
      variant="dark"
      footer={
        <>
          <span className="text-rose">{copy.status}</span>
          <span>TERMINAL</span>
        </>
      }
    >
      <div className="bg-black p-4 font-mono text-[10px] uppercase leading-relaxed tracking-[0.12em] text-off-white/65 sm:p-5">
        <p className="text-pink">$ flow --watch</p>
        <p className="mt-2 text-off-white/35"># automation runtime</p>
        <VerticalFlow steps={copy.flow ?? []} />
        <p className="mt-4 text-off-white/40">
          status: <span className="text-pink">{copy.status}</span>
        </p>
      </div>
    </KatemWindow>
  );
}

export function ServiceVisual({ id, copy }: Props) {
  return (
    <div className="mt-10 max-w-xl">
      {id === "desarrolloWeb" ? <WebVisual copy={copy} /> : null}
      {id === "prospectionB2b" ? <B2bVisual copy={copy} /> : null}
      {id === "publicidadDigital" ? <AdsVisual copy={copy} /> : null}
      {id === "automatizaciones" ? <AutoVisual copy={copy} /> : null}
    </div>
  );
}
