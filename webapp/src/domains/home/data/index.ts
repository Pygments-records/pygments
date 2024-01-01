import { request } from '@core/api/apiClient'

export type Media = {
  url: string
  alt: string
}

export type HomeContent = {
  movie: Media
}

export const getHomeContent = async (): Promise<HomeContent> => {
  return request(`*[_type == "home"][0] {
    ...,
    movie{"url": asset->url, alt}
  }`)
}
