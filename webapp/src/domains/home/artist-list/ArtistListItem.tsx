import { ArtistImage } from "./ArtistImage";
import { Heading } from "@ui-kit/components/heading/Heading";
import { Text } from "@ui-kit/components/text/Text";
import { Badge } from "@ui-kit/components/badge/Badge";
import cx from "classnames";
import type { Artist } from "@core/artist/data/ArtistModel";
import { InstaIcon } from "@ui-kit/icons/InstaIcon";
import { FacebookIcon } from "@ui-kit/icons/FacebookIcon";
import { YoutubeIcon } from "@ui-kit/icons/YoutubeIcon";
import type { SVGProps } from "react";
import { ExternalLink } from "@ui-kit/components/external-link/ExternalLink";
import { IconButton } from "@ui-kit/components/buttons/IconButton";

export type ArtistItemProps = {
  artist: Artist;
  index: number;
  className?: string;
  flip?: boolean;
};

type SocialMediaWithIcon = {
  url: string;
  icon: JSX.Element;
};

export const ArtistListItem = ({ index, artist, className, flip = false }: ArtistItemProps) => {
  const medias: SocialMediaWithIcon[] = Object.keys(artist.social_media).reduce((acc, media) => {
    switch (media) {
      case "instagram":
        return [
          ...acc,
          {
            icon: <InstaIcon />,
            url: artist.social_media[media],
          },
        ];
      case "facebook":
        return [
          ...acc,
          {
            icon: <FacebookIcon />,
            url: artist.social_media[media],
          },
        ];
      case "youtube":
        return [
          ...acc,
          {
            icon: <YoutubeIcon />,
            url: artist.social_media[media],
          },
        ];
    }
    return acc;
  }, [] as SocialMediaWithIcon[]);

  console.log({ medias });

  return (
    <div
      className={cx("flex justify-center items-center", className, {
        ["flex-row-reverse"]: flip,
      })}
    >
      <ArtistImage
        url={artist.picture.url}
        index={index}
        className="lg:h-[500px] lg:w-[500px] xl:h-[600px] xl:w-[600px]"
      />
      <div
        className={cx("w-[350px] lg:w-[400px] xl:w-[500px] flex flex-col gap-y-4", {
          ["text-right"]: flip,
        })}
      >
        <Heading as="h3" size={3} className="text-white tracking-[0.05em]">
          {artist.name}
        </Heading>
        <ul
          className={cx("flex flex-row items-center gap-2", {
            ["justify-end"]: flip,
          })}
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
          {artist.description}
        </Text>
        {medias.length > 0 && (
          <div
            className={cx("flex items-center", className, {
              ["flex-row-reverse"]: flip,
            })}
          >
            {medias.map((media) => (
              <ExternalLink key={media.url} href={media.url}>
                <IconButton icon={media.icon} />
              </ExternalLink>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
