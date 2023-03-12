import type { PageLoad } from './$types'
import { error } from '@sveltejs/kit'
import { dbSelectOrder } from '$src/lib/utils'
import { isLocale } from '$src/i18n/i18n-util'

export const load: PageLoad = async ({ parent, params }) => {
   // Load data if lang param is a locale
   if (isLocale(params.lang)) {
      return {
         categories: dbSelectOrder('home_pages_categories', '*', 'id', true),
         pages: dbSelectOrder('home_pages', `*, category (name), hero_img (name, folder, type)`, 'order', true)
      }
   } else {
      throw error (404, 'Not found');
   }


}