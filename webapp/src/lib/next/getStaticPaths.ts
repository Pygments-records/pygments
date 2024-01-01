import type { defaultLocale, SupportedLocale } from '@core/i18n/i18n'
import type {
  // Should not restrict import as it's the source
  // eslint-disable-next-line no-restricted-imports
  GetStaticPathsContext as NextGetStaticPathsContext,
  GetStaticPathsResult,
} from 'next'
import type { ParsedUrlQuery } from 'querystring'

export type GetStaticPathsContext = Omit<
  NextGetStaticPathsContext,
  'locales' | 'locale' | 'defaultLocale'
> & {
  locale?: SupportedLocale
  locales: SupportedLocale[]
  defaultLocale: typeof defaultLocale
}
export type GetStaticPaths<
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  P extends ParsedUrlQuery,
> = (context: GetStaticPathsContext) => Promise<GetStaticPathsResult<P>>
