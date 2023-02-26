
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
   // Use smaller case
      export let smallest = false;
   // Use larger case
      export let large = false;
   // Need custom leading?
      export let leading = '';

   // Make title italic
      export let italic = false;
   // Make title thinner
      export let thin = false;

   // Unused props
   export let fake = false;
   $: fake;
</script>

<span class="
      font-title
      { color ? color : 'text-gray-600' } 
      { leading ? leading : 'leading-none'}
      { thin ? 'font-light' : 'font-normal' }
      { small ? 'subtitle-size-sm' : smaller ? 'subtitle-size-xs'
      : smallest ? 'subtitle-sise-xxs' : large   ? 'h5-size'
      : 'subtitle-size'}
      { klass }"
    class:italic>
   <slot/>
</span>