import React, { ComponentPropsWithoutRef, ReactNode } from "react";
import cx from "classnames";

export type HeadingSize = 1 | 2 | 3 | 4 | 5 | 6 | 7;

export type HeadingProps = ComponentPropsWithoutRef<"h1"> & {
  as: "h1" | "h2" | "h3" | "h4" | "h5" | "p" | "span";
  extraBold?: boolean;
  children: ReactNode;
  size?: HeadingSize;
};

export const Heading = ({
  as: Component,
  size = 4,
  children,
  extraBold = true,
  className,
  ...props
}: HeadingProps) => {
  return (
    <Component
      className={cx("font-text font-extrabold", getHeadingStyles(size), className)}
      {...props}
    >
      {children}
    </Component>
  );
};

function getHeadingStyles(size: HeadingSize): string {
  switch (size) {
    case 1: {
      return "text-6xl leading-11 xl:text-7xl xl:leading-12";
    }
    case 2: {
      return "text-5xl leading-10 xl:text-6xl xl:leading-11";
    }
    case 3: {
      return "text-4xl leading-10 xl:text-5xl xl:leading-11";
    }
    case 4: {
      return "text-3xl leading-8 xl:text-4xl xl:leading-10";
    }
    case 5: {
      return "text-2xl leading-6 xl:text-3xl xl:leading-10";
    }
    case 6: {
      return "text-xl leading-5 xl:text-2xl xl:leading-8";
    }
    case 7: {
      return "text-lg leading-4 xl:text-xl xl:leading-6";
    }
  }
}
