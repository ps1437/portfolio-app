import {defineField,defineType} from 'sanity'

export default defineType({
  name: 'skills',
  title: 'Skill',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),

    defineField({
      name: 'progress',
      title: 'Progress',
      type: 'number',
      description: 'progression from 0 to 100',
    }),

    defineField({
      title: 'image',
      name: 'image',
      type: 'image',
      options: {
        hotspot: true, // <-- Defaults to false
      },
    }),

    defineField({
      title: 'imageUrl',
      name: 'ImageUrl',
      type: 'url',
    }),
  ],
})
