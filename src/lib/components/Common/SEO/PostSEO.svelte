<script lang="ts">
   import { siteConfig } from '$lib/config/website'
   import type { Post } from '$lib/types/post'

  export let title:string;
  export let slug:string;
  export let description:string
  export let summary: string;
  export let published: string;
  export let updated: string;
  export let cover: string;
  export let author: string;
</script>

<svelte:head>
   <title>{title} | {siteConfig.title}</title>
   <meta name="description" content={description} />
   <link rel="canonical" href={new URL(slug, siteConfig.url).href} />

   <!-- OpenGraph -->
   <meta property="og:site_name" content={siteConfig.title} />
   <meta property="og:locale" content={siteConfig.lang} />
   <meta property="og:type" content="article" />
   
   <meta property="og:title" content={title} />
   <meta property="twitter:title" content={new URL(slug, siteConfig.url).href} />

   <meta property="og:description" content={description} />
   <meta property="twitter:description" content={description} />
   
   <meta property="og:url" content={new URL(slug, siteConfig.url).href} />
   <meta property="twitter:url" content={new URL(slug, siteConfig.url).href} />
   
   <meta property="article:author" content={author} />
   <meta property="article:published_time" content={published} />
   <meta property="article:modified_time" content={updated} />
   
   <meta property="twitter:card" content={summary} />

   {#if cover}
      <meta property="og:image" content={cover} />
      <meta property="twitter:image" content={cover} />
      {:else}
      <meta property="og:image" content={siteConfig.cover} />
      <meta property="twitter:image" content={siteConfig.cover} />

      {@html `<script type="application/ld+json">${
         JSON.stringify({
           '@context': 'https://schema.org',
           '@type': 'BlogPosting',
           headline: title,
           image: cover ? [cover] : [siteConfig.cover],
           datePublished: published,
           dateModified: updated,
           author: [
             {
               '@type': 'Person',
               name: author,
             },
           ],
         }) + '<'
       }/script>`}
    {/if}
</svelte:head>