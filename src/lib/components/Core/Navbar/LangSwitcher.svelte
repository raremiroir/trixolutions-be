<script lang="ts">
	import { browser } from '$app/environment'
    import { invalidateAll } from '$app/navigation'
	import { page } from '$app/stores'
	import { setLocale, locale } from '$i18n/i18n-svelte'
	import type { Locales } from '$i18n/i18n-types'
	import { locales } from '$i18n/i18n-util'
	import { loadLocaleAsync } from '$i18n/i18n-util.async'
	import { replaceLocaleInUrl } from '$utils'

	import { Button } from '../../core'
	import { Menu } from '../../content'
	import Icon from '@iconify/svelte'
	import Link from '../Link.svelte';

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
		console.log(lang);	
	}
</script>

<svelte:window on:popstate={handlePopStateEvent} />

<Menu hoverState padding="p-0.5">
   <Button
      slot="trigger"
      color="transparent" flat rounded
      size="md" 
      class="flex items-center justify-center">
		<div class="flex flex-row gap-1 items-center justify-center">
			<Icon icon="ic:round-translate" class="w-5 h-5" />
			<span class="text-md font-body font-semibold flex items-center justify-center gap-1">
				| <span class="pt-0.5">{$locale.toUpperCase()}</span>
			</span>
		</div>
   </Button>
   <ul class="flex flex-col gap-1 p-2">
      {#each locales as l}
         <li>
				<Link href={`${replaceLocaleInUrl($page.url, l)}`}>
					<Button
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
				</Link>
         </li>
      {/each}
   </ul>
</Menu>
 