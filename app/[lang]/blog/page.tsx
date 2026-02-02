import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { isValidLanguage, languageToLocale, languages } from "@/lib/i18n";
import { fetchPublishedPosts } from "@/lib/sanity.fetch";
import { siteConfig } from "@/lib/site";

const PAGE_SIZE = 8;

export const revalidate = 60;

export async function generateMetadata({
  params,
}: {
  params: { lang: string };
}): Promise<Metadata> {
  const { lang } = params;

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
  params: { lang: string };
  searchParams?: { page?: string };
}) {
  const { lang } = params;

  if (!isValidLanguage(lang)) {
    notFound();
  }

  const page = Number(searchParams?.page ?? "1");
  const posts = await fetchPublishedPosts(lang);
  const paginated = posts.slice(0, PAGE_SIZE * page);
  const hasMore = posts.length > paginated.length;

  return (
    <section className="mx-auto w-full max-w-5xl px-6 py-16">
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

      <div className="grid gap-6">
        {paginated.map((post) => (
          <Link
            key={post._id}
            href={`/${lang}/blog/${post.slug.current}`}
            className="rounded-2xl border border-border p-6 transition hover:border-primary/40 hover:bg-muted/20"
          >
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
              {post.publishedAt
                ? new Date(post.publishedAt).toLocaleDateString(
                    lang === "pt" ? "pt-BR" : "en",
                    { dateStyle: "medium" },
                  )
                : null}
            </p>
            <h2 className="mt-2 text-2xl font-semibold">{post.title}</h2>
            <p className="mt-2 text-muted-foreground">{post.excerpt}</p>
          </Link>
        ))}
      </div>

      {hasMore && (
        <div className="mt-10">
          <Link
            href={`/${lang}/blog?page=${page + 1}`}
            className="inline-flex items-center rounded-full border border-border px-5 py-2 text-sm transition hover:border-primary/50 hover:text-primary"
          >
            {lang === "pt" ? "Carregar mais" : "Load more"}
          </Link>
        </div>
      )}
    </section>
  );
}
