// This file was auto-generated by 'typesafe-i18n'. Any manual changes will be overwritten.
/* eslint-disable */

import { initFormatters } from './formatters.js'
import type { Locales, Namespaces, Translations } from './i18n-types.js'
import { loadedFormatters, loadedLocales, locales } from './i18n-util.js'

const localeTranslationLoaders = {
	en: () => import('./en/index.js'),
	fr: () => import('./fr/index.js'),
	nl: () => import('./nl/index.js'),
}

const localeNamespaceLoaders = {
	en: {
		components: () => import('./en/components/index.js'),
		nav: () => import('./en/nav/index.js'),
		other: () => import('./en/other/index.js'),
		pages: () => import('./en/pages/index.js'),
		sessions: () => import('./en/sessions/index.js')
	},
	fr: {
		components: () => import('./fr/components/index.js'),
		nav: () => import('./fr/nav/index.js'),
		other: () => import('./fr/other/index.js'),
		pages: () => import('./fr/pages/index.js'),
		sessions: () => import('./fr/sessions/index.js')
	},
	nl: {
		components: () => import('./nl/components/index.js'),
		nav: () => import('./nl/nav/index.js'),
		other: () => import('./nl/other/index.js'),
		pages: () => import('./nl/pages/index.js'),
		sessions: () => import('./nl/sessions/index.js')
	}
}

const updateDictionary = (locale: Locales, dictionary: Partial<Translations>): Translations =>
	loadedLocales[locale] = { ...loadedLocales[locale], ...dictionary }

export const importLocaleAsync = async (locale: Locales): Promise<Translations> =>
	(await localeTranslationLoaders[locale]()).default as unknown as Translations

export const loadLocaleAsync = async (locale: Locales): Promise<void> => {
	updateDictionary(locale, await importLocaleAsync(locale))
	loadFormatters(locale)
}

export const loadAllLocalesAsync = (): Promise<void[]> => Promise.all(locales.map(loadLocaleAsync))

export const loadFormatters = (locale: Locales): void =>
	void (loadedFormatters[locale] = initFormatters(locale))

export const importNamespaceAsync = async<Namespace extends Namespaces>(locale: Locales, namespace: Namespace) =>
	(await localeNamespaceLoaders[locale][namespace]()).default as unknown as Translations[Namespace]

export const loadNamespaceAsync = async <Namespace extends Namespaces>(locale: Locales, namespace: Namespace): Promise<void> =>
	void updateDictionary(locale, { [namespace]: await importNamespaceAsync(locale, namespace )})
