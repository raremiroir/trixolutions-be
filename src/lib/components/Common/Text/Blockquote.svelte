<script>

   // Set author or quote
   export let author = ''

   author = author.substring(0, 1) + '.' + author.substring(author.indexOf(' '));

</script>

<blockquote 
   class="
      border-l-4 border-primary 
      pl-4 py-2 ml-4 w-2/3
      flex flex-col gap-2
      italic font-body font-bold text-xl 
      text-primary">
   <slot></slot>
   {#if author}
      <span class="font-body italic font-medium">~ {author}</span>
   {/if}
</blockquote>