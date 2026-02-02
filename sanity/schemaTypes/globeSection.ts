import { defineField, defineType } from "sanity";

export default defineType({
  name: "globeSection",
  title: "Globe Section",
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
      description: "Use the same ID for translations (e.g., 'globe-001')",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "sectionTitle",
      title: "Section Title",
      type: "string",
      description: "Uppercase title (e.g., 'PLACES I'VE EXPLORED')",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "sectionSubtitle",
      title: "Section Subtitle",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "sectionDescriptionParagraph1",
      title: "Description - Paragraph 1",
      type: "text",
      rows: 3,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "sectionDescriptionParagraph2",
      title: "Description - Paragraph 2",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "citiesLabel",
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
        title: `Globe Section (${language})`,
        subtitle: `Group: ${translationGroupId}`,
      };
    },
  },
});
