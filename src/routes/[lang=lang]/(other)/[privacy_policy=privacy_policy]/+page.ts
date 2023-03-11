import { getParamValues } from '$src/lib/utils';
import { error } from '@sveltejs/kit'
import type { PageLoad } from './$types'

const pageName = 'privacy_policy';

export const load: PageLoad = async ({ parent, params }) => {

	const paramValues = await getParamValues(pageName, ['others']);
	if ( params.lang in paramValues && paramValues[params.lang] === params[pageName] ) {
		return
	}

	throw error (404, 'Not found');
}