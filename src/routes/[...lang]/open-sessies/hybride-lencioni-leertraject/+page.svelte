<script lang="ts">
   
   
   import LL from "$src/i18n/i18n-svelte";
   import { titleCase } from "$utils";
   
   import { 
      Main, SectionWrapper, Breadcrumbs, 
      Title, P,  List, ListItem, Button,
      Hero, Card, TwicPic, Modal, Accordeon, AccordeonItem, RatingCard, 
      FeaturesSlider, FeaturesSlide, FeaturesModalContent, 
      Tab, TabList, TabPanel, Tabs 
   } from "$comp";
   import { 
      PartnershipAccordeon, WorkshopCard, 
      SessionDateCard, ModalLocation, ModalTrainerTom
   } from "../open-sessies";
	

   export let data;
   let pageData = Object(data.sessionTypes);
   let sessionData = Object(data.sessionData);
   let ratingData = Object(data.ratingData);

   import { currentModal } from "$src/lib/stores";
	import Splider from "$src/lib/components/Common/Slider/Splider.svelte";
	import SpliderSlide from "$src/lib/components/Common/Slider/SpliderSlide.svelte";
   $: $currentModal;

   // Set 'active' variable for accordeon component
	let active:any = null;

   const featureImages = [
      'lencioni-assets/features/1-inschrijving-hybride-tool.png',
      'lencioni-assets/features/2-integratie-deelnemers.png',
      'ratings/ctc-training-1-2.jpeg',
      'ratings/ctc-groep-be-sept-22.webp',
      'lencioni-assets/features/5-kartonnen-lencioni-piramide.webp',
      'lencioni-assets/features/6-team-assessment.png',
      'lencioni-assets/features/7-personal-assessment.png',
      'lencioni-assets/features/8-lencioni-werkboek.png',
      'lencioni-assets/features/9-bijlages-na-tweedaagse.png',
      'lencioni-assets/features/10-opvolgcoaching.webp',
      'lencioni-assets/features/11-deepdives.png',
      'lencioni-assets/features/12-vertrouwen.jpg',
      'lencioni-assets/features/13-respectvolle-conflicten.png',
      'lencioni-assets/features/14-team-betrokkenheid.png',
      'lencioni-assets/features/15-aansprakelijkheid.png',
      'lencioni-assets/features/16-resultaatgerichtheid.png',
      'lencioni-assets/features/17-bruggen-andere-modellen.webp',
   ]

   // console.log(featureValues);
</script>

<header>
   <Hero titleSmall imgSrc="home/working-genius.webp" imgAlt="No alt">
      <span slot="title">{titleCase($LL.sessions.level_1.title())}</span>   
   </Hero>
</header>

<Main noMargin cta>
   <Breadcrumbs/>
   
   <SectionWrapper name="hybride-lencioni-leertraject">

      <P large>
         {#each Object.entries($LL.sessions.level_1.intro.content) as [key, item]}
            {@html item()}
         {/each}
      </P>
      <PartnershipAccordeon />
      <div class="grid grid-cols-2 gap-4">
   
         {#each pageData as session}
            <WorkshopCard {session} class="col-span-1" />
         {/each}
   
      </div>
   </SectionWrapper>

   <SectionWrapper name="hybride-lencioni-leertraject-praktische-info">
      <div class="flex flex-row w-full gap-16 items-center justify-start" slot="title">
         <Title type="h2" small>
            {titleCase($LL.sessions.practical())}:
         </Title>
         <div class="">
            <Title type="subheader" smaller italic>
               {titleCase($LL.sessions.level_1.title_alt())}
            </Title>
            <Title type="h3" smaller thin>
               {titleCase(`${$LL.sessions.level_1.full.title()} ${$LL.sessions.level_1.two_day()}`)}
            </Title>
         </div>
      </div>
      
      <div class="grid grid-cols-2 md:grid-cols-3 gap-4 xl:gap-8">
         {#each sessionData as session}
            {#if session.type == "level_1_full"}
               <SessionDateCard {session} />
            {/if}
         {/each}
      </div>
      <hr class="border-2 border-primary/70"/>
      <div class="grid grid-cols-2 md:grid-cols-3 gap-4 xl:gap-8">
         
         <ModalTrainerTom/>

         <ModalLocation/>

         <Modal icon="mdi:calendar-text">
            <Button slot="trigger" block outlined center bold size="lg" icon="mdi:calendar-text">
               Programma
            </Button>
            <Title slot="title" type="h3" small>Programma</Title>
            <Tabs>
               <TabList>
                  <Tab>Voortraject</Tab>
                  <Tab>Dag 1</Tab>
                  <Tab>Dag 2</Tab>
                  <Tab>Natraject</Tab>
               </TabList>
               <TabPanel>
                  <List>
                     <ListItem large>Je ontvangt een schriftelijke intake om je verwachtingen goed in kaart te brengen.</ListItem>
                     <ListItem large>Je ontvangt een e-mail + link om het Lencioni “Team Assessment” in te vullen.</ListItem>
                  </List>
               </TabPanel>
               <TabPanel>
                  <List>
                     <ListItem large><strong>Wie is Patrick Lencioni</strong> en zijn Table Group?</ListItem>
                     <ListItem large>Lencioni's meest succesvolle boeken, inzichten en verbanden met elkaar.</ListItem>
                     <ListItem large>Ons Trixolutions lidmaatschap met The Table Group – wat houdt dat juist in?</ListItem>
                     <ListItem large>Gedachtengoed van de Lencioni Piramide uit <em>“De 5 Frustraties van Teamwork”</em>.</ListItem>
                     <br/>
                     <ListItem large>Tussentijdse oefeningen tegen dag 2.</ListItem>
                  </List>
                  <hr/>
                  <div class="grid grid-cols-2 gap-4">
                     <div class="col-span-1">
                        <Title type="h5" small>Piramide Laag 1</Title>
                        <List>
                           <Title type="subtitle" italic>"Vertrouwen"</Title>
                           <ListItem large>Welke Lencioni-oefeningen zijn er beschikbaar voor een teamcoach en hoe deze in te zetten?</ListItem>
                        </List>
                     </div>
                     <div class="col-span-1">
                        <Title type="h5" small>Piramide Laag 2</Title>
                        <List>
                           <Title type="subtitle" smallest italic>"Respectvolle Conflicten"</Title>
                           <ListItem large>Welke Lencioni-oefeningen zijn er beschikbaar voor een teamcoach en hoe deze in te zetten?</ListItem>
                        </List>
                     </div>
                  </div>
               </TabPanel>
               <TabPanel></TabPanel>
               <TabPanel>
                  <List>
                     <ListItem large>Je kan met de trainer (Tom) een uur persoonlijke opvolgcoaching inplannen.</ListItem>
                     <ListItem large>Je krijgt gedurende 12 maanden, elke maand, een Lencioni Newsletter met nieuwe en extra oefeningen, samenvattingen van Lencioni Podcasts en inzichten uit de Lencioni CAPA PRO Academy.   </ListItem>
                     <ListItem large>Je kan het volledige digitale Lencioni Team Assessment 1 keer inzetten, onder je eigen logo, ter waarde van 490€.</ListItem>
                     
                  </List>
               </TabPanel>
            </Tabs>
         </Modal>

         <Modal icon="mdi:account-group-outline">
            <Button slot="trigger" block outlined center bold size="lg" icon="mdi:account-group-outline">
               {titleCase($LL.sessions.audience())}
            </Button>
            <Title slot="title" type="h3" small>{titleCase($LL.sessions.audience())}</Title>
            <P large>
               {$LL.sessions.level_1.audience()}
            </P>
         </Modal>

         <!-- Aanpak -->
         <Modal icon="mdi:tools">
            <Button slot="trigger" block outlined center bold size="lg" icon="mdi:tools">
               {titleCase($LL.sessions.approach())}
            </Button>
            <Title slot="title" type="h3" small>{titleCase($LL.sessions.approach())}</Title>
            <P large italic>
               {$LL.sessions.level_1.approach.intro()}
            </P><br/>
            <List>
               <Title type="h4" small>{titleCase($LL.sessions.level_1.approach.results.title())}</Title>
               {#each Object.entries($LL.sessions.level_1.approach.results.items) as [key, item]}
                  <ListItem large>{item()}</ListItem>
               {/each}
            </List>
         </Modal>

         <!-- Recensies -->
         <Modal icon="mdi:star">
            <Button slot="trigger" block outlined center bold size="lg" icon="mdi:star">
               {titleCase($LL.sessions.ratings())}
            </Button>
            <Title slot="title" type="h3" small>{titleCase($LL.sessions.ratings())}</Title>
            <div class="columns-3">
               {#each ratingData as rating}
                  {#if rating.session_rated === 'level_1_full'}
                     <RatingCard 
                        rating={rating.rating}
                        class="mb-4">
                        {rating.content.nl}
                     </RatingCard>
                  {/if}
               {/each}
            </div>
            <hr class="border-2 border-primary/30 my-4"/>
            <div class="columns-3">
               {#each Array(8) as img}
                  <div class="
                        overflow-hidden group mb-[5%] rounded-xl 
                        transition-all duration-300 ease-out
                        shadow-lg shadow-black/30 
                        hover:shadow-black/50
                        h-auto w-full
                        hover:-translate-y-0.5
                        cursor-zoom-in
                        ">
                     <TwicPic 
                        alt="No alt"
                        src="" 
                        mode="cover" position="top" 
                        ratio="3:2"
                        intrinsic="600x400"/>
                  </div>
               {/each}
            </div>
         </Modal>
      </div>
   </SectionWrapper>

   <!-- Features -->
   <SectionWrapper name="hybride-lencioni-leertraject-features">
      <Title slot="title" type="h2" small>
         {$LL.sessions.level_1.features_title()}
      </Title>


      <Splider label="{$LL.sessions.level_1.features_title()}" visibleHeading>
         {#each Object.entries($LL.sessions.level_1.features_extended) as [key, feature]}
            <SpliderSlide 
               modalId={Number(key)+1} 
               imgSrc="{featureImages[Number(key)]}" imgAlt="{feature.title.before()} {feature.title.main()}" 
               class="">
            <span slot="subtitle">{feature.title.before()}</span>
            <span slot="title">{feature.title.main()}</span>
            </SpliderSlide>
         {/each}
      </Splider>


      <!-- <FeaturesSlider>
         {#each Object.entries($LL.sessions.level_1.features_extended) as [key, feature]}
            <FeaturesSlide 
               modalId={Number(key)+1} 
               imgSrc="" imgAlt="placeholder" 
               class="{(Number(key)+1) >= (Array.from($LL.sessions.level_1.features_extended).length) ? 'mb-20 hover:mb-16' : 'mb-8 hover:mb-4' }">
               <span slot="subtitle">{feature.title.before()}</span>
               <span slot="title">{feature.title.main()}</span>
            </FeaturesSlide>
         {/each}
      </FeaturesSlider> -->

      <Accordeon bind:active>
         <AccordeonItem 
            id={1} 
            title={$LL.sessions.level_1.expand.title()} titleSmaller
            icon="majesticons:arrows-expand-full">
            <P large>
               {@html $LL.sessions.level_1.expand.text()}
            </P>
         </AccordeonItem>
      </Accordeon>
   </SectionWrapper>

   {#each Object.entries($LL.sessions.level_1.features_extended) as [key, feature]}
      <FeaturesModalContent id={Number(key)+1} imgSrc="" imgAlt="placeholder">
         <span slot="title">
            {#each Object.entries(feature.title) as [titleKey, title]}
                  {title()}&nbsp;
            {/each}
         </span>
         <P large>
            {#each Object.entries(feature.content) as [contentKey, content]}
                  {@html content()}
            {/each}
         </P>
         <span slot="extra" class:hidden={!feature.extra}>
               {#if feature.extra}
                  {feature.extra()}
               {/if}
         </span>
      </FeaturesModalContent>
   {/each}
</Main>