import type { Metadata } from "next";
import { locales, type Locale } from "@/dictionaries";
import { CONTACT_EMAIL } from "./contact";


export const SITE_URL = "https://aurion.technology";


// Canonical URL plus hreflang pairs, so Google shows the Vietnamese page to Vietnamese searchers and the English one to others.
export function alternatesFor(lang: Locale, path: string): Metadata["alternates"] {
  const suffix = path ? `/${path}` : "";
  const languages = Object.fromEntries(locales.map((locale) => [locale, `/${locale}${suffix}`]));
  return { canonical: `/${lang}${suffix}`, languages: { ...languages, "x-default": `/vi${suffix}` } };
}


export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Aurion",
  url: SITE_URL,
  logo: `${SITE_URL}/logos/Aurion_Logo_Colored.png`,
  email: CONTACT_EMAIL,
  foundingDate: "2025",
  address: { "@type": "PostalAddress", addressLocality: "Ho Chi Minh City", addressCountry: "VN" },
};
