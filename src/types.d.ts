export interface BlogPost {
   id: number,
   title: string,
   excerpt: string,
   content: any,
   language: Locales,
   img: {
      name: string,
      folder: string,
      type: string
   },
   updated_at: string,
   created_at: string,
   author: {
      first_name: string,
      last_name: string,
   }
}