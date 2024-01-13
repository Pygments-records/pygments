export type Picture = {
  url: string
  alt: string
}

export type SocialMedia = {
  instagram: string
  facebook: string
  youtube: string
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
  last_poadcast: {
    last_poadcast_1: string
    last_poadcast_2: string
    last_poadcast_3: string
  }
}
