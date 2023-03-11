import supabase from '$lib/db'
import { dbSelect, getParamValues } from '$src/lib/utils';
import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

const parentPage = 'open_sessions';
const pageName = 'deepdive';

export const load: PageLoad = async ({ params }) => {

   const parentParamValues = await getParamValues(parentPage);
   const paramValues = await getParamValues(pageName, [parentPage, 'items']);
   
   const formattedParamSlug = parentParamValues[params.lang] + '/' + params[pageName];

   if ( 
      params.lang in paramValues 
      && paramValues[params.lang] === formattedParamSlug 
      && params.lang in parentParamValues
      && parentParamValues[params.lang] === params[parentPage]
      ) {
         return {
            sessionTypes: dbSelect('session_types'),
            sessionData: dbSelect('sessions')
         }
      }

   throw error (404, 'Not found');

}

