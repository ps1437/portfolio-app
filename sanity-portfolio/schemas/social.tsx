import {defineField,defineType} from 'sanity'

export default defineType({
    name: 'social',
    title: 'Social Info',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
        }),

        defineField({
            name: 'url',
            title: 'url',
            type: 'url'
        }),



    ]


})
