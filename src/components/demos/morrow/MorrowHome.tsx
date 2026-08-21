"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, Search, ShoppingBag, User, X } from "lucide-react";
import { formatPrice, morrow } from "@/data/demos/morrow";
import { DemoBackToKatem } from "@/components/demos/shared/DemoBackToKatem";
import { useMorrowCart } from "./CartContext";
import { MorrowCartDrawer } from "./CartDrawer";

export function MorrowHome() {
  const { count, setOpen } = useMorrowCart();
  const [menuOpen, setMenuOpen] = useState(false);
  const arrivals = morrow.products.slice(0, 4);

  return (
    <div className="morrow-root min-h-screen bg-[#141210] text-[#F3EDE4] antialiased">
      <DemoBackToKatem tone="dark" />
      <MorrowCartDrawer />

      <header className="relative z-40 flex items-center justify-between px-5 py-5 sm:px-8 lg:px-12">
        <button
          type="button"
          className="lg:hidden"
          aria-label="Menu"
          onClick={() => setMenuOpen((v) => !v)}
        >
          {menuOpen ? <X size={18} strokeWidth={1.5} /> : <Menu size={18} strokeWidth={1.5} />}
        </button>

        <nav className="hidden items-center gap-6 lg:flex">
          {morrow.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[10px] uppercase tracking-[0.22em] text-white/55 transition-colors hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/demos/morrow"
          className="absolute left-1/2 -translate-x-1/2 font-[family-name:var(--font-morrow-display)] text-xl tracking-[0.2em]"
        >
          {morrow.name}
        </Link>

        <div className="flex items-center gap-3">
          <button type="button" aria-label="Search" className="hidden sm:inline-flex">
            <Search size={16} strokeWidth={1.5} />
          </button>
          <button type="button" aria-label="Account" className="hidden sm:inline-flex">
            <User size={16} strokeWidth={1.5} />
          </button>
          <button
            type="button"
            aria-label="Cart"
            className="relative"
            onClick={() => setOpen(true)}
          >
            <ShoppingBag size={16} strokeWidth={1.5} />
            {count > 0 ? (
              <span className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-[#F3EDE4] text-[9px] text-[#141210]">
                {count}
              </span>
            ) : null}
          </button>
        </div>
      </header>

      {menuOpen ? (
        <div className="border-b border-white/10 px-5 pb-6 lg:hidden">
          <nav className="flex flex-col gap-4">
            {morrow.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm uppercase tracking-[0.18em] text-white/75"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      ) : null}

      {/* HERO */}
      <section className="mx-auto grid max-w-7xl items-center gap-10 px-5 pb-16 pt-8 sm:px-8 lg:grid-cols-2 lg:gap-16 lg:px-12 lg:pb-24 lg:pt-12">
        <div>
          <h1 className="font-[family-name:var(--font-morrow-display)] text-[clamp(2.4rem,6vw,4.8rem)] font-medium leading-[0.95] tracking-tight">
            {morrow.tagline}
          </h1>
          <p className="mt-5 max-w-md text-base text-white/55">
            {morrow.subhead}
          </p>
          <Link
            href="/demos/morrow/shop"
            className="mt-8 inline-flex text-[11px] uppercase tracking-[0.2em] underline underline-offset-4 hover:text-white/70"
          >
            SHOP THE COLLECTION →
          </Link>
        </div>
        <div className="relative aspect-[4/5] overflow-hidden bg-white/5">
          <Image
            src={morrow.heroImage}
            alt="Morrow lamp"
            fill
            priority
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
      </section>

      {/* NEW ARRIVALS */}
      <section className="border-t border-white/10 px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-end justify-between">
            <h2 className="font-[family-name:var(--font-morrow-display)] text-2xl tracking-tight sm:text-3xl">
              New Arrivals
            </h2>
            <Link
              href="/demos/morrow/shop"
              className="text-[10px] uppercase tracking-[0.2em] text-white/45 hover:text-white"
            >
              View all
            </Link>
          </div>
          <ul className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-6">
            {arrivals.map((product) => (
              <li key={product.slug}>
                <Link
                  href={`/demos/morrow/product/${product.slug}`}
                  className="group block"
                >
                  <div className="relative aspect-square overflow-hidden bg-white/5">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                      sizes="(max-width: 1024px) 50vw, 25vw"
                    />
                  </div>
                  <p className="mt-3 text-sm tracking-wide">{product.name}</p>
                  <p className="mt-1 text-xs text-white/45">
                    {formatPrice(product.price)}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* EDITORIAL */}
      <section
        id="journal"
        className="relative min-h-[70vh] overflow-hidden"
      >
        <Image
          src={morrow.editorialImage}
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 flex min-h-[70vh] items-center px-5 sm:px-8 lg:px-12">
          <h2 className="max-w-xl font-[family-name:var(--font-morrow-display)] text-[clamp(2rem,6vw,4rem)] leading-[1.05]">
            DESIGNED TO BE USED.
            <br />
            MADE TO BE KEPT.
          </h2>
        </div>
      </section>

      {/* CATEGORIES */}
      <section id="collections" className="px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <h2 className="font-[family-name:var(--font-morrow-display)] text-2xl tracking-tight sm:text-3xl">
            Shop by Category
          </h2>
          <ul className="mt-10 grid grid-cols-2 gap-3 lg:grid-cols-4 lg:gap-5">
            {morrow.categories.map((cat) => (
              <li key={cat.id}>
                <Link
                  href={`/demos/morrow/shop?cat=${cat.id}`}
                  className="group relative block aspect-square overflow-hidden bg-white/5"
                >
                  <Image
                    src={cat.image}
                    alt={cat.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-black/35" />
                  <span className="absolute inset-x-0 bottom-0 p-4 text-[11px] uppercase tracking-[0.22em]">
                    {cat.title}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="border-t border-white/10 px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2">
          <h2 className="font-[family-name:var(--font-morrow-display)] text-3xl tracking-tight">
            Objects for a slower day.
          </h2>
          <p className="max-w-lg text-base leading-relaxed text-white/55">
            Morrow designs and curates objects meant to stay. No trends, no
            noise — just materials, proportion and use. This is a demo store
            built by Katem to show how a premium ecommerce experience can feel.
          </p>
        </div>
      </section>

      <footer className="border-t border-white/10 px-5 py-12 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-10 sm:grid-cols-3">
          <div>
            <p className="font-[family-name:var(--font-morrow-display)] tracking-[0.2em]">
              MORROW
            </p>
            <p className="mt-3 text-sm text-white/40">
              © 2026 · Buenos Aires
            </p>
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-[0.2em] text-white/40">
              Newsletter
            </p>
            <form
              className="mt-3 flex border-b border-white/20"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                placeholder="Email"
                className="w-full bg-transparent py-2 text-sm outline-none placeholder:text-white/30"
              />
              <button type="submit" className="text-[10px] uppercase tracking-[0.16em]">
                Join
              </button>
            </form>
          </div>
          <div className="flex gap-5 text-[10px] uppercase tracking-[0.18em] text-white/45">
            <a href="#">Instagram</a>
            <a href="#">Pinterest</a>
            <a href="mailto:hello@morrow.store">Email</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
