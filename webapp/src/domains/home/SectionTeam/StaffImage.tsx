import React from "react";
import styles from "./ArtistImage.module.css";
import cx from "classnames";
import {Text} from "@ui-kit/components/text/Text";

type StaffImageProps = {
  url: string;
  index: number;
  className?: string;
};

export const StaffImage = ({ className, index, url }: StaffImageProps) => {
  return (
    <svg>
      <image
        width="100%"
        height="100%"
        href={url}
      />
    </svg>
  );
};
