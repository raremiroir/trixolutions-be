import supabase from '$lib/db'

export const load = () => {

   const getData = async () => {
      const {data, error} = await supabase
         .from('session_types')
         .select(`*`);

      if (error) {
         throw new Error(error.message)
      } else if (data) {
         return data;
      };
   }

   return {
      data: getData()
   }
}

