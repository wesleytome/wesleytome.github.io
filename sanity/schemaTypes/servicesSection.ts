import { defineField, defineType } from "sanity";

export default defineType({
  name: "servicesSection",
  title: "Services Section",
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
      description: "Use the same ID for translations (e.g., 'services-001')",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "sectionTitle",
      title: "Section Title",
      type: "string",
      description: "Uppercase title (e.g., 'SERVICES')",
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
      name: "services",
      title: "Services",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "title",
              title: "Title",
              type: "string",
            },
            {
              name: "description",
              title: "Description",
              type: "text",
              rows: 4,
            },
            {
              name: "icon",
              title: "Icon",
              type: "string",
              description: "Lucide icon name (e.g., 'Target', 'Rocket', 'Users')",
              options: {
                list: [
                  { title: "Target", value: "Target" },
                  { title: "Rocket", value: "Rocket" },
                  { title: "Users", value: "Users" },
                  { title: "Briefcase", value: "Briefcase" },
                  { title: "Code", value: "Code" },
                  { title: "Zap", value: "Zap" },
                ],
              },
            },
          ],
        },
      ],
      validation: (Rule) => Rule.required().min(3).max(3),
    }),
  ],
  preview: {
    select: {
      language: "language",
      translationGroupId: "translationGroupId",
    },
    prepare({ language, translationGroupId }) {
      return {
        title: `Services Section (${language})`,
        subtitle: `Group: ${translationGroupId}`,
      };
    },
  },
});
