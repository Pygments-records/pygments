// pages/artist/[artistId].js

import { useRouter } from 'next/router';
import ArtistPage from './ArtistPage';

const Artist = () => {
  const router = useRouter();
  const { artistId } = router.query;

  // Fetch artist data based on artistId and pass it to ArtistPage component

  return <ArtistPage artistId={artistId} />;
};

export default Artist;
