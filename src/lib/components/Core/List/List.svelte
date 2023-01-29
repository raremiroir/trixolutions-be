<script>
   // Add extra classes to component
   let klass = ''
   export { klass as class };
   export let title = false;

   // Create ordered list
   export let ordered = false;

   const listClass= 'font-lg font-body'
</script>

<div class="{klass} w-full">
   {#if title}
      <slot name="title"/>
   {/if}
   {#if ordered}
      <ol class="{listClass} !list-decimal prose-li:!list-decimal">
         <slot/>
      </ol>
   {:else}
      <ul class={listClass}>
         <slot/>
      </ul>
   {/if}
</div>