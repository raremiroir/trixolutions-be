<script lang="ts">
    
    import { onMount } from 'svelte';
    import { invalidate } from '$app/navigation';
	import type { LayoutData } from './$types'
    
    // supabase
    import supabase from '$lib/db';

	export let data: LayoutData;
    console.log(data);

	// Import Components
	import "$src/app.postcss";
	import Dashboard from '$src/lib/components/Admin/Dashboard.svelte';
	import Icon from '@iconify/svelte';

    onMount(() => {
		const {
			data: { subscription },
		} = supabase.auth.onAuthStateChange(() => {
			invalidate('supabase:auth')
		})

		return () => {
			subscription.unsubscribe()
		}
	})

</script>


<div class="min-h-full bg-gray-50">

    <slot />

</div>