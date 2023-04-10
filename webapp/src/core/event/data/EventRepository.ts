import { request } from "@core/api/apiClient";
import type { Event } from "@core/event/data/EventModel";

export const getEvents = async (): Promise<Event[]> => {
  return request(`*[_type == "event"] | order(date desc) {
    ...,
    "categories": categories[]->.genre,
    pictures[]{"url": asset->url, alt}
  }`);
};
