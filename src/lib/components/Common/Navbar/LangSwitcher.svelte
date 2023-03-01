
<script lang="ts">
	import { browser } from '$app/environment'
   import { invalidateAll } from '$app/navigation'
	import { page } from '$app/stores'
	import LL, { setLocale, locale } from '$i18n/i18n-svelte'
	import type { Locales } from '$i18n/i18n-types'
	import { locales } from '$i18n/i18n-util'
	import { loadLocaleAsync } from '$i18n/i18n-util.async'
	import { replaceLocaleInUrl, changeUrlToLocale } from '$utils'

	import { Button, Menu } from '$comp'

	const switchLocale = async (newLocale: Locales, updateHistoryState = true) => {
		if (!newLocale || $locale === newLocale) return
		// load new dictionary from server
		await loadLocaleAsync(newLocale)
		// select locale
		setLocale(newLocale)
		// update `lang` attribute
		document.querySelector('html')?.setAttribute('lang', newLocale)
		if (updateHistoryState) {
			// update url to reflect locale changes
			history.pushState({ locale: newLocale }, '', replaceLocaleInUrl($page.url, newLocale))
		}
		// run the `load` function again
		invalidateAll()
	}
	// update locale when navigating via browser back/forward buttons
	const handlePopStateEvent = async ({ state }: PopStateEvent) => switchLocale(state.locale, false)
	// update locale when page store changes
	$: if (browser) {
		const lang = $page.params.lang as Locales
		switchLocale(lang, false)
		history.replaceState({ ...history.state, locale: lang }, '', replaceLocaleInUrl($page.url, lang))	
	}
</script>

<svelte:window on:popstate={handlePopStateEvent} />

<Menu hoverState padding="p-0.5" position="right">
   <Button 
		flat
      slot="trigger"
		ariaLabel="{$LL.base.nav.lang.change_lang()}"
      color="ghost" rounded noAnim
      size="p-3 xl:px-6" 
		icon="ic:round-translate" iconClass="w-5">
			<span class="text-md font-body font-semibold flex items-center justify-center gap-1">
				| <span class="pt-0.5">{$locale.toUpperCase()}</span>
			</span>
   </Button>
   <ul class="flex flex-col gap-1 p-2">
      {#each locales as l}
         <li class="w-full">
				<Button
					ariaLabel="{$LL.base.nav.lang.change_lang_to()} {l}"
					href={`${changeUrlToLocale($page.url, l)}`}
					color="{l === $locale ? 'secondary' : 'ghost'}"
					block alignStart noAnim flat
					size="sm" 
					icon="emojione:flag-for-{l === 'nl' ? 'belgium' : l === 'en' ? 'united-kingdom' : l === 'fr' ? 'france' : ''}"
					iconClass="w-5"
					>
					<div class="flex flex-col items-start justify-start w-full">
						{ l === 'en' ? 'English' 
						: l === 'fr' ? 'Français' 
						: l === 'nl' ? 'Nederlands' 
						: 'Error'}
						<span class="text-xs italic text-gray-600 capitalize drop-shadow-none font-medium">
							{ l === 'en' ? `${$LL.base.geo.lang.english()}` 
							: l === 'fr' ? `${$LL.base.geo.lang.french()}`
							: l === 'nl' ? `${$LL.base.geo.lang.dutch()}`
							: 'Error'}
						</span>
					</div>
				</Button>
         </li>
      {/each}
   </ul>
</Menu>
 