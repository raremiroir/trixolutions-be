<script lang="ts">
   // Import i18n
   import { locales } from "$i18n/i18n-util";
   import type { Locales } from "$i18n/i18n-types";
   import LL, { locale } from "$i18n/i18n-svelte";
   
   const pageName = 'blog';
   
   // Define current page slug
   import { currentPageMap } from "$lib/stores";
   locales.forEach((locale:Locales, key) => {
      $currentPageMap[key] = {
         locale: locale,
         slug: pageName
      }
   })

   // Import components
   import { 
      Navbar, Main, Section, Button,
      Breadcrumbs, SEO, PostScroll, H1, Alert
   } from "$comp";

   // Import website config
   import { website } from "$lib/config/website";
   // Import utils
   import { titleCase } from "$lib/utils";

   //   Import data
	import type { PageData } from "./$types";
	import { getBaseEntity } from "$src/lib/utils/seo";
   export let data:PageData;
   const posts = data.posts;

   // SEO
   // !TODO: ADD MORE INFO + BLOG + POSTS
   $: openGraph = {
      title: $LL.nav.blog.title(),
      description: $LL.nav.blog.description(),
		slug: $LL.nav.blog.slug(),
      tags: ['blog', 'trixolutions', 'teamcoaching'],
   }
   $: schemaOrg = {
      entity: getBaseEntity('blog'),
      sessions: [],
   }
</script>


<SEO {openGraph} {schemaOrg} />

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