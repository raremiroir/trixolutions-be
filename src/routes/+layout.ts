import type { LayoutLoad } from './$types'
import type { Locales } from '$i18n/i18n-types'
import { loadLocaleAsync } from '$i18n/i18n-util.async'
import LL, { setLocale } from '$i18n/i18n-svelte'
import { get } from 'svelte/store'
import { locales } from '$i18n/i18n-util'

export const load: LayoutLoad<{ locale: Locales }> = async ({ data: { locale } }) => {
	
	// load dictionary into memory
	locales.forEach(async (locale: Locales) => {
		await loadLocaleAsync(locale)
	})
	// await loadLocaleAsync(locale)


	// if you need to output a localized string in a `load` function,
	// you always need to call `setLocale` right before you access the `LL` store
	setLocale(locale)
	// get the translation functions value from the store
	const $LL = get(LL)

	// pass locale to the "rendering context"
	return { locale }
}
 export const prerender = 'auto';
 export const ssr = true;
 export const trailingSlash = 'never';