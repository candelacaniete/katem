import { InstagramIcon } from "@/components/ui/InstagramIcon";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-grid/60 bg-papel px-5 py-10 sm:px-8 lg:px-10">
      <div className="section__inner flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="font-display text-xl font-semibold text-tinta">
            {site.name.toLowerCase()}
          </p>
          <p className="mt-1 font-body text-sm text-tinta/70">
            Diseño y desarrollo web para profesionales del bienestar.
          </p>
        </div>

        <div className="flex flex-col gap-3 font-body text-sm text-tinta/75 sm:items-end">
          <div className="flex flex-col gap-1 sm:items-end">
            <a
              href={`https://${site.domain}`}
              className="transition-colors hover:text-rosa-katem"
            >
              {site.domain}
            </a>
            <a
              href={`mailto:${site.email}`}
              className="transition-colors hover:text-rosa-katem"
            >
              {site.email}
            </a>
          </div>

          <a
            href={site.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram de Katem"
            className="inline-flex items-center justify-center text-tinta/70 transition-colors hover:text-rosa-katem"
          >
            <InstagramIcon size={20} strokeWidth={1.5} />
          </a>

          <p className="font-accent text-base text-tinta/55">
            © {site.year} · {site.name}
          </p>
        </div>
      </div>
    </footer>
  );
}
