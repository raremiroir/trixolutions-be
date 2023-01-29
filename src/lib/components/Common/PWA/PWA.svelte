<script lang="ts">
	// Import onmount
	import { onMount } from 'svelte';
	// Import pwaInfo
	import { pwaInfo } from 'virtual:pwa-info'
	// Import website config
	import { website } from '$lib/config/website';
	// Define theme color
	const themeColor = website.themeColor;


  // Add Reloadpromt var
  let ReloadPrompt:any;
	// PWA Register
	onMount(async () => {
    pwaInfo && (ReloadPrompt = (await import('$lib/components/Common/PWA/ReloadPrompt.svelte')).default)
    if (pwaInfo) {
      const { registerSW } = await import('virtual:pwa-register')
      registerSW({
        immediate: true,
        onRegistered(r) {
          // uncomment following code if you want check for updates
          // r && setInterval(() => {
          //    console.log('Checking for sw update')
          //    r.update()
          // }, 20000 /* 20s for testing purposes */)
          console.log(`SW Registered: ${r}`)
        },
        onRegisterError(error) {
          console.log('SW registration error', error)
        }
      })
    }
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