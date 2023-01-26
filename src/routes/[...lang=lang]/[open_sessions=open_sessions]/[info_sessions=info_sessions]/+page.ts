import supabase from '$lib/db'
import { formatDateFull } from '$src/lib/utils';
import { error } from '@sveltejs/kit';
import type { PageLoad } from '../../$types';

export const load: PageLoad = async ({ params }) => {

   const getOpenSessions = async () => {
      const {data, error} = await supabase
         .from('sessions')
         .select(`*, trainer (first_name, last_name)`);

      if (error) throw new Error(error.message);

      let sessions:any = [];
      data.forEach(session => {
         if (session.type === 'info_session') {
            sessions.push(session);
         }
      });
      
      return sessions;
   }
   const getOpenSessionData = async () => {
      const {data, error} = await supabase
         .from('sessions')
         .select(`*`);

      if (error) throw new Error(error.message);

      let sessionDates:any = [];
      data.forEach(session => {
         if (session.type === 'info_session') {
            sessionDates.push(formatDateFull(session.starts_on));
         }
      });
      
      return sessionDates;
   }

   if (  params.info_sessions === 'gratis-open-infosessies'          && params.open_sessions === 'open-sessies' && params.lang === 'nl'
      || params.info_sessions === 'free-open-info-sessions'          && params.open_sessions === 'open-sessions' && params.lang === 'en'
      || params.info_sessions === 'sessions-info-gratuites-ouvertes' && params.open_sessions === 'sessions-ouvertes' && params.lang === 'fr') {
         return {
            sessions: getOpenSessions(),
            sessionDates: getOpenSessionData()
         }
   }

   throw error (404, 'Not found');

}

