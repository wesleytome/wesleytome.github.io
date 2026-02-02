"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { languageLabels, languages } from "@/lib/i18n";

type LanguageSwitcherProps = {
  current: string;
};

export const LanguageSwitcher = ({ current }: LanguageSwitcherProps) => {
  const pathname = usePathname();
  const cleanedPath = pathname.replace(/^\/(pt|en)/, "");

  return (
    <div className="flex items-center gap-3 text-sm">
      {languages.map((lang) => (
        <Link
          key={lang}
          className={`transition ${
            lang === current ? "font-semibold text-primary" : "text-muted-foreground"
          }`}
          href={`/${lang}${cleanedPath}`}
        >
          {languageLabels[lang]}
        </Link>
      ))}
    </div>
  );
};
