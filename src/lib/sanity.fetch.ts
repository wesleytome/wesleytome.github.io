import type { Language } from "./i18n";
import { sanityClient, sanityPreviewClient } from "./sanity.client";
import {
  allPostsQuery,
  allSlugsQuery,
  postBySlugQuery,
  relatedPostsQuery,
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
