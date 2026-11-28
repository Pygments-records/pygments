import { request } from '@core/api/apiClient'
import type { Artist } from '@core/artist/data/ArtistModel'
import type { Staff } from '@core/staff/data/StaffModel'
import { normalizeVideoUrl } from '@core/artist/data/normalizeVideoUrl'

export const getArtists = async (): Promise<Artist[]> => {
  return request(`*[_type == "artist"] | order(name asc) {
    ...,
    "categories": categories[]->.genre,
    picture{"url": asset->url, alt}
  }`)
}

export const getResidentArtists = async (): Promise<Artist[]> => {
  return request(`
  *[_type == "artist" && resident == true] | order(name asc) {
    ...,
    "categories": categories[]->.genre,
    picture{"url": asset->url, alt},
    "slug": slug.current
  }`)
}

export const getStaff = async (): Promise<Staff[]> => {
  return request(`*[_type == "artist" && resident == true] | order(name asc) {
    ...,
    "categories": categories[]->.genre,
    picture{"url": asset->url, alt}
  }`)
}

export const getOneArtist = async (id: string): Promise<Artist> => {
  const artist = await request<Artist | null>(`*[_type == "artist" && _id == '${id}'][0] {
    ...,
    "categories": categories[]->.genre,
    "videos": coalesce(videos, []),
    picture{"url": coalesce(asset->url, ''), alt}
  }`)
  // Unknown id: keep returning what Sanity sent, as before.
  if (!artist) return artist as unknown as Artist
  return { ...artist, videos: artist.videos.map(normalizeVideoUrl) }
}

export const getResidentArtistIds = async (): Promise<string[]> => {
  return request(`*[_type == "artist" && resident == true]._id`)
}
