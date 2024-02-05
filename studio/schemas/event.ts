import {defineField} from 'sanity'
import {validateUrl} from '../validation/validation'
import {documents} from './document'

export default defineField({
  name: documents.event.name,
  type: 'document',
  title: documents.event.title,
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
      name: 'startDate',
      type: 'datetime',
      title: 'Start date',
    }),
    defineField({
      name: 'endDate',
      type: 'datetime',
      title: 'End date',
      validation: (Rule) => Rule.required().min(Rule.valueOfField('startDate')),
    }),
    {
      type: 'object',
      name: 'location',
      title: 'Location',
      fields: [
        defineField({
          name: 'address',
          type: 'string',
          title: 'Address',
          validation: (Rule) => Rule.required().min(1),
        }),
        defineField({
          name: 'label',
          type: 'string',
          title: 'Label',
          validation: (Rule) => Rule.required().min(1),
        }),
      ],
      validation: (Rule) => Rule.required(),
    },
    defineField({
      title: 'Ticket',
      name: 'ticket',
      type: 'string',
      validation: (Rule) =>
        Rule.custom((ticket) => {
          if (ticket === undefined) {
            return 'This is a required field.'
          }
          if (!validateUrl(ticket)) {
            return 'This is not a valid link.'
          }
          return true
        }),
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
      title: 'Pictures',
      name: 'pictures',
      type: 'array',
      of: [
        {
          title: 'Image',
          name: 'image',
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
        },
      ],
      options: {
        layout: 'grid',
      },
      validation: (Rule) => Rule.required().min(1),
    }),
    {
      title: 'Artists',
      name: 'artists',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'artist'}],
        },
      ],
    },
  ],
})
