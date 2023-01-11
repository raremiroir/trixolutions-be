<script lang="ts">
   // Import components
   import { Title, TwicPic } from "$comp";

   import { breakpoints } from "$src/lib/stores";


   // Define image
   export let imgSrc = '';
   // Set image alt
   export let imgAlt = 'No alt';


   // Set type of title
   export let titleType = 'h1'
   // Small title case
   export let titleSmall = false;
   // Smaller title case
   export let titleSmaller = false;
   // Smallest title case
   export let titleSmallest = false;

   // Is the hero a large one or not
   export let large = false;
   
   let innerWidth:number;
   
   // Change image ratio according to breakpoint
   let ratio = '3:1'
   $: if (innerWidth < $breakpoints.xs) { 
         ratio = large ? "3:5" : "4:3";
      } else if (innerWidth < $breakpoints.sm) { 
         ratio = large ? "3:4" : "5:3";
      } else if (innerWidth < $breakpoints.md) { 
         ratio = large ? "1"   : "2:1";
      } else if (innerWidth < $breakpoints.lg) { 
         ratio = large ? "4:3" : "2:1";
      } else if (innerWidth < $breakpoints.xl) { 
         ratio = large ? "3:2" : "7:3";
      } else if (innerWidth < $breakpoints.xxl) { 
         ratio = large ? "2:1" : "3:1";
      } else { 
         ratio = large ? "8:3" : "4:1";
      }
</script>


<svelte:window bind:innerWidth={innerWidth} />
<div class="twicpic-hero">
   <TwicPic 
      alt={imgAlt}
      src="{imgSrc}" eager
      mode="cover" anchor="top"
      placeholder="preview"
      {ratio}
   />
</div>

<!-- Image Overlay -->
<div class="
      w-full h-full 
      bg-black/50 mix-blend-multiply
      backdrop-blur-[3px]
      absolute top-0
      flex items-center">
	<br />
</div>

<!-- Content Overlay -->
<div class="
      w-full h-full 
      absolute top-0
      pt-20
      flex items-center">
	<div class="w-3/4 mx-auto flex flex-col gap-4">
		<Title 
         type="{titleType}" color="text-gray-100/90" 
         small={titleSmall} smaller={titleSmaller} smallest={titleSmallest}>
			<slot name="title">Title</slot>
		</Title>
		<slot />
	</div>
</div>


<style global>
   .twicpic-hero {
      --twic-ratio: calc(1);

      /* @media (min-width: 640px) {
         --twic-ratio: calc(1);
      } */
   }
</style>