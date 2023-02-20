<script lang="ts">
   // Define current page slug
   import { currentPageMap } from "$lib/stores";
   $currentPageMap = [
      {locale: 'en', slug: 'blog'},
      {locale: 'fr', slug: 'blog'},
      {locale: 'nl', slug: 'blog'}
   ];

   // Import components
   import { 
      Navbar, Main, Section, Button,
      Breadcrumbs, SEO, PostScroll, H1, Alert
   } from "$comp";

   // Import website config
   import { website } from "$lib/config/website";
   // Import utils
   import { titleCase } from "$lib/utils";
   // Import i18n
   import LL, { locale } from "$i18n/i18n-svelte";

   //   Import data
	import type { PageData } from "./$types";
   export let data:PageData;
   const posts = data.posts;

   // SEO
   $: pageSlug = `/${$locale}/${$LL.nav.blog.slug()}`
   $: pageTitle = $LL.nav.blog.title()
   $: pageDesc = $LL.nav.blog.description()

   let { author, siteUrl } = website;
	$: breadcrumbs = [{ name: pageTitle, slug: pageSlug }];
	
   $: entityMeta = {
		url: `${siteUrl}${pageSlug}`,
		faviconWidth: 512, faviconHeight: 512,
		caption: author,
	};
</script>


<SEO 
	slug="{pageSlug}"
	datePublished = '2023-01-11T12:31:00.000+0100'
	lastUpdated = '2023-01-11T12:31:00.000+0100'
	title="{pageTitle}"
	metadescription="{pageDesc}"
	{breadcrumbs} {entityMeta}
/>

<header>
   <Navbar/>
</header>

<Main cta>
   <Breadcrumbs currentIcon="mdi:newspaper-variant-outline"/>
   <Section name="blog">
      <H1 slot="title">Trixolutions {titleCase($LL.pages.blog.title())}</H1>
         <PostScroll pageData={posts} blog />
   </Section>

   {#if $locale === 'en' || $locale === 'fr'}
      <Alert color="error-glass" class="fixed z-50 inset-x-5 bottom-1/2 translate-y-1/2 h-1/4">
         <div class="text-center mx-auto">
            {$LL.base.error.blog_unavailable()}
         </div>
         <hr class="border border-error my-2"/>
         <div class="flex flex-row gap-2">
            <Button
               size="md"
               ariaLabel="{$LL.base.btn.proceed_in()} {$LL.base.geo.lang.dutch()}"
               href="/nl/blog"
               color="error">
               {$LL.base.btn.proceed_in()} {$LL.base.geo.lang.dutch()}
            </Button>
            <Button
               size="md"
               ariaLabel={$LL.base.btn.back_to_home()}
               href="/{$locale}"
               color="secondary" outlined>
               {$LL.base.btn.back_to_home()}
            </Button>
         </div>
      </Alert>
   {/if}
</Main>