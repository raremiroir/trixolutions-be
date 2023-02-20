import supabase from '$lib/db'
import type { BlogPost } from '$src/types';


export const load = async ({ params }:any) => {
   // console.log(params);
   
   const post = await import(`../../../../posts/nl/${params.post}.md`);
   const { id, title, excerpt } = post.metadata;
   const content = post.default;

   const fetchPost = async (id:number) => {
      const {data, error} = await supabase
         .from('blog_posts')
         .select(`
            *,
            img ( name, folder, type ),
            author ( first_name, last_name, img )`);

      if (error) {
         throw new Error(error.message)
      } else if (data) {
         let postData:BlogPost = {
            id: 0, title: "",
            excerpt: "", content: "",
            language: "nl",
            img: { name: "", folder: "", type: "" },
            updated_at: "", created_at: "",
            author: { first_name: "", last_name: "" },
            // timeToRead: 0,
            // tags: [],
         };
         data.forEach(el => {
            if (el.id === id) {
               postData = {
                  id: id,
                  title: title,
                  excerpt: excerpt,
                  content: content,
                  language: el.language,
                  img: {
                     name: el.img.name,
                     folder: el.img.folder,
                     type: el.img.type
                  },
                  updated_at: el.updated_at,
                  created_at: el.created_at,
                  author: {
                     first_name: el.author.first_name,
                     last_name: el.author.last_name,
                  },
                  // timeToRead: 0,
                  // tags: [],
               }
            }
         });
         return postData;
      }
   }
   
   return {
      post: fetchPost(id)
   }
}