import { PageLayout } from "@core/common/layouts/PageLayout/PageLayout";
import type { Event } from "@core/event/data/EventModel";
import { UpcomingEventBoard } from "./upcoming-event-board/UpcomingEventBoard";
import { ArtistList } from "./artist-list/ArtistList";
import type { Artist } from "@core/artist/data/ArtistModel";
import { ProjectDescription } from "./project-description/ProjectDescription";
import {SectionTeam} from "@domains/home/SectionTeam/SectionTeam";
import type { Staff } from "@core/staff/data/StaffModel";

type HomeScreenProps = {
  events: Event[];
  artists: Artist[];
  staff: Staff[];
};

export const HomeScreen = ({ artists, events, staff }: HomeScreenProps) => {
  return (
    <PageLayout className="bg-darkPurple">
      <div className="min-h-screen"></div>
      <UpcomingEventBoard events={events} className="min-h-[80vh]" />
      <ArtistList artists={artists} className="min-h-[80vh]" />
      <ProjectDescription className="min-h-[80vh]" />
      <SectionTeam staff={staff} className="min-h-[80vh]"></SectionTeam>
    </PageLayout>
  );
};
