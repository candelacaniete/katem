"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { nova } from "@/data/demos/nova";
import { DemoBackToKatem } from "@/components/demos/shared/DemoBackToKatem";
import { cn } from "@/lib/cn";

export function NovaHome() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openService, setOpenService] = useState<string | null>("identity");
  const [hoveredWork, setHoveredWork] = useState<string | null>(null);

  return (
    <div className="nova-root min-h-screen bg-white text-black antialiased">
      <DemoBackToKatem tone="pink" />

      <header className="relative z-40 flex items-center justify-between px-5 py-5 sm:px-8 lg:px-12">
        <Link href="/demos/nova" className="font-[family-name:var(--font-nova-display)] text-xl font-semibold tracking-tight">
          {nova.name}
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          {nova.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[11px] uppercase tracking-[0.2em] text-black/60 transition-colors hover:text-black"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <button
          type="button"
          className="md:hidden"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen((v) => !v)}
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </header>

      {menuOpen ? (
        <div className="border-b border-black/10 bg-white px-5 pb-6 md:hidden">
          <nav className="flex flex-col gap-4">
            {nova.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm uppercase tracking-[0.18em]"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      ) : null}

      {/* HERO */}
      <section className="relative overflow-hidden bg-[#F4D4DA]">
        <div className="mx-auto grid max-w-7xl items-end gap-10 px-5 pb-16 pt-10 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-8 lg:px-12 lg:pb-20 lg:pt-16">
          <div className="relative z-10 max-w-2xl pb-4">
            <h1 className="font-[family-name:var(--font-nova-display)] text-[clamp(2.4rem,7vw,5.2rem)] font-semibold leading-[0.92] tracking-tight text-black">
              {nova.tagline}
            </h1>
            <p className="mt-6 max-w-md text-base leading-relaxed text-black/70 sm:text-lg">
              {nova.subhead}
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-8">
              <a
                href="#contact"
                className="inline-flex text-sm font-semibold uppercase tracking-[0.16em] underline underline-offset-4 transition-opacity hover:opacity-60"
              >
                START A CONVERSATION →
              </a>
              <a
                href="#work"
                className="inline-flex text-sm font-semibold uppercase tracking-[0.16em] text-black/55 transition-colors hover:text-black"
              >
                VIEW SELECTED WORK →
              </a>
            </div>
          </div>

          <div className="relative mx-auto aspect-[3/4] w-full max-w-md overflow-hidden lg:mx-0 lg:max-w-none lg:translate-y-8">
            <Image
              src={nova.heroImage}
              alt="NOVA editorial portrait"
              fill
              priority
              className="object-cover object-center contrast-125 saturate-50"
              sizes="(max-width: 1024px) 90vw, 40vw"
            />
            <div className="absolute inset-0 bg-[#8B1E2D]/25 mix-blend-multiply" />
          </div>
        </div>
      </section>

      {/* WORK */}
      <section id="work" className="bg-white px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-end justify-between gap-4">
            <h2 className="font-[family-name:var(--font-nova-display)] text-2xl font-semibold tracking-tight sm:text-3xl">
              SELECTED WORK
            </h2>
            <a
              href="#work"
              className="text-[11px] uppercase tracking-[0.18em] text-black/50 hover:text-black"
            >
              VIEW ALL →
            </a>
          </div>

          <ul className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {nova.work.map((project) => (
              <li key={project.slug}>
                <a
                  href={`#work-${project.slug}`}
                  className="group block"
                  onMouseEnter={() => setHoveredWork(project.slug)}
                  onMouseLeave={() => setHoveredWork(null)}
                >
                  <div className="relative aspect-[3/4] overflow-hidden bg-neutral-100">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                      sizes="(max-width: 1024px) 50vw, 30vw"
                    />
                    <div
                      className={cn(
                        "absolute inset-0 flex items-end bg-black/0 p-4 transition-colors duration-300",
                        hoveredWork === project.slug && "bg-black/25"
                      )}
                    >
                      <span
                        className={cn(
                          "translate-y-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-white opacity-0 transition-all duration-300",
                          hoveredWork === project.slug &&
                            "translate-y-0 opacity-100"
                        )}
                      >
                        VIEW CASE →
                      </span>
                    </div>
                  </div>
                  <p className="mt-4 font-[family-name:var(--font-nova-display)] text-lg font-semibold tracking-tight">
                    {project.title}
                  </p>
                  <p className="mt-1 text-sm text-black/50">{project.tags}</p>
                </a>
              </li>
            ))}
          </ul>

          <div className="mt-16 space-y-10 border-t border-black/10 pt-12">
            {nova.work.map((project) => (
              <article
                key={project.slug}
                id={`work-${project.slug}`}
                className="grid gap-6 scroll-mt-24 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-neutral-100 lg:aspect-[5/4]">
                  <Image
                    src={project.image}
                    alt=""
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 45vw"
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <p className="text-[11px] uppercase tracking-[0.2em] text-black/45">
                    {project.tags}
                  </p>
                  <h3 className="mt-3 font-[family-name:var(--font-nova-display)] text-3xl font-semibold tracking-tight">
                    {project.title}
                  </h3>
                  <p className="mt-4 max-w-lg text-base leading-relaxed text-black/65">
                    {project.summary}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES ACCORDION */}
      <section id="services" className="bg-white px-5 pb-20 sm:px-8 lg:px-12 lg:pb-28">
        <div className="mx-auto max-w-7xl">
          <h2 className="font-[family-name:var(--font-nova-display)] text-2xl font-semibold tracking-tight sm:text-3xl">
            WHAT WE DO
          </h2>
          <ul className="mt-10 divide-y divide-black/10 border-y border-black/10">
            {nova.services.map((service) => {
              const open = openService === service.id;
              return (
                <li key={service.id}>
                  <button
                    type="button"
                    className="flex w-full items-center justify-between gap-4 py-6 text-left"
                    aria-expanded={open}
                    onClick={() =>
                      setOpenService(open ? null : service.id)
                    }
                  >
                    <span className="font-[family-name:var(--font-nova-display)] text-2xl font-semibold tracking-tight sm:text-4xl">
                      {service.title}
                    </span>
                    <span className="text-2xl text-black/40">{open ? "−" : "+"}</span>
                  </button>
                  <div
                    className={cn(
                      "grid transition-[grid-template-rows] duration-300",
                      open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    )}
                  >
                    <div className="overflow-hidden">
                      <p className="max-w-2xl pb-6 text-base leading-relaxed text-black/60">
                        {service.body}
                      </p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="bg-[#F7F3F0] px-5 py-20 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:gap-16">
          <h2 className="font-[family-name:var(--font-nova-display)] text-3xl font-semibold tracking-tight sm:text-4xl">
            {nova.about.title}
          </h2>
          <p className="max-w-xl text-lg leading-relaxed text-black/65">
            {nova.about.body}
          </p>
        </div>
      </section>

      {/* CONTACT / METHOD */}
      <section id="contact" className="bg-black px-5 py-24 text-white sm:px-8 lg:px-12 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <h2 className="max-w-3xl font-[family-name:var(--font-nova-display)] text-[clamp(2rem,6vw,4.5rem)] font-semibold leading-[0.95] tracking-tight">
            {nova.contact.title}
          </h2>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-white/60">
            {nova.contact.body}
          </p>
          <a
            href={`mailto:${nova.contact.email}`}
            className="mt-10 inline-flex border border-white/40 px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.18em] transition-colors hover:bg-white hover:text-black"
          >
            {nova.contact.cta}
          </a>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-black px-5 py-10 text-white sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-[family-name:var(--font-nova-display)] text-lg font-semibold">
              NOVA © 2026
            </p>
            <p className="mt-2 text-[11px] uppercase tracking-[0.18em] text-white/40">
              Buenos Aires / Argentina / Worldwide
            </p>
          </div>
          <div className="flex gap-6 text-[11px] uppercase tracking-[0.18em] text-white/50">
            <a href="#" className="hover:text-white">
              Instagram
            </a>
            <a href="#" className="hover:text-white">
              LinkedIn
            </a>
            <a href={`mailto:${nova.contact.email}`} className="hover:text-white">
              Email
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
