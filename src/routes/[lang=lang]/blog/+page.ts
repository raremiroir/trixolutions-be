import supabase from '$lib/db'
import type { PageLoad } from '../$types';

import { fetchMarkdownPosts } from '$utils';
import type { BlogPost } from '$src/types';

export const load: PageLoad = async ({ fetch }) => {

   const res = await fetch('/api/posts');
   let posts = await res.json();

   const allPosts = await fetchMarkdownPosts();

    const getBlogData = async () => {
      const {data, error} = await supabase
         .from('blog_posts')
         .select(`
            *, 
            img ( name, folder, type ),
            author ( first_name, last_name, img )`)
         .order('created_at', { ascending: false });

      if (error) { throw new Error(error.message) }
      else if (data) {
         let blogPosts:any = [];
         data.forEach(el => {
            posts.forEach((post:any) => {
               if (post.meta.id === el.id) {
                  blogPosts.push({
                     id: post.meta.id,
                     title: post.meta.title,
                     excerpt: post.meta.excerpt,
                     img: el.img,
                     language: el.language,
                     updated_at: el.updated_at,
                     created_at: el.created_at,
                     author: el.author
                  })
               }
            });
         })   

         const sortedPosts = blogPosts.sort((a:BlogPost, b:BlogPost) => {
            const dateA = new Date(a.created_at ?? 0);
            const dateB = new Date(b.created_at ?? 0);

            return dateB.getTime() - dateA.getTime();
         });

         return sortedPosts;
      }
   }
   
   return {
      posts: getBlogData()
   }
}