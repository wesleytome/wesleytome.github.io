"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { languageLabels, languages } from "@/lib/i18n";

type TranslationSlugs = {
  pt?: string;
  en?: string;
};

type LanguageSwitcherProps = {
  current: string;
  translationSlugs?: TranslationSlugs;
};

export const LanguageSwitcher = ({ current, translationSlugs: providedSlugs }: LanguageSwitcherProps) => {
  const pathname = usePathname();
  const pathParts = pathname?.split("/") || [];
  const isBlogPost = pathname?.includes("/blog/") && pathParts.length >= 4;
  
  const [translationSlugs, setTranslationSlugs] = useState<TranslationSlugs | undefined>(providedSlugs);

  // Sincronizar com window quando mudar
  useEffect(() => {
    if (providedSlugs) {
      setTranslationSlugs(providedSlugs);
      return;
    }

    // Verificar window a cada 100ms até encontrar ou timeout
    let attempts = 0;
    const maxAttempts = 20; // 2 segundos max
    
    const checkWindow = () => {
      const windowSlugs = (window as any).__TRANSLATION_SLUGS__;
      if (windowSlugs) {
        setTranslationSlugs(windowSlugs);
        return;
      }
      
      attempts++;
      if (attempts < maxAttempts) {
        setTimeout(checkWindow, 100);
      }
    };

    if (isBlogPost) {
      checkWindow();
    }
  }, [providedSlugs, isBlogPost, pathname]);

  const getLanguageHref = (lang: string) => {
    // Se estamos em um post do blog e temos traduções
    if (isBlogPost && translationSlugs) {
      const translationSlug = translationSlugs[lang as keyof TranslationSlugs];
      
      if (translationSlug) {
        return `/${lang}/blog/${translationSlug}`;
      } else {
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
