<script lang="ts">
   // Import data (first priority)
   export let data;
   const blogPost = Object(data.post);
   // console.log(blogPost);
   
   // Define current page slug
   import { currentPageMap } from "$lib/stores";
   $currentPageMap = [
      {locale: 'en', slug: `blog/${formatUrl(blogPost.title)}`},
      {locale: 'fr', slug: `blog/${formatUrl(blogPost.title)}`},
      {locale: 'nl', slug: `blog/${formatUrl(blogPost.title)}`}
   ];

   // Import components
   import { 
      Navbar, Main, Section, 
      H1, H2, Subheader, Subtitle,
      Breadcrumbs, Tag, Markdown,
      Hero, PostSEO, Reveal 
   } from "$comp";
   // Import utils
   import { titleCase, formatDateMonthFull, formatTime, formatUrl } from "$utils";

   // Format URL
   const url = formatUrl(blogPost.title);

   // SEO
   const seoProps = {
      language: blogPost.language,
      title: blogPost.title,
      description: blogPost.excerpt,
      summary: blogPost.excerpt,
      slug: url,
      published: blogPost.created_at,
      updated: blogPost.updated_at,
      cover: `${blogPost.img.folder}/${blogPost.img.name}.${blogPost.img.type}`,
      author: `${blogPost.author.first_name} ${blogPost.author.last_name}`
   } 
</script>

<PostSEO {...seoProps} />
<header>
   <Navbar/>
   <Hero imgSrc="{seoProps.cover}" imgAlt="{blogPost.title}">
      <div slot="title">
         <Subheader color="text-gray-200">Trixolutions Blog</Subheader>
         <H1 color="text-gray-100">{titleCase(blogPost.title)}</H1>
         <div class="flex flex-row justify-between w-full items-center">
            <Subtitle color="text-gray-100/50">
               {seoProps.author}
            </Subtitle>
            <Tag outlined secondary class="float-right !text-gray-50/70 !border-gray-50/70">
               {formatDateMonthFull(blogPost.created_at)} ({formatTime(blogPost.created_at)})
            </Tag>
         </div>
      </div>
   </Hero>
</header>

<Main cta partnership>
   <Breadcrumbs currentIcon="mdi:note-text-outline" beforeIcon="mdi:newspaper-variant-outline"/>
   <Section name="{url}">
      <H2 slot="title">
         <Reveal>{titleCase(blogPost.title)}</Reveal>
      </H2>
      <Reveal>
         <Markdown content={blogPost.content} />
      </Reveal>
   </Section>
</Main>