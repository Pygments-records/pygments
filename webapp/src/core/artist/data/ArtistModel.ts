export type Picture = {
  url: string;
  alt: string;
};

export type SocialMedia = {
  instagram: string;
  facebook: string;
  youtube: string;
};

export type Artist = {
  _id: string;
  name: string;
  description: string;
  social_media: SocialMedia;
  picture: Picture;
  categories: string[];
};
