import type { ReactNode } from "react";
import { notFound } from "next/navigation";

import FooterSection from "@/components/FooterSection";
import { SiteHeader } from "@/components/SiteHeader";
import { isValidLanguage, languageToLocale, languages, type Language } from "@/lib/i18n";
import { siteConfig } from "@/lib/site";
import { fetchNavigationByLanguage, fetchFooterByLanguage } from "@/lib/sanity.fetch";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  if (!isValidLanguage(lang)) {
    notFound();
  }

  const locale = languageToLocale[lang as Language];

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
  children: ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  if (!isValidLanguage(lang)) {
    notFound();
  }

  const validLang = lang as Language;

  // Fetch navigation and footer data
  const [navigationData, footerData] = await Promise.all([
    fetchNavigationByLanguage(validLang),
    fetchFooterByLanguage(validLang),
  ]);

  return (
    <div className="min-h-screen bg-background text-foreground" data-lang={validLang}>
      <SiteHeader language={validLang} navigationData={navigationData} />
      <main>{children}</main>
      <FooterSection footerData={footerData} />
    </div>
  );
}
