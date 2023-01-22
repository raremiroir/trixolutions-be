<script lang="ts">
   // Import Components
   import { 
      Main, SEO, Section, Footer, Navbar, 
      Loading, Reveal, 
      PostCard, PostGrid, ErrorLoading, H2
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
let pageSlug = `home`
   let { author, siteUrl } = website;
	let breadcrumbs = [{ name: titleCase($LL.pages.references.title()), slug: `/${$locale}/${pageSlug}/` }];
	
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
	title="{titleCase($LL.pages.references.title())}"
	metadescription="Trixolutions {titleCase($LL.pages.references.title())}"
	{breadcrumbs} {entityMeta}
/>

<header>
   <Navbar/>
   <HomeHeroSlides />
</header>

<Main noMargin cta>
   {#each categoryData as section}
      <Section name={formatUrl(section.name.nl)}>
         <div slot="title">
            <Reveal>
               <H2>
                  {section.name.nl}
               </H2>
            </Reveal>
         </div>
         <PostGrid>
            {#each pagesData as item}
               {#if item.category.name.nl === section.name.nl}
                  <Reveal>
                     {@const slug = item.slug ? item.slug : `${formatUrl(section.slug.nl)}/${formatUrl(item.title.nl)}`}
                     <PostCard
                        title={item.title.nl}
                        imgSrc={`${item.hero_img.folder}/${item.hero_img.name}.${item.hero_img.type}`}
                        slug={slug}
                        excerpt={item.excerpt.nl}
                     />
                  </Reveal>
               {/if}
            {/each}
         </PostGrid>
      </Section>
   {/each}
</Main>

<Footer/>