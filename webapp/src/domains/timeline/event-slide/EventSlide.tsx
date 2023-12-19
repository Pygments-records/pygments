import React, { useEffect, useState } from "react";
import styles from "./EventSlide.module.css";
import { EventSlideTitle } from "./EventSlideTitle";
import { ImageGallery } from "@ui-kit/components/gallery/ImageGallery";
import ReactDOM from "react-dom";
import type { Event } from "@core/event/data/EventModel";

type EventSlideProps = {
  event: Event;
};

export const EventSlide = ({ event }: EventSlideProps) => {
  return (
    <div className={"h-full relative"}>
      <ImageGallery images={event.pictures} imageConfig={{ objectFit: "cover" }} />
      <div className={"hidden"} />
      <div className={styles["event-title"]}>
        <div className="flex flex-col items-end gap-y-2">
          <EventSlideTitle title={event.name} date={event.startDate} />
        </div>
      </div>
    </div>
  );
};

type EventModalProps = {
  show?: boolean;
  children: React.ReactNode;
};

export const EventModal = ({ show = false, children }: EventModalProps) => {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  const modalContent = show ? <div className="z-50 fixed inset-0 bg-dark">{children}</div> : null;

  if (isBrowser) {
    return ReactDOM.createPortal(
      modalContent,
      document.getElementById("modal-root") as HTMLElement
    );
  } else {
    return null;
  }
};
