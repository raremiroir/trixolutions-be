import supabase from '$lib/db'
import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load: PageLoad = ({ params }) => {

   const getData = async () => {
      const {data, error} = await supabase
         .from('home_pages')
         .select(`*, hero_img ( name, folder, type )`)
         .eq('id', 3);

      if (error) { throw new Error(error.message) } 
      else if (data) { return data; };
   }

   if (  params.meetings_deadly === 'vergaderingen-zijn-dodelijk' && params.lang === 'nl'
		|| params.meetings_deadly === 'meetings-are-deadly'         && params.lang === 'en'
		|| params.meetings_deadly === 'reunions-tuent'              && params.lang === 'fr' ) {

         return {
            data: getData()
         }
   }
   
   throw error (404, 'Not found');

}
