import type { Artist } from '@core/artist/data/ArtistModel'
import React from 'react'
import Image from 'next/image'
import { Heading } from '@ui-kit/components/heading/Heading'
import NextLink from 'next/link'
import { Text } from '@ui-kit/components/text/Text'
import { Link } from '@ui-kit/components/link/Link'
import dynamic from 'next/dynamic'
import { PageLayout } from '@core/common/layouts/PageLayout/PageLayout'
import { ExternalLink } from '@ui-kit/components/external-link/ExternalLink'
import { IconButton } from '@ui-kit/components/buttons/IconButton'
import { InstaIcon } from '@ui-kit/icons/InstaIcon'
import { FacebookIcon } from '@ui-kit/icons/FbIcon'
import { YoutubeIcon } from '@ui-kit/icons/YtIcon'
import { SoundCloudIcon } from '@ui-kit/icons/SoundCloudIcon'
import { useTranslation } from '@core/i18n/useTranslation'
import { artistNamespaces } from './artistNamespaces'
import { ArrowIcon } from '@ui-kit/icons/ArrowIcon'
const ReactPlayer = dynamic(() => import('react-player/lazy'), { ssr: false })

type ArtistScreenProps = {
  artist: Artist
}

export const ArtistScreen = ({ artist }: ArtistScreenProps) => {
  const { t } = useTranslation(artistNamespaces)
  return (
    <PageLayout className="bg-darkPurple" withScrollHint={true}>
      <article className="h-screen w-screen relative">
        <Image
          src={artist.picture.url ?? ''}
          height="100%"
          width="100%"
          layout="fill"
          objectFit="cover"
          priority={true}
        />
        <div className="absolute bottom-0 left-0 px-4 py-6 lg:p-16">
          <Heading as="h1" size={1} className="text-white tracking-[0.05em]">
            {artist.name}
          </Heading>
        </div>
      </article>
      <section className="max-w-screen-xl xl:mx-auto mt-8 lg:mt-12 mb-[64px] lg:mb-[128px] mx-8">
        <div className="inline-flex text-white mb-8">
          <NextLink href={'/'} passHref={true}>
            <Link className="group flex items-center gap-4">
              <ArrowIcon />
              <Text as="p" className="group-hover:underline">
                {t('artist:nav.back')}
              </Text>
            </Link>
          </NextLink>
        </div>
        <div className="flex-1 flex flex-col lg:flex-row gap-8 lg:gap-4">
          <div className="flex flex-col md:max-w-[350px]">
            <Heading as="h3" className="text-white mb-8" size={5}>
              {t('artist:videos.title')}
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
                  {t('artist:videos.noContent')}
                </Text>
              )}
            </ul>
          </div>
          <div className="hidden lg:block w-[0.5px] h-[600px] bg-gray mx-[48px] self-center" />
          <div className="flex-1">
            <div className="flex flex-col gap-8">
              <Heading as="h3" className="text-white" size={5}>
                {t('artist:bio.title')}
              </Heading>
              <Text as="p" size="lg" className="text-white">
                {artist.description}
              </Text>
              <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-4">
                <div className="flex items-center">
                  {artist.social_media.instagram && (
                    <ExternalLink href={artist.social_media.instagram}>
                      <IconButton icon={<InstaIcon />} className="w-14 h-14" />
                    </ExternalLink>
                  )}
                  {artist.social_media.facebook && (
                    <ExternalLink href={artist.social_media.facebook}>
                      <IconButton icon={<FacebookIcon />} className="w-14 h-14" />
                    </ExternalLink>
                  )}
                  {artist.social_media.youtube && (
                    <ExternalLink href={artist.social_media.youtube}>
                      <IconButton icon={<YoutubeIcon />} className="w-14 h-14" />
                    </ExternalLink>
                  )}
                  {artist.social_media.soundcloud && (
                    <ExternalLink href={artist.social_media.youtube}>
                      <IconButton icon={<SoundCloudIcon />} className="w-14 h-14" />
                    </ExternalLink>
                  )}
                </div>
                <div className="flex justify-between lg:justify-start items-center gap-2">
                  {artist.url_presskit && (
                    <Link
                      target="_blank"
                      href={artist.url_presskit}
                      className="bg-electricBlue text-white py-4 px-8 lg:py-3 lg:px-6 cursor-pointer"
                    >
                      <Text>{t('artist:bio.pressKit')}</Text>
                    </Link>
                  )}
                  {artist.email_book && (
                    <Link
                      href={`mailto:${artist.email_book}`}
                      className="bg-electricBlue text-white py-4 px-8 lg:py-3 lg:px-6 cursor-pointer"
                    >
                      <Text>{t('artist:bio.book')}</Text>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
