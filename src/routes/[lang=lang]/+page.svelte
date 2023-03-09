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
      Main, SEONew, Section, Footer, Navbar, 
      Reveal, PostCard, PostGrid, H2
   } from "$comp";
	import HomeHeroSlides from './HomeHeroSlides.svelte';
   
   // Import globals
   import { formatUrl, titleCase } from "$utils";
   import { website } from '$lib/config/website';

   // Import i18n
   import { i18nObject, i18n } from "typesafe-i18n";
   import LL, { locale } from "$i18n/i18n-svelte";
   import { loadedLocales } from "$i18n/i18n-util";
   import nl_nav from "$i18n/nl/nav";
   import fr_nav from "$i18n/fr/nav";
   import en_nav from "$i18n/en/nav";

   const _NL = i18nObject('en', nl_nav);
   const _FR = i18nObject('en', fr_nav);
   const _EN = i18nObject('en', en_nav);

   // Import data
	import type { PageData } from "./$types";
	import { get } from "svelte/store";
   export let data:PageData;
   const categoryData = data.categories;
   const pagesData = data.pages;


   // SEO
   $: pageSlug = `/${$locale}/${$LL.nav.home.slug()}`
   $: pageTitle = $LL.nav.home.title()
   $: pageDesc = $LL.nav.home.description()

   // console.log(nl_nav)

   const openGraph = {
      title: pageTitle,
      description: pageDesc,
      tags: ['home', 'homepage', 'trixolutions', 'home page', 'teamcoaching'],
   }
   const schemaOrg = {
      entity: {
         name: {
            nl: `Trixolutions - ${_NL.home.title}`,
            en: `Trixolutions - ${_EN.home.title}`,
            fr: `Trixolutions - ${_FR.home.title}`,
         },
         description: {
            nl: `${_NL.home.description}`,
            en: `${_EN.home.description}`,
            fr: `${_FR.home.description}`,
         },
         slug: {
            nl: `/nl/${_NL.home.slug}`,
            en: `/en/${_EN.home.slug}`,
            fr: `/fr/${_FR.home.slug}`,
         },
         breadcrumb: [],
      },
      sessions: [],

      articles: [],
   }


   const cardProps = {
      height: 'h-96 sm:h-78 md:h-96 lg:h-140 xl:h-132 2xl:h-132 3xl:h-140'
   }
</script>

<!-- SEO -->
<SEONew 
   createdOn='2022-10-01'
   updatedOn='2023-03-10'
   {openGraph} {schemaOrg} 
/>

<!-- Header -->
<header>
   <Navbar/>
   <HomeHeroSlides />
</header>

<!-- Main -->
<Main noMargin cta>
   <!-- Loop through each home page category from db -->
   {#each categoryData as section, key}
      <!-- Section -->
      <Section name={$LL.nav.explore[section.name].slug()}>
         <div slot="title">
            <!-- Reveal Title -->
            <Reveal>
               <H2>
                  {$LL.nav.explore[section.name].title()}
               </H2>
            </Reveal>
         </div>
         <!-- Reveal Posts -->
         <PostGrid>
            <!-- Show the first item in the first grid -->
            {#if key === 0}
               <Reveal>
                  <PostCard
                     {...cardProps}
                     title={$LL.nav.open_sessions.items.hybrid_traject.title()}
                     imgSrc='home/lencioni-ctc.webp'
                     slug={$LL.nav.open_sessions.items.hybrid_traject.slug()}
                     excerpt={$LL.nav.open_sessions.items.hybrid_traject.description()}
                     imgFit='object-cover'
                  />
               </Reveal>
            {/if}

            <!-- Loop through each page features on home page -->
            {#each pagesData as item}
            <!-- If the page section name equals the current section name, show the item -->
               {#if item.category.name === section.name}
                  <Reveal>
                     <PostCard
                        {...cardProps}
                        title={$LL.nav.explore[section.name].items[item.name].title()}
                        imgSrc={`${item.hero_img.folder}/${item.hero_img.name}.${item.hero_img.type}`}
                        slug={$LL.nav.explore[section.name].items[item.name].slug()}
                        excerpt={$LL.nav.explore[section.name].items[item.name].description()}
                        imgFit={item.name === 'dysfunctions_teamwork' ? 'object-contain' : 'object-cover'}
                     />
                  </Reveal>
               {/if}
            {/each}
         </PostGrid>
      </Section>
   {/each}
</Main>

<Footer/>