import type { Artist } from "@core/artist/data/ArtistModel";
import { Title } from "@core/common/components/title/Title";
import React from "react";
import { ArtistImage } from "./ArtistImage";
import { Heading } from "@ui-kit/components/heading/Heading";
import { Text } from "@ui-kit/components/text/Text";
import { Badge } from "@ui-kit/components/badge/Badge";
import cx from "classnames";

type ArtistListProps = {
  artists: Artist[];
  className?: string;
};

export const ArtistList = ({ artists, className }: ArtistListProps) => {
  return (
    <div className={className}>
      <Title className="mb-16">Artists</Title>
      <ul className="flex flex-col items-center">
        {artists.map((artist, index) => (
          <li key={artist._id} className="h-[80vh] flex justify-center items-center">
            <ArtistItem index={index + 1} artist={artist} flip={index % 2 === 0} />
          </li>
        ))}
      </ul>
    </div>
  );
};

type ArtistItemProps = {
  artist: Artist;
  index: number;
  className?: string;
  flip?: boolean;
};

const ArtistItem = ({ index, artist, className, flip = false }: ArtistItemProps) => {
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
        <Heading as="h3" size={3} className="text-white">
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
        <Text as="p" size="lg" className="text-white">
          {artist.description}
        </Text>
      </div>
    </div>
  );
};
