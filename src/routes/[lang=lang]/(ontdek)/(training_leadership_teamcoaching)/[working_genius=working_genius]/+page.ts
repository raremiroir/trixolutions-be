import supabase from '$lib/db'
import { getParamValues } from '$src/lib/utils';
import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

const pageName = 'working_genius';

export const load: PageLoad = async ({ params }) => {

   const getData = async () => {
      const {data, error} = await supabase
         .from('home_pages')
         .select(`*, hero_img ( name, folder, type )`)
         .eq('id', 4);

      if (error) { throw new Error(error.message) } 
      else if (data) { return data; };
   }

   const paramValues = await getParamValues(pageName, ['explore', 'training_leadership_teamcoaching', 'items']);
   if ( params.lang in paramValues && paramValues[params.lang] === params[pageName]  ) {

         return {
            data: getData()
         }
   }
   
   throw error (404, 'Not found');

}
