<script lang="ts">
   // Import components
   import { Image, H1 } from "$comp";

   import { breakpoints } from "$lib/constants/breakpoints";

   // Define image
   export let imgSrc = '';
   // Set image alt
   export let imgAlt = 'No alt';


   // Small title case
   export let titleSmall = false;
   // Smaller title case
   export let titleSmaller = false;
   // Smallest title case
   export let titleSmallest = false;
   // Set leading on h1 title or leave default
   export let titleLeading = 'leading-none';

   // Is the H1 title fake or not?
   export let titleFake = false;

   // Is the hero a large one or not
   export let large = false;

   
   let innerWidth:number;
   // Change image ratio according to breakpoint
   let ratio = '3:1'
   $: if (innerWidth < breakpoints.xs) { ratio = large ? "3:5" : "4:3";
      } else if (innerWidth < breakpoints.sm) { ratio = large ? "1" : "3:2";
      } else if (innerWidth < breakpoints.md) { ratio = large ? "3:2"   : "2:1";
      } else if (innerWidth < breakpoints.lg) { ratio = large ? "3:2" : "7:4";
      } else if (innerWidth < breakpoints.xl) { ratio = large ? "3:2" : "5:2";
      } else if (innerWidth < breakpoints.xxl) { ratio = large ? "2:1" : "3:1";
      } else { ratio = large ? "8:3" : "4:1"; }
</script>


<svelte:window bind:innerWidth={innerWidth} />

<div class="w-full h-full bg-gray-900 ">
      <Image 
         alt={imgAlt}
         src="{imgSrc}" eager
         mode="cover" position="center"
         placeholder="preview"
         class="!opacity-50 !blur-sm"
         {ratio}
      />
      <!-- Image Overlay -->
      <div class="
            w-full h-full 
            bg-black/30 mix-blend-multiply
            absolute inset-0">
         <br />
      </div>
   
   
   <!-- Content Overlay -->
   <div class="
         w-full h-full
         absolute inset-0
         { large ? 'pt-32 pb-12' : 'pt-16 pb-0' }
         flex items-center">
      <div class="
            w-3/4 h-full mx-auto flex flex-col items-center justify-center gap-4">
         <H1 
            fake={titleFake} color="text-gray-100/90" leading={titleLeading}
            small={titleSmall} smaller={titleSmaller} smallest={titleSmallest}>
            <slot name="title">Title</slot>
         </H1>
         <slot />
      </div>
   </div>
</div>