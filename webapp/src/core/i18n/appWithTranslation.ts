import { appWithTranslation as _appWithTranslation } from 'next-i18next'
// @ts-ignore
import i18nConfig from './i18nConfig'

export function appWithTranslation(WrappedComponent: Parameters<typeof _appWithTranslation>[0]) {
  return _appWithTranslation(WrappedComponent, {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    i18n: i18nConfig,
    debug: process.env.NEXT_PUBLIC_APP_STAGE === 'development',
  })
}
