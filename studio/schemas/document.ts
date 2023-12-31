export type BaseDocument = {
  name: string
  title: string
}
export const commonDocumentKeys = ['event', 'artist', 'music_genre', 'staff'] as const
export const singletonDocumentKeys = ['home'] as const
export const documentKeys = [...commonDocumentKeys, ...singletonDocumentKeys] as const

export type CommonDocumentKeys = (typeof commonDocumentKeys)[number]
export type SingletonDocumentKeys = (typeof singletonDocumentKeys)[number]
export type DocumentKeys = (typeof documentKeys)[number]

export const documents: Record<DocumentKeys, BaseDocument> = {
  event: {
    name: 'event',
    title: 'Event',
  },
  artist: {
    name: 'artist',
    title: 'Artist',
  },
  music_genre: {
    name: 'music_genre',
    title: 'Music Genre',
  },
  staff: {
    name: 'staff',
    title: 'Staff',
  },
  home: {
    name: 'home',
    title: 'Home Page',
  },
}
