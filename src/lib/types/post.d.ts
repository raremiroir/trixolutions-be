export namespace Post {
  export type Post = {
    slug: string;
    title: string;
    language: string;
    description: string;
    summary?: string;
    content?: string;
    html?: string;
    published: string;
    updated: string;
    created: string;
    cover?: string;
    author: string;
  };

}