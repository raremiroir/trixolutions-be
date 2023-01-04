<script>

   // Set author or quote
   export let author = ''

</script>

<blockquote 
   class="
      border-l-4 border-primary 
      px-4 py-2 mx-4 my-2 
      flex flex-col gap-2
      italic font-body font-bold text-xl 
      text-primary">
   <slot></slot>
   {#if author !== ''}
      <span class="font-body italic font-medium">~ {author}</span>
   {/if}
</blockquote>