import type { ReactNode } from "react";
import { notFound } from "next/navigation";

import FooterSection from "@/components/FooterSection";
import { Providers } from "@/components/Providers";
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

  const validLang = lang as Language;
  const locale = languageToLocale[validLang];
  const langConfig = siteConfig.i18n[validLang];

  return {
    metadataBase: new URL(siteConfig.url),
    title: {
      default: langConfig.title,
      template: `%s | ${siteConfig.name}`,
    },
    description: langConfig.description,
    keywords: langConfig.keywords,
    alternates: {
      canonical: `/${validLang}`,
      languages: {
        "pt-BR": `${siteConfig.url}/pt`,
        "en-US": `${siteConfig.url}/en`,
        "x-default": `${siteConfig.url}/en`,
      },
    },
    openGraph: {
      title: langConfig.ogTitle,
      description: langConfig.ogDescription,
      url: `${siteConfig.url}/${validLang}`,
      siteName: siteConfig.name,
      locale: locale.replace("-", "_"),
      type: "website",
      images: [
        {
          url: `${siteConfig.url}/wesley-tome.jpg`,
          width: 1200,
          height: 630,
          alt: siteConfig.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: langConfig.ogTitle,
      description: langConfig.ogDescription,
      creator: siteConfig.twitterHandle,
      images: [`${siteConfig.url}/wesley-tome.jpg`],
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
    <Providers>
      <div className="min-h-screen bg-background text-foreground" data-lang={validLang}>
        <SiteHeader language={validLang} navigationData={navigationData} />
        <main>{children}</main>
        <FooterSection footerData={footerData} />
      </div>
    </Providers>
  );
}
