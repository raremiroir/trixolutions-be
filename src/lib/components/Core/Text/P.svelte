<script lang="ts">

   // Define extra classes 
   let klass = '';
   export { klass as class };

   // unused props
   export const content = '';
</script>

<p class={klass}>
   <slot/>
</p>