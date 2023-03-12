import type { PageLoad } from './$types'
import { error } from '@sveltejs/kit';
import { isLocale } from '$i18n/i18n-util';
import { getParamValues } from '$lib/utils';


const pageName = 'about';

export const load: PageLoad = async ({ parent, params }) => {

	const paramValues = await getParamValues(pageName);
	if (params.lang in paramValues && isLocale(params.lang) && paramValues[params.lang] === params[pageName]) {
		return
	}

	throw error (404, 'Not found');

}