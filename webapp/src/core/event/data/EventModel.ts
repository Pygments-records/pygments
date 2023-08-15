type EventLocation = {
  address: string;
  label: string;
};

export type EventPicture = {
  url: string;
  alt: string;
};

export type Event = {
  _id: string;
  startDate: Date;
  endDate: Date;
  name: string;
  description: string;
  location: EventLocation;
  pictures: EventPicture[];
  categories: string[];
};
