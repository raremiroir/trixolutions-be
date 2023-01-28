<script lang="ts">
   import { Splide, SplideSlide, SplideTrack } from '@splidejs/svelte-splide';
   import { onMount } from 'svelte';
	import { SlideChangeBtn } from '../..';

   let main: Splide;
   let thumbs: SplideSlide;

   export let ariaLabel:string;

   const mainOptions = {
     type      : 'loop',
     perPage   : 3,
     perMove   : 2,
     gap       : '2rem',
     pagination: false,
     height    : '10rem',
     breakpoints: {
         1440: { perPage: 3, perMove: 2, gap: '2rem' },
			768: { perPage: 2, gap: '1rem' },
			520: { perPage: 1, perMove: 1, gap: '0.5rem' }
     }
   };
   const thumbsOptions = {
     type        : 'slide',
     rewind      : true,
     gap         : '1rem',
     pagination  : false,
     fixedWidth  : 110,
     fixedHeight : 70,
     cover       : true,
     focus       : 'center' as const,
     isNavigation: true,
     updateOnMove: true,
   };
   onMount( () => {
     if ( main && thumbs ) {
       main.sync( thumbs.splide );
     }
   } );
 </script>

 <div class="flex flex-col gap-8">
   <!-- THUMBS NAVIGATION -->
   <Splide 
      options={ thumbsOptions } 
      bind:this={ thumbs }
      hasTrack={false}>
     
      <div class="
            custom-wrapper 
            w-full h-fit p-2 rounded-3xl bg-gray-100
            flex flex-col justify-between"
      >
         
         <!-- Navigation Arrows -->
         <div class="
               splide__arrows w-full gap-4
               flex flex-between items-center">
            <button
               class="
                  splide__arrow splide__arrow--prev z-3"
               >
               <SlideChangeBtn prev />
            </button>
            <slot name="navigation"/>
            <button
               class="
                  splide__arrow splide__arrow--next z-3"
               >
               <SlideChangeBtn next />
            </button>
         </div>
	   </div>
   </Splide>
   
   <!-- MAIN SLIDES -->
   <Splide 
      options={ mainOptions } 
      bind:this={ main } 
      aria-label={ariaLabel}
      aria-labelledby={ariaLabel}
      hasTrack={false}
   >
      <div class="
            custom-wrapper 
            w-full h-fit
            flex flex-col justify-between"
      >
         <!-- Navigation Arrows -->
         <div class="splide__arrows relative hidden">
            <button class="splide__arrow splide__arrow--prev" />
            <button class="splide__arrow splide__arrow--next" />
         </div>
         <SplideTrack class="h-fit">
            <!-- Slides -->
               <slot/>
         </SplideTrack>
	   </div>
   </Splide>
 </div>