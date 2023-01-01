import PocketBase from 'pocketbase';

const pb = new PocketBase('http://127.0.0.1:8090');
import { formatUrl } from '$lib/utils'

export const load = ({ fetch, params }) => {
   // console.log(params);


   const fetchPost = async (url) => {
      const res = await pb.collection('pages_blog_items')
                  .getFullList(200 /* batch size */, {
                     sort: '-updated',
                     expand: 'author, img'
                  });
      // console.log(res);

      let data;
      res.forEach(el => {
         if (formatUrl(blogPost.title_nl) === url) {
            data = el;
            console.log(url);
         }
      });
      return data;
   }

   return {
      post: fetchPost(params.post)
   }
}