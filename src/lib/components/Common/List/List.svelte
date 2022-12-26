<script>
   // Add extra classes to component
   export let klass = ''
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