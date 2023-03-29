import cx from "classnames";
import styles from "./SectionArtist.module.css";
import Image from "next/image";
import { Heading } from "@ui-kit/components/heading/Heading";
import { Text } from "@ui-kit/components/text/Text";

type SectionArtistsProps = {
  bgColor: string;
  tileColor: string;
  title: string;
  className?: string;
  date: string;
  image_path: string;
  image_alt: string;
  placement?: "left" | "right";
};

export const SectionArtist = ({
  bgColor,
  title,
  tileColor,
  className,
  date,
  image_path,
  image_alt,
  placement = "left",
}: SectionArtistsProps) => (
  <div
    className={cx(
      "w-10/12 flex shadow-lg rounded-s flex-col md:flex-row",
      { ["md:flex-row-reverse ml-auto"]: placement === "right" },
      styles.card,
      className
    )}
  >
    <div className={"relative md:w-9/12 h-full"}>
      <div className="aspect-w-16 aspect-h-9">
        <Image src={image_path} alt={image_alt} layout="fill" objectFit="cover" />
      </div>
    </div>
    <div
      className={cx(
        bgColor,
        "flex relative",
        {
          ["md:mr-auto justify-end pr-6"]: placement === "left",
          ["md:ml-auto justify-start pl-6"]: placement === "right",
        },
        "md:w-7/12 h-full"
      )}
    >
      <div
        className={cx("h-11 w-32 sm:w-10 md:w-20 lg:w-40 absolute bottom-0", tileColor, {
          ["-left-20 sm:-left-5 md:-left-10 lg:-left-20"]: placement === "left",
          ["-right-20 sm:-right-5 md:-right-10 lg:-right-20"]: placement === "right",
        })}
      />
      <div
        className={cx("pt-20", {
          ["text-right"]: placement === "left",
        })}
      >
        <Heading as="p" size={3} className={"text-white"}>
          {title}
        </Heading>
        <Text size="lg" className={"text-white"}>
          {date}
        </Text>
      </div>
    </div>
  </div>
);
