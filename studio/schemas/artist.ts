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
      title: 'Videos',
      name: 'videos',
      type: 'array',
      of: [
        {
          type: 'url',
          title: 'Video URL',
          description: 'Enter the URL of a video',
        },
      ],
      validation: (Rule) => Rule.max(3),
    }),
    defineField({
      type: 'string',
      name: 'email_book',
      title: 'Email booker',
    }),
    defineField({
      type: 'url',
      name: 'url_presskit',
      title: 'Url PressKit',
    }),
  ],
})
