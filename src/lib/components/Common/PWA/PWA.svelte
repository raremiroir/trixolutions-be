<script lang="ts">
	// Import onmount
	import { onMount } from 'svelte';
	// Import website config
	import { website } from '$lib/config/website';
	// Define theme color
	const themeColor = website.themeColor;
  
  
	// PWA
	import { pwaInfo } from 'virtual:pwa-info';
  let ReloadPrompt:any;
	// PWA Register
	
  onMount( async () => {
		pwaInfo && (ReloadPrompt = (await import('$comp/Common/PWA/ReloadPrompt.svelte')).default);
	})

	$: webManifest = pwaInfo ? pwaInfo.webManifest.linkTag : ''
</script>

<svelte:head>
	<meta name="theme-color" content={themeColor} />
	{@html webManifest}
</svelte:head>

{#if ReloadPrompt}
  <svelte:component this={ReloadPrompt} />
{/if}