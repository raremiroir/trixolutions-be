<script lang="ts">
	import type { LayoutData } from './$types'
	// Import Components
	import { Footer, Navbar } from "$comp/core";
	import "$src/app.postcss";
	import { setLocale } from '$src/i18n/i18n-svelte';
	import { locale } from '$src/i18n/i18n-svelte';

	export let data: LayoutData
	setLocale(data.locale)
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