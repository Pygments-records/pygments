import { useRouter } from 'next/router';
import type {ArtistItemProps} from "@domains/home/artist-list/ArtistListItem";



const ArtistId = ( ) => {
  const router = useRouter();
  const { artistId } = router.query;
  // Fetch artist data based on artistId and pass it to ArtistId component

  return (<p>{artistId}</p>)
};

export default ArtistId;
