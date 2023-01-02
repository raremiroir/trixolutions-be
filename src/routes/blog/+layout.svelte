<script lang="ts">
	import { page } from '$app/stores';
	import lazyload from 'vanilla-lazyload'
	import { browser } from '$app/environment';
	import type { LayoutData } from './$types'
	import { onMount } from 'svelte';
	import { invalidate } from '$app/navigation';
	import supabase from '$lib/db';
	
	export let data: LayoutData
	
	
	if (browser && !document.lazyloadInstance) {
    document.lazyloadInstance = new lazyload();
  	}

	// Import Components
	import Footer from "$comp/Core/Footer/Footer.svelte";
	import Navbar from "$comp/Core/Navbar/Navbar.svelte";
	import "$src/app.postcss";

		// Supabase Auth
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

<div class="app bg-gray-50">
	<Navbar/>
	
		<slot/>

	<Footer />
</div>

<style global>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}
</style>