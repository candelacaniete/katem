import type { Dictionary } from "@/i18n/dictionaries/es";
import { KatemButton } from "@/components/katem/KatemButton";
import { KatemLabel } from "@/components/katem/KatemLabel";

type ServicePageCopy =
  | Dictionary["pages"]["desarrolloWeb"]
  | Dictionary["pages"]["prospectionB2b"]
  | Dictionary["pages"]["publicidadDigital"]
  | Dictionary["pages"]["automatizaciones"];

type Props = {
  copy: ServicePageCopy;
};

export function ServicePageView({ copy }: Props) {
  return (
    <div className="section relative z-10">
      <div className="section__inner max-w-4xl">
        <KatemLabel>{copy.label}</KatemLabel>
        <h1 className="section__title">{copy.title}</h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-off-white/75 sm:text-lg">
          {copy.lead}
        </p>

        <div className="mt-14 space-y-10">
          {copy.sections.map((section) => (
            <section
              key={section.title}
              className="border-t border-off-white/10 pt-6"
            >
              <h2 className="font-display text-xl font-semibold tracking-tight text-off-white sm:text-2xl">
                {section.title}
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-off-white/65 sm:text-base">
                {section.body}
              </p>
            </section>
          ))}
        </div>

        <div className="mt-14 border-t border-off-white/10 pt-8">
          <p className="tech-label">{copy.deliverables.label}</p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {copy.deliverables.items.map((item) => (
              <li
                key={item}
                className="border-l border-pink/50 pl-4 font-mono text-[11px] uppercase tracking-[0.16em] text-off-white/70"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-14">
          <KatemButton
            href={copy.ctaHref}
            target="_blank"
            rel="noopener noreferrer"
          >
            {copy.cta}
          </KatemButton>
        </div>
      </div>
    </div>
  );
}
