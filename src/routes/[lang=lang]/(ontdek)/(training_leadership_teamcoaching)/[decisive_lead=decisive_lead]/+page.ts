import { dbSelectFilter, getParamValues } from '$src/lib/utils';
import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

const pageName = 'decisive_lead';

export const load: PageLoad = async ({ params }) => {
   const paramValues = await getParamValues(pageName, ['explore', 'training_leadership_teamcoaching', 'items']);
   if ( params.lang in paramValues && paramValues[params.lang] === params[pageName]  ) {
         return {
            data: dbSelectFilter('home_pages', '*, hero_img ( name, folder, type )', ['id', 8])
         }
   }
   
   throw error (404, 'Not found');
}

