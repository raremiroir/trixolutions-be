<script lang="ts">
   // Import supabase
   import supabase from "$src/lib/db";
   // Import i18n
   import LL, { locale } from "$i18n/i18n-svelte";

   // Import utils
   import { titleCase } from "$lib/utils";
   // Import website config
   import { website } from "$lib/config/website";
   
   // Import components
   import { 
      Navbar, Main, Section, 
      Breadcrumbs, SEO, PostScroll, H1
   } from "$comp";

   // Define current page slug
   import { currentPageMap } from "$lib/stores";
   $currentPageMap = [
      {locale: 'en', slug: 'blog'},
      {locale: 'fr', slug: 'blog'},
      {locale: 'nl', slug: 'blog'}
   ];
   
   //   Import data
	import type { PageData } from "./$types";
   export let data:PageData;
   const blogData = data.blogData;

   
   // SEO
	let pageSlug = `blog`
   let { author, siteUrl } = website;
	let breadcrumbs = [{ name: titleCase($LL.pages.blog.title()), slug: `/${$locale}/${pageSlug}/` }];
	
   let entityMeta = {
		url: `${siteUrl}/${$locale}/${pageSlug}`,
		faviconWidth: 512, faviconHeight: 512,
		caption: author,
	};

</script>


<SEO 
	slug="{$locale}/{pageSlug}"
	datePublished = '2023-01-11T12:31:00.000+0100'
	lastUpdated = '2023-01-11T12:31:00.000+0100'
	title="{titleCase($LL.pages.blog.title())}"
	metadescription="Trixolutions {titleCase($LL.pages.blog.title())}"
	{breadcrumbs} {entityMeta}
/>

<header>
   <Navbar/>
</header>

<Main cta>
   <Breadcrumbs currentIcon="mdi:newspaper-variant-outline"/>
   <Section name="blog">
      <H1 slot="title">Trixolutions {titleCase($LL.pages.blog.title())}</H1>
         <PostScroll pageData={blogData} blog />
   </Section>
</Main>