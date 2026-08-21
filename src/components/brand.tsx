import { Link } from "@tanstack/react-router";
import mark from "@/assets/mark.png";
import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <Link to="/" className={cn("inline-flex items-center gap-2", className)}>
      <img src={mark} alt="" width={36} height={36} className="h-8 w-8" />
      <span className="font-display text-lg font-bold tracking-tight">
        Match<span className="text-gradient">Fetch</span>
      </span>
    </Link>
  );
}

export function FetchButton({
  children = "FETCH!",
  onClick,
  loading,
  className,
  type = "button",
}: {
  children?: React.ReactNode;
  onClick?: () => void;
  loading?: boolean;
  className?: string;
  type?: "button" | "submit";
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={loading}
      className={cn(
        "group relative w-full overflow-hidden rounded-full px-8 py-4 font-display text-base font-bold uppercase tracking-[0.18em] text-fetch-foreground shadow-glow transition-transform duration-200 active:scale-[0.98] disabled:cursor-progress",
        className,
      )}
      style={{ backgroundImage: "var(--gradient-fetch)" }}
    >
      <span className="relative z-10">{loading ? "Fetching matches…" : children}</span>
      <span className="pointer-events-none absolute inset-0 overflow-hidden rounded-full">
        <span
          className={cn(
            "absolute inset-y-0 w-1/3 bg-background/25 blur-md",
            loading ? "animate-sweep" : "-translate-x-full",
          )}
        />
      </span>
    </button>
  );
}

export function Chip({
  children,
  onRemove,
  tone = "default",
}: {
  children: React.ReactNode;
  onRemove?: () => void;
  tone?: "default" | "accent";
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-sm",
        tone === "accent"
          ? "border-primary/40 bg-primary/10 text-primary"
          : "border-border bg-surface-2 text-foreground/90",
      )}
    >
      {children}
      {onRemove ? (
        <button
          onClick={onRemove}
          aria-label="Fjern filter"
          className="text-muted-foreground transition-colors hover:text-foreground"
        >
          ×
        </button>
      ) : null}
    </span>
  );
}

export function ScoreBadge({ score }: { score: number }) {
  return (
    <span className="inline-flex items-center gap-1 rounded-full border border-signal/40 bg-signal/10 px-2.5 py-1 font-display text-xs font-bold text-signal">
      {score}% match
    </span>
  );
}

export function NetworkTag({ name }: { name: string }) {
  return (
    <span className="rounded-md border border-border bg-surface px-2 py-0.5 text-[11px] uppercase tracking-wider text-muted-foreground">
      {name}
    </span>
  );
}
