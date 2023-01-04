<!--      -->
<!--  JS  -->
<!--      -->
<script>
   import { Slider } from '$comp/content';
   import { HeroInner } from './hero';
   
   // Set image sources
   export let imgSrc = '';
   // Set image alt
   export let imgAlt = 'No Alt';
   // Set image position
   export let imgPos = 'object-center';
   // Set image fitting
   export let imgFit = 'object-cover';

   // Set height of hero 
   export let height = '';

   // Using slides?
   export let slider = false;

   // Set title size
	export let titleSmall = false;
	export let titleSmaller = false;
	export let titleSmallest = false;
	// Set title type
	export let titleType = 'h1'

   export let large = false;
	
</script>

<!--      -->
<!-- HTML -->
<!--      -->

<div class="w-full h-fit relative z-0">
   {#if slider}
      <Slider>
         <slot/>
      </Slider>
   {:else}
      <HeroInner {large}
         {imgSrc} {imgAlt} {height} {imgFit} {imgPos}
         {titleType} {titleSmall} {titleSmaller} {titleSmallest}>
         <slot name="title" slot="title">Title</slot>
         <slot/>
      </HeroInner>
   {/if}
   

</div>