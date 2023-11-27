import { PageLayout } from "@core/common/layouts/PageLayout/PageLayout";
import type { Event } from "@core/event/data/EventModel";
import { UpcomingEventBoard } from "./upcoming-event-board/UpcomingEventBoard";
import { ArtistList } from "./artist-list/ArtistList";
import type { Artist } from "@core/artist/data/ArtistModel";

type HomeScreenProps = {
  events: Event[];
  artists: Artist[];
};

export const HomeScreen = ({ artists, events }: HomeScreenProps) => {
  return (
    <PageLayout className="bg-darkPurple">
      <div className="min-h-screen"></div>
      <UpcomingEventBoard events={events} className="min-h-screen" />
      <ArtistList artists={artists} className="min-h-screen" />
    </PageLayout>
  );
};
