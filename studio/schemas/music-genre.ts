import {documents} from './document'

export default {
  name: documents['music_genre'].name,
  type: 'document',
  title: documents['music_genre'].title,
  fields: [
    {
      name: 'genre',
      type: 'string',
      title: 'Genre',
    },
  ],
}
