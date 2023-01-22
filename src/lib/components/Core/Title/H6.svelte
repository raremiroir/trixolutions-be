
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
   // Use larger case
      export let large = false;
   // Need custom leading?
      export let leading = '';

   // Make title italic
      export let italic = false;
   // Make title thinner
      export let thin = false;
</script>


<h6 class="
      font-title
      { color ? color : 'text-primary' } 
      { leading ? leading : 'leading-none'}
      { thin ? 'font-normal' : 'font-semibold' }
      { small ? 'h6-size-sm' : smaller ? 'h6-size-xs'
      : smallest  ? 'subtitle-size-xs' : large   ? 'h5-size'
      : 'h6-size'}
      { klass }"
    class:italic>
   <slot/>
</h6>