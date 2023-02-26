<!-- This component is used in the svelte:component tag -->
<!-- For a conditional div -->

<!--      -->
<!--  JS  -->
<!--      -->
<script>
   let klass = '';
   export { klass as class };
   export let ariaLabel = '';

   // Unused props
   export let href = '';
   export let fill = false;
   export let wrap = false;
   $: {href, fill, wrap};
</script>

<!--      -->
<!-- HTML -->
<!--      -->
<div class="{klass}" aria-label={ariaLabel}>
   <slot/>
</div>

