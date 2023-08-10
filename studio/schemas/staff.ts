import {defineField} from 'sanity'

export default defineField({
  name: 'staff',
  type: 'document',
  title: 'Staff',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      title: 'Name',
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: 'role',
      type: 'string',
      title: 'Role',
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: 'description',
      type: 'text',
      title: 'Description',
      validation: (Rule) => Rule.required().min(1),
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
