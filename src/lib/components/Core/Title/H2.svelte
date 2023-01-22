<!-- 
██   ██ ██████  
██   ██      ██ 
███████  █████  
██   ██ ██      
██   ██ ███████ 
-->

<!--
▄▄▄ ▄▄▄ 
 █  █▄
 █   ▀█
 ▀  ▀▀▀
-->
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

<!--
▄  ▄ ▄▄▄ ▄▄   ▄▄ ▄
█▄▄█  █  █ █ █ █ █
█▀▀█  █  █ █ █ █ █
▀  ▀  ▀  ▀  ▀  ▀ ▀▀▀
-->
<h2 class="
      font-title
      { color ? color : 'text-primary' } 
      { leading ? leading : 'leading-none'}
      { thin ? 'font-semibold' : 'font-bold' }
      { small ? 'h3-size' : smaller ? 'h4-size'
      : smallest  ? 'h6-size' : large   ? 'h1-size-sm'
      : 'h2-size'}
      { klass }"
    class:italic>
   <slot/>
</h2>