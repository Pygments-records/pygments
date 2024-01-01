import { request } from '@core/api/apiClient'
import type { Event } from '@core/event/data/EventModel'

export const getPastEvents = async (): Promise<Event[]> => {
  return request(`*[_type == "event" && startDate < now()] | order(startDate desc) {
    ...,
    "categories": categories[]->.genre,
    pictures[]{"url": asset->url, alt}
  }`)
}

export const getUpcomingEvents = async (): Promise<Event[]> => {
  return request(`*[_type == "event" && startDate > now()] | order(startDate asc) {
    ...,
    "categories": categories[]->.genre,
    pictures[]{"url": asset->url, alt}
  }`)
}
