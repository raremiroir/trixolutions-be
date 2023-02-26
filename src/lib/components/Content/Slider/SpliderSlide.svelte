<script lang="ts">
   
   import { fade } from 'svelte/transition';
   import { breakpoints } from '$src/lib/constants/breakpoints';
   
   import { SplideSlide } from '@splidejs/svelte-splide';
	import { Card, Modal, Image, Text, Title } from '$comp';


   export let modalId:number;
   export let imgSrc:string;
   export let imgAlt:string;

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
               <Image 
                  alt={imgAlt}
                  src={imgSrc}
               />
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
                  <Text small><slot/></Text>
               </div>
            {/if}
         </Card>
      </Modal>
      
</SplideSlide>