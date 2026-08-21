import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { MobileTabBar, SiteFooter, SiteHeader } from "@/components/site-chrome";
import { networks } from "@/lib/matchfetch-data";

export const Route = createFileRoute("/privatliv")({
  head: () => ({
    meta: [
      { title: "Privatliv og kontrol | MatchFetch" },
      {
        name: "description",
        content:
          "Du bestemmer selv, hvilke Datez-platforme din profil kan vises på. Ingen cross-platform synlighed uden samtykke.",
      },
      { property: "og:title", content: "Privatliv og kontrol | MatchFetch" },
      { property: "og:description", content: "Du bestemmer, hvor du findes." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PrivacyPage,
});

export function VisibilityCard() {
  const [on, setOn] = useState<Record<string, boolean>>({
    MatchFetch: true,
    iDatez: true,
    QueerDatez: false,
    PartnerHub24: true,
  });

  return (
    <div className="rounded-3xl border border-border bg-card p-6 shadow-card">
      <h3 className="font-display text-lg font-bold">Hvor må min profil findes?</h3>
      <p className="mt-1 text-sm text-muted-foreground">
        Du bestemmer selv, hvilke Datez-platforme din profil kan vises på. Ingen automatisk
        synlighed uden samtykke.
      </p>
      <div className="mt-4 space-y-2">
        {networks.map((n) => (
          <button
            key={n.name}
            onClick={() => setOn({ ...on, [n.name]: !on[n.name] })}
            className="flex w-full items-center justify-between rounded-2xl border border-border bg-surface-2/50 px-4 py-3 text-left transition-colors hover:bg-accent"
          >
            <span>
              <span className="block text-sm font-semibold">{n.name}</span>
              <span className="block text-xs text-muted-foreground">{n.note}</span>
            </span>
            <span
              className={`flex h-6 w-11 items-center rounded-full p-1 transition-colors ${
                on[n.name] ? "bg-primary/70" : "bg-surface"
              }`}
            >
              <span
                className={`h-4 w-4 rounded-full bg-foreground transition-transform ${
                  on[n.name] ? "translate-x-5" : ""
                }`}
              />
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}

const trust = [
  "Du bestemmer, hvor du findes.",
  "Vi viser kun profiler på MatchFetch, der har valgt det.",
  "Dine beskeder er private.",
  "Blokér og anmeld med få tryk.",
];

function PrivacyPage() {
  return (
    <div className="min-h-screen bg-veil pb-28 md:pb-0">
      <SiteHeader />
      <main className="mx-auto max-w-4xl space-y-6 px-4 py-10">
        <div>
          <h1 className="font-display text-3xl font-bold sm:text-4xl">Du bestemmer, hvor du findes.</h1>
          <p className="mt-2 text-muted-foreground">
            Privacy er ikke en indstilling gemt væk i en menu. Det er en del af, hvordan MatchFetch
            fungerer.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          <VisibilityCard />
          <div className="space-y-3">
            {trust.map((t) => (
              <div
                key={t}
                className="rounded-2xl border border-border bg-surface-2/40 px-4 py-4 text-sm"
              >
                {t}
              </div>
            ))}
            <div className="rounded-2xl border border-signal/30 bg-signal/5 px-4 py-4 text-sm">
              Sikkerhed: blokering, anmeldelse, sikkerhedstips og profilverificering på vej.
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
      <MobileTabBar />
    </div>
  );
}
