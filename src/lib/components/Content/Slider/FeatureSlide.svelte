<script lang="ts">
   import { fade } from 'svelte/transition';
   
   import { SplideSlide } from '@splidejs/svelte-splide';
	import { CardBase, Modal, Text, Title } from '$comp';


   export let title:string;
   export let imgSrc:string;
   export let imgAlt:string;
   export let modalId:number;

   let hovered = false;

   let klass = '';
   export { klass as class };

   export let cardProps = {
      title: title,
      img: imgSrc,

      alt: imgAlt,

      imgFit: 'object-contain',
      height: 'h-64',

      hoverFx: 'minimal',
   }


</script>

<SplideSlide 
   class="bg-transparent w-full h-fit {klass} pt-2 pb-6">

      <Modal trigger id={modalId}>
         <CardBase {...cardProps} slot="trigger" class="!cursor-pointer">
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
