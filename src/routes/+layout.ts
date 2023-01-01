import type { LayoutLoad } from './$types'
// import { get } from 'svelte/store'

// supabase
import { getSupabase } from '@supabase/auth-helpers-sveltekit'



export const load: LayoutLoad = async (event) => {
	const { session } = await getSupabase(event)
	return { session }
 }
