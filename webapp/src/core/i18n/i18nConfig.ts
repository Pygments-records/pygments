import type { UserConfig } from 'next-i18next'
import path from 'path'

export const supportedLocales = ['en'] as const
export type SupportedLocale = (typeof supportedLocales)[number]

export const defaultLocale: SupportedLocale = 'en'

export const namespaces = ['common', 'home', 'timeline', 'artist'] as const
export type Namespace = (typeof namespaces)[number]

const i18nConfig: UserConfig = {
  i18n: {
    locales: [defaultLocale],
    defaultLocale,
  },
  fallbackLng: defaultLocale,
  localePath: path.resolve('./public/locales/'),
}

export default i18nConfig
