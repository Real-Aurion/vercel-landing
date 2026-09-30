import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Blocks } from "@/components/page/Blocks";
import { PageHero } from "@/components/page/PageHero";
import { ContactCta } from "@/components/sections/ContactCta";
import { pages } from "@/content/pages";
import { getDictionary, hasLocale, locales, type Locale } from "@/dictionaries";


export const dynamicParams = false;


export function generateStaticParams() {
  return locales.flatMap((lang) => Object.keys(pages).map((path) => ({ lang, slug: path.split("/") })));
}


async function resolve(params: PageProps<"/[lang]/[...slug]">["params"]) {
  const { lang, slug } = await params;
  const page = pages[slug.join("/")];
  if (!hasLocale(lang) || !page) notFound();
  return { lang: lang as Locale, content: page[lang] };
}


export async function generateMetadata({ params }: PageProps<"/[lang]/[...slug]">): Promise<Metadata> {
  const { content } = await resolve(params);
  return { title: `${content.meta.title} — Aurion`, description: content.meta.description };
}


export default async function ContentPage({ params }: PageProps<"/[lang]/[...slug]">) {
  const { lang, content } = await resolve(params);
  const dict = getDictionary(lang);
  return (
    <>
      <PageHero hero={content.hero} lang={lang} nav={dict.nav} />
      <Blocks blocks={content.blocks} lang={lang} dict={dict} />
      <ContactCta cta={dict.cta} />
    </>
  );
}
