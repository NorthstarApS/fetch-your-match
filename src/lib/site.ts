export const SITE_ORIGIN = "https://matchfetch.com";
export const SITE_NAME = "MatchFetch";

export const seoPillarPaths = [
  "/find-singler",
  "/soeg-efter-et-match",
  "/dating-uden-swipe",
  "/find-en-der-passer-til-dig",
  "/datingsogning",
  "/soeg-med-en-bedre-profil",
] as const;

export type SeoPillarPath = (typeof seoPillarPaths)[number];

/** Indexable marketing URLs. Home is omitted while it is still a placeholder. */
export const sitemapPaths = [
  "/fetch",
  "/priser",
  "/privatliv",
  "/log-ind",
  ...seoPillarPaths,
] as const;

export type SitemapPath = (typeof sitemapPaths)[number];

export function absoluteUrl(path: string) {
  return `${SITE_ORIGIN}${path.startsWith("/") ? path : `/${path}`}`;
}
