<script lang="ts">
	import { Button, Image } from "$comp";
	import { fade } from "svelte/transition";


   export let src:string = '';
   export let alt:string;
   export let customSrc = false;

   // eager loading
   export let eager = false;
   // show figcaption
   export let caption = false;

   export let imgFit = 'object-cover'
   export let imgClass = '';
   export let imgWrapClass = '';

   export let id = '';

   // let klass = '';
   // export { klass as class };

   let lightboxActive = false;
   $: lightboxActive;



   $: imgProps = {
      src: src,
      customSrc: customSrc,
      alt: alt,

      imgFit: imgFit,
      eager: eager,
      caption: caption,
   }

   const transition = "transition-all duration-300 ease-in-out"
</script>


<Image 
   on:click={ () => lightboxActive = true }
   on:keydown={ () => lightboxActive = true }
   {...imgProps}
   class="cursor-zoom-in {imgWrapClass}"
   imgClass="{transition} {imgClass}"
/>

{#if lightboxActive }
   <div 
      transition:fade={{duration: 200}} 
      class="
         fixed w-screen h-screen inset-0
         cursor-zoom-out
         bg-black/60 backdrop-blur-md z-10
         flex items-center justify-center"
      on:click={ () => lightboxActive = false }
      on:keydown={ () => lightboxActive = false }>
      <div class="
            flex flex-col gap-1">
         <Button
            ariaLabel="Afbeelding verkleinen"
            rounded square circle color="error"
            icon="material-symbols:close-rounded" 
            class="self-end"
         />
         <Image 
            {...imgProps}
            imgClass="
               {transition} 
               w-full h-full 
               max-w-[80vw] lg:max-w-[70vw] max-h-[80vh]
               rounded-lg shadow-xl shadow-black/60"
         />
      </div>
   </div>
 {/if}