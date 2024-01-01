// eslint-disable-next-line no-restricted-imports
import { serverSideTranslations as _serverSideTranslations } from 'next-i18next/serverSideTranslations'
import type { Namespace, SupportedLocale } from './i18n'
// @ts-ignore
import i18nConfig from './i18nConfig'

export function serverSideTranslations(
  locale: SupportedLocale,
  namespacesRequired: Namespace[],
): ReturnType<typeof _serverSideTranslations> {
  return _serverSideTranslations(locale, namespacesRequired, i18nConfig)
}
