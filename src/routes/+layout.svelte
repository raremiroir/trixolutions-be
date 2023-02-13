<script lang="ts">
	// Import Components
	import Loader from './Loader.svelte';
	import { HeadHrefLangs, PWA, PageTitle } from '$comp';

	// Import Styles
	import "$src/style/normalize.css"
	import "$src/app.postcss";

	// Load svelte items
	import { onMount } from 'svelte';
	
	// Import i18n
	import LL, { locale, setLocale } from '$i18n/i18n-svelte'
	import type { LayoutData } from './$types'
	import { loadNamespaceAsync } from '$i18n/i18n-util.async';
	
	// Import data
	export let data: LayoutData
	setLocale(data.locale)

	// Load pages dictionaries
   const displayPagesText = async (locale:any) => {
         await loadNamespaceAsync(locale, 'nav')
         await loadNamespaceAsync(locale, 'components')
         await loadNamespaceAsync(locale, 'pages')
         await loadNamespaceAsync(locale, 'pages_explore')
         await loadNamespaceAsync(locale, 'other')
         await loadNamespaceAsync(locale, 'sessions')
         setLocale(locale)
      }
   $: displayPagesText($locale);

	
	// Page Loading Spinner
	let hasPageLoaded = false;
	onMount(() => {
		hasPageLoaded = true;
		console.log('page loaded');
	})
</script>

<svelte:head>
	<PageTitle />
	<HeadHrefLangs />
</svelte:head>
<PWA/>

<div class="
		flex flex-col min-h-screen bg-gray-50
		relative ">
	<div class="content overflow-y-auto box-border w-full">
		{#if !hasPageLoaded}
			<Loader />
		{/if}
		<slot />
	</div>
</div>


<style global>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}
</style>