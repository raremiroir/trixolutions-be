<script lang="ts">
	import LL, { setLocale } from '$i18n/i18n-svelte'
	import type { LayoutData } from './$types'
	
	export let data: LayoutData
	
	// at the very top, set the locale before you access the store and before the actual rendering takes place
	setLocale(data.locale)
	console.info($LL.log({ fileName: '+layout.svelte' }))

	// Import Components
	import Footer from "$comp/Core/Footer/Footer.svelte";
	import Navbar from "$comp/Core/Navbar/Navbar.svelte";
	import "../app.postcss";
	import SectionWrapper from '$src/lib/components/Base/Wrapper/SectionWrapper.svelte';
	import CtA from '$src/lib/components/Core/CtA/CtA.svelte';


</script>




<svelte:head>
</svelte:head>

<div class="app bg-gray-50">
	<Navbar/>
	
		<slot></slot>
	
	<SectionWrapper name="call-to-action">
		<CtA></CtA>
	</SectionWrapper>
	<Footer />
</div>

<style global>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}
</style>