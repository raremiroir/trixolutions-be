<!--      -->
<!--  JS  -->
<!--      -->
<script>

   // Add extra classes when component is called
   export let klass = '';
   // Color of text (leave blank for dark gray)
   export let color = ''
   // Larger text?
   export let large = false
   // Set Thickness
   export let thickness = 'font-normal'
   // Italic text?
   export let italic = false
   // Set font family
   export let fontfam = 'font-body'
   
</script>


<!--      -->
<!-- HTML -->
<!--      -->
<p 
   class="
      { color ? color : 'text-gray-800' }
      { fontfam } { thickness }
      { italic ? 'italic' : '' }
      { large ? 'text-lg' : 'text-base' } 
      leading-normal
      { klass }
      ">
   <slot/>
</p>