"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import type { MorrowProduct } from "@/data/demos/morrow";

type CartItem = {
  product: MorrowProduct;
  qty: number;
};

type CartContextValue = {
  items: CartItem[];
  open: boolean;
  setOpen: (v: boolean) => void;
  add: (product: MorrowProduct, qty?: number) => void;
  remove: (slug: string) => void;
  setQty: (slug: string, qty: number) => void;
  count: number;
  subtotal: number;
};

const CartContext = createContext<CartContextValue | null>(null);

export function MorrowCartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [open, setOpen] = useState(false);

  const add = useCallback((product: MorrowProduct, qty = 1) => {
    setItems((prev) => {
      const existing = prev.find((i) => i.product.slug === product.slug);
      if (existing) {
        return prev.map((i) =>
          i.product.slug === product.slug
            ? { ...i, qty: i.qty + qty }
            : i
        );
      }
      return [...prev, { product, qty }];
    });
    setOpen(true);
  }, []);

  const remove = useCallback((slug: string) => {
    setItems((prev) => prev.filter((i) => i.product.slug !== slug));
  }, []);

  const setQty = useCallback((slug: string, qty: number) => {
    setItems((prev) =>
      prev
        .map((i) =>
          i.product.slug === slug ? { ...i, qty: Math.max(1, qty) } : i
        )
        .filter((i) => i.qty > 0)
    );
  }, []);

  const value = useMemo(() => {
    const count = items.reduce((n, i) => n + i.qty, 0);
    const subtotal = items.reduce((n, i) => n + i.qty * i.product.price, 0);
    return { items, open, setOpen, add, remove, setQty, count, subtotal };
  }, [items, open, add, remove, setQty]);

  return (
    <CartContext.Provider value={value}>{children}</CartContext.Provider>
  );
}

export function useMorrowCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useMorrowCart must be used within provider");
  return ctx;
}
