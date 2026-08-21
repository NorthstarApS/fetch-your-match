import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Logo, FetchButton } from "@/components/brand";

export const Route = createFileRoute("/log-ind")({
  head: () => ({
    meta: [
      { title: "Log ind eller kom i gang | MatchFetch" },
      {
        name: "description",
        content:
          "Én profil, flere måder at date på. Brug din Datez-konto på MatchFetch – onboarding tager under et minut.",
      },
      { property: "og:title", content: "Log ind | MatchFetch" },
      { property: "og:description", content: "Én profil. Flere måder at date på." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: LoginPage,
});

const socials = ["Google", "TikTok", "Apple", "Facebook"];

const steps = [
  "Navn",
  "Alder",
  "Hvordan identificerer du dig?",
  "Hvem vil du gerne møde?",
  "Hvad leder du efter?",
  "Upload billede",
];

function LoginPage() {
  const [step, setStep] = useState(0);

  return (
    <div className="min-h-screen bg-veil px-4 py-8">
      <div className="mx-auto max-w-md space-y-6">
        <Logo />
        <div>
          <h1 className="font-display text-3xl font-bold">Én profil. Flere måder at date på.</h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Har du allerede en Datez-konto, skal du ikke oprette en ny. Log ind og begynd at fetche.
          </p>
        </div>

        <div className="space-y-2">
          {socials.map((s) => (
            <button
              key={s}
              className="w-full rounded-full border border-border bg-surface-2/60 py-3.5 text-sm font-medium transition-colors hover:bg-accent"
            >
              Fortsæt med {s}
            </button>
          ))}
          <input
            type="email"
            placeholder="din@mail.dk"
            className="w-full rounded-full border border-input bg-surface-2/40 px-5 py-3.5 text-sm outline-none focus:ring-2 focus:ring-ring"
          />
        </div>

        <div className="rounded-3xl border border-border bg-card p-5">
          <p className="text-xs uppercase tracking-widest text-muted-foreground">
            Trin {step + 1} af {steps.length}
          </p>
          <h2 className="mt-2 font-display text-xl font-bold">{steps[step]}</h2>
          <input
            placeholder="Skriv her…"
            className="mt-3 w-full rounded-2xl border border-input bg-surface-2/50 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-ring"
          />
          <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-surface-2">
            <div
              className="h-full rounded-full transition-all duration-300"
              style={{
                width: `${((step + 1) / steps.length) * 100}%`,
                backgroundImage: "var(--gradient-fetch)",
              }}
            />
          </div>
          <div className="mt-4">
            {step < steps.length - 1 ? (
              <button
                onClick={() => setStep(step + 1)}
                className="w-full rounded-full border border-primary/50 bg-primary/10 py-3 text-sm font-semibold text-primary"
              >
                Fortsæt
              </button>
            ) : (
              <Link to="/fetch">
                <FetchButton>Klar til at fetche</FetchButton>
              </Link>
            )}
          </div>
        </div>

        <p className="text-center text-xs text-muted-foreground">
          Dine beskeder er private. Du bestemmer selv, hvilke Datez-platforme din profil vises på.
        </p>
        <div className="text-center">
          <Link to="/" className="text-sm text-muted-foreground hover:text-foreground">
            ← Tilbage til forsiden
          </Link>
        </div>
      </div>
    </div>
  );
}
