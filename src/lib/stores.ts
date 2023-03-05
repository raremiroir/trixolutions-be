import { derived, writable } from "svelte/store";

// Store current active modal
export let currentModal = writable();

// Define current page slugs in each locale
export let currentPageMap = writable([
   {locale: 'en', slug: '/'},
   {locale: 'fr', slug: '/'},
   {locale: 'nl', slug: '/'}
])
// Export current page map as derived store
export const langSelection = (() => {
   const _selectedLocale = writable('en')
   const _pageLangMap = derived(
      [currentPageMap, _selectedLocale], 
      ([$currentPageMap, $_selectedLocale]) => $currentPageMap.find(a => a.locale == $_selectedLocale)
      )

   return {
      selectLocale: _selectedLocale.set,
      ..._pageLangMap
   }
})()

// Store current hero for explore-pages
export let currentHero = writable(``);
// Store current title for explore-pages
export let currentTitle = writable(``);
// Store current slug for explore-pages
export let currentSlug = writable(``);
// Store current desc for explore-pages
export let currentDesc = writable(``);
// Store current icon for explore-pages
export let currentIcon = writable(``);