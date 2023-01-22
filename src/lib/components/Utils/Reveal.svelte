<script>
   // Import svelte-reveal
   import { reveal } from 'svelte-reveal'
   import { afterUpdate } from "svelte";

   // add extra classes
   let klass = ''
   export { klass as class }

   // CHOOSE ANIMATION
   export let fly = true;
   export let fade = false;
   export let slide = false;
   export let blur = false;
   export let scale = false;
   export let spin = false;

   
   // define duration
   export let slow = false;
   export let fast = false;
   const duration = slow ? 1000 : fast ? 250 : 500
   // define delay
   export let lazy = false;
   export let lazier = false;
   export let laziest = false;
   const delay = lazy ? 300 : lazier ? 500 : laziest ? 1000 : 0;
   // define direction
   export let top = true;
   export let bottom = false;
   export let left = false;
   export let right = false
   // --> even further ?
   export let far = false;

   if ( !fly && !slide ) { bottom = false; top = false; right = false; left = false;}
   if ( bottom || top || left || right ) { 
      fade = false; blur = false, scale = false; spin = false 
      if ( bottom || top ) { fly = true; slide = false; }
      if ( left || right ) { slide = true; fly = false; }
      if ( bottom || left || right ) top = false;
   }
   const x = top || bottom ? 0 : right ? far ? 40 : 20 : left ? far ? -40 : -20 : 0;
   const y = left || right ? 0 : bottom ? far ? 40 : 20 : top ? far ? -40 : -20 : 0;
   
   // define threshold
   export let threshold = 0.2
   
   
   if (fade || slide || blur || scale || spin) fly = false;
   
   let show = false;
   afterUpdate(() => {
      show = true;
   })
</script>

{#if show}
	<div use:reveal={{ 
         transition: fly ? 'fly' : fade ? 'fade' : slide ? 'slide' : blur ? 'blur' : scale ? 'scale' : spin ? 'spin' : 'fly' ,
         threshold: threshold,
         duration: duration,
         delay: delay,
         y: y, x: x,
         }}
        class="{klass}">
		<slot/>
	</div>
{/if}
