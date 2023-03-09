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

   // Import i18n
   import LL, { locale } from "$i18n/i18n-svelte";
	import { getBaseEntity } from "$lib/utils/seo";

   // Import data
	import type { PageData } from "./$types";
   export let data:PageData;
   const categoryData = data.categories;
   const pagesData = data.pages;


   // SEO
   // !TODO: ADD ARTICLES
   $: openGraph = {
      title: $LL.nav.home.title(),
      description: $LL.nav.home.description(),
		slug: '',
      tags: ['home', 'homepage', 'trixolutions', 'home page', 'teamcoaching'],
   }
   $: schemaOrg = {
      entity: getBaseEntity('home', [], 0),
      sessions: [],

      articles: [],
   }


   const cardProps = {
      height: 'h-96 sm:h-78 md:h-96 lg:h-140 xl:h-132 2xl:h-132 3xl:h-140'
   }
</script>

<!-- SEO -->
<SEO {openGraph} {schemaOrg} />

<!-- Header -->
<header itemprop="WPHeader">
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