import supabase from '$lib/db'
import type { PageLoad } from '../$types';


export const load: PageLoad = () => {
   // console.log(params);

    const getBlogData = async () => {
      const {data, error} = await supabase
         .from('blog_posts')
         .select(`
            *, 
            img ( name, folder, type ),
            author ( first_name, last_name, img )`)
         .order('created_at', { ascending: false });

      if (error) throw new Error(error.message);
      return data;
   }

   return {
      blogData: getBlogData()
   }
}