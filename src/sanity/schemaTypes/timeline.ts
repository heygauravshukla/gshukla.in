import { defineType, defineField } from "sanity";

export default defineType({
  name: "timeline",
  title: "Timeline",
  type: "document",
  fields: [
    defineField({
      name: "year",
      title: "Year",
      type: "number",
      validation: (Rule) => Rule.required().integer().min(1900),
    }),

    defineField({
      name: "achievements",
      title: "Achievements",
      type: "array",
      of: [
        defineField({
          name: "achievement",
          title: "Achievement",
          type: "object",
          fields: [
            defineField({
              name: "date",
              title: "Date",
              type: "date",
              description: "Exact date of this achievement",
            }),
            defineField({
              name: "title",
              title: "Title",
              type: "string",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "description",
              title: "Description",
              type: "text",
            }),
          ],
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: "year",
    },
  },
});
