<!--      -->
<!--  JS  -->
<!--      -->
<script>
   import { Slider } from './slider';
   import { HeroInner } from './hero';
   
   // Set image sources
   export let imgSrc = '';
   // Set image alt
   export let imgAlt = 'No Alt';

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
         {imgSrc} {imgAlt}
         {titleType} {titleSmall} {titleSmaller} {titleSmallest}>
         <slot name="title" slot="title">Title</slot>
         <slot/>
      </HeroInner>
   {/if}
   

</div>