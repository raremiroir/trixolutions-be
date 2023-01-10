<script>
   // Import svelte-reveal
   import { reveal } from 'svelte-reveal'
   import { afterUpdate } from "svelte";

   export let fly = true;
   export let fade = false;
   export let slide = false;
   export let blur = false;
   export let scale = false;
   export let spin = false;
   
   if (fade || slide || blur || scale || spin) fly = false;
   
   let show = false;
   afterUpdate(() => {
      show = true;
   })
</script>

{#if show}
	<div use:reveal={{ 
         transition: fly ? 'fly' : fade ? 'fade' : slide ? 'slide' : blur ? 'blur' : scale ? 'scale' : spin ? 'spin' : 'fly' ,
         threshold: 0.2,
         duration: 500,

         }}>
		<slot/>
	</div>
{/if}
