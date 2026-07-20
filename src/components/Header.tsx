"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { bookingHref, navLinks, site } from "@/lib/site";
import { CtaLink } from "@/components/ui/CtaLink";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="absolute inset-x-0 top-0 z-40">
      <div className="section__inner flex items-center justify-between gap-4 px-5 py-5 sm:px-8 lg:px-10">
        <a
          href="#inicio"
          className="font-display text-2xl font-semibold tracking-tight text-tinta sm:text-[1.65rem]"
        >
          {site.name.toLowerCase()}
        </a>

        <nav
          aria-label="Principal"
          className="hidden items-center gap-7 lg:flex"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-body text-sm text-tinta/80 transition-colors hover:text-tinta"
            >
              {link.label}
            </a>
          ))}
          <CtaLink href={bookingHref} target="_blank" rel="noopener noreferrer">
            Empezar proyecto
          </CtaLink>
        </nav>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-sm border border-grid/70 bg-papel/70 p-2 text-tinta lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">
            {open ? "Cerrar menú" : "Abrir menú"}
          </span>
          {open ? <X size={20} strokeWidth={1.5} /> : <Menu size={20} strokeWidth={1.5} />}
        </button>
      </div>

      {open ? (
        <div
          id="mobile-nav"
          className="border-b border-grid/60 bg-papel/95 px-5 pb-5 pt-1 backdrop-blur-sm sm:px-8 lg:hidden"
        >
          <nav aria-label="Móvil" className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="py-2 font-body text-base text-tinta/90"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <CtaLink
              href={bookingHref}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 w-full"
              onClick={() => setOpen(false)}
            >
              Empezar proyecto
            </CtaLink>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
