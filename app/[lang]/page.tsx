import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { HomePageClient } from "@/components/HomePageClient";
import { Providers } from "@/components/Providers";
import { isValidLanguage, languageToLocale, languages } from "@/lib/i18n";
import { siteConfig } from "@/lib/site";

export async function generateMetadata({
  params,
}: {
  params: { lang: string };
}): Promise<Metadata> {
  const { lang } = params;

  if (!isValidLanguage(lang)) {
    notFound();
  }

  const canonical = `${siteConfig.url}/${lang}`;
  const locale = languageToLocale[lang];

  return {
    title: siteConfig.title,
    description: siteConfig.description,
    alternates: {
      canonical,
      languages: {
        ...languages.reduce<Record<string, string>>((acc, language) => {
          acc[languageToLocale[language]] = `${siteConfig.url}/${language}`;
          return acc;
        }, {}),
        "x-default": `${siteConfig.url}/pt`,
      },
    },
    openGraph: {
      locale,
      url: canonical,
    },
  };
}

export default async function HomePage({
  params,
}: {
  params: { lang: string };
}) {
  const { lang } = params;

  if (!isValidLanguage(lang)) {
    notFound();
  }

  return (
    <Providers>
      <HomePageClient />
    </Providers>
  );
}
