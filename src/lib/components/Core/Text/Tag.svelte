<!-- JS -->
<script>
   // Add extra classes on component when called
   let klass = ''
   export { klass as class }

   // Outlined style (false for default style)
   export let outlined = false;
   // Primary style (false for default style)
   export let primary = false;
   // Secondary style (false for default style)
   export let secondary = false;

   // Rounded tag
   export let rounded = false;

   // Smaller tag
   export let small = false;
   // Larger tag
   export let large = false;

   // Lowercase
   export let lowercase = false;
   // Bold font
   export let bold = false;

</script>

<!-- HTML -->
<span 
   class="
      { outlined ? 'border-primary text-primary/90' 
      : primary ? 'bg-primary text-gray-100 border-primary'
      : secondary ? 'bg-gray-200 text-gray-700 border-gray-200'
      : 'bg-primary/30 text-primary/90 border-primary/30'}

      { large ? 'text-lg shadow-lg font-semibold' 
      : small ? 'text-sm shadow-sm font-medium' 
      : 'text-base shadow-md font-semibold'}

      { lowercase ? 'capitalize' : 'uppercase' }
      { rounded ? 'rounded-full' : 'rounded-md' }
      
      font-body tracking-wider 
      { bold ? 'font-semibold' : 'font-normal'} 
      whitespace-nowrap
      w-fit border-2
      px-1 pb-0.5 pt-1  
      {klass}
   ">
   <slot>Tag</slot>
</span>