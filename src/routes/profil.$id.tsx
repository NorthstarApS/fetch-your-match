import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { getProfile } from "@/lib/matchfetch-data";
import { MobileTabBar, SiteHeader } from "@/components/site-chrome";
import { NetworkTag, ScoreBadge } from "@/components/brand";

export const Route = createFileRoute("/profil/$id")({
  loader: ({ params }) => {
    const profile = getProfile(params.id);
    if (!profile) throw notFound();
    return { profile };
  },
  head: ({ loaderData }) => {
    const p = loaderData?.profile;
    return {
      meta: p
        ? [
            { title: `${p.name}, ${p.age} · ${p.score}% match | MatchFetch` },
            { name: "description", content: `${p.name} fra ${p.city}. ${p.blurb}` },
            { property: "og:title", content: `${p.name}, ${p.age} – ${p.score}% match` },
            { property: "og:description", content: p.blurb },
            { property: "og:type", content: "profile" },
            { name: "twitter:card", content: "summary_large_image" },
          ]
        : [{ title: "Profil utilgængelig | MatchFetch" }, { name: "robots", content: "noindex" }],
    };
  },
  component: ProfilePage,
});

function ProfilePage() {
  const { profile } = Route.useLoaderData();

  return (
    <div className="min-h-screen bg-veil pb-28 md:pb-0">
      <SiteHeader />
      <main className="mx-auto max-w-4xl px-4 py-6">
        <Link to="/fetch" className="text-sm text-muted-foreground hover:text-foreground">
          ← Tilbage til resultater
        </Link>

        <div className="mt-4 grid gap-6 md:grid-cols-[1.1fr_1fr]">
          <div className="overflow-hidden rounded-3xl border border-border shadow-card">
            <img
              src={profile.photo}
              alt={profile.name}
              width={768}
              height={1024}
              className="h-full w-full object-cover"
            />
          </div>

          <div className="space-y-5">
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <ScoreBadge score={profile.score} />
                <NetworkTag name={profile.network} />
              </div>
              <h1 className="mt-3 font-display text-3xl font-bold">
                {profile.name}, {profile.age}
              </h1>
              <p className="text-muted-foreground">
                {profile.city} · {profile.distanceKm} km · Søger {profile.intention.toLowerCase()}
              </p>
              <p className="mt-3 text-foreground/85">“{profile.blurb}”</p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {profile.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-surface-2 px-3 py-1 text-xs text-muted-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <section className="rounded-3xl border border-primary/30 bg-primary/5 p-5">
              <h2 className="font-display text-lg font-bold">Derfor matcher I</h2>
              <ul className="mt-3 space-y-2 text-sm">
                {profile.reasons.map((r) => (
                  <li key={r} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    <span>{r}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-3 text-xs text-muted-foreground">
                Scoren bygger på jeres angivne kriterier og er vejledende.
              </p>
            </section>

            <div className="flex gap-2">
              <button
                className="flex-1 rounded-full px-5 py-3 font-display text-sm font-bold uppercase tracking-[0.18em] text-fetch-foreground shadow-glow"
                style={{ backgroundImage: "var(--gradient-fetch)" }}
              >
                Skriv til {profile.name}
              </button>
              <button className="rounded-full border border-primary/50 bg-primary/10 px-6 py-3 text-sm font-semibold text-primary">
                Like
              </button>
            </div>
          </div>
        </div>

        <section className="mt-8 grid gap-4 sm:grid-cols-2">
          {profile.prompts.map((p) => (
            <div key={p.q} className="rounded-3xl border border-border bg-card p-5">
              <p className="text-xs uppercase tracking-widest text-muted-foreground">{p.q}</p>
              <p className="mt-2 text-base">{p.a}</p>
            </div>
          ))}
        </section>

        <section className="mt-6 flex flex-wrap items-center justify-between gap-3 rounded-3xl border border-border bg-surface-2/40 p-5 text-sm text-muted-foreground">
          <span>Noget galt? Du kan blokere eller anmelde med få tryk.</span>
          <div className="flex gap-2">
            <button className="rounded-full border border-border px-4 py-2">Blokér</button>
            <button className="rounded-full border border-destructive/50 px-4 py-2 text-destructive">
              Anmeld
            </button>
          </div>
        </section>
      </main>
      <MobileTabBar />
    </div>
  );
}
