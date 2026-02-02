import { defineField, defineType } from "sanity";

export default defineType({
  name: "certifications",
  title: "Certifications Section",
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
      description: "Use the same ID for translations (e.g., 'certifications-001')",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "sectionTitle",
      title: "Section Title",
      type: "string",
      description: "Uppercase title (e.g., 'CERTIFICATIONS')",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "sectionSubtitle",
      title: "Section Subtitle",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "sectionDescription",
      title: "Section Description",
      type: "text",
      rows: 2,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "certifications",
      title: "Certifications",
      type: "array",
      of: [{ type: "string" }],
      description: "List of certification names",
      validation: (Rule) => Rule.required().min(1),
    }),
  ],
  preview: {
    select: {
      language: "language",
      translationGroupId: "translationGroupId",
    },
    prepare({ language, translationGroupId }) {
      return {
        title: `Certifications Section (${language})`,
        subtitle: `Group: ${translationGroupId}`,
      };
    },
  },
});
