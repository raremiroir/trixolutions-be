<script lang="ts">
   // Define current page slug
   import { currentPageMap } from "$lib/stores";
   $currentPageMap = [
      {locale: 'en', slug: 'open-sessions/hybrid-lencioni-learning-track'},
      {locale: 'fr', slug: 'sessions-ouvertes/traject-hybride-lencioni'},
      {locale: 'nl', slug: 'open-sessies/hybride-lencioni-leertraject'}
   ];

   // Import components
   import { 
      Main, Section, Breadcrumbs, SEO,
      H2, H3, H4, Subheader, 
      Text,  List, ListItem, 
      Hero, Accordeon, AccordeonItem, Reveal, 
   } from "$comp";
   import { 
      PartnershipAccordeon, WorkshopCard, 
      SessionDateCard, ModalLocation, ModalTrainerTom,
      ModalRatings, ModalTargetAudience, ModalApproach,
      HybridTrackFeaturesSlider, ModalProgramPlacehold
   } from "../components/open-sessies";

   // Import i18n
   import LL, { locale } from "$i18n/i18n-svelte";
   // Import globals
   import { titleCase } from "$utils";
   import { currentModal } from "$src/lib/stores";
	import { getBaseEntity } from "$src/lib/utils/seo";
   
   // Set active store for current modal
   $currentModal = 0;
   $: $currentModal;

   // Import data
   export let data;
   let pageData = Object(data.sessionTypes);
   let sessionData = Object(data.sessionData);
   let ratingData = Object(data.ratingData);
   let ratingImages = Object(data.ratingImgData);

   let sessionDates:any = [];
   sessionData.forEach((item:any) => {
      if(item.type === 'level_1_full') sessionDates.push(new Date(item.starts_on).toLocaleDateString('nl-BE', { dateStyle: 'short' }));
   });


   // Set 'active' variable for accordeon component
	let active:any = null;

   // SEO
   $: openGraph = {
      title: $LL.nav.open_sessions.items.hybrid_traject.title(),
      description: $LL.nav.open_sessions.items.hybrid_traject.description(),
		slug: $LL.nav.open_sessions.items.hybrid_traject.slug(),
      tags: ['workshops', 'leertraject', 'learning track', 'opleidingen', 'lencioni', 'deepdive', 'trixolutions', 'teamcoaching'],
   }
   $: schemaOrg = {
      entity: getBaseEntity('hybrid_traject', ['open_sessions', 'items']),
      sessions: data.sessionData,
   }

</script>

<SEO {openGraph} {schemaOrg} />

<header>
   <Hero titleSmall imgSrc="home/working-genius.webp" imgAlt="No alt">
      <span slot="title">{titleCase($LL.sessions.level_1.title())}</span>   
   </Hero>
</header>

<Main noMargin cta>
   <Breadcrumbs beforeIcon="mdi:account-school-outline" currentIcon="mdi:human-male-board"/>
   
   <!-- Intro -->
   <Section name="hybride-lencioni-leertraject" >
      <Reveal>
         <Text>
            {@html $LL.sessions.level_1.intro.content()}
         </Text>
      </Reveal>

      <Reveal>
         <PartnershipAccordeon />
      </Reveal>

      <!-- Workshop Cards -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-2 lg:gap-4">
         {#each pageData as session}
            {#if session.type !== 'level_2' && session.type!== 'info_session'}
               <WorkshopCard {session} {sessionDates} class="col-span-1" />
            {/if}
         {/each}
      </div>
   </Section>

   <!-- Practical Info -->
   <Section name="hybride-lencioni-leertraject-praktische-info">
      <!-- Title -->
      <div class="flex flex-row w-full gap-16 items-center justify-start" slot="title">
         <Reveal left>
            <H2 small>
               {titleCase($LL.sessions.practical())}:
            </H2>
         </Reveal>
         <Reveal right>
            <Subheader smaller italic>
               {titleCase($LL.sessions.level_1.title_alt())}
            </Subheader>
            <H3 smaller thin>
               {titleCase(`${$LL.sessions.level_1.full.title()} ${$LL.sessions.level_1.two_day()}`)}
            </H3>
         </Reveal>
      </div>
      <!-- Dates -->
      <Reveal>
         <div class="
               w-full grid 
               grid-cols-1 sm:grid-cols-2 md:grid-cols-3 
               gap-2 md:gap-4 xl:gap-8">
            {#each sessionData as session}
               {#if session.type == "level_1_full"}
                  <SessionDateCard {session} />
               {/if}
            {/each}
         </div>
      </Reveal>
      <Reveal lazy>
         <hr class="border-2 border-primary/70"/>
      </Reveal>
      
      <!-- Modals -->
      <Reveal bottom>
         <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 xl:gap-8">
            <!-- Trainer -->
            <ModalTrainerTom/>
            <!-- Location -->
            <ModalLocation/>
            <!-- Program -->
            <ModalProgramPlacehold/>
            <!-- Target Audience -->
            <ModalTargetAudience>
               <Text>{$LL.sessions.level_1.audience()}</Text>
            </ModalTargetAudience>
            <!-- Approach -->
            <ModalApproach>
               <Text italic>{$LL.sessions.level_1.approach.intro()}</Text><br/>
               <List>
                  <H4 small>{titleCase($LL.sessions.level_1.approach.results.title())}</H4>
                  {#each Object.entries($LL.sessions.level_1.approach.results.items) as [key, item]}
                     <ListItem>{item()}</ListItem>
                  {/each}
               </List>
            </ModalApproach>
            <!-- Ratings -->
            <ModalRatings {ratingData} {ratingImages}/>
         </div>
      </Reveal>
   </Section>

   <!-- Features -->
   <Section name="hybride-lencioni-leertraject-features">
      <Reveal slot='title'>
         <H2 small>
            {$LL.sessions.level_1.features_title()}
         </H2>
      </Reveal>

      <!-- Features Slider -->
      <Reveal>
         <HybridTrackFeaturesSlider />
      </Reveal>

      <!-- Expand Trajectory Accordeon -->
      <Reveal slow>
         <Accordeon bind:active>
            <AccordeonItem 
               id={1} 
               title={$LL.sessions.level_1.expand.title()} titleSmaller
               icon="majesticons:arrows-expand-full">
               <Text>
                  {@html $LL.sessions.level_1.expand.text()}
               </Text>
            </AccordeonItem>
         </Accordeon>
      </Reveal>
   </Section>
</Main>