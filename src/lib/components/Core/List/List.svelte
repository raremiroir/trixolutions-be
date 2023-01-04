<script>
   // Add extra classes to component
   let klass = ''
   export { klass as class };
   export let title = false;
</script>

<div class="{klass} w-full">
   {#if title}
      <slot name="title"/>
   {/if}
   <ul class="font-lg font-body">
      <slot/>
   </ul>
</div>