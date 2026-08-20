"use client";

import Image from "next/image";
import Link from "next/link";
import { formatPrice } from "@/data/demos/morrow";
import { useMorrowCart } from "./CartContext";

export function MorrowCartDrawer() {
  const { items, open, setOpen, remove, setQty, subtotal } = useMorrowCart();

  return (
    <>
      <div
        className={`fixed inset-0 z-[60] bg-black/50 transition-opacity ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={() => setOpen(false)}
        aria-hidden={!open}
      />
      <aside
        className={`fixed inset-y-0 right-0 z-[70] flex w-full max-w-md flex-col border-l border-white/10 bg-[#141210] text-[#F3EDE4] transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
        aria-hidden={!open}
        aria-label="Shopping cart"
      >
        <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
          <p className="text-[11px] uppercase tracking-[0.22em]">Cart</p>
          <button
            type="button"
            className="text-[11px] uppercase tracking-[0.18em] text-white/50 hover:text-white"
            onClick={() => setOpen(false)}
          >
            Close
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-5 py-4">
          {items.length === 0 ? (
            <p className="text-sm text-white/45">Your cart is empty.</p>
          ) : (
            <ul className="space-y-5">
              {items.map((item) => (
                <li key={item.product.slug} className="flex gap-4">
                  <Link
                    href={`/demos/morrow/product/${item.product.slug}`}
                    className="relative h-20 w-16 shrink-0 overflow-hidden bg-white/5"
                    onClick={() => setOpen(false)}
                  >
                    <Image
                      src={item.product.image}
                      alt=""
                      fill
                      className="object-cover"
                      sizes="64px"
                    />
                  </Link>
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm">{item.product.name}</p>
                    <p className="mt-1 text-xs text-white/45">
                      {formatPrice(item.product.price)}
                    </p>
                    <div className="mt-3 flex items-center gap-3">
                      <div className="flex items-center border border-white/20">
                        <button
                          type="button"
                          className="px-2 py-1 text-sm"
                          onClick={() =>
                            setQty(item.product.slug, item.qty - 1)
                          }
                          aria-label="Decrease quantity"
                        >
                          −
                        </button>
                        <span className="px-2 text-xs">{item.qty}</span>
                        <button
                          type="button"
                          className="px-2 py-1 text-sm"
                          onClick={() =>
                            setQty(item.product.slug, item.qty + 1)
                          }
                          aria-label="Increase quantity"
                        >
                          +
                        </button>
                      </div>
                      <button
                        type="button"
                        className="text-[10px] uppercase tracking-[0.16em] text-white/40 hover:text-white"
                        onClick={() => remove(item.product.slug)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="border-t border-white/10 px-5 py-5">
          <div className="flex justify-between text-sm">
            <span className="text-white/50">Subtotal</span>
            <span>{formatPrice(subtotal)}</span>
          </div>
          <p className="mt-2 text-[11px] text-white/35">
            Demo checkout — no payment required.
          </p>
          <button
            type="button"
            className="mt-4 w-full border border-[#F3EDE4] bg-[#F3EDE4] py-3 text-[11px] uppercase tracking-[0.18em] text-[#141210] transition-colors hover:bg-transparent hover:text-[#F3EDE4]"
            disabled={items.length === 0}
          >
            Checkout (demo)
          </button>
        </div>
      </aside>
    </>
  );
}
