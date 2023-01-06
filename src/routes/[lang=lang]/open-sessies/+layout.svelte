<script lang="ts">
	import type { LayoutData } from './$types'
	
	export let data: LayoutData
	
	// Import Components
	import { Navbar, Footer } from '$comp/core';
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