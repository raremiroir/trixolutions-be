import supabase from '$lib/db'
import { formatUrl } from '$utils';

export const load = () => {

   const getData = async () => {
      const {data, error} = await supabase
         .from('home_pages')
         .select(`
            *,
            hero_img ( name, folder, type )
         `)
         .eq('id', 8);

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

