<script lang="ts">
   
   // Import components
   import 
      { 
         Main, Section, Text, Breadcrumbs, SEO, Reveal,
         H2, H3, H4, H5, Subheader,
         Hero, List, ListItem, Link,
         Accordeon, AccordeonItem, Subtitle
      } from "$comp";
   import { SessionDateCard, ModalLocation } from "../open-sessies";
   import ModalTrainerTom from "../components/ModalTrainerTom.svelte";
   import PricingCard from "../components/PricingCard.svelte";
   import ModalTargetAudience from "../components/ModalTargetAudience.svelte";
   import ModalApproach from "../components/ModalApproach.svelte";
   
   // Import constants
   import { firstLetterCase, formatUrl, titleCase } from "$utils";
   import { website } from "$lib/config/website";
   import { currentModal } from "$src/lib/stores";
   // Import i18n
   import LL, { locale } from "$i18n/i18n-svelte";
	
   // Import data
   export let data;
   let pageData = Object(data.sessionTypes);
   let sessionData = Object(data.sessionData);
   
   $: $currentModal;

   // Set 'active' variable for accordeon component
	let active:any = null;

   // SEO
   let pageSlug = formatUrl(`${$LL.sessions.level_2.title()} ${$LL.sessions.level_2.level2()}`);
   let { author, siteUrl } = website;
	let breadcrumbs = [
      { name: titleCase(`${$LL.sessions.level_2.title()} - ${$LL.sessions.level_2.level2()}`), slug: `/${$locale}/${pageSlug}/` }
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
	title="{titleCase(`${$LL.sessions.level_2.title()} - ${$LL.sessions.level_2.level2()}`)}"
	metadescription="{titleCase($LL.sessions.level_2.title())} - {titleCase($LL.sessions.level_2.advanced_coaching())}"
	
	{breadcrumbs} {entityMeta}

/>
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
         <List>
            <ListItem>
               <Link 
                  linkStyle='underlineOnHover' ariaLabel={$LL.pages.main.coaching_leadership.ideal_teamplayer.title()}
                  href="/{$locale}/{$LL.pages.main.coaching_leadership.slug()}/{formatUrl($LL.pages.main.coaching_leadership.ideal_teamplayer.title())}"
               >
                  {titleCase($LL.pages.main.coaching_leadership.ideal_teamplayer.title())}
               </Link>
            </ListItem>
            <ListItem>
               <Link 
                  linkStyle='underlineOnHover' ariaLabel={$LL.pages.main.coaching_leadership.working_genius.title()}
                  href="/{$locale}/{$LL.pages.main.coaching_leadership.slug()}/{formatUrl($LL.pages.main.coaching_leadership.working_genius.title())}"
               >
                  {titleCase($LL.pages.main.coaching_leadership.working_genius.title())}
               </Link>
            </ListItem>
            <ListItem>
               <Link 
                  linkStyle='underlineOnHover' ariaLabel={$LL.pages.main.coaching_leadership.decisive_lead.title()}
                  href="/{$locale}/{$LL.pages.main.coaching_leadership.slug()}/{formatUrl($LL.pages.main.coaching_leadership.decisive_lead.title())}"
               >
                  {titleCase($LL.pages.main.coaching_leadership.decisive_lead.title())}
               </Link>
            </ListItem>
            <ListItem>
               <Link 
                  linkStyle='underlineOnHover' ariaLabel={$LL.pages.main.coaching_leadership.meetings_deadly.title()}
                  href="/{$locale}/{$LL.pages.main.coaching_leadership.slug()}/{formatUrl($LL.pages.main.coaching_leadership.meetings_deadly.title())}"
               >
                  {titleCase($LL.pages.main.coaching_leadership.meetings_deadly.title())}
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
         <div class="grid grid-cols-2 gap-4 xl:gap-8">
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
                     introWidth="h-fit" 
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
                           <ListItem icon="check" small>{feature()}</ListItem>
                        {/each}
                     </List>
               
                     <span slot="btn">
                        <span class="font-light">{$LL.sessions.subscribe_to()}</span><br class="sm:hidden"/>
                        <span>{$LL.sessions.level_2.title()}</span>
                     </span>
                  </PricingCard>
               </Reveal>
            {/if}
         {/each}
      </div>
   </Section>
</Main>