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

<div 
   on:mouseover={mouseOver}
   on:mouseleave={mouseLeave}
   on:mousemove={mouseMove} on:focus
   class="{klass} relative"
>
   <slot/>
   {#if isHovered}
      <div 
         transition:fly={{duration:300, y:flyY, x:flyX}}
         class="
            absolute opacity-100
            backdrop-blur-lg
            {placement}
            whitespace-nowrap z-2
            bg-primary-l2/10 text-primary-l3
            text-sm font-semibold 
            px-2 py-1 rounded-lg
            border-primary-l3 border-2 shadow-lg
         "> 
         {title}
      </div>   
   {/if}
</div>
