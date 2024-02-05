// eslint-disable-next-line no-restricted-imports
import { serverSideTranslations as _serverSideTranslations } from 'next-i18next/serverSideTranslations'
import i18nConfig, { Namespace, defaultLocale } from './i18nConfig'

export function serverSideTranslations(
  namespacesRequired: Namespace[],
): ReturnType<typeof _serverSideTranslations> {
  return _serverSideTranslations(defaultLocale, namespacesRequired, i18nConfig)
}
