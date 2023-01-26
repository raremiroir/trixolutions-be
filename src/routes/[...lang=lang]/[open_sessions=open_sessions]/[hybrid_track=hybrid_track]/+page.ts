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
   const getRatingData = async () => {
      const {data, error} = await supabase
         .from('ratings')
         .select(`*`);

      if (error) {
         throw new Error(error.message)
      } else if (data) {
         return data;
      };
   }

   if (  params.hybrid_track === 'hybride-lencioni-leertraject'   && params.open_sessions === 'open-sessies'      && params.lang === 'nl'
      || params.hybrid_track === 'hybrid-lencioni-learning-track' && params.open_sessions === 'open-sessions'     && params.lang === 'en'
      || params.hybrid_track === 'traject-hybride-lencioni'       && params.open_sessions === 'sessions-ouvertes' && params.lang === 'fr') {
         
         return {
            sessionTypes: getSessionTypes(),
            sessionData: getSessionData(),
            ratingData: getRatingData(),
         }
   }

   throw error (404, 'Not found');

}

