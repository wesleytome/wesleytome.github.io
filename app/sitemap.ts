import type { MetadataRoute } from "next";

import { languages } from "@/lib/i18n";
import { fetchAllSlugs, fetchPublishedPosts } from "@/lib/sanity.fetch";
import { siteConfig } from "@/lib/site";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseEntries: MetadataRoute.Sitemap = [
    {
      url: `${siteConfig.url}/pt`,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${siteConfig.url}/en`,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${siteConfig.url}/pt/blog`,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${siteConfig.url}/en/blog`,
      changeFrequency: "weekly",
      priority: 0.8,
    },
  ];

  // Verifica se as variáveis de ambiente do Sanity estão disponíveis
  const hasSanityConfig = 
    process.env.NEXT_PUBLIC_SANITY_PROJECT_ID && 
    process.env.NEXT_PUBLIC_SANITY_DATASET;

  let postEntries: MetadataRoute.Sitemap = [];

  if (hasSanityConfig) {
    try {
      const nestedEntries = await Promise.all(
        languages.map(async (language) => {
          const slugs = await fetchAllSlugs(language);
          const posts = await fetchPublishedPosts(language);

          return slugs.map((slug) => {
            const post = posts.find((item) => item.slug.current === slug);
            return {
              url: `${siteConfig.url}/${language}/blog/${slug}`,
              lastModified: post?.updatedAt ?? post?.publishedAt,
              changeFrequency: "monthly" as const,
              priority: 0.7,
            };
          });
        }),
      );
      postEntries = nestedEntries.flat();
    } catch (error) {
      console.warn("Failed to fetch posts for sitemap:", error);
    }
  }

  return [...baseEntries, ...postEntries];
}
