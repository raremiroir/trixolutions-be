<script lang="ts">
	// Import Components
	import { Footer, Navbar } from "$comp";
	import "$src/app.postcss";
	import { setLocale } from '$i18n/i18n-svelte';
	
	import type { LayoutData } from './$types'
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