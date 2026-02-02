import type { ReactNode } from "react";
import { notFound } from "next/navigation";

import { SiteHeader } from "@/components/SiteHeader";
import { isValidLanguage, type Language } from "@/lib/i18n";
import { fetchPostBySlug, fetchTranslationSlugs, fetchNavigationByLanguage } from "@/lib/sanity.fetch";

export default async function BlogPostLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ lang: string; slug: string }>;
}) {
  const { lang, slug } = await params;

  if (!isValidLanguage(lang)) {
    notFound();
  }

  const validLang = lang as Language;

  // Buscar dados em paralelo
  const [post, navigationData] = await Promise.all([
    fetchPostBySlug(slug, validLang, false),
    fetchNavigationByLanguage(validLang)
  ]);

  // Buscar slugs de tradução se o post existir e tiver translationGroupId
  let translationSlugs: { pt?: string; en?: string } | undefined;
  
  if (post?.translationGroupId) {
    translationSlugs = await fetchTranslationSlugs(post.translationGroupId);
  }

  return (
    <>
      {/* Override header com slugs de tradução */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <SiteHeader 
          language={validLang} 
          navigationData={navigationData}
          translationSlugs={translationSlugs} 
        />
      </div>
      <div className="pt-[73px]">{/* Offset para header fixo */}
        {children}
      </div>
    </>
  );
}
