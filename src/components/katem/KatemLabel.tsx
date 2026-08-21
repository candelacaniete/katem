import { cn } from "@/lib/cn";

type Props = {
  children: React.ReactNode;
  className?: string;
};

export function KatemLabel({ children, className }: Props) {
  return <p className={cn("tech-label", className)}>{children}</p>;
}
