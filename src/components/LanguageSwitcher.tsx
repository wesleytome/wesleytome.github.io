"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { languageLabels, languages } from "@/lib/i18n";

type LanguageSwitcherProps = {
  current: string;
  translationSlugs?: {
    pt?: string;
    en?: string;
  };
};

export const LanguageSwitcher = ({ current, translationSlugs }: LanguageSwitcherProps) => {
  const pathname = usePathname();
  const pathParts = pathname?.split("/") || [];
  const isBlogPost = pathname?.includes("/blog/") && pathParts.length >= 4;

  const getLanguageHref = (lang: string) => {
    // Se estamos em um post do blog e temos traduções
    if (isBlogPost && translationSlugs) {
      const translationSlug = translationSlugs[lang as keyof typeof translationSlugs];
      
      if (translationSlug) {
        // Tradução existe, navega para o slug correto
        return `/${lang}/blog/${translationSlug}`;
      } else {
        // Tradução não existe, vai para lista de posts
        return `/${lang}/blog`;
      }
    }

    // Navegação normal (substitui idioma na URL)
    const cleanedPath = pathname?.replace(/^\/(pt|en)/, "") || "";
    return `/${lang}${cleanedPath}`;
  };

  return (
    <div className="flex items-center gap-3 text-sm">
      {languages.map((lang) => (
        <Link
          key={lang}
          className={`transition ${
            lang === current ? "font-semibold text-primary" : "text-muted-foreground"
          }`}
          href={getLanguageHref(lang)}
        >
          {languageLabels[lang]}
        </Link>
      ))}
    </div>
  );
};
