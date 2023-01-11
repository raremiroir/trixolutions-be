<script lang="ts">
   
   import { fade } from 'svelte/transition';
   import { breakpoints } from '$lib/stores';
   
   import { SplideSlide } from '@splidejs/svelte-splide';
	import { Card, Modal, TwicPic, P, Title } from '$comp';


   export let modalId:number;
   export let imgSrc:string;
   export let imgAlt:string;

   let innerWidth:number;
   let ratio = '5:3'
   $: if (innerWidth < $breakpoints.xs) { ratio = "3:1"; }  
      else if (innerWidth < $breakpoints.sm) { ratio = "3:1"; } 
      else if (innerWidth < $breakpoints.md) { ratio = "2:1"; } 
      else if (innerWidth < $breakpoints.lg) { ratio = "5:2"; } 
      else if (innerWidth < $breakpoints.xl) { ratio = "5:3"; } 
      else if (innerWidth < $breakpoints.xxl) { ratio = "5:3"; }
      else { ratio = "2:1"}

   let hovered = false;

   let klass = '';
   export { klass as class };

</script>

<svelte:window bind:innerWidth={innerWidth} />

<SplideSlide 
   class="
      bg-transparent w-full
      {klass}">

      <Modal trigger id={modalId}>
         <Card 
            slot="trigger" equalHeight hoverFx compact fast
            class="w-full">
            <div class="h-fit w-full" slot="image">
               <!-- <Image imgSrc="{blogPost.img}" height="h-40" /> -->
               <TwicPic 
                  alt={imgAlt}
                  src={imgSrc} 
                  mode="cover" position="top" 
                  ratio="{ratio}"
                  intrinsic="600x400"/>
            </div>
            <li slot="title">
               <Title type="subtitle" smaller italic>
                  <slot name="subtitle">Subtitle</slot>
               </Title>
               <Title type="h3" smallest color="text-primary group-hover:text-primary-d2">
                  <slot name="title">Title</slot>
               </Title>
            </li>
            {#if hovered}
               <div transition:fade class="my-0 py-0">
                  <P><slot/></P>
               </div>
            {/if}
         </Card>
      </Modal>
      
</SplideSlide>