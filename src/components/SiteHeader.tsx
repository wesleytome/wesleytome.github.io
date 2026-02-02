"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { LanguageSwitcher } from "./LanguageSwitcher";
import type { NavigationType } from "@/lib/sanity.types";

type SiteHeaderProps = {
  language: string;
  navigationData: NavigationType;
  translationSlugs?: {
    pt?: string;
    en?: string;
  };
};

export const SiteHeader = ({ language, navigationData, translationSlugs }: SiteHeaderProps) => {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState<string>("hero");
  const isHomePage = pathname === `/${language}` || pathname === `/${language}/`;
  const isBlogPage = pathname?.includes("/blog");

  // Scroll spy para detectar seção ativa
  useEffect(() => {
    if (!isHomePage) return;

    const handleScroll = () => {
      const sections = navigationData.menuItems.map((item) => item.anchor);
      const scrollPosition = window.scrollY + 100; // Offset para header

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check inicial

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHomePage, navigationData.menuItems]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, anchor: string) => {
    if (isHomePage) {
      e.preventDefault();
      const element = document.getElementById(anchor);
      if (element) {
        const offset = 80; // Altura do header
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
        {/* Logo - Hidden for SEO if not important, but kept for branding */}
        <Link 
          href={`/${language}`} 
          className="text-lg font-semibold hover:text-primary transition-colors"
          aria-label="Home"
        >
          <span className="sr-only">Wesley Tomé</span>
          <span aria-hidden="true">WT</span>
        </Link>

        {/* Navigation */}
        <nav className="flex items-center gap-1 text-sm">
          {/* Menu Items */}
          {navigationData.menuItems.map((item) => {
            const isActive = isHomePage && activeSection === item.anchor;
            
            return (
              <Link
                key={item.key}
                href={isHomePage ? `#${item.anchor}` : `/${language}#${item.anchor}`}
                onClick={(e) => handleNavClick(e, item.anchor)}
                className={`px-3 py-2 rounded-md hover:bg-accent hover:text-accent-foreground transition-colors ${
                  isActive ? "text-primary font-medium" : ""
                }`}
              >
                {item.label}
              </Link>
            );
          })}

          {/* Blog Link */}
          <Link
            href={`/${language}/blog`}
            className={`px-3 py-2 rounded-md hover:bg-accent hover:text-accent-foreground transition-colors ${
              isBlogPage ? "text-primary font-medium" : ""
            }`}
          >
            {navigationData.blogLabel}
          </Link>

          {/* Language Switcher */}
          <div className="ml-2 pl-2 border-l border-border">
            <LanguageSwitcher current={language} translationSlugs={translationSlugs} />
          </div>
        </nav>
      </div>
    </header>
  );
};
