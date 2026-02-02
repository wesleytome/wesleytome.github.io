import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { draftMode } from "next/headers";
import { notFound } from "next/navigation";

import { PortableText } from "@/components/PortableText";
import { estimateReadingTime } from "@/lib/reading-time";
import {
  fetchPostBySlug,
  fetchRelatedPosts,
  fetchAllSlugs,
} from "@/lib/sanity.fetch";
import { urlForImage } from "@/lib/sanity.image";
import type { SanityPost } from "@/lib/sanity.types";
import { isValidLanguage, languageToLocale, languages, type Language } from "@/lib/i18n";
import { siteConfig } from "@/lib/site";

export const revalidate = 60;

export async function generateStaticParams() {
  const entries = await Promise.all(
    languages.map(async (language) => {
      const slugs = await fetchAllSlugs(language);
      return slugs.map((slug) => ({ lang: language, slug }));
    }),
  );

  return entries.flat();
}

const buildJsonLd = (post: SanityPost, lang: string, canonical: string) => {
  const publishedAt = post.publishedAt ?? post.updatedAt;
  return [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: post.title,
      datePublished: publishedAt,
      dateModified: post.updatedAt ?? publishedAt,
      author: {
        "@type": "Person",
        name: post.author?.name ?? siteConfig.author.name,
        jobTitle: post.author?.role ?? siteConfig.author.jobTitle,
        url: siteConfig.url,
        sameAs: siteConfig.author.sameAs,
      },
      image: post.coverImage
        ? [urlForImage(post.coverImage).width(1200).quality(80).url()]
        : undefined,
      mainEntityOfPage: canonical,
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: lang === "pt" ? "Blog" : "Blog",
          item: `${siteConfig.url}/${lang}/blog`,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: post.title,
          item: canonical,
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "Person",
      name: siteConfig.author.name,
      jobTitle: siteConfig.author.jobTitle,
      url: siteConfig.url,
      sameAs: siteConfig.author.sameAs,
    },
  ];
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}): Promise<Metadata> {
  const { lang, slug } = await params;
  if (!isValidLanguage(lang)) {
    notFound();
  }

  const validLang = lang as Language;
  const { isEnabled } = await draftMode();
  const post = await fetchPostBySlug(slug, validLang, isEnabled);

  if (!post) {
    notFound();
  }

  const translation = post.translationGroupId
    ? await fetchRelatedPosts(post.translationGroupId, validLang === "pt" ? "en" : "pt")
    : null;

  const canonical = `${siteConfig.url}/${validLang}/blog/${slug}`;
  const xDefault =
    validLang === "pt"
      ? canonical
      : translation?.slug?.current
        ? `${siteConfig.url}/pt/blog/${translation.slug.current}`
        : canonical;
  const ogImage = post.seo?.ogImage
    ? urlForImage(post.seo.ogImage).width(1200).height(630).quality(80).url()
    : post.coverImage
      ? urlForImage(post.coverImage).width(1200).height(630).quality(80).url()
      : undefined;

  return {
    title: post.seo?.metaTitle ?? post.title,
    description: post.seo?.metaDescription ?? post.excerpt ?? siteConfig.description,
    alternates: {
      canonical,
      languages: languages.reduce<Record<string, string>>((acc, language) => {
        if (language === validLang) {
          acc[languageToLocale[language]] = canonical;
          return acc;
        }

        if (translation?.slug?.current) {
          acc[languageToLocale[language]] = `${siteConfig.url}/${language}/blog/${translation.slug.current}`;
        }

        return acc;
      }, {
        "x-default": xDefault,
      } as Record<string, string>),
    },
    openGraph: {
      title: post.seo?.metaTitle ?? post.title,
      description: post.seo?.metaDescription ?? post.excerpt ?? siteConfig.description,
      url: canonical,
      locale: languageToLocale[validLang],
      type: "article",
      images: ogImage ? [{ url: ogImage }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: post.seo?.metaTitle ?? post.title,
      description: post.seo?.metaDescription ?? post.excerpt ?? siteConfig.description,
      images: ogImage ? [ogImage] : undefined,
    },
    robots: post.seo?.noindex
      ? {
          index: false,
          follow: false,
        }
      : undefined,
  };
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}) {
  const { lang, slug } = await params;

  if (!isValidLanguage(lang)) {
    notFound();
  }

  const validLang = lang as Language;
  const { isEnabled } = await draftMode();
  const post = await fetchPostBySlug(slug, validLang, isEnabled);

  if (!post) {
    notFound();
  }

  const readingTime =
    post.readingTime ?? estimateReadingTime(post.body ?? undefined);

  const relatedPost = post.translationGroupId
    ? await fetchRelatedPosts(post.translationGroupId, validLang === "pt" ? "en" : "pt")
    : null;

  const canonical = `${siteConfig.url}/${validLang}/blog/${slug}`;

  return (
    <article className="mx-auto w-full max-w-3xl px-6 py-16">
      {isEnabled && (
        <div className="mb-6 rounded-xl border border-warning/40 bg-warning/10 px-4 py-3 text-sm">
          {validLang === "pt"
            ? "Preview ativado. Este conteúdo não está publicado."
            : "Preview enabled. This content is not published."}
        </div>
      )}
      <div className="mb-10 space-y-3">
        <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
          {validLang === "pt" ? "Blog" : "Blog"}
        </p>
        <h1 className="text-4xl font-semibold">{post.title}</h1>
        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
          {post.publishedAt && (
            <span>
              {new Date(post.publishedAt).toLocaleDateString(
                validLang === "pt" ? "pt-BR" : "en",
                {
                  dateStyle: "long",
                },
              )}
            </span>
          )}
          {readingTime && (
            <span>
              {validLang === "pt"
                ? `${readingTime} min de leitura`
                : `${readingTime} min read`}
            </span>
          )}
        </div>
        {post.excerpt && <p className="text-muted-foreground">{post.excerpt}</p>}
      </div>

      {post.coverImage && (
        <div className="mb-10 overflow-hidden rounded-2xl">
          <Image
            src={urlForImage(post.coverImage).width(1200).height(630).quality(80).url()}
            alt={post.coverImage.alt ?? post.title}
            width={1200}
            height={630}
            priority
            className="h-auto w-full"
          />
        </div>
      )}

      {post.body && <PortableText value={post.body} />}

      <div className="mt-10 flex flex-wrap gap-3">
        {post.tags?.map((tag) => (
          <span
            key={tag._id}
            className="rounded-full border border-border px-4 py-1 text-xs text-muted-foreground"
          >
            #{tag.title}
          </span>
        ))}
      </div>

      {relatedPost && (
        <div className="mt-12 rounded-2xl border border-border p-6">
          <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
            {validLang === "pt" ? "Leia também" : "Read also"}
          </p>
          <Link
            href={`/${validLang === "pt" ? "en" : "pt"}/blog/${relatedPost.slug.current}`}
            className="mt-3 block text-lg font-semibold hover:text-primary"
          >
            {relatedPost.title}
          </Link>
        </div>
      )}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(buildJsonLd(post, validLang, canonical)),
        }}
      />
    </article>
  );
}
