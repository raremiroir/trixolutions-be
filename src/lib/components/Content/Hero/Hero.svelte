<!--      -->
<!--  JS  -->
<!--      -->
<script>
   import { HeroInner } from './hero';
	import { HeroSlider } from '../..';
   
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
	// Set fake h1
	export let titleFake = false

   export let large = false;
	
</script>

<!--      -->
<!-- HTML -->
<!--      -->

<div class="w-full h-fit relative z-0">
   {#if slider}
      <HeroSlider label="Welcome to Trixolutions!">
         <slot/>
      </HeroSlider>
   {:else}
      <HeroInner {large}
         {imgSrc} {imgAlt}
         {titleFake} {titleSmall} {titleSmaller} {titleSmallest}>
         <slot name="title" slot="title">Title</slot>
         <slot/>
      </HeroInner>
   {/if}
</div>