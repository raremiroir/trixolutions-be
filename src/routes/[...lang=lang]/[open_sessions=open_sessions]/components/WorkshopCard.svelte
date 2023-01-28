<script lang="ts">
   // Import components
   import { Button, H3, List, ListItem, Modal, SessionSubscribeForm, Text } from "$comp";
	import PricingCard from "./PricingCard.svelte";

   // Import i18n
   import LL from "$i18n/i18n-svelte";
   // Import utils
	import { firstLetterCase, titleCase } from "$src/lib/utils";
	import Subtitle from "$src/lib/components/Core/Title/Subtitle.svelte";

   // Request session to display
   export let session:any;
   // Request session dates to display
   export let sessionDates:any;
   // Add extra classes
   let klass = '';
   export { klass as class };


   const sessionType = session.type === 'level_1_basic' ? 'basic' : session.type === 'level_1_full' ? 'full' : '';
   $: sessionData = {
      title:  $LL.sessions.level_1[sessionType].title(),
      intro: $LL.sessions.level_1[sessionType].intro(),
      features: session.level_1_features_enabled
   };

</script>

{#if sessionType !== ''}
   <PricingCard price={session.price} class={klass}>
      <span slot="subtitle">{$LL.sessions.level_1.traject()}</span>
      <span slot="title">{titleCase(sessionData.title)}<br class="lg:hidden"/> {titleCase($LL.sessions.level_1.two_day())}</span>
      <span slot="sub">{titleCase($LL.sessions.level_1.access_time())}</span>

      <Text slot="intro">{@html sessionData.intro}</Text>

      <List slot="features" class="pr-4">
         {#each Object.entries($LL.sessions.level_1.features) as [key, feature]}
            {#if sessionData.features[Number(key)] === true}
               <ListItem small icon="check">{feature()}</ListItem>
            {:else if sessionData.features[Number(key)] === false}
               <ListItem small icon="cancel" disabled>{feature()}</ListItem>
            {/if}
         {/each}
      </List>

      <Modal width="min-w-fit w-3/4 max-w-[80%] xl:max-w-[40%]" slot="btn" trigger id={session.id}>
         <Button slot="trigger"
            ariaLabel="{titleCase($LL.sessions.subscribe_to())} {titleCase($LL.sessions.info.single())}"
            size="px-4 lg:px-6 h-16 lg:px-10 lg:h-15 rounded-xl text-lg xl:text-xl xl:gap-6 2xl:gap-8" 
            block 
            class="flex flex-row w-full lg:w-4/5 mx-auto" 
            icon="mdi:pen-plus"
            iconClass="h-5 w-5 mr-2 text-gray-50 group-hover:text-white">
            <div class="flex flex-col">
               <span class="font-normal text-sm md:text-base xl:text-lg">{$LL.sessions.subscribe_to()} {$LL.sessions.level_1.traject()}</span><br/>
               <span>{sessionData.title} {$LL.sessions.level_1.two_day()}</span>
            </div>
         </Button>
      </Modal>

   </PricingCard>
{/if}

<Modal content id={session.id}>
   <H3 slot="title" small>{titleCase($LL.sessions.subscribe_to())} {titleCase($LL.sessions.level_1.traject())}!</H3>   
   <Subtitle small italic>{firstLetterCase($LL.sessions.sign_up_to())} {$LL.sessions.level_1.the_traject()} <strong>{sessionData.title} {$LL.sessions.level_1.two_day()}</strong></Subtitle>
   <SessionSubscribeForm session="{session.type}" submitText={$LL.sessions.info.subscribe()} {sessionDates}/>
</Modal>