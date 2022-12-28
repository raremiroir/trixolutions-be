<script lang="ts">
	import LL, { setLocale } from '$i18n/i18n-svelte'
	import type { LayoutData } from './$types'
	
	export let data: LayoutData
	
	// at the very top, set the locale before you access the store and before the actual rendering takes place
	setLocale(data.locale)
	// console.info($LL.log({ fileName: '+layout.svelte' }))

	// Import Components
	import Footer from "$comp/Core/Footer/Footer.svelte";
	import Navbar from "$comp/Core/Navbar/Navbar.svelte";
	import "$src/app.postcss";


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