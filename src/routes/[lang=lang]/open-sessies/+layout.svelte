<script lang="ts">
	import type { LayoutData } from './$types'
	
	export let data;
	setLocale(data.locale);
	
	// Import Components
	import { Navbar, Footer } from '$comp/core';
	import "$src/app.postcss";
	import { setLocale } from '$src/i18n/i18n-svelte';
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