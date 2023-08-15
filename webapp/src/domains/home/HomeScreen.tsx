import { PageLayout } from "@core/common/layouts/PageLayout/PageLayout";
import Image from "next/image";
import styles from "./SectionHero.module.css";
import type { Event } from "@core/event/data/EventModel";
import { UpcomingEventBoard } from "./upcoming-event-board/UpcomingEventBoard";
import { ArtistList } from "./artist-list/ArtistList";
import type { Artist } from "@core/artist/data/ArtistModel";
import cx from "classnames";

type HomeScreenProps = {
  events: Event[];
  artists: Artist[];
};

export const HomeScreen = ({ artists, events }: HomeScreenProps) => {
  return (
    <PageLayout className="bg-darkPurple">
      <div className="h-[150vh] w-[100vw] absolute inset-0">
        <Image alt="pygments hero background" layout="fill" objectFit="cover" src={"/waves.svg"} />
      </div>
      <div className={cx(styles.heroContainer)}>
        <div className="h-screen flex flex-col">
          <div className="flex-1 flex items-center justify-center">
            <div className="overflow-hidden">
              <div className="relative w-60 h-60 md:w-96 md:h-96">
                <Image layout="fill" src={"/PygmentsLoogo.svg"} alt={"logo pygments"} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <UpcomingEventBoard events={events} className="min-h-screen" />
      <ArtistList artists={artists} className="min-h-screen" />
    </PageLayout>
  );
};
