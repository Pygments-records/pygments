/*
 * XXX Do not forget to update `./i18nConfig.js`
 */

export const supportedLocales = ['en', 'fr'] as const
export type SupportedLocale = (typeof supportedLocales)[number]

export const defaultLocale: SupportedLocale = 'en'

export const namespaces = ['common', 'home', 'timeline'] as const
export type Namespace = (typeof namespaces)[number]

export function getLocaleFromString(locale: string | undefined): SupportedLocale {
  if (locale === 'fr') {
    return 'fr'
  } else {
    return defaultLocale
  }
}

export function getLocalePrefix(locale: SupportedLocale): string {
  if (locale === 'fr') {
    return '/fr'
  } else {
    return ''
  }
}
