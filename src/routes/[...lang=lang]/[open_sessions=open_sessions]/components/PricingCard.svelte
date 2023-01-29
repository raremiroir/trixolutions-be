<script lang="ts">
   import { Text, CardBase, List, ListItem, Button, H2 } from "$comp";
   import Icon from "@iconify/svelte";
   
   import LL from "$i18n/i18n-svelte";
   import { formatPrice } from "$utils";
   
   export let price = 100;
   let klass = '';
   export { klass as class };

   export let cardProps = {
      title: 'card title',

      imgPos: "top",
      width: 'fill',


      href: '',
      article: false,

      ariaLabel: '',

      compact: false,
      compactResponsive: false,

      hoverFx: 'minimal',
   }

</script>


<CardBase {...cardProps} class={klass}>

   <H2 
      slot="title" smallest 
      class="text-center flex flex-col gap-0 justify-center w-full m-0 p-0 self-center">
      <span class="text-[18px] uppercase font-normal m-0 p-0">
         <slot name="subtitle">Subtitle</slot><br/>
      </span>
      <span class="leading-tight lg:whitespace-nowrap">
         <slot name="title">Title</slot>
      </span>
   </H2>

   <Text 
      small 
      class="h-fit">
      <slot name="intro">
         Intro
      </slot>
   </Text>
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
   

</CardBase>