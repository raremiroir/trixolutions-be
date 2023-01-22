<script>
   let flipped = false;
   
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

   export let height = "min-h-[300px]"
   let klass = '';
   export { klass as class };
</script>

   <div 
      class="
         relative {height} max-w-full 
         {klass}"
      on:click={() => flipped = !flipped}
      on:keydown={() => flipped = !flipped}>
      
   
      <div class="absolute h-full w-full card">
         {#if !flipped}
            <div 
               transition:flip 
               class="
                  transition-all duration-200 ease-in-out
                  absolute h-full w-fit overflow-hidden 
                  flex items-center justify-center rounded-lg
                  shadow-lg hover:shadow-black/30">
               <slot name="front">Front</slot>
            </div>
         {:else}
            <div 
               transition:flip 
               class="
                  transition-all duration-200 ease-in-out
                  absolute h-full w-fit overflow-hidden 
                  flex items-center justify-center rounded-lg
                  shadow-lg hover:shadow-black/30">
               <slot name="back">Back</slot>
            </div>
         {/if}
      </div>
   
   </div>

<style>
   .card {
      perspective: 600;
   }
</style>