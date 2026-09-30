import "server-only";
import en from "./en.json";
import vi from "./vi.json";


export type Dictionary = typeof vi;


// Typing en as Dictionary makes a missing or renamed key a compile error, so the two files never drift.
const dictionaries: Record<Locale, Dictionary> = { vi, en: en satisfies Dictionary };


export const locales = ["vi", "en"] as const;


export type Locale = (typeof locales)[number];


export const defaultLocale: Locale = "vi";


export function hasLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}


export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
