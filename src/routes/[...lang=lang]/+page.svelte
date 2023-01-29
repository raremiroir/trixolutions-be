<script lang="ts">
   // Define current page slug
   import { currentPageMap } from "$lib/stores";
   $currentPageMap = [
      {locale: 'en', slug: ''},
      {locale: 'fr', slug: ''},
      {locale: 'nl', slug: ''}
   ];

   // Import Components
   import { 
      Main, SEO, Section, Footer, Navbar, 
      Reveal, PostCard, PostGrid, H2
   } from "$comp";
	import HomeHeroSlides from './HomeHeroSlides.svelte';
   
   // Import globals
   import { formatUrl, titleCase } from "$utils/formatText";
   import { website } from '$lib/config/website';

   // Import i18n
   import LL, { locale } from "$i18n/i18n-svelte";

   // Import data
	import type { PageData } from "./$types";
   export let data:PageData;
   const categoryData = data.categories;
   const pagesData = data.pages;


   // SEO
   $: pageSlug = `/${$locale}/${$LL.nav.home.slug()}`
   $: pageTitle = $LL.nav.home.title()
   $: pageDesc = $LL.nav.home.description()

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
   <HomeHeroSlides />
</header>

<Main noMargin cta>
   {#each categoryData as section}
      <Section name={$LL.nav.explore[section.name].slug()}>
         <div slot="title">
            <Reveal>
               <H2>
                  {$LL.nav.explore[section.name].title()}
               </H2>
            </Reveal>
         </div>
         <PostGrid>
            {#each pagesData as item}
               {#if item.category.name === section.name}
                  <Reveal>
                     <PostCard
                        title={$LL.nav.explore[section.name].items[item.name].title()}
                        imgSrc={`${item.hero_img.folder}/${item.hero_img.name}.${item.hero_img.type}`}
                        slug={$LL.nav.explore[section.name].items[item.name].slug()}
                        excerpt={$LL.nav.explore[section.name].items[item.name].description()}
                     />
                  </Reveal>
               {/if}
            {/each}
         </PostGrid>
      </Section>
   {/each}
</Main>

<Footer/>