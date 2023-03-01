import supabase from '$lib/db'
import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load: PageLoad = ({ params }) => {

   const getData = async () => {
      const {data, error} = await supabase
         .from('home_pages')
         .select(`*, hero_img ( name, folder, type )`)
         .eq('id', 8);

      if (error) { throw new Error(error.message) } 
      else if (data) { return data; };
   }

   if (  params.decisive_lead === 'beslissende-voorsprong'  && params.lang === 'nl'
		|| params.decisive_lead === 'decisive-lead'           && params.lang === 'en'
		|| params.decisive_lead === 'avantage-decisif'        && params.lang === 'fr' ) {

         return {
            data: getData()
         }
   }
   
   throw error (404, 'Not found');

}

