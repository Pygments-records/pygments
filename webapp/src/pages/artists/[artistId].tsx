import { useRouter } from 'next/router';
import type {ArtistItemProps} from "@domains/home/artist-list/ArtistListItem";
import {ArtistPage} from "@domains/artist/ArtistPage";
import type {Artist} from "@core/artist/data/ArtistModel";



const ArtistId = ( ) => {
  const router = useRouter();
  const { artistId } = router.query;
  // Fetch artist data based on artistId and pass it to ArtistId component

  return (<ArtistPage artistId={artistId}/>)
};

export default ArtistId;
