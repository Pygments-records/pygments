import { request } from '@core/api/apiClient'
import type { Artist } from '@core/artist/data/ArtistModel'
import type { Staff } from '@core/staff/data/StaffModel'

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
<<<<<<< HEAD
    picture{"url": asset->url, alt}
  }`)
}
=======
    picture{"url": asset->url, alt},
    "slug": slug.current
  }`);
};
>>>>>>> cb592a5 ((feature): Artist page)

export const getStaff = async (): Promise<Staff[]> => {
  return request(`*[_type == "artist" && resident == true] | order(name asc) {
    ...,
    "categories": categories[]->.genre,
    picture{"url": asset->url, alt}
<<<<<<< HEAD
  }`)
}
=======
  }`);
};

export const getOneArtist = async (id: string): Promise<Artist> => {
  console.log({ id });
  return request(`*[_type == "artist" && _id == '${id}'][0] {
    ...,
    "categories": categories[]->.genre,
    picture{"url": asset->url, alt}
  }`);
};

export const getArtistIds = async (): Promise<string[]> => {
  return request(`*[_type == "artist"]._id`);
};
>>>>>>> 65707e8 (setup getStaticProps and getStaticPaths)
