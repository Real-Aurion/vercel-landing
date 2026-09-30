import type { MetadataRoute } from "next";
import { pages } from "@/content/pages";
import { isPublished } from "@/content/visibility";
import { locales } from "@/dictionaries";
import { SITE_URL } from "@/lib/seo";


export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ["", ...Object.keys(pages).filter(isPublished)];
  return paths.flatMap((path) => locales.map((lang) => entryFor(lang, path)));
}


function entryFor(lang: string, path: string): MetadataRoute.Sitemap[number] {
  const suffix = path ? `/${path}` : "";
  const languages = Object.fromEntries(locales.map((locale) => [locale, `${SITE_URL}/${locale}${suffix}`]));
  return { url: `${SITE_URL}/${lang}${suffix}`, alternates: { languages }, priority: path ? 0.7 : 1 };
}
