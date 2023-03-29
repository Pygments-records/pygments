import { Heading } from "@ui-kit/components/heading/Heading";
import { Text } from "@ui-kit/components/text/Text";
import cx from "classnames";
import styles from "./SectionTheProject.module.css";

type SectionTheProjectProps = {
  className?: string;
  placement?: "left" | "right";
};

export const SectionTheProject = ({ className }: SectionTheProjectProps) => (
  <div className={cx("flex flex-col lg:flex-row justify-center items-center px-4", className)}>
    <div className={cx(styles.card)}>
      <div className="w-6 flex-shrink-0 bg-purple" />
      <div className="bg-orange text-left px-6 py-8 md:py-12 text-white">
        <Heading as="h4" size={6} extraBold={false} className="mb-8">
          A FAMILY PROJECT
        </Heading>
        <Text size="xl">
          We launched Pygments in early 2022 with a bunch of friends; with one passion in common:
          music. It is a collective & label that wants to be very close to the people who will be
          interested in the project. It is with joy that our association will propose you events
          which will be always more diverse, surprising and ambitious.
        </Text>
      </div>
    </div>
    <div className={cx(styles.card, "flex-col lg:mt-52 lg:mx-4 xl:mx-12")}>
      <div className="bg-purple flex-1 px-6 py-8 text-white text-center">
        <Heading as="h4" size={6} extraBold={false} className="mb-8">
          DJ set & LIVE AMBITION
        </Heading>
        <Text size="xl">
          Artists will take you through all style of music and lead you to discover always more
          songs. DJ set will be integral part of the project but we aim also to produce live
          artists. With this type of production, we want you to live a unique experience but also
          put in place a maximum of interaction between the artists and the public during the shows.
        </Text>
      </div>
      <div className="flex-shrink-0 h-6 bg-blue" />
    </div>
    <div className={styles.card}>
      <div className="bg-blue px-6 py-8 md:py-12 text-white text-right">
        <Heading as="h4" size={6} extraBold={false} className="mb-8">
          A WID RANGE OF EVENTS
        </Heading>
        <Text size="xl">
          We explore several formats of events: Open air, live Youtube, Podcasts throughout France
          and Europe. We learn together to bring you new ideas as soon as possible. That's why we
          invite you to follow us for future news!
        </Text>
      </div>
      <div className="w-6 flex-shrink-0 bg-yellow"></div>
    </div>
  </div>
);
