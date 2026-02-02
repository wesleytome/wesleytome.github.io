import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Clock } from "lucide-react";

import { isValidLanguage, languageToLocale, languages } from "@/lib/i18n";
import { fetchPublishedPosts } from "@/lib/sanity.fetch";
import { siteConfig } from "@/lib/site";
import { urlForImage } from "@/lib/sanity.image";

const PAGE_SIZE = 8;

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

  const canonical = `${siteConfig.url}/${lang}/blog`;

  return {
    title: lang === "pt" ? "Blog" : "Blog",
    description:
      lang === "pt"
        ? "Artigos sobre estratégia de produto, tecnologia e transformação digital."
        : "Articles about product strategy, technology, and digital transformation.",
    alternates: {
      canonical,
      languages: {
        ...languages.reduce<Record<string, string>>((acc, language) => {
          acc[languageToLocale[language]] = `${siteConfig.url}/${language}/blog`;
          return acc;
        }, {}),
        "x-default": `${siteConfig.url}/pt/blog`,
      },
    },
    openGraph: {
      url: canonical,
      locale: languageToLocale[lang],
      type: "website",
    },
  };
}

export default async function BlogIndex({
  params,
  searchParams,
}: {
  params: Promise<{ lang: string }>;
  searchParams?: Promise<{ page?: string }>;
}) {
  const { lang } = await params;

  if (!isValidLanguage(lang)) {
    notFound();
  }

  const resolvedSearchParams = searchParams ? await searchParams : undefined;
  const page = Number(resolvedSearchParams?.page ?? "1");
  const posts = await fetchPublishedPosts(lang);
  const paginated = posts.slice(0, PAGE_SIZE * page);
  const hasMore = posts.length > paginated.length;

  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString(
      lang === "pt" ? "pt-BR" : "en-US",
      { year: "numeric", month: "numeric", day: "numeric" }
    );
  };

  // Função para calcular tempo de leitura (aproximado)
  const calculateReadingTime = (excerpt: string) => {
    const wordsPerMinute = 200;
    const words = excerpt.split(/\s+/).length;
    const minutes = Math.ceil(words / wordsPerMinute);
    return minutes;
  };

  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-16">
      <div className="mb-10 space-y-3">
        <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
          {lang === "pt" ? "Blog" : "Blog"}
        </p>
        <h1 className="text-4xl font-semibold">
          {lang === "pt"
            ? "Insights sobre produto, tecnologia e liderança."
            : "Insights on product, technology, and leadership."}
        </h1>
        <p className="text-muted-foreground">
          {lang === "pt"
            ? "Posts sobre estratégia digital, transformação e execução de alto impacto."
            : "Posts on digital strategy, transformation, and high-impact execution."}
        </p>
      </div>

      <div className="space-y-8">
        {paginated.map((post) => {
          const imageUrl = post.coverImage
            ? urlForImage(post.coverImage)?.width(600).height(400).url()
            : null;
          const readingTime = post.excerpt ? calculateReadingTime(post.excerpt) : 4;

          return (
            <Link
              key={post._id}
              href={`/${lang}/blog/${post.slug.current}`}
              className="group flex flex-col md:flex-row gap-6 rounded-2xl border border-border overflow-hidden transition-all hover:border-primary/40 hover:shadow-lg bg-card"
            >
              {/* Image Section */}
              {imageUrl && (
                <div className="relative w-full md:w-[45%] aspect-[3/2] md:aspect-auto overflow-hidden bg-muted shrink-0">
                  <Image
                    src={imageUrl}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 45vw"
                  />
                </div>
              )}

              {/* Content Section */}
              <div className="flex-1 p-6 md:py-8 md:pr-8 flex flex-col justify-between">
                <div className="space-y-3">
                  {/* Category & Reading Time */}
                  <div className="flex items-center gap-3 flex-wrap">
                    {post.categories && post.categories.length > 0 && (
                      <span className="inline-block bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold">
                        {post.categories[0].title}
                      </span>
                    )}
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Clock className="w-4 h-4" />
                      <span>{readingTime} {lang === "pt" ? "minutos" : "minutes"}</span>
                    </div>
                  </div>

                  {/* Date */}
                  {post.publishedAt && (
                    <p className="text-sm text-muted-foreground">
                      {formatDate(post.publishedAt)}
                    </p>
                  )}

                  {/* Title */}
                  <h2 className="text-2xl md:text-3xl font-bold group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h2>

                  {/* Excerpt */}
                  {post.excerpt && (
                    <p className="text-muted-foreground line-clamp-3">
                      {post.excerpt}
                    </p>
                  )}
                </div>

                {/* Author */}
                <div className="mt-4 pt-4 border-t border-border">
                  {post.author?.name && (
                    <div className="flex items-center gap-3">
                      {post.author.image && (
                        <div className="relative w-10 h-10 rounded-full overflow-hidden">
                          <Image
                            src={urlForImage(post.author.image)?.width(80).height(80).url() || ''}
                            alt={post.author.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                      )}
                      <div>
                        <p className="text-sm font-medium">
                          {lang === "pt" ? "Por" : "By"} {post.author.name}
                        </p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Read More Link */}
                <div className="mt-4">
                  <span className="inline-flex items-center gap-2 text-primary font-semibold text-sm group-hover:gap-3 transition-all">
                    {lang === "pt" ? "Ler mais" : "Read More"}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </div>
            </Link>
          );
        })}
      </div>

      {hasMore && (
        <div className="mt-10 text-center">
          <Link
            href={`/${lang}/blog?page=${page + 1}`}
            className="inline-flex items-center gap-2 rounded-full border-2 border-primary bg-transparent px-6 py-3 text-sm font-semibold text-primary transition-all hover:bg-primary hover:text-primary-foreground"
          >
            {lang === "pt" ? "Carregar mais" : "Load more"}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </Link>
        </div>
      )}
    </section>
  );
}
