import { PageLayout } from "@core/common/layouts/PageLayout/PageLayout";
import type { Event } from "@core/event/data/EventModel";
import { UpcomingEventBoard } from "./upcoming-event-board/UpcomingEventBoard";
import { ArtistList } from "./artist-list/ArtistList";
import type { Artist } from "@core/artist/data/ArtistModel";
import { ProjectDescription } from "./project-description/ProjectDescription";
import { SectionTeam } from "@domains/home/SectionTeam/SectionTeam";
import type { Staff } from "@core/staff/data/StaffModel";
import type { HomeContent } from "./data";
import { HomeMovie } from "./movie/HomeMovie";

type HomeScreenProps = {
  events: Event[];
  artists: Artist[];
  staff: Staff[];
  content?: HomeContent;
};

export const HomeScreen = ({ artists, events, staff, content }: HomeScreenProps) => {
  return (
    <PageLayout className="bg-darkPurple" transparentHeader={false}>
      <div className="flex flex-col gap-y-[120px]">
        {content !== undefined && <HomeMovie movie={content.movie} />}
        <UpcomingEventBoard events={events} className="min-h-[80vh]" />
        <ArtistList artists={artists} className="min-h-[80vh]" />
        <ProjectDescription className="min-h-[80vh]" />
        <SectionTeam staff={staff} className="min-h-[80vh]"></SectionTeam>
      </div>
    </PageLayout>
  );
};
