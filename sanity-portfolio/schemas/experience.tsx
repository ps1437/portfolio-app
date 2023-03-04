import {defineField,defineType} from 'sanity'

export default defineType({
  name: 'experience',
  title: 'Experience Info',
  type: 'document',
  fields: [
    defineField({
      name: 'jobTitle',
      title: 'Job Title',
      type: 'string',
    }),

    defineField({
      title: 'companyImage',
      name: 'companyImage',
      type: 'image',
      options: {
        hotspot: true, // <-- Defaults to false
      }
    }),

    defineField({
      name: 'companyName',
      title: 'Company Name',
      type: 'string',
    }),

    defineField({
      name: 'dateStarted',
      title: 'dateStarted',
      type: 'date',
    }),
    defineField({
        name: 'dateEnded',
        title: 'dateEnded',
        type: 'date',
      }),
    defineField({
      name: 'isCurrentlyWorking',
      title: 'isCurrentlyWorking',
      type: 'boolean',
    }),


    defineField({
        name: 'technologies',
        title: 'Technologies',
        type: 'array',
        of: [
          {
            type: 'reference',
            to: [{type: 'skills'}]
          }
        ]
    }),

    defineField({
      name: 'points',
      title: 'points',
      type: 'array',
      of: [
        {
          type: 'string',
        }
      ]
  })
  ],
})
