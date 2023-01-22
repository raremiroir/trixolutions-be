
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


<h3 class="
      font-title
      { color ? color : 'text-primary-d1' } 
      { leading ? leading : 'leading-tight'}
      { thin ? 'font-semibold' : 'font-bold' }
      { small ? 'h4-size' : smaller ? 'h6-size'
      : smallest  ? 'h6-size-sm' : large   ? 'h2-size'
      : 'h3-size'}
      { klass }"
    class:italic>
   <slot/>
</h3>