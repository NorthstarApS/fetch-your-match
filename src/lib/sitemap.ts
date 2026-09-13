import { SITE_ORIGIN, sitemapPaths } from "@/lib/site";

export function buildSitemapXml(lastmod = "2026-09-13") {
  const urls = sitemapPaths
    .map((path) => {
      const priority = path.startsWith("/fetch")
        ? "0.9"
        : path === "/priser" || path === "/privatliv" || path === "/log-ind"
          ? "0.6"
          : "0.8";
      return `  <url>
    <loc>${SITE_ORIGIN}${path}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${priority}</priority>
  </url>`;
    })
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;
}
