import { defineField, defineType } from "sanity";

export const postType = defineType({
  name: "post",
  title: "Post",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (rule) => rule.required(),
    }),

    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (rule) => rule.required(),
    }),

    defineField({
      name: "publishedAt",
      title: "Published At",
      type: "datetime",
      initialValue: () => new Date().toISOString(),
      validation: (rule) => rule.required(),
    }),

    defineField({
      name: "summary",
      title: "Summary",
      type: "text",
      rows: 3,
      description:
        "A short summary or excerpt that appears in blog cards and meta descriptions.",
      validation: (rule) => rule.required().min(20).max(300),
    }),

    defineField({
      name: "image",
      title: "Cover Image",
      type: "image",
      options: { hotspot: true },
      fields: [
        defineField({
          name: "alt",
          title: "Alt Text",
          type: "string",
          description:
            "Accessible description of the image for SEO and screen readers",
        }),
      ],
    }),

    defineField({
      name: "tags",
      title: "Tags",
      type: "array",
      of: [{ type: "string" }],
      options: {
        layout: "tags",
      },
      description: "Add relevant tags (e.g., CSS, Next.js, Typography)",
    }),

    defineField({
      name: "body",
      title: "Body",
      type: "array",
      of: [
        { type: "block" },
        { type: "image", options: { hotspot: true } },
        // Optional: you can add custom block types later (code blocks, callouts, etc.)
      ],
    }),
  ],

  preview: {
    select: {
      title: "title",
      media: "image",
      subtitle: "publishedAt",
    },
  },
});
