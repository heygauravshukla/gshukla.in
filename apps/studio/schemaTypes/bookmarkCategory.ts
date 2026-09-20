import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'bookmarkCategory',
  title: 'Bookmark Category',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Category Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'items',
      title: 'Bookmarks',
      type: 'array',
      of: [{type: 'bookmark'}],
      validation: (Rule) => Rule.required().min(1),
    }),
  ],

  preview: {
    select: {
      title: 'title',
      items: 'items',
    },
    prepare({title, items}) {
      const count = Array.isArray(items) ? items.length : 0
      return {
        title,
        subtitle: `${count} bookmark${count === 1 ? '' : 's'}`,
      }
    },
  },

  orderings: [
    {
      title: 'Title A–Z',
      name: 'titleAsc',
      by: [{field: 'title', direction: 'asc'}],
    },
  ],
})
