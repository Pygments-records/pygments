import { useRouter } from 'next/router';
import type {ArtistItemProps} from "@domains/home/artist-list/ArtistListItem";
import type {Artist} from "@core/artist/data/ArtistModel";
import {PageLayout} from "@core/common/layouts/PageLayout/PageLayout";
import {useResponsive} from "@core/common/hooks/useResponsive";
import {TimelineMobileScreen} from "@domains/timeline/mobile/TimelineMobileScreen";
import {TimelineDesktopScreen} from "@domains/timeline/desktop/TimelineDesktopScreen";
import React, {useEffect, useState} from "react";
import {Text} from "@ui-kit/components/text/Text";
import Image from "next/image";
import {getResidentArtist} from "@core/artist/data/ArtistRepository";

interface ArtistPageProps {
    artistId: string;
}


export const ArtistPage = ({ artistId }: ArtistPageProps) => {
    const { isMobileSize } = useResponsive();
    const [artist, setArtist] = useState<Artist | null>(null);

    useEffect(() => {
        const fetchArtist = async () => {
            try {
                const artistData = await getResidentArtist(artistId);
                setArtist(artistData);
            } catch (error) {
                console.error('Erreur lors de la récupération de l\'artiste', error);
            }
        };

        if (artistId) {
            fetchArtist();
        }
    }, [artistId]);

    if (isMobileSize === undefined || artist === null) {
        return null;
    }

    return (
        <PageLayout withFooter={false} className="bg-darkPurple">
            {isMobileSize ? (
                <div className="lg:hidden h-full">
                    <div>
                        <Text className="text-white">{artistId}</Text>
                    </div>
                </div>
            ) : (
                <div>
                    <Text className="text-white">{artistId}</Text>
                </div>
            )}
        </PageLayout>
    );
};
