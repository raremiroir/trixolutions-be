export const fetchMarkdownPosts = async () => {
   const allPostFiles = import.meta.glob('../../posts/*/*.md')
   const iterablePostFiles = Object.entries(allPostFiles)

   const allPosts = await Promise.all(
      iterablePostFiles.map(async ([path, resolver]) => {
         const { metadata }:any = await resolver()
         const postPath = `/${metadata.lang}/blog${path.replace('../..', '')}`;

         return {
            meta: metadata,
            path: postPath,
         }
      })
   )

   return allPosts
}