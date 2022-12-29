<script lang="ts">
	import { page } from '$app/stores';
	import LL, { setLocale } from '$i18n/i18n-svelte'
	import lazyload from 'vanilla-lazyload'
	import { browser } from '$app/environment';
	import type { LayoutData } from './$types'
	
	export let data: LayoutData
	
	// at the very top, set the locale before you access the store and before the actual rendering takes place
	setLocale(data.locale)
	console.info($LL.log({ fileName: '+layout.svelte' }))
	
	if (browser && !document.lazyloadInstance) {
    document.lazyloadInstance = new lazyload();
  	}

	// Import Components
	import Footer from "$comp/Core/Footer/Footer.svelte";
	import Navbar from "$comp/Core/Navbar/Navbar.svelte";
	import "$src/app.postcss";
	import NavHrefLangs from '$src/lib/components/Core/Navbar/NavHrefLangs.svelte';


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