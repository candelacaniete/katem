"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ShoppingBag } from "lucide-react";
import type { MorrowProduct } from "@/data/demos/morrow";
import { formatPrice } from "@/data/demos/morrow";
import { DemoBackToKatem } from "@/components/demos/shared/DemoBackToKatem";
import { useMorrowCart } from "./CartContext";
import { MorrowCartDrawer } from "./CartDrawer";

type Props = {
  product: MorrowProduct;
};

export function MorrowProductView({ product }: Props) {
  const { add, count, setOpen } = useMorrowCart();
  const [qty, setQty] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  const [added, setAdded] = useState(false);

  const onAdd = () => {
    add(product, qty);
    setAdded(true);
    window.setTimeout(() => setAdded(false), 1600);
  };

  return (
    <div className="min-h-screen bg-[#141210] text-[#F3EDE4]">
      <DemoBackToKatem tone="dark" />
      <MorrowCartDrawer />

      <header className="flex items-center justify-between px-5 py-5 sm:px-8 lg:px-12">
        <Link
          href="/demos/morrow/shop"
          className="text-[10px] uppercase tracking-[0.2em] text-white/45 hover:text-white"
        >
          ← Shop
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

      <div className="mx-auto grid max-w-7xl gap-10 px-5 pb-20 lg:grid-cols-2 lg:gap-16 lg:px-12">
        <div>
          <div className="relative aspect-square overflow-hidden bg-white/5">
            <Image
              src={product.images[activeImage] ?? product.image}
              alt={product.name}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
          </div>
          {product.images.length > 1 ? (
            <ul className="mt-3 flex gap-2">
              {product.images.map((src, i) => (
                <li key={src}>
                  <button
                    type="button"
                    className={`relative h-16 w-14 overflow-hidden border ${
                      i === activeImage ? "border-white" : "border-transparent"
                    }`}
                    onClick={() => setActiveImage(i)}
                  >
                    <Image src={src} alt="" fill className="object-cover" sizes="56px" />
                  </button>
                </li>
              ))}
            </ul>
          ) : null}
        </div>

        <div className="lg:pt-4">
          <p className="text-[10px] uppercase tracking-[0.22em] text-white/40">
            {product.category}
          </p>
          <h1 className="mt-3 font-[family-name:var(--font-morrow-display)] text-4xl tracking-tight">
            {product.name}
          </h1>
          <p className="mt-3 text-lg">{formatPrice(product.price)}</p>
          <p className="mt-6 max-w-md text-sm leading-relaxed text-white/55">
            {product.description}
          </p>

          <div className="mt-8 flex items-center gap-4">
            <div className="flex items-center border border-white/25">
              <button
                type="button"
                className="px-3 py-2"
                onClick={() => setQty((q) => Math.max(1, q - 1))}
              >
                −
              </button>
              <span className="px-3 text-sm">{qty}</span>
              <button
                type="button"
                className="px-3 py-2"
                onClick={() => setQty((q) => q + 1)}
              >
                +
              </button>
            </div>
            <button
              type="button"
              onClick={onAdd}
              className="flex-1 border border-[#F3EDE4] bg-[#F3EDE4] py-3 text-[11px] uppercase tracking-[0.18em] text-[#141210] transition-colors hover:bg-transparent hover:text-[#F3EDE4]"
            >
              {added ? "Added ✓" : "Add to cart"}
            </button>
          </div>

          <dl className="mt-10 space-y-4 border-t border-white/10 pt-6 text-sm">
            <div>
              <dt className="text-[10px] uppercase tracking-[0.18em] text-white/40">
                Materials
              </dt>
              <dd className="mt-1 text-white/70">{product.materials}</dd>
            </div>
            <div>
              <dt className="text-[10px] uppercase tracking-[0.18em] text-white/40">
                Shipping
              </dt>
              <dd className="mt-1 text-white/70">{product.shipping}</dd>
            </div>
            <div>
              <dt className="text-[10px] uppercase tracking-[0.18em] text-white/40">
                Availability
              </dt>
              <dd className="mt-1 text-white/70">{product.availability}</dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
}
