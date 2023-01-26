import supabase from '$lib/db'
import type { PageLoad } from '../$types';
import { error } from '@sveltejs/kit';

export const load: PageLoad = async ({ params }) => {

   const getSessionTypes = async () => {
      const {data, error} = await supabase
         .from('session_types')
         .select(`*`);

      if (error) throw new Error(error.message);

      let session_types:any = [];
      data.forEach(session => {
            session_types.push(session);
      });
      
      return session_types;
   }

   if (  params.open_sessions === 'open-sessies' && params.lang === 'nl'
		|| params.open_sessions === 'open-sessions' && params.lang === 'en'
		|| params.open_sessions === 'sessions-ouvertes' && params.lang === 'fr') {

         return {
            session_types: getSessionTypes(),
         }
      }
   
   throw error (404, 'Not found');

}

