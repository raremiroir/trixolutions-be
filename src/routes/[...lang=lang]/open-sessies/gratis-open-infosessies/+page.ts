import supabase from '$lib/db'
import { formatDateFull } from '$src/lib/utils';

export const load = () => {

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

   return {
      sessions: getOpenSessions(),
      sessionDates: getOpenSessionData()
   }
}

