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

// Use smaller h6 case
   export let small = false;

</script>

<!--      -->
<!-- HTML -->
<!--      -->

<div class="{klass}">
   <!-- If type is h1 -->
   {#if type === 'h1'}
      <h1 class="
            font-title font-bold leading-none
            {color ? color : 'text-primary'} 
            {small ? 'text-7xl' : 'h1-size'}">
         <slot/>
      </h1>
      <!-- If type is h2 -->
   {:else if type === 'h2'}
      <h2 class="
            font-title font-bold
            {color ? color : 'text-primary'} 
            {small ? 'text-5xl' : 'h2-size'}">
         <slot/>
      </h2>
   <!-- If type is h3 -->
   {:else if type === 'h3'}
      <h3 class="
            font-title leading-tight font-bold
            {color ? color : 'text-primary-d1'} 
            {small ? 'text-3xl' : 'h3-size'}">
         <slot/>
      </h3>
   <!-- If type is h4 -->
   {:else if type === 'h4'}
      <h4 class="
            font-title leading-normal font-bold
            {color ? color : 'text-primary-d1'} 
            {small ? 'text-2xl' : 'h4-size'}">
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
   <!-- If type is other title -->
   {:else if type === 'subtitle' || type === 'subheader'}
      <span class="
            { color ? color : 'text-gray-600' }
            { type === 'subheader' ? 'subheader-size italic font-normal font-title'
            : type === 'subtitle' ? 'subtitle-size'
            : ''}
         ">
         <slot/>
      </span>
   {/if}
</div>

<!--       -->
<!-- STYLE -->
<!--       -->
<style>
   .h1-size {
      font-size: clamp(3rem, 2.2308rem + 3.0769vw, 5rem);
   }
   .h2-size {
      font-size: clamp(2rem, 1.4231rem + 2.3077vw, 3.5rem);
   }
   .h3-size {
      font-size: clamp(1.75rem, 1.2692rem + 1.9231vw, 3rem);
   }
   .h4-size {
      font-size: clamp(1.5rem, 1.1154rem + 1.5385vw, 2.5rem);
   }
   .h5-size {
      font-size: clamp(1.25rem, 0.9615rem + 1.1538vw, 2rem);
   }
   .h6-size {
      font-size: clamp(1.125rem, 0.8846rem + 0.9615vw, 1.75rem);
   }
   .subtitle-size {
      font-size: clamp(1.125rem, 0.8846rem + 0.9615vw, 1.75rem);
   }
   .subheader-size {
      font-size: clamp(1.25rem, 0.9615rem + 1.1538vw, 2rem);
   }
</style>
