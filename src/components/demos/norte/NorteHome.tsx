"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { norte } from "@/data/demos/norte";
import { DemoBackToKatem } from "@/components/demos/shared/DemoBackToKatem";

export function NorteHome() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="norte-root min-h-screen bg-[#E9E2D8] text-[#161412] antialiased">
      <DemoBackToKatem tone="light" className="border-[#161412]/15 bg-[#E9E2D8]/80 text-[#161412]/55 hover:text-[#161412]" />

      {/* HERO */}
      <section className="relative min-h-[100svh] overflow-hidden bg-black text-white">
        <Image
          src={norte.heroImage}
          alt="NORTE architecture"
          fill
          priority
          className="object-cover object-center opacity-80"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/40" />

        <header className="relative z-20 flex items-center justify-between px-5 py-6 sm:px-8 lg:px-12">
          <Link
            href="/demos/norte"
            className="font-[family-name:var(--font-norte-display)] text-2xl tracking-[0.08em]"
          >
            {norte.name}
          </Link>
          <nav className="hidden items-center gap-7 lg:flex">
            {norte.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-[10px] uppercase tracking-[0.22em] text-white/70 transition-colors hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <button
            type="button"
            className="lg:hidden"
            aria-label="Menu"
            onClick={() => setMenuOpen((v) => !v)}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </header>

        {menuOpen ? (
          <div className="relative z-20 border-b border-white/10 bg-black/90 px-5 pb-6 lg:hidden">
            <nav className="flex flex-col gap-4">
              {norte.nav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-sm uppercase tracking-[0.18em] text-white/80"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        ) : null}

        <div className="relative z-10 flex min-h-[calc(100svh-88px)] flex-col justify-end px-5 pb-16 sm:px-8 lg:px-12 lg:pb-24">
          <p className="text-[10px] uppercase tracking-[0.28em] text-white/55">
            {norte.category}
          </p>
          <h1 className="mt-4 max-w-3xl font-[family-name:var(--font-norte-display)] text-[clamp(2.6rem,8vw,5.8rem)] leading-[0.95] tracking-tight">
            {norte.tagline}
          </h1>
          <p className="mt-5 max-w-md text-base text-white/70">
            {norte.subhead}
          </p>
          <p className="mt-8 text-[10px] uppercase tracking-[0.28em] text-white/50">
            {norte.location}
          </p>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-end justify-between gap-4">
            <h2 className="font-[family-name:var(--font-norte-display)] text-3xl tracking-tight sm:text-4xl">
              Selected Projects
            </h2>
            <p className="text-[10px] uppercase tracking-[0.22em] text-black/40">
              01 — 04
            </p>
          </div>

          <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {norte.projects.map((project) => (
              <li key={project.slug}>
                <Link
                  href={`/demos/norte/projects/${project.slug}`}
                  className="group block"
                >
                  <div className="relative aspect-[3/4] overflow-hidden bg-[#d6cec2]">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                      sizes="(max-width: 1024px) 50vw, 25vw"
                    />
                  </div>
                  <p className="mt-4 font-[family-name:var(--font-norte-display)] text-lg tracking-wide">
                    {project.title}
                  </p>
                  <p className="mt-1 text-[11px] uppercase tracking-[0.16em] text-black/45">
                    {project.location} · {project.year}
                  </p>
                  <p className="mt-1 text-[11px] uppercase tracking-[0.16em] text-black/35">
                    {project.category}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* STUDIO */}
      <section id="studio" className="bg-[#161412] px-5 py-20 text-[#E9E2D8] sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div>
            <h2 className="font-[family-name:var(--font-norte-display)] text-[clamp(2rem,5vw,3.8rem)] leading-[1.05]">
              {norte.studio.title}
            </h2>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-[#E9E2D8]/65">
              {norte.studio.body}
            </p>
          </div>
          <dl className="grid grid-cols-2 gap-8 self-end">
            {norte.metrics.map((m) => (
              <div key={m.label} className="border-t border-white/15 pt-4">
                <dt className="font-[family-name:var(--font-norte-display)] text-3xl sm:text-4xl">
                  {m.value}
                </dt>
                <dd className="mt-2 text-[10px] uppercase tracking-[0.22em] text-white/45">
                  {m.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <h2 className="font-[family-name:var(--font-norte-display)] text-3xl tracking-tight sm:text-4xl">
            Services
          </h2>
          <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {norte.services.map((service, i) => (
              <li
                key={service.id}
                className="border border-[#161412]/15 bg-[#E9E2D8] p-6 transition-colors hover:bg-[#161412] hover:text-[#E9E2D8]"
              >
                <p className="font-mono text-[10px] tracking-[0.2em] opacity-50">
                  0{i + 1}
                </p>
                <div className="mt-6 h-8 w-8 border border-current opacity-60" />
                <h3 className="mt-6 font-[family-name:var(--font-norte-display)] text-xl tracking-wide">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed opacity-65">
                  {service.body}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* THE STUDIO / TEAM */}
      <section className="bg-[#161412] px-5 py-20 text-[#E9E2D8] sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="font-[family-name:var(--font-norte-display)] text-3xl sm:text-4xl">
              The Studio
            </h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-[#E9E2D8]/65">
              Un equipo pequeño, un método claro y una obsesión por el detalle
              material. Diseñamos para que los espacios envejezcan bien.
            </p>
            <a
              href="#contact"
              className="mt-8 inline-flex text-[11px] uppercase tracking-[0.2em] underline underline-offset-4"
            >
              MEET THE TEAM →
            </a>
          </div>
          <div className="relative aspect-[5/4] overflow-hidden">
            <Image
              src={norte.teamImage}
              alt="NORTE studio"
              fill
              className="object-cover grayscale"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* JOURNAL */}
      <section id="journal" className="relative min-h-[60vh] overflow-hidden">
        <Image
          src={norte.journalImage}
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/45" />
        <div className="relative z-10 flex min-h-[60vh] items-end px-5 py-16 sm:px-8 lg:px-12">
          <div>
            <p className="text-[10px] uppercase tracking-[0.28em] text-white/60">
              Journal
            </p>
            <h2 className="mt-3 max-w-xl font-[family-name:var(--font-norte-display)] text-3xl text-white sm:text-5xl">
              Material notes from the studio.
            </h2>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="bg-[#E9E2D8] px-5 py-20 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <h2 className="font-[family-name:var(--font-norte-display)] text-4xl tracking-tight">
            {norte.contact.title}
          </h2>
          <div className="mt-8 flex flex-col gap-3 text-sm uppercase tracking-[0.16em] text-black/55">
            <a href={`mailto:${norte.contact.email}`} className="hover:text-black">
              {norte.contact.email}
            </a>
            <p>{norte.contact.phone}</p>
            <p>{norte.location}</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-black/10 px-5 py-8 text-[10px] uppercase tracking-[0.2em] text-black/40 sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 sm:flex-row sm:justify-between">
          <p>NORTE © 2026</p>
          <p>Architecture & Design · Buenos Aires</p>
        </div>
      </footer>
    </div>
  );
}
