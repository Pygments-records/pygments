import React from "react";
import type { Event } from "@core/event/data/EventModel";
import dayjs from "dayjs";
import { Title } from "@core/common/components/title/Title";
import { Text } from "@ui-kit/components/text/Text";
import { useTranslation } from "@core/i18n/useTranslation";
import { homeNamespaces } from "../homeNamespaces";
import { ExternalLink } from "@ui-kit/components/external-link/ExternalLink";

type UpcomingEventBoardProps = {
  events: Event[];
  className?: string;
};

const MAX_EVENTS_DISPLAYED = 5;

export const UpcomingEventBoard = ({ events, className }: UpcomingEventBoardProps) => {
  const { t } = useTranslation(homeNamespaces);

  return (
    <div className={className}>
      <Title className="mb-16">{t("home:upcoming-event-section.title")}</Title>
      <ul className="mx-12 flex flex-col">
        {events.length === 0 ? (
          <li className="p-6 border-b-[0.5px] border-white border-opacity-50">
            <Text size="xl" weight="light" className="text-white text-center tracking-[.10em]">
              {t("home:upcoming-event-section.notFound")}
            </Text>
          </li>
        ) : (
          events.slice(0, MAX_EVENTS_DISPLAYED).map((event) => {
            return (
              <li key={event._id} className="p-6 border-b-[0.5px] border-white border-opacity-50">
                <UpcomingEvent
                  name={event.name}
                  description={event.location.label}
                  date={event.startDate}
                  ticketUrl={event.ticket}
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
  ticketUrl: string;
};

const UpcomingEvent = ({ name, description, date, ticketUrl }: UpcomingEventProps) => {
  const _date = dayjs(date);
  const { t } = useTranslation(homeNamespaces);

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
        <Text size="base" className="text-purple tracking-[.10em]" weight="light">
          {description}
        </Text>
      </div>
      <div className="ml-auto">
        <ExternalLink href={ticketUrl}>
          <button className="cursor-pointer">
            <Text size="base" className="text-white tracking-[0.25em]">
              {t("home:upcoming-event-section.tickets")}
            </Text>
          </button>
        </ExternalLink>
      </div>
    </div>
  );
};
