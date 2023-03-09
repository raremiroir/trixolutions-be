<script lang="ts">
   // Define current page slug
   import { currentPageMap } from "$lib/stores";
   $currentPageMap = [
      {locale: 'en', slug: 'about-us'},
      {locale: 'fr', slug: 'a-propos'},
      {locale: 'nl', slug: 'over-ons'}
   ];
   
   // Import Components
   import { 
      Main, Section, Text, Image, Alert, ErrorLoading, 
      SEO, Breadcrumbs, H1, H2, Subtitle, Reveal } from "$comp";
	import MemberCard from "./MemberCard.svelte";

   // Import website config
   import { website } from "$lib/config/website";
   // Import i18n
   import LL, { locale } from "$i18n/i18n-svelte";
	import { getBaseEntity } from "$lib/utils/seo";
   // Import Utils
	import { firstLetterCase, dbSelectOrder } from "$utils";

   // SEO
   // !TODO: ADD OG:PERSON
   $: openGraph = {
      title: $LL.nav.about.title(),
      description: $LL.nav.about.description(),
		slug: $LL.nav.about.slug(),
      tags: ['about', 'a propos', 'over', 'trixolutions'],
   }
   $: schemaOrg = {
      entity: getBaseEntity('about'),
      sessions: [],
      images: [
         {
            url: `${website.domain}/images/team/tom-bw.webp`,
            width: 1920, height: 1280,
            alt: { nl: `Tom van Dorst - CEO / Trainer`, en: `Tom van Dorst - CEO / Trainer`, fr: `Tom van Dorst - PDG / Formateur` },
         },
         {
            url: `${website.domain}/images/team/frederik-bw.webp`,
            width: 1920, height: 2200,
            alt: { nl: `Frederik Vanderveken - Senior Trainer`, en: `Frederik Vanderveken - Senior Trainer`, fr: `Frederik Vanderveken - Formateur Senior` },
         },
         {
            url: `${website.domain}/images/team/roger-bw.webp`,
            width: 1439, height: 1217,
            alt: { nl: `Roger Baum - Trainer / Acteur`, en: `Roger Baum - Trainer / Actor`, fr: `Roger Baum - Formateur / Acteur` },
         },
         {
            url: `${website.domain}/images/team/tamara-bw.webp`,
            width: 1920, height: 1920,
            alt: { nl: `Tamara D'Haese - Office Manager`, en: `Tamara D'Haese - Office Manager`, fr: `Tamara D'Haese - Chef de Bureau` },
         },
         {
            url: `${website.domain}/images/team/kelly-bw.webp`,
            width: 1920, height: 1280,
            alt: { nl: `Kelly  - Trainer / Facilitator`, en: `Kelly  - Trainer / Facilitator`, fr: `Kelly  - Formateur / Facilitatrice` },
         },
         {
            url: `${website.domain}/images/team/christoph-bw.webp`,
            width: 1920, height: 2000,
            alt: { nl: `Christoph Meunier - Trainer / Facilitator`, en: `Christoph Meunier - Trainer / Facilitator`, fr: `Christoph Meunier - Formateur / Facilitateur` },
         }
      ],
   }

</script>

<!-- SEO -->
<SEO {openGraph} {schemaOrg} />

<Main cta>
   <Breadcrumbs currentIcon="mdi:information-outline"/>
   
   <Section name="about-us">
      <H1 slot="title">{$LL.pages.about.title()}</H1>
      <div class="grid grid-cols-2 xl:grid-cols-5 gap-6 md:gap-12">
         <Reveal class="col-span-5 lg:col-span-1 xl:col-span-2" left lazy>
            <div class="h-fit rounded-xl shadow-md overflow-hidden">
               <Image
                  class="rounded-xl shadow-md w-full h-auto sm:max-h-80"
                  src="team/tom-color.webp" 
                  alt="Over Trixolutions"
               />
            </div>
         </Reveal>
         <Reveal class="col-span-5 lg:col-span-1 xl:col-span-3" right>
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

      <ul class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6 xl:gap-8">
         {#await dbSelectOrder('team_members', '*, img(name, folder, type)', 'order', true)}
            <Alert>{firstLetterCase($LL.base.db.loading())}</Alert>
         {:then data} 
            {#each data as member}
               <Reveal>
                  <MemberCard
                     src="{member.img.folder}/{member.img.name}.{member.img.type}" 
                     alt="{member.first_name} {member.last_name} - {$locale === 'fr' ? member.job.fr : $locale === 'en' ? member.job.en : member.job.nl}"
                     name="{member.first_name} {member.last_name}"
                     position={member.unique_name === 'christoph' || member.unique_name === 'frederik' ? 'bottom-0' : 'bottom-2 top-0'}>
                     <Subtitle smaller italic>{$locale === 'fr' ? member.job.fr : $locale === 'en' ? member.job.en : member.job.nl}</Subtitle>
                  </MemberCard>
               </Reveal>
            {/each}
         {:catch error}
            <ErrorLoading {error}/>
         {/await}
   </Section>
</Main>