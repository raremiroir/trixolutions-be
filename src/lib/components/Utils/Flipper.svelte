<script>
   let flipped = false;
   import { fade } from "svelte/transition";
   
   const flip = (node, {
      delay = 0, duration = 400
   }) => {
      return {
         delay,
         duration,
         css: (t, u) => `
            transform: rotateY(${1 - (u * 180)}deg);
            opacity: ${1 - u};
            `
      };
   }

   const transition = "transition-all duration-200 ease-in-out"

   let klass = '';
   export { klass as class };
</script>

   <div 
      class="
         h-fit cursor-pointer
         max-w-full {klass}"
      on:click={() => flipped = !flipped}
      on:keydown={() => flipped = !flipped}>
      
   
         {#if !flipped}
            <div transition:fade={{delay: 0, duration:100}}>
               <div 
                  in:flip={{delay: 150, duration:150}} out:flip={{delay: 0, duration: 150}}
                  class="
                     {transition}
                     h-fit w-full overflow-hidden 
                     flex items-center justify-center">
                  <slot name="front">Front</slot>
               </div>
            </div>
         {:else}
            <div transition:fade={{delay: 0, duration:100}}>
               <div 
                  in:flip={{delay: 150, duration: 150}} out:flip={{delay: 0, duration:150}}
                  class="
                     {transition}
                     h-fit w-full overflow-hidden 
                     flex items-center justify-center">
                  <slot name="back">Back</slot>
               </div>
            </div>
         {/if}
   
   </div>

<style>
   .card {
      perspective: 600;
   }
</style>