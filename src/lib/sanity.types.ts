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
  body?: unknown[];
  publishedAt?: string;
  updatedAt?: string;
  tags?: SanityTag[];
  categories?: SanityCategory[];
  readingTime?: number;
  seo?: SanitySeo;
  author?: SanityAuthor;
};
