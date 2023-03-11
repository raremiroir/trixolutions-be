<script lang="ts">
   // Import components
   import { 
      Navbar, Main, Section, 
      H1, H2, Subheader, Subtitle,
      Breadcrumbs, Tag, MarkProse,
      Hero, SEO, Reveal 
   } from "$comp";
   // Import utils
   import { titleCase, formatUrl } from "$utils";
   
   // Import types
   import type { BlogPost } from "$src/types";
   import type { PageData } from "./$types";

   import LL from "$i18n/i18n-svelte";

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
	import { website } from "$src/lib/config/website";
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

   // !TODO: ADD MORE INFO + OG:PERSON + POST + ARTICLE
   $: openGraph = {
      title: titleCase(post.title),
      description: post.excerpt,
		slug: `blog/${formatUrl(post.title)}`,
      tags: ['blog', `${post.title}`, 'trixolutions', 'teamcoaching'],
   }
   $: schemaOrg = {
      entity: {
         name: { nl: titleCase(post.title) },
         slug: { nl: `blog/${formatUrl(post.title)}` },
         description: { nl: post.excerpt },
         author: `${post.author.first_name} ${post.author.last_name}`,

         image: { 
            url: `${website.domain}/${post.img.folder}/${post.img.name}.${post.img.type}`,
            alt: { nl: post.title },
         },

         breadcrumb: [
            {
               name: { nl: 'Blog' },
               slug: { nl: 'blog' },
               description: { nl: 'Trixolutions Blog' },
            },
            { 
               name: { nl: titleCase(post.title) }, 
               slug: { nl: `blog/${formatUrl(post.title)}` },
               description: { nl: post.excerpt }, 
            }
         ],
      },
      sessions: [],
   }
</script>

<SEO {openGraph} {schemaOrg} />
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
               {new Date(seoProps.published).toLocaleString($LL.code(), {day: 'numeric', month: 'long'})} ({new Date(seoProps.published).toLocaleTimeString($LL.code(), { hour: '2-digit', minute: '2-digit' })})
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