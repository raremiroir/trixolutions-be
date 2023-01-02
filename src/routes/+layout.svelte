<script lang="ts">
	import { page } from '$app/stores';
	import lazyload from 'vanilla-lazyload'
	import { browser } from '$app/environment';
	import type { LayoutData } from './$types'
	import { onMount } from 'svelte';
	import { invalidate } from '$app/navigation';
	import supabase from '$lib/db';

	// import TwicPics svelte3 components
	import { installTwicPics } from '@twicpics/components/svelte3'
	// import TwicPics components css
	import '@twicpics/components/style.css'

	installTwicPics({
		// domain is mandatory
		domain: 'https://trixolutions.twic.pics'
	})
	
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

	export const ssr = false;

</script>

<div class="app bg-gray-50">

	<slot />
	
</div>

<style global>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}
</style>