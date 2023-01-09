<script lang="ts">
   import { Title, P, List, ListItem, Button } from "$comp/core";
   import { Card } from "$comp/common";

   import LL from "$src/i18n/i18n-svelte";
   import { formatPrice } from "$utils";
	import Icon from "@iconify/svelte";

   export let introWidth = '';
   export let price = 100;
   let klass = '';
   export { klass as class };

</script>

<Card link="/" equalHeight class={klass}>
   <Title 
      slot="title" type="h2" smallest 
      class="text-center flex flex-col gap-0 justify-center w-full m-0 p-0">
      <span class="text-[18px] uppercase font-normal m-0 p-0">
         <slot name="subtitle">Subtitle</slot><br/>
      </span>
      <span class="leading-tight lg:whitespace-nowrap">
         <slot name="title">Title</slot>
      </span>
   </Title>
   <P class="{introWidth ? introWidth : 'sm:h-90 md:h-50 lg:h-48 xl:h-40 2xl:h-36'}">
      <slot name="intro">
         Intro
      </slot>
   </P>
   <List title class="rounded-lg overflow-hidden border-2 border-primary">
      <div 
         slot="title" 
         class="
            text-gray-50 bg-primary 
            py-2 font-body font-normal
            w-full text-center
            flex items-center justify-center flex-col
            ">
         <span>€ {formatPrice(price)}</span>
         <span class="text-sm font-thin"><slot name="sub">Sub</slot></span>
      </div>

      <slot name="features">
         {#each Object.entries($LL.open_sessions.level_1.features) as [key, feature]}
            <ListItem icon="check">Included</ListItem>
            <ListItem icon="cancel" disabled>Not included</ListItem>
         {/each}
      </slot>

   </List>
   <Button 
      size="xl" center block 
      class="flex flex-row w-full lg:w-4/5 mx-auto" 
      icon="mdi:pen-plus"
      iconClass="h-5 w-5 mr-2 text-gray-50 group-hover:text-white">
      <slot name="btn">
         <span class="font-light">Inschrijven Voor</span>
         <span>Deze Sessie</span>
      </slot>
   </Button>
</Card>