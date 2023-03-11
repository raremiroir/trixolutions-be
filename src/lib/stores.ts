import type { Locales } from "$src/i18n/i18n-types";
import { derived, writable, type Writable } from "svelte/store";
import { baseLocale, locales } from "$i18n/i18n-util";
import type { CurPageMap } from "$src/types";

// Store current active modal
export let currentModal = writable();



const initCurPageMap:CurPageMap[] = [];
locales.forEach((locale) => {
   initCurPageMap.push({ locale, slug: "/" });
});

// Define current page slugs in each locale
export let currentPageMap: Writable<CurPageMap[]> = writable(initCurPageMap)
// Export current page map as derived store
export const langSelection = (() => {
   const _selectedLocale = writable(baseLocale)
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
// Store current icon for explore-pages
export let currentIcon = writable(``);
// Store current reference for explore-pages SEO
export let currentReference = writable(``);