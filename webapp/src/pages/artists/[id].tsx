import type { Artist } from '@core/artist/data/ArtistModel'
import { getOneArtist, getResidentArtistIds } from '@core/artist/data/ArtistRepository'
import { serverSideTranslations } from '@core/i18n/serverSideTranslations'
import { handleClientError } from '@lib/http-client/http'
import type { GetStaticPaths } from '@lib/next/getStaticPaths'
import type { GetStaticProps } from '@lib/next/getStaticProps'
import { ArtistScreen } from '@domains/artist/ArtistScreen'
import { RootLayout } from '@core/common/layouts/RootLayout/RootLayout'
import { artistNamespaces } from '@domains/artist/artistNamespaces'

type ArtistPageProps = {
  artist?: Artist
  error?: number
}

export default function ArtistPage({ artist, error }: ArtistPageProps) {
  if (error !== undefined || artist === undefined) {
    return <p>Error</p>
  }

  return (
    <RootLayout className={'overflow-x-hidden'}>
      <ArtistScreen artist={artist} />
    </RootLayout>
  )
}

type PathParameters = {
  id: string
}

export const getStaticPaths: GetStaticPaths<PathParameters> = async () => {
  try {
    const artistsIds = await getResidentArtistIds()
    const paths = artistsIds.map((_id) => ({
      params: { id: _id },
    }))
    return {
      paths,
      fallback: 'blocking',
    }
  } catch (e) {
    console.error(e)
    return {
      paths: [],
      fallback: 'blocking',
    }
  }
}

export const getStaticProps: GetStaticProps<ArtistPageProps, PathParameters> = async ({
  params,
}) => {
  const translations = serverSideTranslations(artistNamespaces)
  try {
    if (params?.id === undefined) {
      return {
        notFound: true,
      }
    }
    const artist = await getOneArtist(params.id)
    return {
      revalidate: 3600,
      props: {
        artist,
        ...(await translations),
      },
    }
  } catch (e) {
    console.error(e)
    return handleClientError(e, translations)
  }
}
