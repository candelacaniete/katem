import type { Dictionary } from "@/i18n/dictionaries/es";
import { KatemButton } from "@/components/katem/KatemButton";
import { KatemLabel } from "@/components/katem/KatemLabel";
import { site } from "@/lib/site";

type Props = {
  copy: Dictionary["pages"]["contacto"];
};

export function ContactPageView({ copy }: Props) {
  return (
    <div className="section relative z-10 overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(212,160,174,0.1),transparent_50%)]"
      />
      <div className="section__inner relative z-10 max-w-3xl">
        <KatemLabel>{copy.label}</KatemLabel>
        <h1 className="section__title">{copy.title}</h1>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-off-white/75 sm:text-lg">
          {copy.lead}
        </p>

        <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-6">
          <KatemButton
            href={copy.primaryHref}
            target="_blank"
            rel="noopener noreferrer"
            className="min-w-[220px]"
          >
            {copy.primary}
          </KatemButton>
          <KatemButton href={copy.secondaryHref} variant="ghost">
            {copy.secondary}
          </KatemButton>
        </div>

        <a
          href={`mailto:${site.email}`}
          className="mt-8 inline-block font-mono text-sm tracking-[0.08em] text-off-white/70 transition-colors hover:text-pink"
          data-cursor="open"
        >
          {site.email}
        </a>

        <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.18em] text-off-white/40">
          {copy.note}
        </p>
      </div>
    </div>
  );
}
