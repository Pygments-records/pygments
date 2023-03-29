import type { TimelineEvent } from "../models/TimelineEvent";
import { EventSlideTitle } from "./EventSlideTitle";
import { Text } from "@ui-kit/components/text/Text";
import { Heading } from "@ui-kit/components/heading/Heading";
import { OutlinedButton } from "@ui-kit/components/buttons/OutlinedButton";
import { Badge } from "@ui-kit/components/badge/Badge";
import styles from "./EventSlideDetails.module.css";
import dayjs from "dayjs";
import { Swiper, SwiperSlide } from "swiper/react";
import { ImageCard } from "@ui-kit/components/cards/ImageCard";
import { useTranslation } from "@core/i18n/useTranslation";
import { timelineNamespaces } from "../timelineNamespaces";
import { useLockBodyScroll } from "@core/common/hooks/useBlockScroll";

export type EventSlideDetailsProps = {
  event: TimelineEvent;
  onClose?: () => void;
};

export const EventSlideDetails = ({ event, onClose }: EventSlideDetailsProps) => {
  const { t } = useTranslation(timelineNamespaces);
  useLockBodyScroll();
  return (
    <div className="h-full text-white flex flex-col">
      <div className={styles["event-details-container"]}>
        <div className="flex flex-col gap-y-2 mb-6">
          <EventSlideTitle title={event.title} date={event.date} />
        </div>
        <div className="flex flex-wrap items-center gap-2 mb-6">
          {event.categories.map((category) => (
            <Badge
              key={category}
              label={category}
              color="electricBlue"
              outlined={true}
              className="px-6 py-1"
            />
          ))}
        </div>
        <div className="flex flex-col mb-6">
          <Text size="xl">{dayjs(event.date).format("ddd D MMM.")}</Text>
          <Text size="xl">{event.location.label}</Text>
          <Text size="xl">{event.location.address}</Text>
        </div>
        <Heading as="p" size={6} className="mb-2">
          {t("timeline:eventDetails.about")}
        </Heading>
        <Text size="xl" className="mb-6">
          {event.description}
        </Text>
        <Heading as="p" size={6} className="mb-3">
          {t("timeline:eventDetails.lineUp")}
        </Heading>
        <div>
          <Swiper
            autoHeight={true}
            slidesPerView={"auto"}
            spaceBetween={16}
            freeMode={true}
            slidesOffsetAfter={24}
            className={styles["card-swiper"]}
          >
            {event.artists.map((artist) => (
              <SwiperSlide key={artist.id}>
                <ImageCard
                  label={artist.username}
                  imgSrc={artist.pictures[0] ?? ""}
                  className="h-[120px] w-[100px]"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      {onClose !== undefined && (
        <div
          className={`z-10 fixed bottom-0 left-0 right-0 pb-8 flex justify-center items-center`}
          style={{
            background: "linear-gradient(180deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 1) 100%)",
          }}
        >
          <OutlinedButton
            onClick={(e) => {
              e.stopPropagation();
              onClose();
            }}
            color="white"
            className="px-8 py-4 bg-dark"
          >
            {t("timeline:showLess")}
          </OutlinedButton>
        </div>
      )}
    </div>
  );
};
