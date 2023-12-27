import type {
  // Should not restrict import as it's the source
  // eslint-disable-next-line no-restricted-imports
  GetStaticPropsContext as NextGetStaticPropsContext,
  GetStaticPropsResult,
} from "next";
import type { ParsedUrlQuery } from "querystring";
import type { ServerSideRenderingRequiredError } from "./ServerSideRenderingRequiredError";
import type { ServerSideRenderingRequiredProps } from "./ServerSideRenderingRequiredProps";

export type GetStaticPropsContext<Q extends ParsedUrlQuery = ParsedUrlQuery> = Omit<
  NextGetStaticPropsContext<Q>,
  "locales" | "locale" | "defaultLocale"
> & {
  locale?: never;
  locales: never;
  defaultLocale: never;
};

export type GetStaticProps<
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  P extends { [key: string]: any } = { [key: string]: any },
  Q extends ParsedUrlQuery = ParsedUrlQuery
> = (
  context: GetStaticPropsContext<Q>
) =>
  | Promise<
      GetStaticPropsResult<
        (P & ServerSideRenderingRequiredProps) | ServerSideRenderingRequiredError
      >
    >
  | GetStaticPropsResult<(P & ServerSideRenderingRequiredProps) | ServerSideRenderingRequiredError>;
