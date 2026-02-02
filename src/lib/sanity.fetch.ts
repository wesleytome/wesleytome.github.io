import type { Language } from "./i18n";
import { sanityClient, sanityPreviewClient } from "./sanity.client";
import {
  allPostsQuery,
  allSlugsQuery,
  postBySlugQuery,
  relatedPostsQuery,
  translationSlugsQuery,
  navigationQuery,
  footerQuery,
  commonTextsQuery,
  heroSectionQuery,
  servicesSectionQuery,
  timelineQuery,
  awardsQuery,
  certificationsQuery,
  globeSectionQuery,
} from "./sanity.queries";
import type { SanityPost } from "./sanity.types";

const mapLanguageToSanity = (language: Language) =>
  language === "pt" ? "pt-BR" : "en";

export const fetchPublishedPosts = async (language: Language) => {
  return sanityClient.fetch<SanityPost[]>(allPostsQuery, {
    language: mapLanguageToSanity(language),
  });
};

export const fetchPostBySlug = async (
  slug: string,
  language: Language,
  isDraftMode: boolean,
) => {
  const client = isDraftMode ? sanityPreviewClient : sanityClient;

  return client.fetch<SanityPost | null>(postBySlugQuery, {
    slug,
    language: mapLanguageToSanity(language),
  });
};

export const fetchAllSlugs = async (language: Language) => {
  return sanityClient.fetch<string[]>(allSlugsQuery, {
    language: mapLanguageToSanity(language),
  });
};

export const fetchRelatedPosts = async (
  translationGroupId: string,
  language: Language,
) => {
  return sanityClient.fetch<SanityPost | null>(relatedPostsQuery, {
    translationGroupId,
    language: mapLanguageToSanity(language),
  });
};

export const fetchTranslationSlugs = async (
  translationGroupId: string,
): Promise<{ pt?: string; en?: string }> => {
  const translations = await sanityClient.fetch<
    Array<{ slug: string; language: string }>
  >(translationSlugsQuery, {
    translationGroupId,
  });

  const slugs: { pt?: string; en?: string } = {};

  translations.forEach((translation) => {
    if (translation.language === "pt-BR") {
      slugs.pt = translation.slug;
    } else if (translation.language === "en") {
      slugs.en = translation.slug;
    }
  });

  return slugs;
};

// Homepage content fetch functions
export const fetchNavigationByLanguage = async (language: Language) => {
  return sanityClient.fetch(navigationQuery, {
    language: mapLanguageToSanity(language),
  });
};

export const fetchFooterByLanguage = async (language: Language) => {
  return sanityClient.fetch(footerQuery, {
    language: mapLanguageToSanity(language),
  });
};

export const fetchCommonTextsByLanguage = async (language: Language) => {
  return sanityClient.fetch(commonTextsQuery, {
    language: mapLanguageToSanity(language),
  });
};

export const fetchHeroSectionByLanguage = async (language: Language) => {
  return sanityClient.fetch(heroSectionQuery, {
    language: mapLanguageToSanity(language),
  });
};

export const fetchServicesSectionByLanguage = async (language: Language) => {
  return sanityClient.fetch(servicesSectionQuery, {
    language: mapLanguageToSanity(language),
  });
};

export const fetchTimelineByLanguage = async (language: Language) => {
  return sanityClient.fetch(timelineQuery, {
    language: mapLanguageToSanity(language),
  });
};

export const fetchAwardsByLanguage = async (language: Language) => {
  return sanityClient.fetch(awardsQuery, {
    language: mapLanguageToSanity(language),
  });
};

export const fetchCertificationsByLanguage = async (language: Language) => {
  return sanityClient.fetch(certificationsQuery, {
    language: mapLanguageToSanity(language),
  });
};

export const fetchGlobeSectionByLanguage = async (language: Language) => {
  return sanityClient.fetch(globeSectionQuery, {
    language: mapLanguageToSanity(language),
  });
};
