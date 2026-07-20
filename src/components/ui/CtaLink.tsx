import type { ComponentPropsWithoutRef, ReactNode } from "react";

type Variant = "primary" | "secondary";

type CtaLinkProps = ComponentPropsWithoutRef<"a"> & {
  variant?: Variant;
  children: ReactNode;
};

export function CtaLink({
  variant = "primary",
  className = "",
  children,
  ...props
}: CtaLinkProps) {
  const variantClass =
    variant === "primary" ? "cta cta--primary" : "cta cta--secondary";

  return (
    <a className={`${variantClass} ${className}`.trim()} {...props}>
      {children}
    </a>
  );
}
