export type Picture = {
  url: string | null
  alt: string
}

export type SocialMedia = {
  instagram: string
  facebook: string
  youtube: string
  soundcloud: string
}

export type Artist = {
  _id: string
  name: string
  description: string
  social_media: SocialMedia
  picture: Picture
  categories: string[]
  slug: {
    current: string
  }
  email_book: string
  url_presskit: string
  videos: string[]
}
