<script lang="ts">
   // Define current page slug
   import { currentPageMap } from "$lib/stores";
   $currentPageMap = [
      {locale: 'en', slug: 'open-sessions/lencioni-deepdive-level-2'},
      {locale: 'fr', slug: 'sessions-ouvertes/lencioni-deepdive-niveau-2'},
      {locale: 'nl', slug: 'open-sessies/lencioni-deepdive-level-2'}
   ];
   
   // Import components
   import 
      { 
         Main, Section, Text, Breadcrumbs, SEO, Reveal,
         H2, H3, H4, H5, Subheader,
         Hero, List, ListItem, Link,
         Accordeon, AccordeonItem, Subtitle, Modal, Button, SessionSubForm
      } from "$comp";

   import { 
      SessionDateCard, ModalLocation, ModalTrainerTom, 
      PricingCard, ModalTargetAudience, ModalApproach 
   } from "../components/open-sessies";
   
   // Import constants
   import { firstLetterCase, formatDateFull, formatUrl, titleCase } from "$utils";
   import { website } from "$lib/config/website";
   import { currentModal } from "$src/lib/stores";
   // Import i18n
   import LL, { locale } from "$i18n/i18n-svelte";
	import { getBaseEntity } from "$src/lib/utils/seo";
	

   // Import data
   export let data;
   let pageData = Object(data.sessionTypes);
   let sessionData = Object(data.sessionData);

   let sessionDates:any = [];
   sessionData.forEach((element:any) => {
      if (element.type === 'level_2') sessionDates.push(formatDateFull(element.starts_on))
   });
   
   // Set active store for modal
   $currentModal = 0;
   $: $currentModal;
   // Set 'active' variable for accordeon component
	let active:any = null;

   // SEO
   $: openGraph = {
      title: $LL.nav.open_sessions.items.deepdive.title(),
      description: $LL.nav.open_sessions.items.deepdive.description(),
		slug: $LL.nav.open_sessions.items.deepdive.slug(),
      tags: ['workshops', 'opleidingen', 'lencioni', 'deepdive', 'trixolutions', 'teamcoaching'],
   }
   $: schemaOrg = {
      entity: getBaseEntity('deepdive', ['open_sessions', 'items']),
      sessions: data.sessionData,
   }

</script>

<SEO {openGraph} {schemaOrg} />

<header>
   <Hero titleSmall imgSrc="home/working-genius.webp" imgAlt="No alt">
      <span slot="title">{titleCase($LL.sessions.level_2.title())}</span>
      <Subtitle>{titleCase($LL.sessions.level_2.level2())} - {titleCase($LL.sessions.level_2.advanced_coaching())}</Subtitle>
   </Hero>
</header>

<Main noMargin cta>
   <Breadcrumbs beforeIcon="mdi:account-school-outline" currentIcon="mdi:human-male-board"/>
   
   <Section name="hybride-lencioni-leertraject">

      <!-- Intro -->
      <Reveal>
         <Text>{@html $LL.sessions.level_2.intro()}</Text>
      </Reveal>
      <!-- Links -->
      <Reveal left>
         <List class="prose-li:bg-transparent">
            <ListItem>
               <Link 
                  linkStyle='underlineOnHover' ariaLabel={$LL.nav.explore.training_leadership_teamcoaching.items.ideal_teamplayer.title()}
                  href="/{$locale}/{$LL.nav.explore.training_leadership_teamcoaching.items.ideal_teamplayer.slug()}"
               >
                  {titleCase($LL.nav.explore.training_leadership_teamcoaching.items.ideal_teamplayer.title())}
               </Link>
            </ListItem>
            <ListItem>
               <Link 
                  linkStyle='underlineOnHover' ariaLabel={$LL.nav.explore.training_leadership_teamcoaching.items.working_genius.title()}
                  href="/{$locale}/{$LL.nav.explore.training_leadership_teamcoaching.items.working_genius.slug()}"
               >
                  {titleCase($LL.nav.explore.training_leadership_teamcoaching.items.working_genius.title())}
               </Link>
            </ListItem>
            <ListItem>
               <Link 
                  linkStyle='underlineOnHover' ariaLabel={$LL.nav.explore.training_leadership_teamcoaching.items.decisive_lead.title()}
                  href="/{$locale}/{$LL.nav.explore.training_leadership_teamcoaching.items.decisive_lead.slug()}"
               >
                  {titleCase($LL.nav.explore.training_leadership_teamcoaching.items.decisive_lead.title())}
               </Link>
            </ListItem>
            <ListItem>
               <Link 
                  linkStyle='underlineOnHover' ariaLabel={$LL.nav.explore.training_leadership_teamcoaching.items.meetings_deadly.title()}
                  href="/{$locale}/{$LL.nav.explore.training_leadership_teamcoaching.items.meetings_deadly.slug()}"
               >
                  {titleCase($LL.nav.explore.training_leadership_teamcoaching.items.meetings_deadly.title())}
               </Link>
            </ListItem>
         </List>
      </Reveal>
      <!-- Accordeon -->
      <Reveal bottom>
         <Accordeon bind:active>
            {#each Object.entries($LL.sessions.level_2.accordeon) as [key, item]}
               <AccordeonItem 
                  id={Number(key)+1} 
                  title={item.title()} titleSmaller
                  icon="{ item.title() === 'Lencioni - Deep Dive / Persoonlijk Niveau' ? 'mdi:account-outline' : 'mdi:account-group-outline'}">
                  {#each Object.entries(item.content) as [contentKey, content]}
                     <br/>
                     <H4 small>{content.title()}</H4>
                     <Text>{@html content.content()}</Text><br/>
                     <H5>{firstLetterCase($LL.sessions.workshop())}</H5>
                     <Text>{@html content.sub.content()}</Text>
                  {/each}
               </AccordeonItem>
            {/each}
         </Accordeon>
      </Reveal>
   </Section>

   <Section name="hybride-lencioni-leertraject-praktische-info">
      <div class="flex flex-row w-full gap-16 items-center justify-start" slot="title">
         <H2 small>
            <Reveal left>
               {titleCase($LL.sessions.practical())}:
            </Reveal>
         </H2>
         <Reveal right>
            <Subheader smaller italic>
               {titleCase($LL.sessions.level_2.advanced_coaching())}
            </Subheader>
            <H3 smaller thin>
               {titleCase($LL.sessions.level_2.title())} - {titleCase($LL.sessions.level_2.level2())}
            </H3>
         </Reveal>
      </div>
      
      <!-- TODO: Add reveal & check workings -->
      <div class="grid grid-cols-2 md:grid-cols-3 gap-4 xl:gap-8">
         {#each sessionData as session}
            {#if session.type == "level_2"}
               <SessionDateCard {session}/>
            {/if}
         {/each}
      </div>
      <hr class="border-2 border-primary/70"/>
      
      <Reveal>
         <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 md:gap-4 xl:gap-8">
            <!-- Trainer -->
            <ModalTrainerTom/>
            <!-- Location -->
            <ModalLocation/>
            <!-- Target Audience -->
            <ModalTargetAudience>
               <Text>{$LL.sessions.level_2.target_audience()}<br/></Text>
               <Link ariaLabel="{$LL.sessions.level_2.target_audience_extra()}" href="/{$locale}/open-sessies/hybride-lencioni-leertraject">
                  {$LL.sessions.level_2.target_audience_extra()}
               </Link>
            </ModalTargetAudience>
            <!-- Approach -->
            <ModalApproach>
               <Text>{$LL.sessions.level_2.approach()}</Text>
            </ModalApproach>
         </div>
      </Reveal>

      <div class="flex w-full">
         {#each pageData as session}
            {#if session.type === 'level_2'}
               <Reveal>
                  <PricingCard 
                     introHeight='h-40 xs:h-36 sm:h-28 md:h-18 2xl:h-16' 
                     price={session.price}>
                     <span slot="subtitle">{$LL.sessions.level_2.advanced_coaching()}</span>
                     <span slot="title">
                        {$LL.sessions.level_2.title()} <br class="md:hidden"/>
                        <span class="hidden md:inline">&#45; </span>{$LL.sessions.level_2.level2()}
                     </span>
               
                     <Text slot="intro">
                        {@html $LL.sessions.level_2.features_intro()}
                     </Text>
                     
                     <span slot="sub">{$LL.sessions.vat_not_included()}</span>
                     <List slot="features" class="w-4/5">
                        {#each Object.entries($LL.sessions.level_2.features) as [key, feature]}
                           <ListItem icon="check" class="even:bg-gray-200/40" small>{feature()}</ListItem>
                        {/each}
                     </List>
               
                     <Modal width="min-w-fit w-3/4 max-w-[80%] xl:max-w-[40%]" slot="btn" trigger id={99}>
                        <Button slot="trigger"
                           ariaLabel="{titleCase($LL.sessions.subscribe_to())} {titleCase($LL.sessions.info.single())}"
                           size="px-4 lg:px-6 h-16 lg:px-10 lg:h-15 rounded-xl text-lg xl:text-xl xl:gap-6 2xl:gap-8" 
                           block 
                           class="flex flex-row w-full lg:w-4/5 mx-auto" 
                           icon="mdi:pen-plus"
                           iconClass="h-5 w-5 mr-2 text-gray-50 group-hover:text-white">
                           <div class="flex flex-col">
                              <span class="font-normal text-sm md:text-base xl:text-lg">{$LL.sessions.subscribe_to()} {$LL.sessions.level_2.deepdive()}</span>
                              <span>{$LL.sessions.level_2.advanced_coaching()}</span>
                           </div>
                        </Button>
                     </Modal>
                  </PricingCard>
               </Reveal>
            {/if}
         {/each}
      </div>
   </Section>

   <Modal content id={99}>
      <H3 slot="title" small>{titleCase($LL.sessions.subscribe_to())} {titleCase($LL.sessions.level_2.deepdive())}!</H3>   
      <Subtitle small italic>{firstLetterCase($LL.sessions.sign_up_to())} {$LL.base.word.an()} <strong>{$LL.sessions.level_2.advanced_coaching()}<br/>({$LL.sessions.level_2.title()} - {$LL.sessions.level_2.level2()})</strong></Subtitle>
      <SessionSubForm 
         sessions={sessionDates}
         submitText={titleCase($LL.sessions.level_2.subscribe())}
         sessionTitle="{titleCase($LL.sessions.level_2.title())}"
      />
   </Modal>
</Main>