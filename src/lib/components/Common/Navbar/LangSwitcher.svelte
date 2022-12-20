<script lang="ts">
   // import env variables
   import { browser } from '$app/environment'
	import { page } from '$app/stores'
   // import i18n
   import { setLocale, locale } from '$i18n/i18n-svelte'
	import type { Locales } from '$i18n/i18n-types'
	import { locales } from '$i18n/i18n-util'
	import { loadLocaleAsync } from '$i18n/i18n-util.async'
	import { replaceLocaleInUrl } from '../../../../utils'
   // import components
   import Menu from "$comp/Menu/Menu.svelte";
   import Button from "$comp/Common/Button/Button.svelte";
   import Icon from "@iconify/svelte";

   const switchLocale = async (newLocale: Locales, updateHistoryState = true) => {
		if (!newLocale || $locale === newLocale) return
		// load new dictionary from server
		await loadLocaleAsync(newLocale)
		// select locale
		setLocale(newLocale)
		// update `lang` attribute
		document.querySelector('html').setAttribute('lang', newLocale)
		if (updateHistoryState) {
			// update url to reflect locale changes
			history.pushState({ locale: newLocale }, '', replaceLocaleInUrl(location, newLocale))
		}

	}
   // update locale when navigating via browser back/forward buttons
	const handlePopStateEvent = async ({ state }: PopStateEvent) => switchLocale(state.locale, false)
	
   // update locale when page store changes
	$: if (browser) {
		const lang = $page.params.lang as Locales
		switchLocale(lang, false)
		history.replaceState({ ...history.state, locale: lang }, '', replaceLocaleInUrl(location, lang))
	}
</script>

<svelte:window on:popstate={handlePopStateEvent} />

<Menu>
   <Button
      slot="trigger"
      color="transparent" flat rounded
      size="square-md">
      <Icon icon="ic:round-translate" width="28" />
   </Button>
   <ul class="flex flex-col gap-2 p-2">
      {#each locales as l}
         <li>
            <Button
               on:click={() => switchLocale(l)}
               color="{l === $locale ? 'accent' : 'transparent'}"
               flat block size="sm"
               >
               {l}
            </Button>
         </li>
      {/each}
   </ul>
</Menu>