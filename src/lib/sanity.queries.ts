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
