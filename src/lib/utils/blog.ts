export const fetchMarkdownPosts = async () => {
   const allPostFiles = import.meta.glob('../../posts/*/*.md')
   const iterablePostFiles = Object.entries(allPostFiles)

   const allPosts = await Promise.all(
      iterablePostFiles.map(async ([path, resolver]) => {
         const { metadata }:any = await resolver()
         const pathArr = path.split('/')
         const locale = pathArr[pathArr.length - 2]
         const postPath = `/${locale}/blog/${pathArr[pathArr.length - 1]}`

         return {
            meta: metadata,
            path: postPath,
         }
      })
   )

   return allPosts
}