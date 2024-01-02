import type { defaultLocale, SupportedLocale } from '@core/i18n/i18nConfig'
import type {
  // Should not restrict import as it's the source
  // eslint-disable-next-line no-restricted-imports
  GetServerSidePropsContext as NextGetServerSidePropsContext,
  GetServerSidePropsResult,
} from 'next'
import type { ParsedUrlQuery } from 'querystring'
import type { ServerSideRenderingRequiredProps } from './ServerSideRenderingRequiredProps'

export type GetServerSidePropsContext<Q extends ParsedUrlQuery = ParsedUrlQuery> = Omit<
  NextGetServerSidePropsContext<Q>,
  'locales' | 'locale' | 'defaultLocale'
> & {
  locale?: SupportedLocale
  locales: SupportedLocale[]
  defaultLocale: typeof defaultLocale
}

export type GetServerSideProps<
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  P extends { [key: string]: any } = { [key: string]: any },
  Q extends ParsedUrlQuery = ParsedUrlQuery,
> = (
  context: GetServerSidePropsContext<Q>,
) => Promise<GetServerSidePropsResult<P & ServerSideRenderingRequiredProps>>
