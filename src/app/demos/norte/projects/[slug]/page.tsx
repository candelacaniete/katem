import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import { getNorteProject, norte } from "@/data/demos/norte";
import { DemoBackToKatem } from "@/components/demos/shared/DemoBackToKatem";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-norte-display",
  weight: ["400", "500", "600"],
});

const body = Manrope({
  subsets: ["latin"],
  variable: "--font-norte-body",
  weight: ["400", "500", "600"],
});

export function generateStaticParams() {
  return norte.projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const project = getNorteProject(params.slug);
  if (!project) return {};
  return {
    title: `${project.title} — NORTE`,
    description: project.summary,
  };
}

export default function NorteProjectPage({
  params,
}: {
  params: { slug: string };
}) {
  const project = getNorteProject(params.slug);
  if (!project) notFound();

  return (
    <div
      className={`${display.variable} ${body.variable} min-h-screen bg-[#E9E2D8] font-[family-name:var(--font-norte-body)] text-[#161412]`}
    >
      <DemoBackToKatem tone="light" />
      <div className="px-5 pb-20 pt-20 sm:px-8 lg:px-12">
        <Link
          href="/demos/norte#projects"
          className="text-[10px] uppercase tracking-[0.22em] text-black/45 hover:text-black"
        >
          ← All projects
        </Link>

        <div className="mx-auto mt-8 grid max-w-7xl gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
          <div className="relative aspect-[4/5] overflow-hidden bg-[#d6cec2]">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 60vw"
              priority
            />
          </div>
          <div className="lg:pt-8">
            <p className="text-[10px] uppercase tracking-[0.22em] text-black/40">
              {project.category} · {project.year}
            </p>
            <h1 className="mt-4 font-[family-name:var(--font-norte-display)] text-5xl tracking-tight">
              {project.title}
            </h1>
            <p className="mt-3 text-[11px] uppercase tracking-[0.18em] text-black/50">
              {project.location}
            </p>
            <p className="mt-8 text-base leading-relaxed text-black/65">
              {project.summary}
            </p>
            <dl className="mt-10 space-y-3 border-t border-black/10 pt-6 text-sm">
              <div className="flex justify-between gap-4">
                <dt className="text-black/40">Year</dt>
                <dd>{project.year}</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-black/40">Location</dt>
                <dd>{project.location}</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-black/40">Type</dt>
                <dd>{project.category}</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}
