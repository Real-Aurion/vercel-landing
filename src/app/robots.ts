import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";


// Preview links are meant for one hospital each, so keep them out of search results.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/", disallow: ["/vi/preview/", "/en/preview/"] },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
