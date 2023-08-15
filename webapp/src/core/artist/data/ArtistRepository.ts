import { request } from "@core/api/apiClient";
import type { Artist } from "@core/artist/data/ArtistModel";

export const getArtists = async (): Promise<Artist[]> => {
  return request(`*[_type == "artist"] | order(name asc) {
    ...,
    "categories": categories[]->.genre,
    picture{"url": asset->url, alt}
  }`);
};
