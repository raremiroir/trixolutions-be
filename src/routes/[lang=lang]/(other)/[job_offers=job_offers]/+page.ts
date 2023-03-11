import { error } from '@sveltejs/kit'
import type { PageLoad } from './$types'
import { getParamValues } from '$src/lib/utils'

const pageName = 'job_offers'

export const load: PageLoad = async ({ parent, params }) => {
	
	const paramValues = await getParamValues(pageName, ['others']);
	if ( params.lang in paramValues && paramValues[params.lang] === params[pageName] ) {
		return
	}

	throw error (404, 'Not found');
}