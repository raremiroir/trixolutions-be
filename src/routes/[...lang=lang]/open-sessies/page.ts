import supabase from '$lib/db'
import { formatDateFull } from '$src/lib/utils';

export const load = () => {

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

   return {
      session_types: getSessionTypes(),
   }
}

