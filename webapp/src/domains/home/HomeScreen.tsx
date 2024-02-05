import { PageLayout } from '@core/common/layouts/PageLayout/PageLayout'
import type { Event } from '@core/event/data/EventModel'
import { UpcomingEventBoard } from './upcoming-event-board/UpcomingEventBoard'
import { ArtistList } from './artist-list/ArtistList'
import type { Artist } from '@core/artist/data/ArtistModel'
import { ProjectDescription } from './project-description/ProjectDescription'
import { StaffList } from '@domains/home/staff-list/StaffList'
import type { Staff } from '@core/staff/data/StaffModel'
import type { HomeContent } from './data'
import { HomeMovie } from './movie/HomeMovie'

type HomeScreenProps = {
  events: Event[]
  artists: Artist[]
  staff: Staff[]
  content?: HomeContent
}

export const HomeScreen = ({ artists, events, staff, content }: HomeScreenProps) => {
  return (
    <PageLayout className="bg-darkPurple" withScrollHint={true}>
      <section className="flex flex-col">
        {content !== undefined && <HomeMovie movie={content.movie} />}
        <section className="max-w-screen-xl xl:mx-auto flex flex-col my-[64px] gap-y-[64px] lg:mt-[128px] lg:gap-y-[128px] mx-8">
          <UpcomingEventBoard events={events} />
          <ArtistList artists={artists} />
          <ProjectDescription />
          <StaffList staff={staff}></StaffList>
        </section>
      </section>
    </PageLayout>
  )
}
