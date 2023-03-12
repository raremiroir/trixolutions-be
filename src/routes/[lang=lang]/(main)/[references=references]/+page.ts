import type { PageLoad } from './$types'
import LL, { setLocale } from '$i18n/i18n-svelte'
import { get } from 'svelte/store'
import { error } from '@sveltejs/kit'
import { getParamValues } from '$src/lib/utils'
import { isLocale } from '$src/i18n/i18n-util'

const pageName = 'references';

export const load: PageLoad = async ({ params }) => {

	const paramValues = await getParamValues(pageName);
	if (params.lang in paramValues && isLocale(params.lang) && paramValues[params.lang] === params[pageName]) {
		return;
	}

	throw error (404, 'Not found');
}