import type { LayoutLoad } from '../$types'
import { isLocale } from '$i18n/i18n-util'
import { error } from '@sveltejs/kit'
import { redirect } from '@sveltejs/kit'

export const load: LayoutLoad = async ({ params, url }) => {

   
   console.log('params: ', params);
   console.log('lang param: ', params.lang);
   
   const baseLocale = 'nl';
   let locale = baseLocale;
   // If no language has been inserted
   if (!isLocale(params.lang)) {

      // Define subPath and restString from pathname
      const [, subPath, ...rest] = url.pathname.split('/');
      // 
      const restString = [...rest].join('/')

      locale = baseLocale;
      params.lang = baseLocale;
      let new_path = `/${locale}`

      // Check if subpath exists
      if (subPath !== '') {
         // Check if subpath has a dutch string
         if (subPath === ( 'open-sessies' || 'contact' || 'blog' || 'over-ons' || 'referenties' )) {
            locale = 'nl'
            params.lang = 'nl';
         // Check if subpath has a french string
         } else if (subPath === ( 'sessions-ouvertes' || 'a-propos' || 'references' )) {
            locale = 'fr'
            params.lang = 'fr';
         // Check if subpath has an english string
         } else if (subPath === ( 'open-sessions' || 'about-us' )) {
            locale = 'en'
            params.lang = 'en';
         }
         // If the reststring is empty, dont append it, otherwise append it to the new path
         if (restString !== ('/' || '')) {
            new_path = `/${[locale, subPath, ...rest].join('/')}`
         } else {
            new_path = `/${[locale, subPath].join('/')}`
         }
      // If there is no subpath, set new_path to homepage
      } else {
         new_path = `/${locale}`
      }
      // Redirect to new path

      throw redirect(301, new_path);

   // If a correct locale is found in params
   } else {
      // console.log('is locale!')
      locale = params.lang;
      return;
   }

   throw error(404, 'Not Found');
}
 export const prerender = true;