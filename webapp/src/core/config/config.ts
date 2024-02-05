type Config = {
  sanity: {
    projectId: string
    dataset: string
    apiVersion: string
  }
}

export const config: Config = {
  sanity: {
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? '',
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET ?? 'production',
    apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION ?? '2022-03-25',
  },
}
