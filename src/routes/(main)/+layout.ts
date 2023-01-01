import type { LayoutLoad } from './$types'
import { get } from 'svelte/store'

// supabase
import { getSupabase } from '@supabase/auth-helpers-sveltekit'

export const load = async ( event ) => {
	const { session } = await getSupabase(event)
	
	// pass locale to the "rendering context"
	return { session }
}