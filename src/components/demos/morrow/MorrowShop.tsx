"use client";

import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { ShoppingBag } from "lucide-react";
import { formatPrice, morrow } from "@/data/demos/morrow";
import { DemoBackToKatem } from "@/components/demos/shared/DemoBackToKatem";
import { useMorrowCart } from "./CartContext";
import { MorrowCartDrawer } from "./CartDrawer";

export function MorrowShop() {
  const params = useSearchParams();
  const cat = params.get("cat");
  const { count, setOpen } = useMorrowCart();

  const products = cat
    ? morrow.products.filter((p) => p.category === cat)
    : morrow.products;

  return (
    <div className="min-h-screen bg-[#141210] text-[#F3EDE4]">
      <DemoBackToKatem tone="dark" />
      <MorrowCartDrawer />

      <header className="flex items-center justify-between px-5 py-5 sm:px-8 lg:px-12">
        <Link
          href="/demos/morrow"
          className="text-[10px] uppercase tracking-[0.2em] text-white/45 hover:text-white"
        >
          ← Home
        </Link>
        <Link
          href="/demos/morrow"
          className="font-[family-name:var(--font-morrow-display)] tracking-[0.2em]"
        >
          MORROW
        </Link>
        <button type="button" className="relative" onClick={() => setOpen(true)}>
          <ShoppingBag size={16} strokeWidth={1.5} />
          {count > 0 ? (
            <span className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-[#F3EDE4] text-[9px] text-[#141210]">
              {count}
            </span>
          ) : null}
        </button>
      </header>

      <div className="mx-auto max-w-7xl px-5 pb-20 sm:px-8 lg:px-12">
        <h1 className="font-[family-name:var(--font-morrow-display)] text-3xl tracking-tight sm:text-4xl">
          Shop
        </h1>

        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/demos/morrow/shop"
            className={`text-[10px] uppercase tracking-[0.18em] ${
              !cat ? "text-white" : "text-white/40 hover:text-white"
            }`}
          >
            All
          </Link>
          {morrow.categories.map((c) => (
            <Link
              key={c.id}
              href={`/demos/morrow/shop?cat=${c.id}`}
              className={`text-[10px] uppercase tracking-[0.18em] ${
                cat === c.id ? "text-white" : "text-white/40 hover:text-white"
              }`}
            >
              {c.title}
            </Link>
          ))}
        </div>

        <ul className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-3 lg:gap-6">
          {products.map((product) => (
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
                    sizes="(max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <p className="mt-3 text-sm">{product.name}</p>
                <p className="mt-1 text-xs text-white/45">
                  {formatPrice(product.price)}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
