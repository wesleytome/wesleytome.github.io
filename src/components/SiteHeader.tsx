"use client";

import Link from "next/link";

import { LanguageSwitcher } from "./LanguageSwitcher";

type SiteHeaderProps = {
  language: string;
};

export const SiteHeader = ({ language }: SiteHeaderProps) => {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
        <Link href={`/${language}`} className="text-lg font-semibold">
          Wesley Tomé
        </Link>
        <nav className="flex items-center gap-6 text-sm">
          <Link href={`/${language}/blog`} className="hover:text-primary">
            Blog
          </Link>
          <LanguageSwitcher current={language} />
        </nav>
      </div>
    </header>
  );
};
