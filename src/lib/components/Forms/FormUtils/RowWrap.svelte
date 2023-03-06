
<script>
   export let cols = 1;
</script>

<div 
   class="flex flex-col lg:flex-row gap-1 md:gap-2 lg:gap-4"
   aria-rowcount={1} aria-colcount={cols} aria-orientation="horizontal" 
   role="row">
   <slot/>
</div>