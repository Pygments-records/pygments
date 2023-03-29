import React, { ComponentPropsWithoutRef, ReactNode } from "react";
import styles from "./OutlinedButton.module.css";
import cx from "classnames";

export type OutlinedButtonProps = {
  children?: ReactNode;
  color?: string;
} & ComponentPropsWithoutRef<"button">;

export const OutlinedButton = ({
  className,
  children,
  color = "black",
  ...props
}: OutlinedButtonProps) => (
  <button
    {...props}
    className={cx(className, styles["outlined-button"], `border-${color} text-${color}`)}
  >
    {children}
  </button>
);
