import type { Artist } from "@core/artist/data/ArtistModel";
import { getArtistIds, getOneArtist } from "@core/artist/data/ArtistRepository";
import { RootLayout } from "@core/common/layouts/RootLayout/RootLayout";
import { serverSideTranslations } from "@core/i18n/serverSideTranslations";
import { homeNamespaces } from "@domains/home/homeNamespaces";
import { handleClientError } from "@lib/http-client/http";
import type { GetStaticPaths } from "@lib/next/getStaticPaths";
import type { GetStaticProps } from "@lib/next/getStaticProps";
import Head from "next/head";
import {Text} from "@ui-kit/components/text/Text";
import {useResponsive} from "@core/common/hooks/useResponsive";
import {PageLayout} from "@core/common/layouts/PageLayout/PageLayout";
import Link from "next/link";
import ReactPlayer from "react-player";

type ArtistPageProps = {
  artist?: Artist;
  error?: number;
};

export default function ArtistPage({ artist, error }: ArtistPageProps) {
  if (error !== undefined || artist === undefined) {
    return <p>Error</p>;
  }
  const { isMobileSize } = useResponsive();

  return (
    <PageLayout withFooter={false} className="bg-darkPurple" transparentHeader={true} >
      <div
        className="bg-cover bg-center h-screen relative"
        style={{
          backgroundImage: `url('${artist.picture?.url ?? ""}')`, // Remplacez par la propriété correcte dans votre modèle d'artiste
        }}
      >
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-50"></div>
        <div className="absolute bottom-4 left-4 text-left text-white">
          <Text className="text-4xl font-extrabold">{artist.name}</Text>
        </div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
          {isMobileSize ? (
            <div className="lg:hidden">
              <div>
                <Text className="text-white">{artist._id}</Text>
              </div>
            </div>
          ) : (
            <div>
              <Text className="text-white">{artist._id}</Text>
            </div>
          )}
        </div>
      </div>
      <div>
        <Link href={artist.url_presskit} passHref>
          <a style={{ textDecoration: 'none', padding: '10px', backgroundColor: 'blue', color: 'white', borderRadius: '5px', cursor: 'pointer' }}>
            PressKit
          </a>
        </Link>
        <Link href={artist.email_book} passHref>
          <a style={{ textDecoration: 'none', padding: '10px', backgroundColor: 'blue', color: 'white', borderRadius: '5px', cursor: 'pointer' }}>
            PressKit
          </a>
        </Link>
        <ReactPlayer
          url={artist.last_poadcast.last_poadcast_1}
          playing
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            objectFit: "cover",
            zIndex: 0,
            opacity: 1,
          }}
        />

      </div>
    </PageLayout>
  );
}

type PathParameters = {
  id: string;
};

export const getStaticPaths: GetStaticPaths<PathParameters> = async () => {
  try {
    const artistsIds = await getArtistIds();
    const paths = artistsIds.map((_id) => ({
      params: { id: _id },
    }));
    return {
      paths,
      fallback: false,
    };
  } catch (e) {
    console.error(e);
    return {
      paths: [],
      fallback: false,
    };
  }
};

export const getStaticProps: GetStaticProps<ArtistPageProps, PathParameters> = async ({
  params,
  locale,
  defaultLocale,
}) => {
  const translations = serverSideTranslations(locale ?? defaultLocale, homeNamespaces);
  try {
    if (params?.id === undefined) {
      return {
        notFound: true,
      };
    }
    const artist = await getOneArtist(params.id);
    console.log({ artist });
    return {
      revalidate: 3600,
      props: {
        artist,
        ...(await translations),
      },
    };
  } catch (e) {
    console.error(e);
    return handleClientError(e, translations);
  }
};
