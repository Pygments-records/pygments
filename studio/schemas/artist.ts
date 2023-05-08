export default {
  name: 'artist',
  type: 'document',
  title: 'Artist',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
    },
    {
      title: 'Categories',
      name: 'categories',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'music_genre'}],
        },
      ],
    },
    {
      type: 'object',
      name: 'social_media',
      title: 'Social Media',
      fields: [
        {name: 'instagram', type: 'string', title: 'Instagram'},
        {name: 'facebook', type: 'string', title: 'Facebook'},
        {name: 'youtube', type: 'string', title: 'Youtube'},
      ],
    },
    {
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
    },
  ],
}
