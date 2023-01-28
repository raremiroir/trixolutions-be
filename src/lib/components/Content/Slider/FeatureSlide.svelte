<script lang="ts">
   import { fade } from 'svelte/transition';
   import { breakpoints } from '$src/lib/constants/breakpoints';
   
   import { SplideSlide } from '@splidejs/svelte-splide';
	import { CardBase, Modal, Image, Text, Title } from '$comp';
	import { currentModal } from '$src/lib/stores';


   export let title:string;
   export let imgSrc:string;
   export let modalId:number;

   let hovered = false;

   let klass = '';
   export { klass as class };

   export let cardProps = {
      title: title,
      img: imgSrc,

      imgPos: "top",
      imgAlign: 'top',
      imgContain: true,
      width: 'full',
      height: 'fit',

      article: false,

      ariaLabel: title,

      author: {name: '', img:'', date: '' },

      compact: true,
      compactResponsive: false,
      equalHeight: false,

      hoverFx: 'onlyHover',
   }


</script>

<SplideSlide 
   class="bg-transparent w-full h-fit {klass}">

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
