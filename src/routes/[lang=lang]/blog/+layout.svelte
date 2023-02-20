<script lang="ts">
	// import { onMount } from 'svelte';
	// import { invalidate } from '$app/navigation';
	// import supabase from '$src/lib/db';	


	// Import Components
	import { Footer } from '$comp';
	import "$src/app.postcss";

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

</script>

<div class="app bg-gray-50">
	
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