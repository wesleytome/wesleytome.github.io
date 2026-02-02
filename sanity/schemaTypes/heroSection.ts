import { defineField, defineType } from "sanity";

export default defineType({
  name: "heroSection",
  title: "Hero Section",
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
      description: "Use the same ID for translations (e.g., 'hero-001')",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "title",
      title: "Title/Role",
      type: "string",
      description: "Professional title (e.g., 'Technology & Product Executive')",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 3,
      description: "Short description below title",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "aboutMeTitle",
      title: "About Me Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "aboutMeParagraphs",
      title: "About Me Paragraphs",
      type: "array",
      of: [{ type: "text" }],
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: "stats",
      title: "Statistics",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "value",
              title: "Value",
              type: "string",
              description: "Number or text (e.g., '25', '70+', '+$2M')",
            },
            {
              name: "label",
              title: "Label",
              type: "string",
              description: "Description (e.g., 'Years of Experience')",
            },
          ],
        },
      ],
      validation: (Rule) => Rule.required().min(4).max(4),
    }),
  ],
  preview: {
    select: {
      language: "language",
      name: "name",
      translationGroupId: "translationGroupId",
    },
    prepare({ language, name, translationGroupId }) {
      return {
        title: `Hero: ${name} (${language})`,
        subtitle: `Group: ${translationGroupId}`,
      };
    },
  },
});
