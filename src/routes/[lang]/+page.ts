import type { PageLoad } from './$types'
import LL, { setLocale } from '$i18n/i18n-svelte'
import { get } from 'svelte/store'
import supabase from '$src/lib/db'

export const load: PageLoad = async ({ parent }) => {
	// wait for `+layout.ts` to load dictionary and pass locale information
	const { locale } = await parent()

	// if you need to output a localized string in a `load` function,
	// you always need to call `setLocale` right before you access the `LL` store
	setLocale(locale)
	// get the translation functions value from the store
	const $LL = get(LL)

	// Get category data from supabase
   const getCategoryData = async () => {
      const {data, error} = await supabase
         .from('home_pages_categories')
         .select('*')
         .order('id', { ascending: true });

      if (error) throw new Error(error.message);

      const categoryData = data;
      return categoryData;
   }
   // Get pages data from supabase
   const getPagesData = async () => {
      const {data, error} = await supabase
         .from('home_pages')
         .select(`*, category (name), hero_img (name, folder, type)`)
         .order('order', { ascending: true });
               
      if (error) throw new Error(error.message);

      const pagesData = data;
      return pagesData;
   }

	return {
		categories: getCategoryData(),
		pages: getPagesData()
	}
}