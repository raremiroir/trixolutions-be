<script lang="ts">
   import { Title, P, List, ListItem, Button } from "$comp/core";
   import { Card } from "$comp/common";

   import LL from "$src/i18n/i18n-svelte";
   import { formatPrice } from "$utils";
	import PricingCard from "./PricingCard.svelte";

   export let session:any;
   let klass = '';
   export { klass as class };

   let sessionData = {
      title: '',
      intro: [],
      features: []
   };
   if (session.type === 'level_1_basic') {
      sessionData.title = $LL.open_sessions.level_1.basic.title();
      for (const entry of $LL.open_sessions.level_1.basic.intro) {
         sessionData.intro.push(`${entry()}`)
      }
      sessionData.features = [
               true, true, false, false, false, false, false, false, false, false, 
               true, true, true, true, true, true, true, true, true
            ]
   } else if (session.type === 'level_1_full') {
      sessionData.title = $LL.open_sessions.level_1.full.title();
      for (const prop in $LL.open_sessions.level_1.full.intro) {
         sessionData.intro.push(`${$LL.open_sessions.level_1.full.intro[prop]()}`)
      }
      sessionData.features = [
               true, true, true, true, true, true,  true, true, true, true, 
               true, true, true, true, true, true, true, true, true
            ]
   }

   // console.log(features)

</script>

{#if session.type == 'level_1_basic' || session.type == 'level_1_full' }
   <PricingCard price={session.price} class={klass}>
      <span slot="subtitle">{$LL.open_sessions.level_1.traject()}</span>
      <span slot="title">{sessionData.title}<br class="lg:hidden"/> {$LL.open_sessions.level_1.two_day()}</span>

      <p slot="intro">
         {#each sessionData.intro as item}
            {@html item}
         {/each}
      </p>

      <List slot="features">
         {#each Object.entries($LL.open_sessions.level_1.features) as [key, feature]}
            {#if sessionData.features[Number(key)] === true}
               <ListItem icon="check">{feature()}</ListItem>
            {:else if sessionData.features[Number(key)] === false}
               <ListItem icon="cancel" disabled>{feature()}</ListItem>
            {/if}
         {/each}
      </List>

      <span slot="btn">
         <span class="font-light">{$LL.open_sessions.subscribe_to()} {$LL.open_sessions.level_1.traject()}</span><br/>
         <span>{sessionData.title} {$LL.open_sessions.level_1.two_day()}</span>
      </span>

   </PricingCard>
{/if}