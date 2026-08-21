import { useState } from "react";
import { Chip, FetchButton } from "@/components/brand";
import { ProfileCard } from "@/components/profile-card";
import { defaultChips, examplePrompt, profiles } from "@/lib/matchfetch-data";

type State = "idle" | "fetching" | "done";

const extraFilters = [
  { label: "Alder", value: "30–40 år" },
  { label: "Afstand", value: "Maks 25 km" },
  { label: "Køn", value: "Kvinder og mænd" },
  { label: "Relationstype", value: "Monogamt" },
  { label: "Datingintention", value: "Forhold" },
  { label: "Børn", value: "Okay med børn" },
  { label: "Rygning", value: "Ikke-ryger" },
  { label: "Livsstil", value: "Aktiv" },
];

export function FetchConsole({ compact = false }: { compact?: boolean }) {
  const [query, setQuery] = useState(examplePrompt);
  const [chips, setChips] = useState<string[]>(defaultChips);
  const [state, setState] = useState<State>("idle");
  const [showFilters, setShowFilters] = useState(false);
  const [widened, setWidened] = useState(false);

  const results = widened ? profiles : profiles.slice(0, 4);

  function fetchNow() {
    setState("fetching");
    window.setTimeout(() => setState("done"), 900);
  }

  return (
    <div className="space-y-5">
      <div className="rounded-3xl border border-border bg-card/80 p-4 shadow-card backdrop-blur-xl sm:p-5">
        <label
          htmlFor="fetch-prompt"
          className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground"
        >
          Hvem leder du efter?
        </label>
        <textarea
          id="fetch-prompt"
          value={query}
          rows={compact ? 2 : 3}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="En kvinde 28–38 år fra Fyn, der gerne vil have børn og elsker natur og rejser…"
          className="mt-3 w-full resize-none rounded-2xl border border-input bg-surface-2/60 p-4 text-base leading-relaxed outline-none transition-shadow placeholder:text-muted-foreground focus:ring-2 focus:ring-ring"
        />

        <div className="mt-3 flex flex-wrap items-center gap-2">
          {chips.map((c) => (
            <Chip key={c} tone="accent" onRemove={() => setChips(chips.filter((x) => x !== c))}>
              {c}
            </Chip>
          ))}
          <button
            onClick={() => setShowFilters((v) => !v)}
            className="rounded-full border border-border px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            {showFilters ? "Skjul filtre" : "Filtre"}
          </button>
        </div>

        {showFilters ? (
          <div className="animate-rise mt-4 grid gap-3 rounded-2xl border border-border bg-surface-2/50 p-4 sm:grid-cols-2">
            {extraFilters.map((f) => (
              <div key={f.label} className="flex items-center justify-between gap-3 text-sm">
                <span className="text-muted-foreground">{f.label}</span>
                <span className="rounded-full bg-surface px-3 py-1">{f.value}</span>
              </div>
            ))}
            <p className="text-xs text-muted-foreground sm:col-span-2">
              Flere filtre som højde, uddannelse og interesser åbnes, når du har valgt det
              grundlæggende.
            </p>
          </div>
        ) : null}

        <div className="mt-4">
          <FetchButton onClick={fetchNow} loading={state === "fetching"}>
            {state === "done" ? "Fetch igen" : "Fetch!"}
          </FetchButton>
        </div>
        <p className="mt-3 text-center text-xs text-muted-foreground">
          MatchFetch analyserer dine kriterier og finder relevante profiler på tværs af
          Datez-netværket. Kun profiler, der har valgt at være synlige.
        </p>
      </div>

      {state === "done" ? (
        <div id="resultater" className="space-y-5">
          <div className="animate-rise flex flex-wrap items-baseline justify-between gap-2">
            <h2 className="font-display text-xl font-bold">
              {results.length === 4 ? "23" : "31"} profiler passer til det, du leder efter
            </h2>
            <span className="text-sm text-muted-foreground">Score er vejledende</span>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {results.map((p, i) => (
              <ProfileCard key={p.id} profile={p} index={i} />
            ))}
          </div>

          {!widened ? (
            <div className="animate-rise rounded-3xl border border-primary/30 bg-primary/5 p-5">
              <h3 className="font-display text-base font-bold">Vil du se flere gode matches?</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Udvider du afstanden fra 25 km til 40 km, finder vi 8 ekstra profiler med høj
                matchscore. Du bestemmer selv.
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                <button
                  onClick={() => setWidened(true)}
                  className="rounded-full border border-primary/50 bg-primary/15 px-4 py-2 text-sm font-semibold text-primary"
                >
                  Udvid til 40 km
                </button>
                <button
                  onClick={() => setWidened(false)}
                  className="rounded-full border border-border px-4 py-2 text-sm text-muted-foreground"
                >
                  Nej tak
                </button>
              </div>
            </div>
          ) : null}
        </div>
      ) : null}
    </div>
  );
}
