<script lang="ts">
   // Import components
   import { Image, H1 } from "$comp";

   // Define image
   export let imgSrc = '';
   // Set image alt
   export let imgAlt = 'No alt';

   // Set custom image without component
   export let customImg = false;


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
</script>

<div class="w-full h-full bg-gray-900 ">
      {#if customImg}
         <slot name="img"/>
      {:else}
         <Image 
            alt={imgAlt} eager
            src={imgSrc}
            class="!opacity-50 !blur-sm w-full { large ? 'h-148' : 'h-100'}"
         />
      {/if}
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
            w-11/12 md:w-3/4 h-full mx-auto flex flex-col items-start justify-center gap-4">
         <H1 
            fake={titleFake} color="text-gray-100/90" leading={titleLeading}
            small={titleSmall} smaller={titleSmaller} smallest={titleSmallest}>
            <slot name="title">Title</slot>
         </H1>
         <slot />
      </div>
   </div>
</div>