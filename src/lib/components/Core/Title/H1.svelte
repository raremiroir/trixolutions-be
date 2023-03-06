
<script lang="ts">
   // Define extra classes 
   let klass = '';
   export { klass as class };

   // Choose color or leave blank for default (primary)
   export let color = ''

   // Define id
   export let id:string = '';

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

   $: titleClasses = `
      font-title py-0 my-0
      ${ color ? color : 'text-primary' } 
      ${ thin ? 'font-semibold' : 'font-bold' }

      ${ leading ? leading 
       : smaller ? '!leading-[0px]'
       : 'leading-none'}

      ${ small ? 'h1-size-sm' : smaller ? 'h2-size' 
       : smallest ? 'h3-size' : 'h1-size'}

      ${ klass }
   `
</script>


{#if fake}
   <span class="{ titleClasses }"
      class:italic>
      <slot/>
   </span>
{:else}
   <h1 class="{ titleClasses }"
      class:italic {id}>
      <slot/>
   </h1>   
{/if}