import { notFound } from "next/navigation";

import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { isValidLanguage, languageToLocale, languages } from "@/lib/i18n";
import { siteConfig } from "@/lib/site";

export async function generateMetadata({
  params,
}: {
  params: { lang: string };
}) {
  const { lang } = params;

  if (!isValidLanguage(lang)) {
    notFound();
  }

  const locale = languageToLocale[lang];

  return {
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical: `/${lang}`,
    },
    openGraph: {
      locale,
    },
  };
}

export function generateStaticParams() {
  return languages.map((lang) => ({ lang }));
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  const { lang } = params;

  if (!isValidLanguage(lang)) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background text-foreground" data-lang={lang}>
      <SiteHeader language={lang} />
      <main>{children}</main>
      <SiteFooter />
    </div>
  );
}
