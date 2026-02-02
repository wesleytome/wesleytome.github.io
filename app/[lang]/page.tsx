import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { HomePageClient } from "@/components/HomePageClient";
import { Providers } from "@/components/Providers";
import { isValidLanguage, languageToLocale, languages, type Language } from "@/lib/i18n";
import { siteConfig } from "@/lib/site";
import {
  fetchPublishedPosts,
  fetchHeroSectionByLanguage,
  fetchServicesSectionByLanguage,
  fetchTimelineByLanguage,
  fetchAwardsByLanguage,
  fetchCertificationsByLanguage,
  fetchGlobeSectionByLanguage,
  fetchCommonTextsByLanguage,
} from "@/lib/sanity.fetch";

export const revalidate = 60;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;

  if (!isValidLanguage(lang)) {
    notFound();
  }

  const validLang = lang as Language;
  const langConfig = siteConfig.i18n[validLang];
  const canonical = `${siteConfig.url}/${lang}`;
  const locale = languageToLocale[lang];

  return {
    title: langConfig.title,
    description: langConfig.description,
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
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  if (!isValidLanguage(lang)) {
    notFound();
  }

  const validLang = lang as Language;

  // Fetch all homepage data in parallel
  const [
    posts,
    heroData,
    servicesData,
    timelineData,
    awardsData,
    certificationsData,
    globeData,
    commonTexts,
  ] = await Promise.all([
    fetchPublishedPosts(validLang),
    fetchHeroSectionByLanguage(validLang),
    fetchServicesSectionByLanguage(validLang),
    fetchTimelineByLanguage(validLang),
    fetchAwardsByLanguage(validLang),
    fetchCertificationsByLanguage(validLang),
    fetchGlobeSectionByLanguage(validLang),
    fetchCommonTextsByLanguage(validLang),
  ]);

  return (
    <Providers>
      <HomePageClient
        posts={posts}
        lang={lang}
        heroData={heroData}
        servicesData={servicesData}
        timelineData={timelineData}
        awardsData={awardsData}
        certificationsData={certificationsData}
        globeData={globeData}
        commonTexts={commonTexts}
      />
    </Providers>
  );
}
