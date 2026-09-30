import type { MetadataRoute } from "next";


// Pre-launch: keep every page out of search engines. Allow crawling again when the site goes live.
export default function robots(): MetadataRoute.Robots {
  return { rules: { userAgent: "*", disallow: "/" } };
}
