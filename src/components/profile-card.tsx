import { Link } from "@tanstack/react-router";
import type { Profile } from "@/lib/matchfetch-data";
import { NetworkTag, ScoreBadge } from "@/components/brand";

export function ProfileCard({ profile, index = 0 }: { profile: Profile; index?: number }) {
  return (
    <article
      className="animate-rise group overflow-hidden rounded-3xl border border-border bg-card shadow-card"
      style={{ animationDelay: `${index * 60}ms` }}
    >
      <div className="relative aspect-[4/5] overflow-hidden">
        <img
          src={profile.photo}
          alt={profile.name}
          loading="lazy"
          width={768}
          height={1024}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
        />
        <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-card via-card/70 to-transparent" />
        <div className="absolute left-4 top-4 flex gap-2">
          <ScoreBadge score={profile.score} />
        </div>
        <div className="absolute right-4 top-4">
          <NetworkTag name={profile.network} />
        </div>
        <div className="absolute inset-x-4 bottom-3">
          <h3 className="font-display text-xl font-bold">
            {profile.name}, {profile.age}
          </h3>
          <p className="text-sm text-muted-foreground">
            {profile.city} · {profile.distanceKm} km
          </p>
        </div>
      </div>

      <div className="space-y-3 p-4">
        <p className="text-sm leading-relaxed text-foreground/85">“{profile.blurb}”</p>
        <div className="flex flex-wrap gap-1.5">
          {profile.tags.slice(0, 4).map((t) => (
            <span
              key={t}
              className="rounded-full bg-surface-2 px-2.5 py-1 text-xs text-muted-foreground"
            >
              {t}
            </span>
          ))}
        </div>
        <div className="flex gap-2 pt-1">
          <Link
            to="/profil/$id"
            params={{ id: profile.id }}
            className="flex-1 rounded-full border border-border bg-surface-2 py-2.5 text-center text-sm font-medium transition-colors hover:bg-accent"
          >
            Se profil
          </Link>
          <button className="flex-1 rounded-full border border-primary/50 bg-primary/10 py-2.5 text-sm font-semibold text-primary transition-colors hover:bg-primary/20">
            Like
          </button>
        </div>
      </div>
    </article>
  );
}
