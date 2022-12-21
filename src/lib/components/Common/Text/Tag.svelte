<script>

   export let klass = ''

   export let outlined = false;
   export let small = false;
   export let large = false;
</script>


<span 
   class="
      { outlined ? 'border-2 border-primary' 
      : 'bg-primary/30'}
      { large ? 'text-lg shadow-lg font-semibold' 
      : small ? 'text-sm shadow-sm font-medium' 
      : 'text-base shadow-md font-semibold'}
      font-body uppercase text-primary/90
      w-fit
      px-1 pb-0.5 pt-1  rounded-md tracking-wider
      {klass}
   ">
   <slot>Tag</slot>
</span>