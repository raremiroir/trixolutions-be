<!-- This component is used in the svelte:component tag -->
<!-- For a conditional div -->

<!--      -->
<!--  JS  -->
<!--      -->
<script>
   let klass = '';
   export { klass as class };
</script>

<!--      -->
<!-- HTML -->
<!--      -->
<div class="{klass}">
   <slot/>
</div>

