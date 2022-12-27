<script lang="ts">
   // import env variables
   import { browser } from '$app/environment'
	import { page } from '$app/stores'
   // import i18n
   import { setLocale, locale } from '$i18n/i18n-svelte'
	import type { Locales } from '$i18n/i18n-types'
	import { locales } from '$i18n/i18n-util'
	import { loadLocaleAsync } from '$i18n/i18n-util.async'
	import { replaceLocaleInUrl } from '$lib/utils'
   // import components
   import Button  from "$comp/Core/Button/Button.svelte";
   import Menu    from "$comp/Other/Menu/Menu.svelte";
   import Icon    from "@iconify/svelte";

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

<Menu hoverState padding="p-0.5">
   <Button
      slot="trigger"
      color="transparent" flat rounded
      size="square-md" 
      klass="flex items-center justify-center">
      <Icon icon="ic:round-translate" width="24" />
   </Button>
   <ul class="flex flex-col gap-1 p-2">
      {#each locales as l}
         <li>
            <Button
               on:click={() => switchLocale(l)}
               color="{l === $locale ? 'secondary' : 'transparent'}"
               flat block size="xs"
               >
               <div class="w-full flex flex-row items-center justify-start gap-2">
                  <Icon icon="emojione:flag-for-{l === 'nl' ? 'belgium' : l === 'en' ? 'united-kingdom' : l === 'fr' ? 'france' : ''}" 
                        width="20" />
                  <div class="flex flex-col items-start justify-center">
                     {l === 'en' ? 'English' 
                     : l === 'fr' ? 'Français' 
                     : l === 'nl' ? 'Nederlands' 
                     : 'Error'}
                     <span class="text-xs italic text-gray-600 capitalize drop-shadow-none font-light">
                        { l === 'en' ? 'Engels' 
                        : l === 'fr' ? 'Frans' 
                        : l === 'nl' ? 'Nederlands' 
                        : 'Error'}
                     </span>
                  </div>
               </div> 
            </Button>
         </li>
      {/each}
   </ul>
</Menu>