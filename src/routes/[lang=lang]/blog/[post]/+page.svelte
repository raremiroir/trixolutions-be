<script lang="ts">
   // Import components
   import { 
      Navbar, Main, Section, 
      H1, H2, Subheader, Subtitle,
      Breadcrumbs, Tag, MarkProse,
      Hero, PostSEO, Reveal 
   } from "$comp";
   // Import utils
   import { titleCase, formatDateMonthFull, formatTime, formatUrl } from "$utils";
   
   // Import types
   import type { BlogPost } from "$src/types";
   import type { PageData } from "./$types";

   // Import data (first priority)
   export let data:PageData;
   const post:BlogPost = data.post 
      ? data.post 
      : {
            id: 0, title: "",
            excerpt: "", content: "",
            language: "nl",
            img: { name: "", folder: "", type: "" },
            updated_at: "", created_at: "",
            author: { first_name: "", last_name: "" },
            // timeToRead: 0,
            // tags: [],
         };
   // console.log(post);
   
   // Define current page slug
   import { currentPageMap } from "$lib/stores";
   $currentPageMap = [
      {locale: 'en', slug: `blog/${formatUrl(post.title)}`},
      {locale: 'fr', slug: `blog/${formatUrl(post.title)}`},
      {locale: 'nl', slug: `blog/${formatUrl(post.title)}`}
   ];


   // Format URL
   const url = formatUrl(post.title);


   // SEO
   const seoProps = {
      language: post.language,
      title: post.title,
      description: post.excerpt,
      summary: post.excerpt,
      slug: url,
      published: post.created_at,
      updated: post.updated_at,
      cover: `${post.img.folder}/${post.img.name}.${post.img.type}`,
      author: `${post.author.first_name} ${post.author.last_name}`
   } 
</script>

<PostSEO {...seoProps} />
<header>
   <Navbar/>
   <Hero imgSrc="{seoProps.cover}" imgAlt="{post.title}">
      <div slot="title">
         <Subheader color="text-gray-200">Trixolutions Blog</Subheader>
         <H1 color="text-gray-100">{titleCase(String(post.title))}</H1>
         <div class="flex flex-row justify-between w-full items-center">
            <Subtitle color="text-gray-100/50">
               {seoProps.author}
            </Subtitle>
            <Tag outlined secondary class="float-right !text-gray-50/70 !border-gray-50/70">
               {formatDateMonthFull(seoProps.published)} ({formatTime(seoProps.published)})
            </Tag>
         </div>
      </div>
   </Hero>
</header>

<Main cta partnership noMargin>
   <Breadcrumbs currentIcon="mdi:note-text-outline" beforeIcon="mdi:newspaper-variant-outline"/>
   <Section name="{url}">
      <H2 slot="title">
         <Reveal>{titleCase(post.title)}</Reveal>
      </H2>
      <Reveal>
         <MarkProse>
            <svelte:component this={post.content} />
         </MarkProse>
      </Reveal>
   </Section>
</Main>