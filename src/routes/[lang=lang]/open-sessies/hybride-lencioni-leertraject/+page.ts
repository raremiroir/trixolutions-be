import supabase from '$lib/db'

export const load = () => {

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

   return {
      sessionTypes: getSessionTypes(),
      sessionData: getSessionData(),
      ratingData: getRatingData(),
   }
}

