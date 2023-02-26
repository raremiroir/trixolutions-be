import supabase from '$lib/db'
import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load: PageLoad = ({ params }) => {

   const getData = async () => {
      const {data, error} = await supabase
         .from('home_pages')
         .select(`*, hero_img ( name, folder, type )`)
         .eq('id', 5);

      if (error) { throw new Error(error.message) } 
      else if (data) { return data; };
   }

   if (  params.dysfunctions_teamwork === '5-frustraties-teamwerk'         && params.lang === 'nl'
		|| params.dysfunctions_teamwork === '5-dysfunctions-teamwork'        && params.lang === 'en'
		|| params.dysfunctions_teamwork === '5-dysfonctions-travail-equipe'  && params.lang === 'fr' ) {

         return {
            data: getData()
         }
   }

   throw error (404, 'Not found');
}

