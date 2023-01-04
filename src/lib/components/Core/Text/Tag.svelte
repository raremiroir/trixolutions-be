<!-- JS -->
<script>
   // Add extra classes on component when called
   let klass = ''
   export { klass as class }

   // Outlined style
   export let outlined = false;
   // Primary style (false for normal style)
   export let primary = false;
   // Smaller tag
   export let small = false;
   // Larger tag
   export let large = false;
</script>

<!-- HTML -->
<span 
   class="
      { outlined ? 'border-primary text-primary/90' 
      : primary ? 'bg-primary text-gray-100 border-primary'
      : 'bg-primary/30 text-primary/90 border-primary/30'}
      { large ? 'text-lg shadow-lg font-semibold' 
      : small ? 'text-sm shadow-sm font-medium' 
      : 'text-base shadow-md font-semibold'}
      font-body uppercase border-2
      w-fit whitespace-nowrap
      px-1 pb-0.5 pt-1  rounded-md tracking-wider
      {klass}
   ">
   <slot>Tag</slot>
</span>