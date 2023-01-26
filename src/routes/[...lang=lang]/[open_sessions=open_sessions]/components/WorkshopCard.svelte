<script lang="ts">
   // Import components
   import { List, ListItem, Text } from "$comp";
	import PricingCard from "./PricingCard.svelte";

   // Import i18n
   import LL from "$i18n/i18n-svelte";
   // Import utils
	import { titleCase } from "$src/lib/utils";

   // Request session to display
   export let session:any;
   // Add extra classes
   let klass = '';
   export { klass as class };


   // TODO: MAKE WORKAROUND FOR THIS
   let sessionData = {
      title: '',
      intro: '',
      features: []
   };
   if (session.type === 'level_1_basic') {
      sessionData.title = $LL.sessions.level_1.basic.title();
      sessionData.intro = $LL.sessions.level_1.basic.intro();
      sessionData.features = [
               true, true, false, false, false, false, false, false, false, false, 
               true, true, true, true, true, true, true, true, true
            ]
   } else if (session.type === 'level_1_full') {
      sessionData.title = $LL.sessions.level_1.full.title();
      sessionData.intro = $LL.sessions.level_1.full.intro();
      sessionData.features = [
               true, true, true, true, true, true,  true, true, true, true, 
               true, true, true, true, true, true, true, true, true
            ]
   }

</script>

{#if session.type == 'level_1_basic' || session.type == 'level_1_full' }
   <PricingCard price={session.price} class={klass}>
      <span slot="subtitle">{$LL.sessions.level_1.traject()}</span>
      <span slot="title">{titleCase(sessionData.title)}<br class="lg:hidden"/> {titleCase($LL.sessions.level_1.two_day())}</span>

      <Text slot="intro">{@html sessionData.intro}</Text>

      <List slot="features">
         {#each Object.entries($LL.sessions.level_1.features) as [key, feature]}
            {#if sessionData.features[Number(key)] === true}
               <ListItem small icon="check">{feature()}</ListItem>
            {:else if sessionData.features[Number(key)] === false}
               <ListItem small icon="cancel" disabled>{feature()}</ListItem>
            {/if}
         {/each}
      </List>

      <span slot="btn">
         <span class="font-light">{$LL.sessions.subscribe_to()} {$LL.sessions.level_1.traject()}</span><br/>
         <span>{sessionData.title} {$LL.sessions.level_1.two_day()}</span>
      </span>

   </PricingCard>
{/if}