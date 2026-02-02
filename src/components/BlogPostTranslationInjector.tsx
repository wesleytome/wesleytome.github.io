"use client";

import { useEffect } from "react";

type BlogPostTranslationInjectorProps = {
  translationSlugs?: {
    pt?: string;
    en?: string;
  };
};

export function BlogPostTranslationInjector({ translationSlugs }: BlogPostTranslationInjectorProps) {
  useEffect(() => {
    if (translationSlugs) {
      // Injeta os slugs no window para o LanguageSwitcher acessar
      (window as any).__TRANSLATION_SLUGS__ = translationSlugs;
    }
    
    return () => {
      delete (window as any).__TRANSLATION_SLUGS__;
    };
  }, [translationSlugs]);

  return null;
}
