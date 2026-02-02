"use client";

import GlobeSection from "./GlobeSection";
import HeroSection from "./HeroSection";
import ServicesSection from "./ServicesSection";
import TimelineSection from "./TimelineSection";
import AwardsSection from "./AwardsSection";
import CertificationsSection from "./CertificationsSection";
import LastPostsSection from "./LastPostsSection";
import { useRadixTheme } from "@/hooks/useRadixTheme";
import { useSystemTheme } from "@/hooks/useSystemTheme";
import { useThemeClasses } from "@/hooks/useThemeClasses";
import ThemeInitializer from "./ThemeInitializer";
import type {
  SanityPost,
  HeroSectionType,
  ServicesSectionType,
  TimelineType,
  AwardsType,
  CertificationsType,
  GlobeSectionType,
  CommonTextsType,
} from "@/lib/sanity.types";

interface HomePageClientProps {
  posts: SanityPost[];
  lang: string;
  heroData: HeroSectionType;
  servicesData: ServicesSectionType;
  timelineData: TimelineType;
  awardsData: AwardsType;
  certificationsData: CertificationsType;
  globeData: GlobeSectionType;
  commonTexts: CommonTextsType;
}

export const HomePageClient = ({
  posts,
  lang,
  heroData,
  servicesData,
  timelineData,
  awardsData,
  certificationsData,
  globeData,
  commonTexts,
}: HomePageClientProps) => {
  useRadixTheme();
  useSystemTheme();
  useThemeClasses();

  return (
    <>
      <ThemeInitializer />
      <div className="min-h-screen tech-pattern">
        <div id="hero" className="relative w-full overflow-hidden bg-gradient-top-to-bottom">
          <HeroSection heroData={heroData} commonTexts={commonTexts} />
        </div>
        <section id="posts" className="py-20 px-6 bg-gradient-bottom-to-top">
          <LastPostsSection posts={posts} lang={lang} commonTexts={commonTexts} />
        </section>
        <section id="services" className="py-20 px-6 bg-gradient-top-to-bottom">
          <ServicesSection servicesData={servicesData} />
        </section>
        <section
          id="timeline"
          className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-bottom-to-top"
        >
          <TimelineSection timelineData={timelineData} />
        </section>
        <section id="awards" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-top-to-bottom">
          <AwardsSection awardsData={awardsData} />
        </section>
        <section
          id="certifications"
          className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-bottom-to-top"
        >
          <CertificationsSection certificationsData={certificationsData} />
        </section>
        <GlobeSection globeData={globeData} />
        
      </div>
    </>
  );
};
