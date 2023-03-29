import type { ComponentPropsWithoutRef, ReactNode } from "react";

export type PrimaryButtonProps = {
  children?: ReactNode;
} & ComponentPropsWithoutRef<"button">;
export const PrimaryButton = ({ children, ...props }: PrimaryButtonProps) => (
  <button {...props}>{children}</button>
);
