import type { Metadata } from "next";
import { JetBrains_Mono, Manrope } from "next/font/google";
import { notFound } from "next/navigation";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/nav/Header";
import { getDictionary, hasLocale, locales } from "@/dictionaries";
import "../globals.css";


// Manrope carries over from aurion.technology — Lam chose it over the template's Be Vietnam Pro.
const manrope = Manrope({
  subsets: ["latin", "latin-ext", "vietnamese"],
  variable: "--font-sans",
});


const mono = JetBrains_Mono({
  subsets: ["latin", "vietnamese"],
  variable: "--font-mono",
});


export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}


export async function generateMetadata({ params }: LayoutProps<"/[lang]">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const { meta } = getDictionary(lang);
  return { title: meta.title, description: meta.description };
}


export default async function RootLayout({ children, params }: LayoutProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = getDictionary(lang);
  return (
    <html lang={lang} className={`${manrope.variable} ${mono.variable}`}>
      <body>
        <Header lang={lang} dict={dict} />
        <main className="rails">{children}</main>
        <Footer lang={lang} dict={dict} />
      </body>
    </html>
  );
}
