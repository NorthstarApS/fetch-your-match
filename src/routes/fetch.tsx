import { createFileRoute } from "@tanstack/react-router";
import { FetchConsole } from "@/components/fetch-console";
import { MobileTabBar, SiteHeader } from "@/components/site-chrome";
import { Chip } from "@/components/brand";

export const Route = createFileRoute("/fetch")({
  head: () => ({
    meta: [
      { title: "Fetch – find dem, du faktisk leder efter | MatchFetch" },
      {
        name: "description",
        content:
          "Beskriv dit match i almindeligt dansk, og lad MatchFetch finde relevante profiler på tværs af Datez-netværket.",
      },
      { property: "og:title", content: "Fetch – MatchFetch" },
      {
        property: "og:description",
        content: "Beskriv dit match. Vi finder de profiler, der passer bedst.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: FetchPage,
});

const saved = ["Fyn · 30–40 · Forhold", "Odense · Natur · Ikke-ryger", "Åben søgning"];

function FetchPage() {
  return (
    <div className="min-h-screen bg-veil pb-28 md:pb-0">
      <SiteHeader />
      <main className="mx-auto max-w-6xl space-y-8 px-4 py-8">
        <div>
          <p className="font-display text-sm uppercase tracking-[0.25em] text-muted-foreground">
            Don’t swipe. Fetch.
          </p>
          <h1 className="mt-2 font-display text-3xl font-bold sm:text-4xl">
            Beskriv dit match. Vi finder resten.
          </h1>
        </div>

        <FetchConsole />

        <section className="rounded-3xl border border-border bg-card p-5">
          <div className="flex items-baseline justify-between gap-2">
            <h2 className="font-display text-lg font-bold">Mine Fetches</h2>
            <span className="rounded-full bg-surface-2 px-2.5 py-1 text-xs text-muted-foreground">
              Plus
            </span>
          </div>
          <div className="mt-3 space-y-2">
            {saved.map((s) => (
              <div
                key={s}
                className="flex items-center justify-between gap-3 rounded-2xl border border-border bg-surface-2/50 px-4 py-3"
              >
                <span className="text-sm">{s}</span>
                <button className="rounded-full border border-primary/40 px-3 py-1.5 font-display text-xs font-bold uppercase tracking-widest text-primary">
                  Fetch again
                </button>
              </div>
            ))}
          </div>
          <div className="mt-4 flex items-center gap-2 rounded-2xl border border-signal/30 bg-signal/5 px-4 py-3 text-sm">
            <span className="h-2 w-2 shrink-0 rounded-full bg-signal" />3 nye profiler matcher “Fyn
            · 30–40 · Forhold”
          </div>
        </section>

        <section
          id="beskeder"
          className="grid gap-4 rounded-3xl border border-border bg-card p-5 md:grid-cols-2"
        >
          <div>
            <h2 className="font-display text-lg font-bold">Beskeder</h2>
            <p className="mt-1 text-sm text-muted-foreground">
              Gå direkte fra et resultat til en samtale. Chat er frit for alle.
            </p>
            <div className="mt-4 space-y-2">
              {[
                { n: "Emma", m: "Skriver…", u: 2 },
                { n: "Mikkel", m: "Set kl. 20.14", u: 0 },
                { n: "Sara", m: "Ha! Det tager jeg som et ja 🐕", u: 1 },
              ].map((c) => (
                <div
                  key={c.n}
                  className="flex items-center justify-between rounded-2xl border border-border bg-surface-2/50 px-4 py-3"
                >
                  <div>
                    <p className="text-sm font-semibold">{c.n}</p>
                    <p className="text-xs text-muted-foreground">{c.m}</p>
                  </div>
                  {c.u ? (
                    <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-fetch px-1.5 text-[11px] font-bold text-fetch-foreground">
                      {c.u}
                    </span>
                  ) : null}
                </div>
              ))}
            </div>
          </div>
          <div id="likes" className="rounded-2xl border border-border bg-surface-2/40 p-4">
            <h3 className="font-display text-base font-bold">Likes</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              4 personer har liket dig. Se hvem med Plus.
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              <Chip>Emma, 31</Chip>
              <Chip>Skjult</Chip>
              <Chip>Skjult</Chip>
              <Chip>Skjult</Chip>
            </div>
          </div>
        </section>

        <section className="rounded-3xl border border-dashed border-border p-6 text-center">
          <h2 className="font-display text-lg font-bold">Vi fandt ikke et stærkt match endnu.</h2>
          <p className="mx-auto mt-2 max-w-md text-sm text-muted-foreground">
            Prøv at udvide afstand til 50 km, eller fjern ét filter. Så leder vi igen.
          </p>
          <button
            className="mt-4 rounded-full px-6 py-3 font-display text-sm font-bold uppercase tracking-[0.18em] text-fetch-foreground shadow-glow"
            style={{ backgroundImage: "var(--gradient-fetch)" }}
          >
            Fetch again
          </button>
        </section>
      </main>
      <MobileTabBar />
    </div>
  );
}
