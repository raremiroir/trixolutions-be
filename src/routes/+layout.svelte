<script lang="ts">
	import { page } from '$app/stores';
	import { browser } from '$app/environment';
	import { invalidate } from '$app/navigation';
	import { onMount } from 'svelte';

	import lazyload from 'vanilla-lazyload'
	import type { LayoutData } from './$types'
	
	// supabase
	import supabase from '$lib/db';
	
	export let data: LayoutData

	// Import Components
	import Footer from "$comp/Core/Footer/Footer.svelte";
	import Navbar from "$comp/Core/Navbar/Navbar.svelte";
	import "$src/app.postcss";

	onMount(() => {
		const {
			data: { subscription },
		} = supabase.auth.onAuthStateChange(() => {
			invalidate('supabase:auth')
		})

		return () => {
			subscription.unsubscribe()
		}
	})

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