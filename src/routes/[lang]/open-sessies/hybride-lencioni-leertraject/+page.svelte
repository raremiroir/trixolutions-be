<script lang="ts">

   // Import components
   import { 
      Main, Section, Breadcrumbs, SEO,
      H2, H3, H4, Subheader, 
      Text,  List, ListItem, Button,
      Hero, Modal, Accordeon, AccordeonItem, 
      NavSlider, FeatureSlide, FeaturesModalContent, ThumbnailSlide 
   } from "$comp";
   import { 
      PartnershipAccordeon, WorkshopCard, 
      SessionDateCard, ModalLocation, ModalTrainerTom
   } from "../open-sessies";
	import { SplideTrack } from "@splidejs/svelte-splide";
   
   // TODO: Replace these
	import ModalProgramPlacehold from "../components/ModalProgramPlacehold.svelte";

   // Import i18n
   import LL, { locale } from "$i18n/i18n-svelte";
   // Import globals
   import { website } from "$lib/config/website";
   import { titleCase, formatUrl } from "$utils";
   import { currentModal } from "$src/lib/stores";
	import ModalRatings from "../components/ModalRatings.svelte";
	import ModalTargetAudience from "../components/ModalTargetAudience.svelte";
	import ModalApproach from "../components/ModalApproach.svelte";
	import HybridTrackFeaturesSlider from "./HybridTrackFeaturesSlider.svelte";
   $: $currentModal;

   // Import data
   export let data;
   let pageData = Object(data.sessionTypes);
   let sessionData = Object(data.sessionData);
   let ratingData = Object(data.ratingData);


   // Set 'active' variable for accordeon component
	let active:any = null;

// SEO
let pageSlug = formatUrl($LL.sessions.level_1.title_short());
   let { author, siteUrl } = website;
	let breadcrumbs = [
      { name: titleCase($LL.sessions.level_1.title()), slug: `/${$locale}/${pageSlug}/` }
   ];
	
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
	title="{titleCase($LL.sessions.level_1.title())}"
	metadescription="{titleCase($LL.sessions.level_1.title_alt())} - {titleCase($LL.sessions.level_1.two_day())}"
	
	{breadcrumbs} {entityMeta}

/>

<header>
   <Hero titleSmall imgSrc="home/working-genius.webp" imgAlt="No alt">
      <span slot="title">{titleCase($LL.sessions.level_1.title())}</span>   
   </Hero>
</header>

<Main noMargin cta>
   <Breadcrumbs beforeIcon="mdi:account-school-outline" currentIcon="mdi:human-male-board"/>
   
   <!-- Intro -->
   <Section name="hybride-lencioni-leertraject" >
      <Text>
         {@html $LL.sessions.level_1.intro.content()}
      </Text>

      <PartnershipAccordeon />

      <!-- Workshop Cards -->
      <div class="grid grid-cols-2 gap-4">
         {#each pageData as session}
            <WorkshopCard {session} class="col-span-1" />
         {/each}
      </div>
   </Section>

   <!-- Practical Info -->
   <Section name="hybride-lencioni-leertraject-praktische-info">
      <!-- Title -->
      <div class="flex flex-row w-full gap-16 items-center justify-start" slot="title">
         <H2 small>
            {titleCase($LL.sessions.practical())}:
         </H2>
         <div class="">
            <Subheader smaller italic>
               {titleCase($LL.sessions.level_1.title_alt())}
            </Subheader>
            <H3 smaller thin>
               {titleCase(`${$LL.sessions.level_1.full.title()} ${$LL.sessions.level_1.two_day()}`)}
            </H3>
         </div>
      </div>
      <!-- Dates -->
      <div class="grid grid-cols-2 md:grid-cols-3 gap-4 xl:gap-8">
         {#each sessionData as session}
            {#if session.type == "level_1_full"}
               <SessionDateCard {session} />
            {/if}
         {/each}
      </div>
      <hr class="border-2 border-primary/70"/>
      
      <!-- Modals -->
      <div class="grid grid-cols-2 md:grid-cols-3 gap-4 xl:gap-8">
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
         <ModalRatings {ratingData}/>
      </div>
   </Section>

   <!-- Features -->
   <Section name="hybride-lencioni-leertraject-features">
      <H2 slot="title" small>
         {$LL.sessions.level_1.features_title()}
      </H2>

      <!-- Features Slider -->
      <HybridTrackFeaturesSlider />

      <!-- Expand Trajectory Accordeon -->
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
   </Section>
</Main>