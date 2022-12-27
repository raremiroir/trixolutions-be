<!--      -->
<!--  JS  -->
<!--      -->
<script>

// Add extra classes when calling component
   export let klass = ''

// Choose type of title or leave blank for default (h2)
   export let type = 'h2'

// Choose color or leave blank for default (primary)
   export let color = ''

// Use small case
   export let small = false;
// Use smaller case
   export let smaller = false;
// Use smallest case
   export let smallest = false;
// Use larger case
   export let large = false;

</script>

<!--      -->
<!-- HTML -->
<!--      -->

<div class="m-0 p-0 {klass}">
   <!-- If type is h1 -->
   {#if type === 'h1'}
      <h1 class=" text-xl
            font-title font-bold leading-none
            {color ? color : 'text-primary'} 
            {small ? 'text-7xl' : 'h1-size'}">
         <slot/>
      </h1>
   {:else if type === 'fake-h1'}
      <span class=" text-xl
            font-title font-bold leading-none
            {color ? color : 'text-primary'} 
            {small ? 'text-7xl' : 'h1-size'}">
         <slot/>
      </span>
      <!-- If type is h2 -->
   {:else if type === 'h2'}
      <h2 class="
            font-title font-bold leading-none
            { color ? color : 'text-primary'} 
            { small ? 'h3-size'
            : smaller ? 'h4-size'
            : smallest ? 'h6-size'
            : large ? 'h1-size-sm'
            : 'h2-size'}">
         <slot/>
      </h2>
   <!-- If type is h3 -->
   {:else if type === 'h3'}
      <h3 class="
            font-title leading-tight font-bold
            { color ? color : 'text-primary-d1' } 
            { small ? 'h4-size' 
            : smaller ? 'h6-size'
            : smallest ? 'h6-size-sm'
            : 'h3-size'}">
         <slot/>
      </h3>
   <!-- If type is h4 -->
   {:else if type === 'h4'}
      <h4 class="
            font-title leading-normal font-bold
            { color ? color : 'text-primary-d1' } 
            { small ? 'h5-size' 
            : smaller ? 'h6-size-sm'
            : smallest ? ''
            : 'h4-size'}">
         <slot/>
      </h4>
   <!-- If type is h5 -->
   {:else if type === 'h5'}
      <h5 class="
            font-title leading-normal font-semibold
            {color ? color : 'text-primary-d2'} 
            {small ? 'text-xl' : 'h5-size'}">
         <slot/>
      </h5>
   <!-- If type is h6 -->
   {:else if type === 'h6'}
      <h6 class="
            font-title leading-normal 
            {color ? color : 'text-primary-d2'} font-semibold italic
            {small ? 'text-lg' : 'h6-size'}">
         <slot/>
      </h6>
   <!-- If type is subtitle -->
   {:else if type === 'subtitle'}
      <span class="
            { color ? color : 'text-gray-600' }
            { small ? 'subtitle-size-sm' 
            : smaller ? 'subtitle-size-xs' 
            : 'subtitle-size'}
            italic font-normal font-title
         ">
         <slot/>
      </span>
   <!-- If type is subheader -->
   {:else if type === 'subtitle' || type === 'subheader'}
      <span class="
            { color ? color : 'text-primary' }
            subheader-size font-normal font-title
         ">
         <slot/>
      </span>
   {/if}
</div>

<!--       -->
<!-- STYLE -->
<!--       -->
<style>
   /*  clamp.font-size.app
       vw 400-1200 */
   
   .h1-size { font-size: clamp(3rem, 2rem + 4vw, 5rem); }
   .h1-size-sm { font-size: clamp(2.5rem, 1.375rem + 4.5vw, 4.75rem); }
   .h2-size { font-size: clamp(2rem, 0.75rem + 5vw, 4.5rem); }
   .h3-size { font-size: clamp(1.75rem, 1.125rem + 2.5vw, 3rem); }
   .h4-size { font-size: clamp(1.5rem, 1rem + 2vw, 2.5rem); }
   .h5-size { font-size: clamp(1.25rem, 0.875rem + 1.5vw, 2rem); }
   .h6-size { font-size: clamp(1.125rem, 0.8125rem + 1.25vw, 1.75rem); }
   .h6-size-sm { font-size: clamp(1rem, 0.875rem + 0.5vw, 1.25rem); }
   .h6-size-xs { font-size: clamp(0.875rem, 0.75rem + 0.5vw, 1.125rem); }

   .subtitle-size { font-size: clamp(1.125rem, 0.8125rem + 1.25vw, 1.75rem); }
   .subtitle-size-sm { font-size: clamp(1rem, 0.875rem + 0.5vw, 1.25rem); }
   .subtitle-size-xs { font-size: clamp(0.875rem, 0.75rem + 0.5vw, 1.125rem); }
   .subheader-size { font-size: clamp(1.25rem, 0.875rem + 1.5vw, 2rem); }
</style>
