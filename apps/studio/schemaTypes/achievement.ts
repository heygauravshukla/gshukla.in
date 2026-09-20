import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'achievement',
  title: 'Achievement',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'date',
      title: 'Date',
      type: 'date',
      options: {
        dateFormat: 'YYYY-MM-DD',
      },
    }),
  ],

  preview: {
    select: {
      title: 'title',
      subtitle: 'date',
    },
  },
})
