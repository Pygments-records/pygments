import type { Artist } from '@core/artist/data/ArtistModel'
import React from 'react'
import Image from 'next/image'
import { Heading } from '@ui-kit/components/heading/Heading'
import NextLink from 'next/link'
import { Text } from '@ui-kit/components/text/Text'
import { Link } from '@ui-kit/components/link/Link'
import dynamic from 'next/dynamic'
import { PageLayout } from '@core/common/layouts/PageLayout/PageLayout'
const ReactPlayer = dynamic(() => import('react-player/lazy'), { ssr: false })

type ArtistScreenProps = {
  artist: Artist
}

export const ArtistScreen = ({ artist }: ArtistScreenProps) => {
  console.log({ artist })
  return (
    <PageLayout className="bg-darkPurple">
      <article className="h-screen w-screen relative">
        <Image
          src={artist.picture?.url}
          height="100%"
          width="100%"
          layout="fill"
          objectFit="cover"
        />
        <div className="absolute bottom-0 left-0 p-16">
          <Heading as="h1" size={1} className="text-white tracking-[0.05em]">
            {artist.name}
          </Heading>
        </div>
      </article>
      <section className="min-h-screen flex flex-col px-16 py-12">
        <div className="text-white mb-8">
          <NextLink href={'/'} passHref={true}>
            <Link>
              <Text as="p">Back to home</Text>
            </Link>
          </NextLink>
        </div>
        <div className="flex-1 flex gap-4">
          <div className="flex flex-col min-w-[350px]">
            <Heading as="h3" className="text-white mb-8" size={5}>
              Last Content
            </Heading>
            <ul className="flex flex-col gap-4">
              {artist.videos.length !== 0 ? (
                artist.videos.map((videoUrl, index) => (
                  <li key={`artist-video-${index}`}>
                    <ReactPlayer height={220} width={'100%'} url={videoUrl} />
                  </li>
                ))
              ) : (
                <Text as="p" className="text-white">
                  No content available
                </Text>
              )}
            </ul>
          </div>
          <div className="w-[0.5px] h-[600px] bg-gray mx-[48px] self-center" />
          <div className="flex flex-col">
            <Heading as="h3" className="text-white mb-8" size={5}>
              Biography
            </Heading>
            <Text as="p" size="lg" className="text-white max-w-[80%]">
              {artist.description}
            </Text>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
