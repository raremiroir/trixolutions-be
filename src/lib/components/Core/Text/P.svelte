<!--      -->
<!--  JS  -->
<!--      -->
<script>

   // Add extra classes when component is called
   let klass = '';
   export { klass as class };

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
   
   // Center text?
   export let center = false;
   
</script>


<!--      -->
<!-- HTML -->
<!--      -->
<p class="
      { center ? 'text-center' : '' }
      { color ? color : 'text-gray-800' }
      { fontfam } { thickness }
      { italic ? 'italic' : '' }
      { large ? 'text-lg' : 'text-base' } 
      leading-normal
      { klass }
      ">
   <slot/>
</p>