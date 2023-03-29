import { ComponentPropsWithoutRef, forwardRef } from "react";

export type LinkProps = ComponentPropsWithoutRef<"a">;
export const Link = forwardRef<HTMLAnchorElement, LinkProps>(
  ({ href, children, className, ...props }, ref) => (
    <a href={href} {...props} className={className} ref={ref}>
      {children}
    </a>
  )
);
Link.displayName = "Link";
