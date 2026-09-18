import type { Dictionary } from "@/i18n/dictionaries/es";
import { KatemButton } from "@/components/katem/KatemButton";
import { KatemLabel } from "@/components/katem/KatemLabel";
import {
  ServiceVisual,
  type ServiceVisualId,
} from "@/components/pages/ServiceVisuals";

type ServicePageCopy =
  | Dictionary["pages"]["desarrolloWeb"]
  | Dictionary["pages"]["prospectionB2b"]
  | Dictionary["pages"]["publicidadDigital"]
  | Dictionary["pages"]["automatizaciones"];

type Props = {
  copy: ServicePageCopy;
  visualId: ServiceVisualId;
};

export function ServicePageView({ copy, visualId }: Props) {
  return (
    <div className="section section--page relative z-10">
      <div className="section__inner max-w-4xl">
        <div className="flex flex-wrap items-center gap-3">
          <KatemLabel>{copy.label}</KatemLabel>
          <span className="tech-label text-pink/70">STATUS · ONLINE</span>
        </div>

        <h1 className="section__title mt-4 whitespace-pre-line">{copy.title}</h1>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-off-white/75 sm:mt-6 sm:text-lg">
          {copy.lead}
        </p>

        <ServiceVisual id={visualId} copy={copy.visual} />

        <div className="mt-12 space-y-8 sm:mt-14 sm:space-y-10">
          {copy.sections.map((section, index) => (
            <section
              key={section.title}
              className="border-t border-off-white/10 pt-5 sm:pt-6"
            >
              <div className="flex items-baseline gap-3">
                <span className="tech-label text-pink/80">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h2 className="font-display text-xl font-semibold tracking-tight text-off-white sm:text-2xl">
                  {section.title}
                </h2>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-off-white/65 sm:mt-4 sm:text-base">
                {section.body}
              </p>
            </section>
          ))}
        </div>

        <div className="mt-12 border-t border-off-white/10 pt-8 sm:mt-14">
          <p className="tech-label">{copy.deliverables.label}</p>
          <ul className="mt-5 grid gap-3 md:grid-cols-2">
            {copy.deliverables.items.map((item) => (
              <li key={item} className="deliverable-item">
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-12 sm:mt-14">
          <KatemButton
            href={copy.ctaHref}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto"
          >
            {copy.cta}
          </KatemButton>
        </div>
      </div>
    </div>
  );
}
