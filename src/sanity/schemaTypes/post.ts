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
        "Short excerpt for cards and meta descriptions (about 20–300 characters).",
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
          description: "For SEO and screen readers",
        }),
      ],
    }),
    defineField({
      name: "tags",
      title: "Tags",
      type: "array",
      of: [{ type: "string" }],
      options: { layout: "tags" },
    }),
    defineField({
      name: "body",
      title: "Body",
      type: "array",
      of: [
        { type: "block" },
        { type: "image", options: { hotspot: true } },
        {
          type: "code",
          title: "Code Block",
          options: {
            withFilename: true,
            language: "javascript",
            languageAlternatives: [
              { title: "HTML", value: "html" },
              { title: "CSS", value: "css" },
              { title: "JavaScript", value: "javascript" },
              { title: "TypeScript", value: "typescript" },
              { title: "JSON", value: "json" },
              { title: "Bash", value: "bash" },
              { title: "MDX", value: "mdx" },
              { title: "Python", value: "python" },
            ],
          },
        },
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
