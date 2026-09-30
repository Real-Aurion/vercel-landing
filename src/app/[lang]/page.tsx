import { notFound } from "next/navigation";
import { ContactCta } from "@/components/sections/ContactCta";
import { Faq } from "@/components/sections/Faq";
import { Hero } from "@/components/sections/Hero";
import { Impact } from "@/components/sections/Impact";
import { Partners } from "@/components/sections/Partners";
import { getDictionary, hasLocale } from "@/dictionaries";


export default async function HomePage({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = getDictionary(lang);
  return (
    <>
      <Hero lang={lang} hero={dict.hero} />
      <Partners customers={dict.customers} />
      <Impact impact={dict.impact} />
      <Faq faq={dict.faq} />
      <ContactCta cta={dict.cta} />
    </>
  );
}
