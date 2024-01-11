export type StaffPicture = {
  url: string
  alt: string
}

export type Staff = {
  _id: string
  startDate: Date
  endDate: Date
  name: string
  description: string
  picture: StaffPicture
  role: string
  categories: string[]
}
