import { ArtistImage } from './ArtistImage'
import { Heading } from '@ui-kit/components/heading/Heading'
import { Text } from '@ui-kit/components/text/Text'
import { Badge } from '@ui-kit/components/badge/Badge'
import cx from 'classnames'
import type { Artist } from '@core/artist/data/ArtistModel'
import { InstaIcon } from '@ui-kit/icons/InstaIcon'
import { FacebookIcon } from '@ui-kit/icons/FbIcon'
import { YoutubeIcon } from '@ui-kit/icons/YtIcon'
import { ExternalLink } from '@ui-kit/components/external-link/ExternalLink'
import { IconButton } from '@ui-kit/components/buttons/IconButton'
import { useTranslation } from '@core/i18n/useTranslation'
import { homeNamespaces } from '../homeNamespaces'
import NextLink from 'next/link'
import React from 'react'
import { OuterArrow } from '@ui-kit/icons/OuterArrow'
import { Link } from '@ui-kit/components/link/Link'

export type ArtistItemProps = {
  artist: Artist
  index: number
  className?: string
  flip?: boolean
}

type SocialMediaWithIcon = {
  url: string
  icon: JSX.Element
}

const MAX_LENGTH_DESCRIPTION = 250

export const ArtistListItem = ({ index, artist, className, flip = false }: ArtistItemProps) => {
  const { t } = useTranslation(homeNamespaces)
  const medias: SocialMediaWithIcon[] = Object.keys(artist.social_media).reduce((acc, media) => {
    switch (media) {
      case 'instagram':
        return [
          ...acc,
          {
            icon: <InstaIcon />,
            url: artist.social_media[media],
          },
        ]
      case 'facebook':
        return [
          ...acc,
          {
            icon: <FacebookIcon />,
            url: artist.social_media[media],
          },
        ]
      case 'youtube':
        return [
          ...acc,
          {
            icon: <YoutubeIcon />,
            url: artist.social_media[media],
          },
        ]
    }
    return acc
  }, [] as SocialMediaWithIcon[])

  return (
    <div
      className={cx('flex flex-col lg:flex-row justify-center items-center', className, {
        ['lg:flex-row-reverse']: flip,
      })}
    >
      <ArtistImage
        url={artist.picture.url ?? ''}
        index={index}
        className="md:h-[400px] md:w-[400px] lg:h-[500px] lg:w-[500px] xl:h-[600px] xl:w-[600px]"
      />
      <div
        className={cx('lg:w-[400px] xl:w-[500px] flex flex-col gap-y-4 text-center lg:text-left', {
          ['lg:text-right']: flip,
        })}
      >
        <NextLink href={`/artists/${artist._id}`} passHref>
          <Link
            className={cx('flex gap-3 items-center justify-center lg:justify-start', {
              ['lg:justify-end']: flip,
            })}
          >
            <Heading as="h3" size={3} className="text-white tracking-[0.05em]">
              {artist.name}
            </Heading>
            <OuterArrow width={32} height={32} />
          </Link>
        </NextLink>
        <ul
          className={cx(
            'flex flex-row flex-wrap justify-center lg:justify-start items-center gap-2',
            {
              ['lg:justify-end']: flip,
            },
          )}
        >
          {artist.categories.map((category) => (
            <Badge
              key={category}
              label={category}
              color="electricBlue"
              outlined={true}
              className="px-6 py-1"
            />
          ))}
        </ul>
        <Text as="p" size="base" className="text-white tracking-[0.05em]" weight="light">
          {truncate(artist.description, MAX_LENGTH_DESCRIPTION) + '...'}
        </Text>
        {medias.length > 0 && (
          <div
            className={cx('flex justify-center lg:justify-start items-center gap-4', className, {
              ['lg:justify-end']: flip,
            })}
          >
            <Text as="p" size="sm" className="text-white tracking-[0.05em]" weight="light">
              {t('home:artists-section.follow-on')}
            </Text>
            {medias.map((media) => (
              <ExternalLink key={media.url} href={media.url}>
                <IconButton icon={media.icon} />
              </ExternalLink>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

function truncate(str: string, max = 10) {
  const substring = str.substring(0, max)
  return substring.substring(0, Math.min(substring.length, substring.lastIndexOf(' ')))
}
