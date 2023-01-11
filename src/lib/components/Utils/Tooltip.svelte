<script>
   // Import svelte transitions
   import { fly } from "svelte/transition";

   // Set tooltip text
   export let title = '';
   // Set extra classes on tooltip component when called
   let klass = '';
   export { klass as class };

   // Set placement of tooltip
   export let placement = 'bottom-2 left-0 ';
   // Set length to fly on y-axis
   export let flyY = 8;
   // Set length to fly on x-axis
   export let flyX = 0;

   // Choose color
   // -- primary - error - success - warning - info
   export let color = 'primary'

   // Tooltip small variant
   export let small = false;

   // Is the user hovering over the trigger?
   let isHovered = false;
   let x = 0;
   let y = 0;
   // If user is hovering over trigger, set isHovered to true and
   // add 5 to position of mouse
   const mouseOver = (e) => {
      isHovered = true;
      x = e.pageX + 5;
      y = e.pageY + 5;
   }
   // when user is hovering over trigger and mouse moves, add 5 to position
   const mouseMove = (e) => {
      x = e.pageX + 5;
      y = e.pageY + 5;
   }
   // If user stops hovering over trigger, set isHovered to false
   const mouseLeave = () => {
      isHovered = false;
   }


</script>

<div class="relative">
   <div  on:mouseover={mouseOver}
         on:mouseleave={mouseLeave}
         on:mousemove={mouseMove} on:focus
         class="{klass}">
      <slot/>
   </div>
   {#if isHovered}
      <div 
         transition:fly={{duration:300, y:flyY, x:flyX}}
         class="
            absolute
            backdrop-blur-lg
            {placement}
            z-2 whitespace-nowrap
            { small ? 'text-xs border opacity-80' : 'text-sm border-2 opacity-100'} 
            font-semibold 
            { small ? 'px-1 py-0.5' : 'px-2 py-1'} 
            rounded-lg shadow-lg
            { color === 'primary' ? 'bg-primary-l2/10 text-primary-l3 border-primary-l3 '
            : color === 'error'   ? 'bg-error-l/10    text-error-d    border-error-d'
            : color === 'success' ? 'bg-success-l/10  text-success-d  border-success-d'
            : color === 'warning' ? 'bg-warning-l/10  text-warning-d  border-warning-d'
            : color === 'info'    ? 'bg-info-l/10     text-info-d     border-info-d'
            : color }
         "> 
         {title}
      </div>   
   {/if}
</div>
