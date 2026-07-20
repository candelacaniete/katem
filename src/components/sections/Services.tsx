import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { services } from "@/data/services";

export function Services() {
  return (
    <section
      id="servicios"
      aria-labelledby="servicios-heading"
      className="section section--alt"
    >
      <div className="section__inner">
        <Reveal>
          <p className="section__label">&gt; qué hacemos_</p>
          <h2 id="servicios-heading" className="section__title">
            Elegí la solución que mejor se adapta a tu negocio.
          </h2>
        </Reveal>

        <ul className="mt-10 grid gap-5 md:grid-cols-3">
          {services.map((service, index) => (
            <li key={service.id}>
              <Reveal delay={index * 0.06}>
                <article className="torn-edge group flex h-full flex-col bg-papel p-6 transition-colors duration-200 hover:border-rosa-katem sm:p-7">
                  <div className="mb-5 flex items-start justify-between gap-3">
                    <h3 className="font-display text-xl font-semibold text-tinta sm:text-2xl">
                      {service.title}
                    </h3>
                    <ArrowUpRight
                      size={18}
                      strokeWidth={1.5}
                      className="shrink-0 text-grid transition-colors group-hover:text-rosa-katem"
                      aria-hidden
                    />
                  </div>
                  <p className="font-body text-sm leading-relaxed text-tinta/80 sm:text-base">
                    {service.description}
                  </p>
                  <div className="mt-auto pt-6">
                    <p className="font-body text-sm font-semibold text-tinta/80 sm:text-base">
                      {service.pointsIntro}
                    </p>
                    <ul className="mt-3 space-y-2">
                      {service.points.map((point) => (
                        <li
                          key={point}
                          className="font-body text-sm leading-relaxed text-tinta/75 sm:text-base"
                        >
                          ✓ {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
