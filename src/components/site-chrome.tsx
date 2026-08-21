import { Link } from "@tanstack/react-router";
import { Logo } from "@/components/brand";

const navItems = [
  { to: "/fetch", label: "Fetch" },
  { to: "/priser", label: "Priser" },
  { to: "/privatliv", label: "Privatliv" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 glass">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <Logo />
        <nav className="hidden items-center gap-6 text-sm text-muted-foreground md:flex">
          {navItems.map((i) => (
            <Link key={i.to} to={i.to} className="transition-colors hover:text-foreground">
              {i.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Link
            to="/log-ind"
            className="rounded-full px-4 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Log ind
          </Link>
          <Link
            to="/fetch"
            className="rounded-full border border-primary/40 bg-primary/10 px-4 py-2 text-sm font-semibold text-primary transition-colors hover:bg-primary/20"
          >
            Opret profil
          </Link>
        </div>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border px-4 py-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <Logo />
          <p className="mt-3 max-w-sm text-sm text-muted-foreground">
            Don’t swipe. Fetch. En del af Datez-netværket – du bestemmer selv, hvor din profil kan
            findes.
          </p>
        </div>
        <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
          {navItems.map((i) => (
            <Link key={i.to} to={i.to} className="transition-colors hover:text-foreground">
              {i.label}
            </Link>
          ))}
          <Link to="/log-ind" className="transition-colors hover:text-foreground">
            Log ind
          </Link>
        </div>
      </div>
    </footer>
  );
}

export function MobileTabBar() {
  return (
    <nav className="fixed inset-x-0 bottom-0 z-40 glass md:hidden">
      <div className="mx-auto grid max-w-md grid-cols-5 items-end px-3 pb-3 pt-2 text-[11px]">
        <TabLink to="/fetch" label="Matches" />
        <TabLink to="/fetch" label="Likes" />
        <div className="flex justify-center">
          <Link
            to="/fetch"
            className="animate-pulse-ring -mt-8 flex h-16 w-16 items-center justify-center rounded-full font-display text-xs font-bold uppercase tracking-widest text-fetch-foreground shadow-glow"
            style={{ backgroundImage: "var(--gradient-fetch)" }}
          >
            Fetch
          </Link>
        </div>
        <TabLink to="/fetch" label="Beskeder" badge={3} />
        <TabLink to="/profil/$id" params={{ id: "emma" }} label="Profil" />
      </div>
    </nav>
  );
}

function TabLink({
  to,
  label,
  badge,
  params,
}: {
  to: string;
  label: string;
  badge?: number;
  params?: Record<string, string>;
}) {
  return (
    <Link
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      to={to as any}
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      params={params as any}
      className="relative flex flex-col items-center gap-1 py-1 text-muted-foreground transition-colors [&.active]:text-primary"
    >
      <span>{label}</span>
      {badge ? (
        <span className="absolute -top-1 right-2 flex h-4 min-w-4 items-center justify-center rounded-full bg-fetch px-1 text-[10px] font-bold text-fetch-foreground">
          {badge}
        </span>
      ) : null}
    </Link>
  );
}
