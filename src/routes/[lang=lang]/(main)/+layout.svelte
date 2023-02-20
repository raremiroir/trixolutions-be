<script lang="ts">
	// Import Components
	import { Footer, Navbar } from "$comp";
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