import { defineField, defineType } from "sanity";

export default defineType({
  name: "timeline",
  title: "Timeline (Journey)",
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
      description: "Use the same ID for translations (e.g., 'timeline-001')",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "sectionTitle",
      title: "Section Title",
      type: "string",
      description: "Uppercase title (e.g., 'MY JOURNEY')",
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
      name: "experiences",
      title: "Experiences & Education",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "year",
              title: "Year",
              type: "string",
              description: "e.g., '2021-2023', 'Present'",
            },
            {
              name: "title",
              title: "Title",
              type: "string",
            },
            {
              name: "company",
              title: "Company/Institution",
              type: "string",
            },
            {
              name: "description",
              title: "Description",
              type: "text",
              rows: 3,
            },
            {
              name: "responsibilities",
              title: "Responsibilities",
              type: "array",
              of: [{ type: "string" }],
              description: "List of responsibilities or achievements",
            },
            {
              name: "type",
              title: "Type",
              type: "string",
              options: {
                list: [
                  { title: "Experience", value: "experience" },
                  { title: "Education", value: "education" },
                ],
                layout: "radio",
              },
            },
          ],
        },
      ],
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
        title: `Timeline (${language})`,
        subtitle: `Group: ${translationGroupId}`,
      };
    },
  },
});
