import {defineField,defineType} from 'sanity'

export default defineType({
  name: 'project',
  title: 'Project Info',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),

    defineField({
      title: 'image',
      name: 'image',
      type: 'image',
      options: {
        hotspot: true, // <-- Defaults to false
      }
    }),

    defineField({
      name: 'summary',
      title: 'Summary',
      type: 'string',
    }),
    defineField({
      name: 'linkToBuild',
      title: 'linkToBuild',
      type: 'url',
    }),
    defineField({
      name: 'technologies',
      title: 'Technologies',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'skills' }]
        }
      ]
    }),

  ],
})
