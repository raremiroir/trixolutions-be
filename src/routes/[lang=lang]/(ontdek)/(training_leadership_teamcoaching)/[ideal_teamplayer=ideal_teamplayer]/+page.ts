import supabase from '$lib/db'
import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load: PageLoad = ({ params }) => {

   const getData = async () => {
      const {data, error} = await supabase
         .from('home_pages')
         .select(`*, hero_img ( name, folder, type )`)
         .eq('id', 9);

      if (error) { throw new Error(error.message) } 
      else if (data) { return data; };
   }

   if (  params.ideal_teamplayer === 'ideale-teamplayer' && params.lang === 'nl'
		|| params.ideal_teamplayer === 'ideal-team-player' && params.lang === 'en'
		|| params.ideal_teamplayer === 'coequipier-ideal'  && params.lang === 'fr' ) {

         return {
            data: getData()
         }
   }
   
   throw error (404, 'Not found');

}

