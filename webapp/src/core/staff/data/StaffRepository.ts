import { request } from '@core/api/apiClient'
import type { Staff } from '@core/staff/data/StaffModel'

export const getStaff = async (): Promise<Staff[]> => {
  return request(`*[_type == "staff"] {
    ...,
    "categories": categories[]->.genre,
    picture{"url": asset->url, alt}
  }`)
}
