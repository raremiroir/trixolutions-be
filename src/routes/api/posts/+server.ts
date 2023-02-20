import { fetchMarkdownPosts } from '$utils';
import { json } from '@sveltejs/kit';

export const GET = async () => {
   const allPosts = await fetchMarkdownPosts();
   
   const sortedPosts = allPosts.sort((a, b) => {
      const dateA = new Date(a.meta.date_updated ?? 0);
      const dateB = new Date(b.meta.date_updated ?? 0);
      return dateB.getTime() - dateA.getTime();
   });

   console.log(json(sortedPosts));
   return json(sortedPosts);
}