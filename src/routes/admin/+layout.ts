import { browser } from '$app/environment'
// supabase
import { getSupabase } from '@supabase/auth-helpers-sveltekit'

import type { LayoutLoad } from './$types'


export const load: LayoutLoad = async (event) => {
	
	if (browser) {
		locale.set(window.navigator.language)
	}
	await waitLocale()
	
	const { session } = await getSupabase(event)
	return { session }
 }

 export const prerender = false;
 export const ssr = true;