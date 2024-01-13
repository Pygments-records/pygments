import {defineField} from 'sanity'
import {documents} from './document'

export default defineField({
  name: documents.artist.name,
  type: 'document',
  title: documents.artist.title,
  fields: [
    defineField({
      name: 'resident',
      type: 'boolean',
      title: 'Resident Pygments',
      validation: (Rule) => Rule.required(),
    }),
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
    defineField({
      type: 'object',
      name: 'last_poadcast',
      title: 'Last Poadcast',
      fields: [
        {name: 'last_poadcast_1', type: 'string', title: 'Last Poadcast 1'},
        {name: 'last_poadcast_2', type: 'string', title: 'Last Poadcast 2'},
        {name: 'last_poadcast_3', type: 'string', title: 'Last Poadcast 3'},
      ],
    }),
    defineField({
      type: 'string',
      name: 'email_book',
      title: 'Email booker'
    }),
    defineField({
      type: 'url',
      name: 'url_presskit',
      title: 'Url PressKit'
    }),
  ],
})
