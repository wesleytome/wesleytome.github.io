import { defineField, defineType } from "sanity";

export default defineType({
  name: "footer",
  title: "Footer",
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
      description: "Use the same ID for translations (e.g., 'main-footer-001')",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "ctaTitle",
      title: "CTA Title",
      type: "string",
      description: "Call-to-action title (e.g., 'Let's Work Together!')",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "ctaDescription",
      title: "CTA Description",
      type: "text",
      rows: 2,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "location",
      title: "Location",
      type: "string",
      description: "City/state (e.g., 'São Paulo, SP')",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "email",
      title: "Email",
      type: "string",
      validation: (Rule) => Rule.required().email(),
    }),
    defineField({
      name: "linkedinLabel",
      title: "LinkedIn Label",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "linkedinUrl",
      title: "LinkedIn URL",
      type: "url",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "copyrightText",
      title: "Copyright Text",
      type: "string",
      description: "Include {year} placeholder for dynamic year",
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
        title: `Footer (${language})`,
        subtitle: `Group: ${translationGroupId}`,
      };
    },
  },
});
