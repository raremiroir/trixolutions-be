<!-- This component is used in the svelte:component tag -->
<!-- For a conditional div -->

<!--      -->
<!--  JS  -->
<!--      -->
<script>
   export let klass = '';
</script>

<!--      -->
<!-- HTML -->
<!--      -->
<div class="{klass}">
   <slot/>
</div>

