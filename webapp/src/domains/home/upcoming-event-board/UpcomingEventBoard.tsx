import React from "react";
import type { Event } from "@core/event/data/EventModel";
import dayjs from "dayjs";
import { Title } from "@core/common/components/title/Title";
import { Text } from "@ui-kit/components/text/Text";

type UpcomingEventBoardProps = {
  events: Event[];
  className?: string;
};

export const UpcomingEventBoard = ({ events, className }: UpcomingEventBoardProps) => {
  return (
    <div className={className}>
      <Title className="mb-16">Upcoming Events</Title>
      <ul className="mx-12 flex flex-col">
        {events.length === 0 ? (
          <li className="p-6 border-b-[0.5px] border-white border-opacity-50">
            <Text size="xl" weight="light" className="text-white text-center tracking-[.10em]">
              No upcoming events for now. Stay tuned!
            </Text>
          </li>
        ) : (
          events.map((event) => {
            return (
              <li key={event._id} className="p-6 border-b-[0.5px] border-white border-opacity-50">
                <UpcomingEvent
                  name={event.name}
                  description={event.location.label}
                  date={event.startDate}
                  onClick={() => console.log("on redirect to ticket platform")}
                />
              </li>
            );
          })
        )}
      </ul>
    </div>
  );
};

type UpcomingEventProps = {
  name: string;
  description: string;
  date: Date;
  onClick: () => void;
};

const UpcomingEvent = ({ name, description, date, onClick }: UpcomingEventProps) => {
  const _date = dayjs(date);

  return (
    <div className="flex flex-row items-center">
      <div className="flex flex-col items-center font-text font-light text-[28px] text-white tracking-[0.3em] mr-12">
        <Text size="2xl" weight="light" className="text-white tracking-[0.25em]">
          {_date.format("D")}
        </Text>
        <Text size="2xl" weight="light" className="text-white tracking-[0.25em]">
          {_date.format("MMM")}
        </Text>
      </div>
      <div className="flex flex-col tracking-[0.3em] font-text text-white">
        <Text size="2xl" className="text-white tracking-[.25em]">
          {name}
        </Text>
        <Text size="base" className="text-white tracking-[.10em]" weight="light">
          {description}
        </Text>
      </div>
      <div className="ml-auto">
        <button onClick={onClick} className="cursor-pointer">
          <Text size="base" className="text-white tracking-[0.25em]">
            Tickets
          </Text>
        </button>
      </div>
    </div>
  );
};
