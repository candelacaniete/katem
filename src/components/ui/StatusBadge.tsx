type StatusBadgeProps = {
  label: string;
  className?: string;
};

export function StatusBadge({ label, className = "" }: StatusBadgeProps) {
  return (
    <span
      className={`inline-flex items-center font-accent text-base tracking-wide text-tinta/75 ${className}`.trim()}
    >
      {label}
    </span>
  );
}
