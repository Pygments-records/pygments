import {defineField} from 'sanity'

export default defineField({
  name: 'artist',
  type: 'document',
  title: 'Artist',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      title: 'Name',
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: 'description',
      type: 'text',
      title: 'Description',
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      title: 'Categories',
      name: 'categories',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'music_genre'}],
        },
      ],
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      type: 'object',
      name: 'social_media',
      title: 'Social Media',
      fields: [
        {name: 'instagram', type: 'string', title: 'Instagram'},
        {name: 'facebook', type: 'string', title: 'Facebook'},
        {name: 'youtube', type: 'string', title: 'Youtube'},
      ],
    }),
    defineField({
      title: 'Picture',
      name: 'picture',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
        },
      ],
      validation: (Rule) => Rule.required(),
    }),
  ],
})
