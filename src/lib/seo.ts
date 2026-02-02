import type { Metadata } from "next";

import { languageToLocale } from "./i18n";
import { siteConfig } from "./site";

export const buildMetadata = ({
  title,
  description,
  canonical,
  language,
  ogImage,
  noindex,
}: {
  title: string;
  description: string;
  canonical: string;
  language: "pt" | "en";
  ogImage?: string;
  noindex?: boolean;
}): Metadata => {
  const url = new URL(canonical, siteConfig.url);

  return {
    metadataBase: new URL(siteConfig.url),
    title,
    description,
    alternates: {
      canonical: url.toString(),
    },
    openGraph: {
      title,
      description,
      url: url.toString(),
      type: "article",
      images: ogImage
        ? [
            {
              url: ogImage,
            },
          ]
        : undefined,
      locale: languageToLocale[language],
      siteName: siteConfig.name,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ogImage ? [ogImage] : undefined,
    },
    robots: noindex
      ? {
          index: false,
          follow: false,
        }
      : undefined,
  };
};
