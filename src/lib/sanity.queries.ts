import { groq } from "next-sanity";

export const postFields = groq`
  _id,
  title,
  slug,
  language,
  translationGroupId,
  excerpt,
  coverImage,
  body,
  publishedAt,
  updatedAt,
  tags[]->{
    _id,
    title,
    slug
  },
  categories[]->{
    _id,
    title,
    slug
  },
  readingTime,
  seo,
  author->{
    _id,
    name,
    role,
    image,
    bio
  }
`;

export const allPostsQuery = groq`
  *[_type == "post" && language == $language && defined(slug.current)] | order(publishedAt desc) {
    ${postFields}
  }
`;

export const postBySlugQuery = groq`
  *[_type == "post" && slug.current == $slug && language == $language][0] {
    ${postFields}
  }
`;

export const allSlugsQuery = groq`
  *[_type == "post" && language == $language && defined(slug.current)].slug.current
`;

export const relatedPostsQuery = groq`
  *[_type == "post" && translationGroupId == $translationGroupId && language == $language][0] {
    ${postFields}
  }
`;

export const translationSlugsQuery = groq`
  *[_type == "post" && translationGroupId == $translationGroupId] {
    "slug": slug.current,
    language
  }
`;

// Homepage content queries
export const navigationQuery = groq`
  *[_type == "navigation" && language == $language][0] {
    _id,
    language,
    translationGroupId,
    menuItems,
    blogLabel
  }
`;

export const footerQuery = groq`
  *[_type == "footer" && language == $language][0] {
    _id,
    language,
    translationGroupId,
    ctaTitle,
    ctaDescription,
    location,
    email,
    linkedinLabel,
    linkedinUrl,
    copyrightText
  }
`;

export const commonTextsQuery = groq`
  *[_type == "commonTexts" && language == $language][0] {
    _id,
    language,
    translationGroupId,
    downloadResumeLabel,
    viewAllPostsLabel,
    featuredLabel,
    citiesVisitedLabel,
    continentsLabel,
    memoriesLabel
  }
`;

export const heroSectionQuery = groq`
  *[_type == "heroSection" && language == $language][0] {
    _id,
    language,
    translationGroupId,
    name,
    title,
    description,
    aboutMeTitle,
    aboutMeParagraphs,
    stats
  }
`;

export const servicesSectionQuery = groq`
  *[_type == "servicesSection" && language == $language][0] {
    _id,
    language,
    translationGroupId,
    sectionTitle,
    sectionSubtitle,
    sectionDescription,
    services
  }
`;

export const timelineQuery = groq`
  *[_type == "timeline" && language == $language][0] {
    _id,
    language,
    translationGroupId,
    sectionTitle,
    sectionSubtitle,
    sectionDescription,
    experiences
  }
`;

export const awardsQuery = groq`
  *[_type == "awards" && language == $language][0] {
    _id,
    language,
    translationGroupId,
    sectionTitle,
    sectionSubtitle,
    sectionDescription,
    awards
  }
`;

export const certificationsQuery = groq`
  *[_type == "certifications" && language == $language][0] {
    _id,
    language,
    translationGroupId,
    sectionTitle,
    sectionSubtitle,
    sectionDescription,
    certifications
  }
`;

export const globeSectionQuery = groq`
  *[_type == "globeSection" && language == $language][0] {
    _id,
    language,
    translationGroupId,
    sectionTitle,
    sectionSubtitle,
    sectionDescriptionParagraph1,
    sectionDescriptionParagraph2,
    citiesLabel,
    continentsLabel,
    memoriesLabel
  }
`;
