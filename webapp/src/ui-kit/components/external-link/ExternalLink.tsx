import { ComponentPropsWithoutRef, forwardRef } from "react";

export type ExternalLinkProps = Omit<ComponentPropsWithoutRef<"a">, "target" | "ref">;
export const ExternalLink = forwardRef<HTMLAnchorElement, ExternalLinkProps>(function (
  { href, children, className, ...props },
  ref
) {
  return (
    <a
      href={href}
      {...props}
      target="_blank"
      rel="noopener norefererrer"
      className={className}
      ref={ref}
    >
      {children}
    </a>
  );
});
