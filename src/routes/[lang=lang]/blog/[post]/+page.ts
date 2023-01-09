import supabase from '$lib/db'
import { formatUrl } from '$utils/formatText';


export const load = ({ fetch, params }) => {
   console.log(params);

   const fetchPost = async (url) => {
      const {data, error} = await supabase
         .from('blog_posts')
         .select(`
            *,
            author (
               first_name,
               last_name,
               img
            )`);

      if (error) {
         throw new Error(error.message)
      } else if (data) {
         let postData;
         data.forEach(el => {
            if (formatUrl(el.title) === url) {
               postData = el;
               // console.log(url);
            }
         });
         return postData;
      }
   };

   return {
      post: fetchPost(params.post)
   }
}