import { defineField, defineType } from "sanity";

export default defineType({
  name: "commonTexts",
  title: "Common Texts",
  type: "document",
  fields: [
    defineField({
      name: "language",
      title: "Language",
      type: "string",
      options: {
        list: [
          { title: "Português (Brasil)", value: "pt-BR" },
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
      description: "Use the same ID for translations (e.g., 'common-texts-001')",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "downloadResumeLabel",
      title: "Download Resume Label",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "viewAllPostsLabel",
      title: "View All Posts Label",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "featuredLabel",
      title: "Featured Label",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "citiesVisitedLabel",
      title: "Cities Visited Label",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "continentsLabel",
      title: "Continents Label",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "memoriesLabel",
      title: "Memories Label",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      language: "language",
      translationGroupId: "translationGroupId",
    },
    prepare({ language, translationGroupId }) {
      return {
        title: `Common Texts (${language})`,
        subtitle: `Group: ${translationGroupId}`,
      };
    },
  },
});
