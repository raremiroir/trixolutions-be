<!-- This component is used in the svelte:component tag -->
<!-- For a conditional div -->

<!--      -->
<!--  JS  -->
<!--      -->
<script>
   let klass = '';
   export { klass as class };
   export let ariaLabel = '';

   // unused props
   export const href= '';
</script>

<!--      -->
<!-- HTML -->
<!--      -->
<div class="{klass}" aria-label={ariaLabel}>
   <slot/>
</div>

