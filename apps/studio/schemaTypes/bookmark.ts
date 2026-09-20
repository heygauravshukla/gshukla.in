import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'bookmark',
  title: 'Bookmark',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'href',
      title: 'URL',
      type: 'url',
      validation: (Rule) =>
        Rule.required().uri({scheme: ['http', 'https']}),
    }),
  ],

  preview: {
    select: {
      title: 'title',
      subtitle: 'href',
    },
  },
})
