"use client";

import { useState } from "react";
import { cn } from "@/lib/cn";

type FaqItem = {
  question: string;
  answer: string;
};

type Props = {
  label: string;
  items: FaqItem[];
};

export function ServiceFaq({ label, items }: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div>
      <p className="tech-label">{label}</p>
      <ul className="mt-5 divide-y divide-off-white/10 border-y border-off-white/10">
        {items.map((item, index) => {
          const open = openIndex === index;
          return (
            <li key={item.question}>
              <button
                type="button"
                className="flex w-full items-center justify-between gap-4 py-4 text-left transition-colors hover:text-pink"
                aria-expanded={open}
                onClick={() => setOpenIndex(open ? null : index)}
                data-cursor="open"
              >
                <span className="font-display text-base font-semibold tracking-tight text-off-white sm:text-lg">
                  {item.question}
                </span>
                <span
                  className={cn(
                    "font-mono text-sm text-pink transition-transform duration-300 ease-out",
                    open && "rotate-45"
                  )}
                  aria-hidden
                >
                  +
                </span>
              </button>
              <div
                className={cn(
                  "grid transition-[grid-template-rows,opacity] duration-300 ease-out",
                  open
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                )}
              >
                <div className="overflow-hidden">
                  <p className="max-w-3xl pb-4 text-sm leading-relaxed text-off-white/65 sm:text-base">
                    {item.answer}
                  </p>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
