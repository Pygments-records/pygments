import { request } from '@core/api/apiClient'
import type { Event } from '@core/event/data/EventModel'

// Events edited in the Studio may have no pictures/categories (null) or pictures without
// an uploaded asset: always return arrays and drop pictures that have no url.
const eventProjection = `{
  ...,
  "categories": coalesce(categories[]->.genre, []),
  "pictures": coalesce(pictures[defined(asset->url)]{
    "alt": coalesce(alt, ''),
    "url": asset->url,
  }, [])
}`

// The timeline is a photo gallery: skip past events with no picture at all.
export const getPastEvents = async (): Promise<Event[]> => {
  return request(
    `*[_type == "event" && startDate < now() && count(pictures[defined(asset->url)]) > 0] | order(startDate desc) ${eventProjection}`,
  )
}

export const getUpcomingEvents = async (): Promise<Event[]> => {
  return request(
    `*[_type == "event" && startDate > now()] | order(startDate asc) ${eventProjection}`,
  )
}
