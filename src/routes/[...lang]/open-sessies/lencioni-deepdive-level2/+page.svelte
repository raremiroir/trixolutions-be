<script lang="ts">
   
   import { firstLetterCase, formatDateShort, formatTime, formatUrl, formatYear, titleCase } from "$utils";
   
   import LL, { locale } from "$i18n/i18n-svelte";
   
   import 
      { 
         Main, SectionWrapper, Title, P, Breadcrumbs, 
         List, ListItem, Button, Link,
         Hero, Modal,
         Accordeon, AccordeonItem
      } from "$comp";

   import { PartnershipAccordeon, WorkshopCard, SessionDateCard, ModalLocation } from "../open-sessies";
	import Icon from "@iconify/svelte";
	

   export let data;
   let pageData = Object(data.sessionTypes);
   let sessionData = Object(data.sessionData);
   
   import { currentModal } from "$src/lib/stores";
	import ModalTrainerTom from "../components/ModalTrainerTom.svelte";
	import PricingCard from "../components/PricingCard.svelte";
   $: $currentModal;

   // Set 'active' variable for accordeon component
	let active:any = null;

   let featureValues;
</script>

<header>
   <Hero titleSmall imgSrc="home/working-genius.webp" imgAlt="No alt">
      <span slot="title">{titleCase($LL.sessions.level_2.title())}</span>   
   </Hero>
</header>

<Main noMargin cta>
   <Breadcrumbs/>
   
   <SectionWrapper name="hybride-lencioni-leertraject">

      <P large>
         {#each Object.entries($LL.sessions.level_2.intro) as [key, item]}
            {@html item()}
         {/each}
      </P>
      <List>
         <ListItem large>
            <Link underlineOnHover 
               href="/{$locale}/{$LL.pages.main.coaching_leadership.slug()}/{formatUrl($LL.pages.main.coaching_leadership.ideal_teamplayer.title())}"
            >
               {titleCase($LL.pages.main.coaching_leadership.ideal_teamplayer.title())}
            </Link>
         </ListItem>
         <ListItem large>
            <Link underlineOnHover 
               href="/{$locale}/{$LL.pages.main.coaching_leadership.slug()}/{formatUrl($LL.pages.main.coaching_leadership.working_genius.title())}"
            >
               {titleCase($LL.pages.main.coaching_leadership.working_genius.title())}
            </Link>
         </ListItem>
         <ListItem large>
            <Link underlineOnHover 
               href="/{$locale}/{$LL.pages.main.coaching_leadership.slug()}/{formatUrl($LL.pages.main.coaching_leadership.decisive_lead.title())}"
            >
               {titleCase($LL.pages.main.coaching_leadership.decisive_lead.title())}
            </Link>
         </ListItem>
         <ListItem large>
            <Link underlineOnHover 
               href="/{$locale}/{$LL.pages.main.coaching_leadership.slug()}/{formatUrl($LL.pages.main.coaching_leadership.meetings_deadly.title())}"
            >
               {titleCase($LL.pages.main.coaching_leadership.meetings_deadly.title())}
            </Link>
         </ListItem>
      </List>
      <Accordeon bind:active>
         {#each Object.entries($LL.sessions.level_2.accordeon) as [key, item]}
            <AccordeonItem 
               id={Number(key)+1} 
               title={item.title()} titleSmaller
               icon="majesticons:arrows-expand-full">
               {#each Object.entries(item.content) as [contentKey, content]}
                  <br/>
                  <Title type="h4" small>{content.title()}</Title>
                  <P large>
                     {#each Object.entries(content.content) as [contentItemKey, contentItem]}
                        {@html contentItem()}
                     {/each}
                  </P><br/>
                  <Title type="h5">{firstLetterCase($LL.sessions.workshop())}</Title>
                  <P large>
                     {#each Object.entries(content.sub.content) as [subContentKey, subContent]}
                        {@html subContent()}
                     {/each}
                  </P>
                     
               {/each}
            </AccordeonItem>
         {/each}
      </Accordeon>
   </SectionWrapper>

   <SectionWrapper name="hybride-lencioni-leertraject-praktische-info">
      <div class="flex flex-row w-full gap-16 items-center justify-start" slot="title">
         <Title type="h2" small>
            {titleCase($LL.sessions.practical())}:
         </Title>
         <div class="">
            <Title type="subheader" smaller italic>
               {titleCase($LL.sessions.level_2.advanced_coaching())}
            </Title>
            <Title type="h3" smaller thin>
               {titleCase($LL.sessions.level_2.title())} - {titleCase($LL.sessions.level_2.level2())}
            </Title>
         </div>
      </div>
      
      <div class="grid grid-cols-2 md:grid-cols-3 gap-4 xl:gap-8">
         {#each sessionData as session}
            {#if session.type == "level_2"}
               <SessionDateCard {session}/>
            {/if}
         {/each}
      </div>
      <hr class="border-2 border-primary/70"/>
      <div class="grid grid-cols-2 gap-4 xl:gap-8">
         
         <ModalTrainerTom/>

         <ModalLocation/>

         <!-- Doelgroep -->
         <Modal icon="mdi:account-group-outline">
            <Button slot="trigger" block outlined center bold size="lg" icon="mdi:account-group-outline">
               {titleCase($LL.sessions.audience())}
            </Button>
            <Title slot="title" type="h3" small>{titleCase($LL.sessions.audience())}</Title>
            <P large>
               {$LL.sessions.level_2.target_audience()}
               <br/>
            </P>
            <Link href="/{$locale}/open-sessies/hybride-lencioni-leertraject">
               {$LL.sessions.level_2.target_audience_extra()}
            </Link>
         </Modal>

         <!-- Aanpak -->
         <Modal icon="mdi:tools">
            <Button slot="trigger" block outlined center bold size="lg" icon="mdi:tools">
               {titleCase($LL.sessions.approach())}
            </Button>
            <Title slot="title" type="h3" small>{titleCase($LL.sessions.approach())}</Title>
            <P large>
               {$LL.sessions.level_2.approach()}
            </P>
         </Modal>
      </div>
      <div class="flex w-full">
         {#each pageData as session}
            {#if session.type === 'level_2'}
               <PricingCard
                  introWidth="h-fit" 
                  price={session.price}>
                  <span slot="subtitle">{$LL.sessions.level_2.advanced_coaching()}</span>
                  <span slot="title">
                     {$LL.sessions.level_2.title()} <br class="md:hidden"/>
                     <span class="hidden md:inline">&#45; </span>{$LL.sessions.level_2.level2()}
                  </span>
            
                  <p slot="intro">
                     {#each Object.entries($LL.sessions.level_2.features_intro) as [key, item]}
                        {@html item()}
                     {/each}
                  </p>
                  
                  <span slot="sub">{$LL.sessions.vat_not_included()}</span>
                  <List slot="features" class="w-4/5">
                     {#each Object.entries($LL.sessions.level_2.features) as [key, feature]}
                        <ListItem icon="check">{feature()}</ListItem>
                     {/each}
                  </List>
            
                  <span slot="btn">
                     <span class="font-light">{$LL.sessions.subscribe_to()}</span><br class="sm:hidden"/>
                     <span>{$LL.sessions.level_2.title()}</span>
                  </span>
            
               </PricingCard>
            {/if}
         {/each}
      </div>
   </SectionWrapper>
</Main>