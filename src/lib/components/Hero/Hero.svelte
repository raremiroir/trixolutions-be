<!--      -->
<!--  JS  -->
<!--      -->
<script>
   // Import Components
   import Title      from '$comp/Common/Text/Title.svelte';
	import Image      from '$comp/Base/Media/Image.svelte';
	import Slider     from '$comp/Other/Slider/Slider.svelte';
	import Slide      from '$comp/Other/Slider/Slide.svelte';
	import HeroInner  from '$comp/Hero/HeroInner.svelte';
   
   // Import Image
   import IMGw1080   from '$img/stock/Kracht_Van_Gezonde_Teams_Stock.webp';
   
   // Set image sources
   export let imgSrc = IMGw1080;
   // Set image alt
   export let imgAlt = 'No Alt';
   // Set image position
   // export let imgPos = 'object-center';

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
      <HeroInner 
         {imgSrc} {imgAlt} {height}
         {titleType} {titleSmall} {titleSmaller} {titleSmallest}>
         <slot name="title" slot="title">Title</slot>
         <slot/>
      </HeroInner>
   {/if}
   

</div>