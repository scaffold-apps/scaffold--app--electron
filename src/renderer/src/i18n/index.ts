import { i18n } from '@lingui/core'

export const locales = {
  en: 'English',
  fr: 'French'
}
export const defaultLocale = 'en'

/**
 * We do a dynamic import of just the catalog that we need
 * @param locale any locale string
 */
export async function dynamicActivate(locale: string): Promise<void> {
  const { messages } = await import(`../locales/${locale}.mjs`)
  i18n.load(locale, messages)
  i18n.activate(locale)
}
