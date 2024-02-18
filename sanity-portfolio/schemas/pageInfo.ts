import {defineField,defineType} from 'sanity'

export default defineType({
  name: 'pageInfo',
  title: 'Page Info',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'role',
      title: 'Role',
      type: 'string',
    }),

    defineField({
      title: 'Profile Pic',
      name: 'profilePic',
      type: 'image',
    }),

    defineField({
      title: 'Hero Image',
      name: 'heroImage',
      type: 'image',
      options: {
        hotspot: true, // <-- Defaults to false
      }
     
   }),
   
   defineField({
    title: 'Scroll Up Image',
    name: 'scrollUp',
    type: 'image',
    options: {
      hotspot: true, // <-- Defaults to false
    }
   
 }),

   defineField({
    title: 'City Image',
    name: 'cityImage',
    type: 'image',
    options: {
      hotspot: true, // <-- Defaults to false
    }
   
 }),

    defineField({
      name: 'aboutMe',
      title: 'About Me',
      type: 'string',
    }),

    defineField({
      name: 'address',
      title: 'Address',
      type: 'string',
    }),

    defineField({
      name: 'emailId',
      title: 'Email Address',
      type: 'string',
    }),

    defineField({
      name: 'mobileNo',
      title: 'Mobile Number',
      type: 'string',
    }),

    defineField({
      name: 'skills',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'skills' }]
        }
      ]
    }),

    defineField({
      name: 'social',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'social' }]
        }
      ]
    })
  ],
})
