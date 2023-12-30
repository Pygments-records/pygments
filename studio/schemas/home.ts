import {defineField} from 'sanity'
import {documents} from './document'

export default defineField({
  name: documents.home.name,
  type: 'document',
  title: documents.home.title,
  fields: [
    defineField({
      name: 'movie',
      title: 'Movie',
      type: 'file',
      options: {
        accept: 'video/*', // Specify accepted video file types
      },
      validation: (Rule) => Rule.required(),
    }),
  ],
  // Singleton constraints to ensure there's only one instance of this document
  // __experimental_actions: ['create', 'update', 'delete', 'publish'],
  preview: {
    prepare: () => ({
      title: 'Home Page',
    }),
  },
})
