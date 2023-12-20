import type { Artist } from "@core/artist/data/ArtistModel";
import { Title } from "@core/common/components/title/Title";
import React from "react";
import { ArtistListItem } from "./ArtistListItem";
import { homeNamespaces } from "../homeNamespaces";
import { useTranslation } from "@core/i18n/useTranslation";
import {useRouter} from "next/router";

const MAX_LENGTH_DESCRIPTION = 250;

type ArtistListProps = {
  artists: Artist[];
  className?: string;
};

export const ArtistList = ({ artists, className }: ArtistListProps) => {
  const { t } = useTranslation(homeNamespaces);
  const router = useRouter();
  const { artistId } = router.query;

  return (
    <div className={className}>
      <Title className="mb-16">{t("home:artists-section.title")}</Title>
      <ul className="flex flex-col items-center">
        {artists.map((artist, index) => {
          console.log('ArtistId:', artistId); // Ajouter ce console.log
          return (
            <li key={artist._id} className="h-[80vh] flex justify-center items-center">
              <ArtistListItem index={index + 1} artistId={artist._id} artist={artist} flip={index % 2 === 0}  />
            </li>
          );
        })}
      </ul>
    </div>
  );
};
