type EventLocation = {
  address: string;
  label: string;
};

export type EventPicture = {
  url: string;
  alt: string;
};

export type Event = {
  date: Date;
  name: string;
  description: string;
  location: EventLocation;
  pictures: EventPicture[];
  categories: string[];
};
