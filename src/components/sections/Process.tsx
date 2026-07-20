import { Reveal } from "@/components/ui/Reveal";
import { processSteps } from "@/data/process";

export function Process() {
  return (
    <section
      id="proceso"
      aria-labelledby="proceso-heading"
      className="section section--alt"
    >
      <div className="section__inner">
        <Reveal>
          <p className="section__label">&gt; cómo trabajamos_</p>
          <h2 id="proceso-heading" className="section__title">
            Así trabajamos.
          </h2>
          <p className="section__lead">
            Un proceso simple, transparente y pensado para que puedas enfocarte
            en tu trabajo mientras nosotros nos ocupamos del resto.
          </p>
        </Reveal>

        <ol className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step, index) => (
            <li key={step.id}>
              <Reveal delay={index * 0.05}>
                <article className="h-full border-t-2 border-grid pt-5">
                  <p className="font-accent text-lg text-tinta/60">
                    {step.code}
                  </p>
                  <h3 className="mt-2 font-display text-xl font-semibold text-tinta">
                    {step.title}
                  </h3>
                  <p className="mt-3 font-body text-sm leading-relaxed text-tinta/75 sm:text-base">
                    {step.description}
                  </p>
                </article>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
