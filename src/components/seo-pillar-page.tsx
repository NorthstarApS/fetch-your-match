import { Link } from "@tanstack/react-router";
import { FetchButton } from "@/components/brand";
import { MobileTabBar, SiteFooter, SiteHeader } from "@/components/site-chrome";
import { plans } from "@/lib/pricing";
import { dnaDisclaimer, fetchSteps, getSeoPillar, seoPillars } from "@/lib/seo-pillars";
import type { SeoPillarPath } from "@/lib/site";

export function SeoPillarPage({ path }: { path: SeoPillarPath }) {
  const pillar = getSeoPillar(path);
  const others = seoPillars.filter((p) => p.path !== path);

  return (
    <div className="min-h-screen bg-veil pb-28 md:pb-0">
      <SiteHeader />
      <main className="mx-auto max-w-3xl space-y-10 px-4 py-10">
        <header className="space-y-3">
          <p className="font-display text-sm uppercase tracking-[0.25em] text-muted-foreground">
            {pillar.eyebrow}
          </p>
          <h1 className="font-display text-3xl font-bold sm:text-4xl">{pillar.h1}</h1>
          <p className="text-base leading-relaxed text-foreground/85">{pillar.lede}</p>
          <div className="flex flex-wrap gap-3 pt-2">
            <Link to="/fetch" className="inline-block min-w-48">
              <FetchButton>FETCH!</FetchButton>
            </Link>
            <Link
              to="/priser"
              className="inline-flex items-center rounded-full border border-border px-5 py-3 text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground"
            >
              Se priser
            </Link>
          </div>
        </header>

        <section className="rounded-3xl border border-border bg-card p-5 shadow-card sm:p-6">
          <h2 className="font-display text-lg font-bold">Sådan FETCH’er du</h2>
          <ol className="mt-4 space-y-4">
            {fetchSteps.map((step, i) => (
              <li key={step.title} className="flex gap-3">
                <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/15 font-display text-sm font-bold text-primary">
                  {i + 1}
                </span>
                <div>
                  <p className="font-display font-semibold">{step.title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{step.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {pillar.sections.map((section) => (
          <section key={section.heading} className="space-y-3">
            <h2 className="font-display text-2xl font-bold">{section.heading}</h2>
            {section.paragraphs.map((p) => (
              <p key={p} className="leading-relaxed text-foreground/85">
                {p}
              </p>
            ))}
            {section.bullets ? (
              <ul className="space-y-2 text-sm text-foreground/85">
                {section.bullets.map((b) => (
                  <li key={b} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    {b}
                  </li>
                ))}
              </ul>
            ) : null}
          </section>
        ))}

        <aside className="rounded-3xl border border-signal/30 bg-signal/5 p-5 sm:p-6">
          <h2 className="font-display text-lg font-bold">Ikke DNA. Ikke falsk videnskab.</h2>
          <p className="mt-2 text-sm leading-relaxed text-foreground/85">{dnaDisclaimer}</p>
        </aside>

        <section className="space-y-4">
          <div>
            <h2 className="font-display text-2xl font-bold">Priser</h2>
            <p className="mt-1 text-sm text-muted-foreground">
              Ingen binding. Ingen skjulte gebyrer. Opsig når du vil.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-3">
            {plans.map((p) => (
              <div
                key={p.name}
                className={`rounded-2xl border p-4 ${
                  p.highlight ? "border-primary/50 bg-primary/5" : "border-border bg-card"
                }`}
              >
                <p className="font-display text-sm font-bold">{p.name}</p>
                <p className="mt-1 font-display text-xl font-bold text-gradient">{p.price}</p>
              </div>
            ))}
          </div>
          <Link to="/priser" className="text-sm text-primary hover:underline">
            Se hele prismodellen
          </Link>
        </section>

        <section className="space-y-3">
          <h2 className="font-display text-2xl font-bold">Spørgsmål</h2>
          <div className="space-y-3">
            {pillar.faqs.map((faq) => (
              <div key={faq.q} className="rounded-2xl border border-border bg-card px-4 py-4">
                <h3 className="font-display text-base font-bold">{faq.q}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        <nav aria-label="Flere søgesider" className="space-y-3">
          <h2 className="font-display text-lg font-bold">Flere måder at starte en FETCH</h2>
          <ul className="grid gap-2 sm:grid-cols-2">
            {others.map((p) => (
              <li key={p.path}>
                <Link
                  to={p.path}
                  className="block rounded-2xl border border-border bg-surface-2/40 px-4 py-3 text-sm transition-colors hover:bg-accent"
                >
                  {p.h1}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="rounded-3xl border border-border bg-card p-6 text-center shadow-card">
          <p className="font-display text-xl font-bold">Klar til at finde bedre matches?</p>
          <p className="mx-auto mt-2 max-w-md text-sm text-muted-foreground">
            Beskriv dit match. Vi finder de profiler, der passer bedst – blandt dem, der har valgt
            at kunne findes.
          </p>
          <Link to="/fetch" className="mx-auto mt-4 block max-w-xs">
            <FetchButton>FETCH!</FetchButton>
          </Link>
        </div>
      </main>
      <SiteFooter />
      <MobileTabBar />
    </div>
  );
}
