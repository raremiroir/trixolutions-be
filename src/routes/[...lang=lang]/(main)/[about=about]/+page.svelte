<script lang="ts">
   // Define current page slug
   import { currentPageMap } from "$lib/stores";
   $currentPageMap = [
      {locale: 'en', slug: 'about-us'},
      {locale: 'fr', slug: 'a-propos'},
      {locale: 'nl', slug: 'over-ons'}
   ];
   
   // Import Components
   import { Main, Section, Title, Text, Image, Alert, ErrorLoading, SEO, Breadcrumbs, H1, H2, Subtitle, Reveal } from "$comp";
	import MemberCard from "./MemberCard.svelte";

   // Import constants & website config
   import { breakpoints } from "$lib/constants/breakpoints";
   import { website } from "$lib/config/website";
   // Import supabase
	import supabase from "$lib/db";
   // Import i18n
   import LL, { locale } from "$i18n/i18n-svelte";
   // Import Utils
	import { firstLetterCase, titleCase } from "$utils";


   // Load data
   const getData = async () => {
      const {data, error} = await supabase
         .from('team_members')
         .select(`*, img(name, folder, type)`)
         .order('order', { ascending: true });
      if (error) throw new Error(error.message);
      return data;
   }
      
   let innerWidth:number;
   $: innerWidth;
   // Change image ratio according to breakpoint
   let ratio = '3:1'
   $: if (innerWidth < breakpoints.xs) { ratio = "3:2"; } 
   else if (innerWidth < breakpoints.sm) { ratio = "5:3"; } 
   else if (innerWidth < breakpoints.md) { ratio = "16:9"; } 
   else if (innerWidth < breakpoints.lg) { ratio = "2:3"; } 
   else if (innerWidth < breakpoints.xl) { ratio = "5:6"; } 
   else if (innerWidth < breakpoints.xxl) { ratio = "1"; } 
   else { ratio = "5:4"; }

   // SEO
   $: pageSlug = `/${$locale}/${$LL.nav.about.slug()}`
   $: pageTitle = $LL.nav.about.title()
   $: pageDesc = $LL.nav.about.description()

   let { author, siteUrl } = website;
	$: breadcrumbs = [{ name: pageTitle, slug: pageSlug }];
	
   $: entityMeta = {
		url: `${siteUrl}${pageSlug}`,
		faviconWidth: 512, faviconHeight: 512,
		caption: author,
	};

</script>

<svelte:window bind:innerWidth={innerWidth} />

<SEO 
	slug="{pageSlug}"
	datePublished = '2023-01-11T12:31:00.000+0100'
	lastUpdated = '2023-01-11T12:31:00.000+0100'
	title="{pageTitle}"
	metadescription="{pageDesc}"
	{breadcrumbs} {entityMeta}
/>

<Main cta>
   <Breadcrumbs currentIcon="mdi:information-outline"/>
   
   <Section name="about-us">
      <H1 slot="title">{$LL.pages.about.title()}</H1>
      <div class="grid grid-cols-2 xl:grid-cols-5 gap-6 md:gap-12">
         <Reveal class="col-span-5 md:col-span-1 xl:col-span-2" left lazy>
            <div class="h-fit rounded-xl shadow-md overflow-hidden">
               <Image
                  class="rounded-xl shadow-md"
                  src="team/tom-color.webp" 
                  alt="Over Trixolutions"
                  anchor=""
                  ratio={ratio}
               />
            </div>
         </Reveal>
         <Reveal class="col-span-5 md:col-span-1 xl:col-span-3" right>
            <Text class="h-fit">
               {@html $LL.pages.about.intro()}
            </Text>
         </Reveal>
      </div>
   </Section>

   <Section name="our-team">
      <Reveal>
         <H2>{$LL.pages.about.team.title()}</H2>
      </Reveal>

      <ul class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
         {#await getData()}
            <Alert>{firstLetterCase($LL.base.db.loading())}</Alert>
         {:then data} 
            {#each data as member}
               <Reveal>
                  <MemberCard
                     src="{member.img.folder}/{member.img.name}.{member.img.type}" 
                     alt="{member.first_name} {member.last_name} - {$locale === 'fr' ? member.job.fr : $locale === 'en' ? member.job.en : member.job.nl}"
                     name="{member.first_name} {member.last_name}"
                     position={member.unique_name === 'christoph' || member.unique_name === 'frederik' ? 'top' : 'center'}>
                     <Subtitle smaller italic>{$locale === 'fr' ? member.job.fr : $locale === 'en' ? member.job.en : member.job.nl}</Subtitle>
                  </MemberCard>
               </Reveal>
            {/each}
         {:catch error}
            <ErrorLoading {error}/>
         {/await}
   </Section>
</Main>