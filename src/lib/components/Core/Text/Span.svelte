<script lang="ts">

   // Define extra classes 
   let klass = '';
   export { klass as class };
</script>

<span class={klass}>
   <slot/>
</span>