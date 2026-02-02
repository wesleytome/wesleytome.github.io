import { defineField, defineType } from "sanity";

export default defineType({
  name: "navigation",
  title: "Navigation",
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
      description: "Use the same ID for translations (e.g., 'main-nav-001')",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "menuItems",
      title: "Menu Items",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "key",
              title: "Key",
              type: "string",
              description: "Unique identifier (e.g., 'home', 'services')",
            },
            {
              name: "label",
              title: "Label",
              type: "string",
              description: "Text displayed in menu",
            },
            {
              name: "anchor",
              title: "Anchor",
              type: "string",
              description: "Section ID to scroll to (e.g., 'hero', 'services')",
            },
          ],
        },
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "blogLabel",
      title: "Blog Label",
      type: "string",
      description: "Label for blog link",
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
        title: `Navigation (${language})`,
        subtitle: `Group: ${translationGroupId}`,
      };
    },
  },
});
