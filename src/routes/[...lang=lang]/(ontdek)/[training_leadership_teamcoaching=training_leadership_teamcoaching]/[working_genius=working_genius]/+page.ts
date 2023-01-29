import supabase from '$lib/db'
import { error } from '@sveltejs/kit';
import type { PageLoad } from '../../../$types';

export const load: PageLoad = ({ params }) => {

   const getData = async () => {
      const {data, error} = await supabase
         .from('home_pages')
         .select(`*, hero_img ( name, folder, type )`)
         .eq('id', 4);

      if (error) { throw new Error(error.message) } 
      else if (data) { return data; };
   }

   if (  params.working_genius === '6-types-working-genius' && params.lang === 'nl'
		|| params.working_genius === '6-types-working-genius' && params.lang === 'en'
		|| params.working_genius === '6-types-working-genius' && params.lang === 'fr' ) {

         return {
            data: getData()
         }
   }
   
   throw error (404, 'Not found');

}
