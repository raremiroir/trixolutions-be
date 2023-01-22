<script lang="ts">
   import { onMount } from 'svelte';

   export let src:string = '';
   export let alt:string;

   let klass = '';
   export { klass as class };

   // Positioning of image (border-based)
   //  -- top - bottom - left - right - top-left - top-right - bottom-left - bottom-right --
   export let anchor:string = '';

   // Load image eagerly
   export let eager:boolean = false;

   // Dimensions in pixels of the original image, formatted.
   // You should specify the intrinsic dimensions of the resulting image.
   export let intrinsic:string = '';

   // Specify placeholder until image is loaded
   // -- preview - meancolor - maincolor - none --
   export let placeholder:string = 'maincolor'

   // Define aspect ratio in
   // width/height or width:height
   // -- ratio - 1 - none --
   export let ratio:string = 'none';

   // Determines how the image will be revealed once loaded.
   // -- fade - zoom - none --
   export let transition:string = 'fade';
   // Duration of transition
   export let transitionDuration:string = "250ms"
   // Timing function applied to transition
   export let transitionTimingFunction:string = "ease-in-out"
   // Delay of transition effect
   export let transitionDelay:string = "0ms"

   ////// MODES //////
   // Cover: image fills area and is cropped
   // Contain: image will sit inside area with no cropping
   export let mode:string = 'cover'

   //// COVER MODE ////
      // Sets focus point in cover mode
      // only use if you want to leverage smart cropping with focus="auto"
      export let focus:string = ''

   //// CONTAIN MODE ////
      // Position image in contain mode
      // -- top - bottom - left- right - etc. --
      export let position:string = 'center';
   



   // preTransform: slash-separated list of TwicPics API transformations
   // to be performed before resizing the image
   // Note: 'anchor' and 'focus' are applied after preTransform
   // for instance: preTransform="focus=auto/crop=50px50p"
   export let preTransform:string = '';


   let TwicImg;
   onMount(async () => {
      const module = await import('@twicpics/components/svelte3');
      TwicImg = module.TwicImg;
   });

</script>

<div class="
      transition-all duration-300 ease-out 
      overflow-hidden h-fit
      {klass}">
   <svelte:component 
      this={TwicImg}
   
      {src} {alt} {anchor}
      {eager} {intrinsic}
      {placeholder}
      {ratio}
      
      {mode}
      {position} {focus}
      
      {transition} {transitionDuration}
      {transitionTimingFunction} {transitionDelay}
      
      {preTransform}
   
      class="transition-all duration-300 ease-out"
   />
</div>
