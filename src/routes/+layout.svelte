<script lang="ts">
	import { page } from '$app/stores'

	// Import i18n
	import LL, { setLocale } from '$i18n/i18n-svelte'
	import type { LayoutData } from './$types'
	import HeadHrefLangs from '$comp/Core/HeadHrefLangs.svelte';
	
	// Import supabase
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
	setLocale(data.locale)

	// Import Components
	import { Footer, Navbar, Title } from '$comp/core';
	
	import "$src/app.postcss";
	
	// 	// Supabase Auth
	// 	onMount(() => {
	// 	const {
	// 		data: { subscription },
	// 	} = supabase.auth.onAuthStateChange(() => {
	// 		invalidate('supabase:auth')
	// 	})

	// 	return () => {
	// 		subscription.unsubscribe()
	// 	}
	// })

	export const ssr = false;

</script>

<div class="app bg-gray-50">

	<slot />
	
</div>

<svelte:head>
	<title>{$page.data.title || 'Trixolutions'}</title>
	<HeadHrefLangs />
</svelte:head>

<style global>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}
</style>