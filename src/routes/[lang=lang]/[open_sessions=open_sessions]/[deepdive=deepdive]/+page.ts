import supabase from '$lib/db'
import { error } from '@sveltejs/kit';
import type { PageLoad } from '../../$types';

export const load: PageLoad = async ({ params }) => {

   const getSessionTypes = async () => {
      const {data, error} = await supabase
         .from('session_types')
         .select(`*`);

      if (error) {
         throw new Error(error.message)
      } else if (data) {
         return data;
      };
   }
   const getSessionData = async () => {
      const {data, error} = await supabase
         .from('sessions')
         .select(`*`);

      if (error) {
         throw new Error(error.message)
      } else if (data) {
         return data;
      };
   }

   if (  params.deepdive === 'lencioni-deepdive-level-2'  && params.open_sessions === 'open-sessies'      && params.lang === 'nl'
      || params.deepdive === 'lencioni-deepdive-level-2'  && params.open_sessions === 'open-sessions'     && params.lang === 'en'
      || params.deepdive === 'lencioni-deepdive-niveau-2' && params.open_sessions === 'sessions-ouvertes' && params.lang === 'fr') {
         
         return {
            sessionTypes: getSessionTypes(),
            sessionData: getSessionData()
         }
      }

   throw error (404, 'Not found');

}

