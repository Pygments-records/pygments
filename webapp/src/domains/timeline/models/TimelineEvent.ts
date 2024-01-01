export type TimelineEvent = {
  date: Date
  title: string
  description: string
  location: Location
  pictures: string[]
  artists: Artist[]
  categories: string[]
}

export type Location = {
  address: string
  label: string
}

export type Artist = {
  id: string
  username: string
  description: string
  pictures: string[]
}
