<script lang="ts">
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

	// Import Components
	import { Footer, Navbar, Title } from '$comp/core';
	
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