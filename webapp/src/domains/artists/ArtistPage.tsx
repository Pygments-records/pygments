// pages/artist/[artistId].js

import { useRouter } from 'next/router';

const ArtistPage = () => {
  const router = useRouter();
  const { artistId } = router.query;
  console.log("coucou");
  // Fetch artist data based on artistId and pass it to ArtistPage component

  return (<p>{artistId}</p>)
};

export default ArtistPage;
