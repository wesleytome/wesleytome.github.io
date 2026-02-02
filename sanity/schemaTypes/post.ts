import { defineField, defineType } from "sanity";

export const post = defineType({
  name: "post",
  title: "Post",
  type: "document",
  fields: [
    defineField({
      name: "title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      type: "slug",
      options: {
        source: "title",
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "language",
      type: "string",
      options: {
        list: [
          { title: "Português (BR)", value: "pt-BR" },
          { title: "English", value: "en" },
        ],
        layout: "radio",
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "translationGroupId",
      title: "Translation Group ID",
      type: "string",
      description: "ID to link translations across languages.",
    }),
    defineField({
      name: "excerpt",
      type: "text",
      rows: 3,
      validation: (Rule) => Rule.max(180),
    }),
    defineField({
      name: "coverImage",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alt text",
        },
      ],
    }),
    defineField({
      name: "body",
      type: "array",
      of: [
        { type: "block" },
        {
          type: "image",
          options: { hotspot: true },
          fields: [
            {
              name: "alt",
              type: "string",
              title: "Alt text",
            },
          ],
        },
        {
          name: "videoEmbed",
          type: "object",
          title: "Video Embed",
          fields: [
            {
              name: "title",
              type: "string",
            },
            {
              name: "url",
              type: "url",
              validation: (Rule) => Rule.required().uri({ scheme: ["https"] }),
            },
          ],
        },
      ],
    }),
    defineField({
      name: "publishedAt",
      type: "datetime",
    }),
    defineField({
      name: "updatedAt",
      type: "datetime",
    }),
    defineField({
      name: "tags",
      type: "array",
      of: [{ type: "reference", to: [{ type: "tag" }] }],
    }),
    defineField({
      name: "categories",
      type: "array",
      of: [{ type: "reference", to: [{ type: "category" }] }],
    }),
    defineField({
      name: "author",
      type: "reference",
      to: [{ type: "author" }],
    }),
    defineField({
      name: "readingTime",
      type: "number",
      description: "Estimated reading time in minutes.",
    }),
    defineField({
      name: "seo",
      type: "object",
      title: "SEO",
      fields: [
        {
          name: "metaTitle",
          type: "string",
        },
        {
          name: "metaDescription",
          type: "text",
          rows: 3,
        },
        {
          name: "ogImage",
          type: "image",
          options: { hotspot: true },
        },
        {
          name: "noindex",
          type: "boolean",
        },
      ],
    }),
  ],
});
