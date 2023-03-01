import LL, { setLocale } from '$i18n/i18n-svelte'
import { get } from 'svelte/store'
import { error } from '@sveltejs/kit'
import type { PageLoad } from './$types'

export const load: PageLoad = async ({ parent, params }) => {
	if (  params.terms_kmo === 'algemene-voorwaarden-kmo-portfolio' && params.lang === 'nl'
		|| params.terms_kmo === 'terms-conditions-sme-portfolio' && params.lang === 'en'
		|| params.terms_kmo === 'conditions-generales-portefeuille-pme' && params.lang === 'fr' ) {
		// wait for `+layout.ts` to load dictionary and pass locale information
		const { locale } = await parent()
	
		// if you need to output a localized string in a `load` function,
		// you always need to call `setLocale` right before you access the `LL` store
		setLocale(locale)
		// get the translation functions value from the store
		const $LL = get(LL)
		return
	}

	throw error (404, 'Not found');
}