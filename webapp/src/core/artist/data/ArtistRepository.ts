import { request } from "@core/api/apiClient";
import type { Artist } from "@core/artist/data/ArtistModel";

export const getArtists = async (): Promise<Artist[]> => {
  return request(`*[_type == "artist"] | order(name asc) {
    ...,
    "categories": artists[]->.genre,
    picture
  }`);
};
