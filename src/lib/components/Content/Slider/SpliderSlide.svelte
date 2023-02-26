<script lang="ts">
   
   import { fade } from 'svelte/transition';
   import { breakpoints } from '$src/lib/constants/breakpoints';
   
   import { SplideSlide } from '@splidejs/svelte-splide';
	import { CardBase, Modal, Image, Text, Title } from '$comp';


   export let modalId:number;
   export let img:string;
   export let title:string;

   let hovered = false;

   let klass = '';
   export { klass as class };

   const cardProps = {
      title: title,
      img: img,

      hoverFx: 'full'
   }

</script>

<SplideSlide 
   class="
      bg-transparent w-full
      {klass}">

      <Modal trigger id={modalId}>
         <CardBase slot="trigger" {...cardProps} class="w-full">
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
         </CardBase>
      </Modal>
      
</SplideSlide>