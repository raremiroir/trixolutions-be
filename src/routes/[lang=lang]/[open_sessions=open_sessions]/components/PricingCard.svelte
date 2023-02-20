<script lang="ts">
   import { Text, CardNew, List, ListItem, Button, H2 } from "$comp";
   import Icon from "@iconify/svelte";
   
   import LL from "$i18n/i18n-svelte";
   import { formatPrice } from "$utils";
   
   export let price = 100;
   let klass = '';
   export { klass as class };

   export let introHeight = 'h-76 xs:h-64 sm:h-48 md:h-64 lg:h-60 xl:h-56 2xl:h-56 3xl:h-44'

   export let cardProps = {
      title: 'card title',

      href: '',
      article: false,

      hoverFx: 'minimal',
   }

</script>


<CardNew {...cardProps} class={klass}>

   <H2 
      slot="title" smallest 
      class="
         text-center flex flex-col 
         gap-0 justify-center 
         w-full 
         my-0 p-0 mx-auto">
      <span class="text-[18px] uppercase font-normal m-0 p-0">
         <slot name="subtitle">Subtitle</slot><br/>
      </span>
      <span class="leading-tight lg:whitespace-nowrap">
         <slot name="title">Title</slot>
      </span>
   </H2>

   <Text 
      small 
      class="{introHeight}">
      <slot name="intro">
         Intro
      </slot>
   </Text>
   <List 
      title 
      class="
         rounded-lg border-2 border-primary
         overflow-hidden
         mb-4">
      <div 
         slot="title" 
         class="
            text-gray-50 bg-primary 
            py-2 font-body font-normal
            relative top-0 border-2 border-primary
            w-full text-center
            flex items-center justify-center flex-col
            ">
         <span>€ {formatPrice(price)}</span>
         <span class="text-sm font-light"><slot name="sub">Sub</slot></span>
      </div>

      <slot name="features">
         {#each Object.entries($LL.sessions.level_1.features) as [key, feature]}
            <ListItem icon="check" small>Included</ListItem>
            <ListItem icon="cancel" small disabled>Not included</ListItem>
         {/each}
      </slot>

   </List>
   
   <slot name="btn"/>
   

</CardNew>