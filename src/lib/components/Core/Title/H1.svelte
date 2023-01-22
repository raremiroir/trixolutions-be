
<script lang="ts">
   // Define extra classes 
   let klass = '';
   export { klass as class };

   // Choose color or leave blank for default (primary)
   export let color = ''

   // Use small case
      export let small = false;
   // Use smaller case
      export let smaller = false;
   // Use smallest case
      export let smallest = false;
   // Need custom leading?
      export let leading = '';

   // Make title italic
   export let italic = false;
   // Make title thinner
   export let thin = false;

   // Make a span which looks like h1
   export let fake = false;


   export let large = false;
</script>


{#if fake}
   <span class="
         font-title
         { color ? color : 'text-primary' } 
         { leading ? leading : 'leading-none'}
         { thin ? 'font-semibold' : 'font-bold' }
         { small ? 'h1-size-sm' : smaller ? 'h2-size' 
         : smallest ? 'h3-size' : 'h1-size'}
         { klass }"
      class:italic>
      <slot/>
   </span>
{:else}
   <h1 class="
         font-title
         { color ? color : 'text-primary' } 
         { leading ? leading : 'leading-none'}
         { thin ? 'font-semibold' : 'font-bold' }
         { small ? 'h1-size-sm' : smaller ? 'h2-size' 
         : smallest ? 'h3-size' : 'h1-size'}
         { klass }"
      class:italic>
      <slot/>
   </h1>   
{/if}