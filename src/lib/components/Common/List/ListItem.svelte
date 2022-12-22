<script>
   // Add extra classes to component
   export let klass = ''
   // Large text?
   export let large = false;
</script>

<li class="
      list-disc 
      ml-8 pl-1
      font-body leading-relaxed 
      { large ? 'text-lg' : 'text-base' }
      text-gray-800 
      {klass}">
   <slot/>
</li>