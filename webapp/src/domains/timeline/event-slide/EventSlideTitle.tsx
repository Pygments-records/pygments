import { Heading } from "@ui-kit/components/heading/Heading";
import dayjs from "dayjs";

export type EventSlideTitleProps = {
  title: string;
  date: Date;
};

export const EventSlideTitle = ({ title, date }: EventSlideTitleProps) => {
  const heading = dayjs(date).format("DD/MM/YYYY");
  return (
    <>
      <Heading as="h2" size={3} extraBold={false}>
        #{heading}
      </Heading>
      <Heading as="h3" size={6} extraBold={false}>
        {title}
      </Heading>
    </>
  );
};
