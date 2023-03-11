import type { PageLoad } from './$types';
import { error } from '@sveltejs/kit';
import { dbSelect, getParamValues } from '$src/lib/utils';

const pageName = 'open_sessions';

export const load: PageLoad = async ({ params }) => {

   const paramValues = await getParamValues(pageName);
   if ( params.lang in paramValues && paramValues[params.lang] === params[pageName] ) {
      return {
         session_types: dbSelect('session_types'),
      }
   }
   
   throw error (404, 'Not found');

}

