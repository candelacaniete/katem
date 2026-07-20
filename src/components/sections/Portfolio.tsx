import { ExternalLink } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { demos } from "@/data/portfolio";

export function Portfolio() {
  return (
    <section
      id="portafolio"
      aria-labelledby="portafolio-heading"
      className="section section--alt"
    >
      <div className="section__inner">
        <Reveal>
          <p className="section__label">&gt; demos_</p>
          <h2 id="portafolio-heading" className="section__title">
            Portafolio en construcción
          </h2>
          <p className="section__lead">
            Estamos armando demos reales por nicho. Empezamos por psicólogos —
            y vamos sumando sin reinventar la rueda.
          </p>
        </Reveal>

        <ul className="mt-10 grid gap-5 md:grid-cols-2">
          {demos.map((demo, index) => {
            const isLive = demo.status === "live" && Boolean(demo.href);

            return (
              <li key={demo.id}>
                <Reveal delay={index * 0.06}>
                  <article className="torn-edge flex h-full flex-col bg-papel p-6 sm:p-7">
                    <div className="flex items-start justify-between gap-3">
                      <StatusBadge label={demo.statusLabel} />
                      {isLive ? (
                        <a
                          href={demo.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 font-body text-sm text-tinta/70 transition-colors hover:text-neon"
                        >
                          Ver demo
                          <ExternalLink size={14} strokeWidth={1.5} aria-hidden />
                        </a>
                      ) : (
                        <span className="font-body text-sm text-tinta/45">
                          Pronto
                        </span>
                      )}
                    </div>

                    <h3 className="mt-5 font-display text-2xl font-semibold text-tinta">
                      {demo.title}
                    </h3>
                    <p className="mt-1 font-accent text-base text-tinta/60">
                      {demo.niche}
                    </p>
                    <p className="mt-4 font-body text-sm leading-relaxed text-tinta/75 sm:text-base">
                      {demo.description}
                    </p>
                  </article>
                </Reveal>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
