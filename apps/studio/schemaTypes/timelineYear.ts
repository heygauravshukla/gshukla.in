import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'timelineYear',
  title: 'Timeline Year',
  type: 'document',
  fields: [
    defineField({
      name: 'year',
      title: 'Year',
      type: 'number',
      validation: (Rule) => Rule.required().integer().min(1900).max(2100),
    }),
    defineField({
      name: 'achievements',
      title: 'Achievements',
      type: 'array',
      of: [{type: 'achievement'}],
      validation: (Rule) => Rule.required().min(1),
    }),
  ],

  preview: {
    select: {
      year: 'year',
      achievements: 'achievements',
    },
    prepare({year, achievements}) {
      const count = Array.isArray(achievements) ? achievements.length : 0
      return {
        title: String(year),
        subtitle: `${count} achievement${count === 1 ? '' : 's'}`,
      }
    },
  },

  orderings: [
    {
      title: 'Newest First',
      name: 'yearDesc',
      by: [{field: 'year', direction: 'desc'}],
    },
    {
      title: 'Oldest First',
      name: 'yearAsc',
      by: [{field: 'year', direction: 'asc'}],
    },
  ],
})
