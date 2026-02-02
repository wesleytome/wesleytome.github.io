"use client";

import GlobeSection from "./GlobeSection";
import HeroSection from "./HeroSection";
import ServicesSection from "./ServicesSection";
import TimelineSection from "./TimelineSection";
import AwardsSection from "./AwardsSection";
import CertificationsSection from "./CertificationsSection";
import { useRadixTheme } from "@/hooks/useRadixTheme";
import { useSystemTheme } from "@/hooks/useSystemTheme";
import { useThemeClasses } from "@/hooks/useThemeClasses";
import ThemeInitializer from "./ThemeInitializer";

export const HomePageClient = () => {
  useRadixTheme();
  useSystemTheme();
  useThemeClasses();

  return (
    <>
      <ThemeInitializer />
      <div className="min-h-screen tech-pattern">
        <div id="hero" className="relative w-full overflow-hidden bg-gradient-top-to-bottom">
          <HeroSection />
        </div>
        <section id="services" className="py-20 px-6 bg-gradient-bottom-to-top">
          <ServicesSection />
        </section>
        <section
          id="timeline"
          className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-top-to-bottom"
        >
          <TimelineSection />
        </section>
        <section id="awards" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-bottom-to-top">
          <AwardsSection />
        </section>
        <section
          id="certifications"
          className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-top-to-bottom"
        >
          <CertificationsSection />
        </section>
        <GlobeSection />
      </div>
    </>
  );
};
