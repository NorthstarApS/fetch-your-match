import { createFileRoute, Link } from "@tanstack/react-router";
import { MobileTabBar, SiteFooter, SiteHeader } from "@/components/site-chrome";

export const Route = createFileRoute("/priser")({
  head: () => ({
    meta: [
      { title: "Priser – gratis, Plus og Datez+ | MatchFetch" },
      {
        name: "description",
        content:
          "Chat frit gratis. Plus fra 29 kr./md. med avanceret Fetch og gemte søgninger. Datez+ giver premium på hele Datez-netværket.",
      },
      { property: "og:title", content: "Priser | MatchFetch" },
      { property: "og:description", content: "Ingen binding. Ingen skjulte gebyrer." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PricingPage,
});

export const plans = [
  {
    name: "Gratis",
    price: "0 kr.",
    highlight: false,
    features: [
      "Opret profil",
      "Basal Fetch",
      "Se profiler",
      "Like og match",
      "Chat frit",
      "Basale filtre",
    ],
  },
  {
    name: "Plus",
    price: "29 kr./md.",
    highlight: true,
    features: [
      "Advanced Fetch",
      "Ubegrænsede likes",
      "Alle relevante filtre",
      "Se hvem der liker dig",
      "Avanceret matchscore",
      "“Hvorfor matcher vi?”",
      "Gemte Fetches",
      "Ekstra synlighed",
    ],
  },
  {
    name: "Datez+",
    price: "49 kr./md.",
    highlight: false,
    features: [
      "Alt i Plus",
      "Premium på hele Datez-netværket",
      "iDatez",
      "QueerDatez",
      "PartnerHub24",
      "MatchFetch",
    ],
  },
];

export function PricingGrid() {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {plans.map((p) => (
        <div
          key={p.name}
          className={`rounded-3xl border p-6 ${
            p.highlight
              ? "border-primary/50 bg-primary/5 shadow-glow"
              : "border-border bg-card shadow-card"
          }`}
        >
          <h3 className="font-display text-lg font-bold">{p.name}</h3>
          <p className="mt-1 font-display text-3xl font-bold text-gradient">{p.price}</p>
          <ul className="mt-4 space-y-2 text-sm text-foreground/85">
            {p.features.map((f) => (
              <li key={f} className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                {f}
              </li>
            ))}
          </ul>
          <Link
            to="/log-ind"
            className={`mt-6 block rounded-full py-3 text-center text-sm font-semibold ${
              p.highlight
                ? "text-fetch-foreground shadow-glow"
                : "border border-border bg-surface-2"
            }`}
            style={p.highlight ? { backgroundImage: "var(--gradient-fetch)" } : undefined}
          >
            {p.highlight ? "Vælg Plus" : `Vælg ${p.name}`}
          </Link>
        </div>
      ))}
    </div>
  );
}

function PricingPage() {
  return (
    <div className="min-h-screen bg-veil pb-28 md:pb-0">
      <SiteHeader />
      <main className="mx-auto max-w-6xl space-y-6 px-4 py-10">
        <div>
          <h1 className="font-display text-3xl font-bold sm:text-4xl">Priser</h1>
          <p className="mt-2 text-muted-foreground">
            Ingen binding. Ingen skjulte gebyrer. Opsig når du vil.
          </p>
        </div>
        <PricingGrid />
      </main>
      <SiteFooter />
      <MobileTabBar />
    </div>
  );
}
