<script lang="ts">
	import Loader from './Loader.svelte';
	
	import { page } from '$app/stores'
	// Import i18n
	import LL, { locale, setLocale } from '$i18n/i18n-svelte'
	import type { LayoutData } from './$types'
	import { HeadHrefLangs } from '$comp';
	
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

	// Load pages dictionary
   const displayPagesText = async (locale) => {
         await loadNamespaceAsync(locale, 'components')
         await loadNamespaceAsync(locale, 'pages')
         await loadNamespaceAsync(locale, 'other')
         await loadNamespaceAsync(locale, 'sessions')
         setLocale(locale)
      }
   displayPagesText($locale);

	import "$src/app.postcss";
	import { loadNamespaceAsync } from '$src/i18n/i18n-util.async';
	import { onMount } from 'svelte';
	
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

	let hasPageLoaded = false;
	onMount(() => {
		hasPageLoaded = true;
		console.log('page loaded');
	})

</script>

<div class="app bg-gray-50">

	{#if !hasPageLoaded}
		<Loader />
	{/if}
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