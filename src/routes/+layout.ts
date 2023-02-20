import type { LayoutLoad } from './$types'
import type { Locales } from '$i18n/i18n-types'
import { loadLocaleAsync } from '$i18n/i18n-util.async'
import LL, { setLocale } from '$i18n/i18n-svelte'
import { get } from 'svelte/store'

export const load: LayoutLoad<{ locale: Locales }> = async ({ data: { locale } }) => {
	
	// load dictionary into memory
	await loadLocaleAsync(locale)

	// load namespaces into memory
	await loadLocaleAsync(locale, 'nav')
	await loadLocaleAsync(locale, 'components')
	await loadLocaleAsync(locale, 'other')
	await loadLocaleAsync(locale, 'pages')
	await loadLocaleAsync(locale, 'pages_explore')
	await loadLocaleAsync(locale, 'sessions')


	// if you need to output a localized string in a `load` function,
	// you always need to call `setLocale` right before you access the `LL` store
	setLocale(locale)
	// get the translation functions value from the store
	const $LL = get(LL)

	// pass locale to the "rendering context"
	return { locale }
}
 export const prerender = true;
 export const ssr = true;