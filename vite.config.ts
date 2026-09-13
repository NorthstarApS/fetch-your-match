// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

const marketingPages = [
  "/fetch",
  "/priser",
  "/privatliv",
  "/log-ind",
  "/find-singler",
  "/soeg-efter-et-match",
  "/dating-uden-swipe",
  "/find-en-der-passer-til-dig",
  "/datingsogning",
  "/soeg-med-en-bedre-profil",
] as const;

export default defineConfig({
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
    prerender: {
      enabled: true,
      crawlLinks: true,
      autoStaticPathsDiscovery: true,
      failOnError: true,
      filter: ({ path }: { path: string }) => path !== "/sitemap.xml" && !path.includes("/profil/"),
    },
    sitemap: {
      enabled: true,
      host: "https://matchfetch.com",
    },
    pages: [
      ...marketingPages.map((path) => ({
        path,
        prerender: { enabled: true },
        sitemap: {
          changefreq: "weekly" as const,
          priority:
            path === "/fetch"
              ? 0.9
              : path.startsWith("/find") || path.includes("soeg") || path.includes("dating")
                ? 0.8
                : 0.6,
        },
      })),
      // Home is still a placeholder; demo profiles are not indexable marketing URLs.
      { path: "/", prerender: { enabled: true }, sitemap: { exclude: true } },
      { path: "/profil/emma", prerender: { enabled: false }, sitemap: { exclude: true } },
    ],
  },
});
