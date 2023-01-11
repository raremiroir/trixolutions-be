<script lang="ts">
   import { breakpoints } from "$stores/breakpoints";
	import { fade } from "svelte/transition";

	import { SwiperSlide } from "swiper/svelte";
	import { Card, Modal, TwicPic, Title, P } from "$comp";

   export let modalId:number;
   export let imgSrc:string;
   export let imgAlt:string;

   let innerWidth:number;
   let ratio = '5:3'
   $: if (innerWidth < $breakpoints.xs) { ratio = "3:1"; }  
      else if (innerWidth < $breakpoints.sm) { ratio = "4:1"; } 
      else if (innerWidth < $breakpoints.md) { ratio = "2:1"; } 
      else if (innerWidth < $breakpoints.lg) { ratio = "5:3"; } 
      else if (innerWidth < $breakpoints.xl) { ratio = "2:1"; } 
      else if (innerWidth < $breakpoints.xxl) { ratio = "7:3"; }
      else { ratio = "3:1"}

   let hovered = false;

   let klass = 'mb-12 hover:mb-2';
   export { klass as class };

</script>

<svelte:window bind:innerWidth={innerWidth} />

<SwiperSlide>
   <div class="
         mx-3 group h-full
         transition-all duration-500 ease-linear
         {klass}
         "
   on:mouseenter={() => hovered = true}
   on:mouseleave={() => hovered = false}>
      <Modal trigger id={modalId}>
         <Card 
            slot="trigger" equalHeight hoverFx compact
            class="h-56 sm:h-64 md:h-72 lg:h-64 2xl:h-64">
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
   </div>
</SwiperSlide>