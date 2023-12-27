<<<<<<< HEAD
import type { defaultLocale, SupportedLocale } from '@core/i18n/i18nConfig'
=======
>>>>>>> 65707e8 (setup getStaticProps and getStaticPaths)
import type {
  // Should not restrict import as it's the source
  // eslint-disable-next-line no-restricted-imports
  GetStaticPropsContext as NextGetStaticPropsContext,
  GetStaticPropsResult,
<<<<<<< HEAD
} from 'next'
import type { ParsedUrlQuery } from 'querystring'
import type { ServerSideRenderingRequiredProps } from './ServerSideRenderingRequiredProps'
=======
} from "next";
import type { ParsedUrlQuery } from "querystring";
import type { ServerSideRenderingRequiredError } from "./ServerSideRenderingRequiredError";
import type { ServerSideRenderingRequiredProps } from "./ServerSideRenderingRequiredProps";
>>>>>>> 65707e8 (setup getStaticProps and getStaticPaths)

export type GetStaticPropsContext<Q extends ParsedUrlQuery = ParsedUrlQuery> = Omit<
  NextGetStaticPropsContext<Q>,
  'locales' | 'locale' | 'defaultLocale'
> & {
<<<<<<< HEAD
  locale?: SupportedLocale
  locales: SupportedLocale[]
  defaultLocale: typeof defaultLocale
}
=======
  locale?: never;
  locales: never;
  defaultLocale: never;
};
>>>>>>> 65707e8 (setup getStaticProps and getStaticPaths)

export type GetStaticProps<
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  P extends { [key: string]: any } = { [key: string]: any },
  Q extends ParsedUrlQuery = ParsedUrlQuery,
> = (
<<<<<<< HEAD
  context: GetStaticPropsContext<Q>,
) => Promise<GetStaticPropsResult<P & ServerSideRenderingRequiredProps>>
=======
  context: GetStaticPropsContext<Q>
) =>
  | Promise<
      GetStaticPropsResult<
        (P & ServerSideRenderingRequiredProps) | ServerSideRenderingRequiredError
      >
    >
  | GetStaticPropsResult<(P & ServerSideRenderingRequiredProps) | ServerSideRenderingRequiredError>;
>>>>>>> 65707e8 (setup getStaticProps and getStaticPaths)
