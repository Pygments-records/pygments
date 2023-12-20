import { request } from "@core/api/apiClient";
import type { Artist } from "@core/artist/data/ArtistModel";
import type {Staff} from "@core/staff/data/StaffModel";

export const getArtists = async (): Promise<Artist[]> => {
  return request(`*[_type == "artist"] | order(name asc) {
    ...,
    "categories": categories[]->.genre,
    picture{"url": asset->url, alt}
  }`);
};

export const getResidentArtists = async (): Promise<Artist[]> => {
  return request(`
  *[_type == "artist" && resident == true] | order(name asc) {
    ...,
    "categories": categories[]->.genre,
    picture{"url": asset->url, alt},
    "slug": slug.current
  }`);
};

export const getStaff = async (): Promise<Staff[]> => {
  return request(`*[_type == "artist" && resident == true] | order(name asc) {
    ...,
    "categories": categories[]->.genre,
    picture{"url": asset->url, alt}
  }`);
};
