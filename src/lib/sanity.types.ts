import type { TypedObject } from "@portabletext/types";

export type SanityImage = {
  asset?: {
    _ref?: string;
    _type?: "reference";
  };
  alt?: string;
};

export type SanitySlug = {
  current: string;
};

export type SanityTag = {
  _id: string;
  title: string;
  slug?: SanitySlug;
};

export type SanityCategory = {
  _id: string;
  title: string;
  slug?: SanitySlug;
};

export type SanityAuthor = {
  _id: string;
  name: string;
  role?: string;
  image?: SanityImage;
  bio?: string;
};

export type SanitySeo = {
  metaTitle?: string;
  metaDescription?: string;
  ogImage?: SanityImage;
  noindex?: boolean;
};

export type SanityPost = {
  _id: string;
  title: string;
  slug: SanitySlug;
  language: "pt-BR" | "en";
  translationGroupId?: string;
  excerpt?: string;
  coverImage?: SanityImage;
  body?: TypedObject[];
  publishedAt?: string;
  updatedAt?: string;
  tags?: SanityTag[];
  categories?: SanityCategory[];
  readingTime?: number;
  seo?: SanitySeo;
  author?: SanityAuthor;
};

// Homepage content types
export type NavigationType = {
  _id: string;
  language: string;
  translationGroupId: string;
  menuItems: Array<{
    key: string;
    label: string;
    anchor: string;
  }>;
  blogLabel: string;
};

export type FooterType = {
  _id: string;
  language: string;
  translationGroupId: string;
  ctaTitle: string;
  ctaDescription: string;
  location: string;
  email: string;
  linkedinLabel: string;
  linkedinUrl: string;
  copyrightText: string;
};

export type CommonTextsType = {
  _id: string;
  language: string;
  translationGroupId: string;
  downloadResumeLabel: string;
  viewAllPostsLabel: string;
  featuredLabel: string;
  citiesVisitedLabel: string;
  continentsLabel: string;
  memoriesLabel: string;
};

export type HeroSectionType = {
  _id: string;
  language: string;
  translationGroupId: string;
  name: string;
  title: string;
  description: string;
  aboutMeTitle: string;
  aboutMeParagraphs: string[];
  stats: Array<{
    value: string;
    label: string;
  }>;
};

export type ServicesSectionType = {
  _id: string;
  language: string;
  translationGroupId: string;
  sectionTitle: string;
  sectionSubtitle: string;
  sectionDescription: string;
  services: Array<{
    title: string;
    description: string;
    icon: string;
  }>;
};

export type TimelineType = {
  _id: string;
  language: string;
  translationGroupId: string;
  sectionTitle: string;
  sectionSubtitle: string;
  sectionDescription: string;
  experiences: Array<{
    year: string;
    title: string;
    company: string;
    description: string;
    responsibilities?: string[];
    type: "experience" | "education";
  }>;
};

export type AwardsType = {
  _id: string;
  language: string;
  translationGroupId: string;
  sectionTitle: string;
  sectionSubtitle: string;
  sectionDescription: string;
  awards: Array<{
    title: string;
    description: string;
    year: string;
  }>;
};

export type CertificationsType = {
  _id: string;
  language: string;
  translationGroupId: string;
  sectionTitle: string;
  sectionSubtitle: string;
  sectionDescription: string;
  certifications: string[];
};

export type GlobeSectionType = {
  _id: string;
  language: string;
  translationGroupId: string;
  sectionTitle: string;
  sectionSubtitle: string;
  sectionDescriptionParagraph1: string;
  sectionDescriptionParagraph2?: string;
  citiesLabel: string;
  continentsLabel: string;
  memoriesLabel: string;
};
