import { config } from '@core/config/config'
import { createClient } from '@sanity/client'

export const apiClient = createClient({
  projectId: config.sanity.projectId,
  dataset: config.sanity.dataset,
  apiVersion: config.sanity.apiVersion,
  useCdn: true,
})

export const request = <T>(query: string): Promise<T> => apiClient.fetch<T>(query)
