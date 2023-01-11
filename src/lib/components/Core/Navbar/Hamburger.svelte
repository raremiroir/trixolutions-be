<!--      -->
<!--  JS  -->
<!--      -->
<script lang="ts">
   import { Button } from "$comp";

   export let color = `
      bg-primary group-hover:bg-primary-l1 group-hover:drop-shadow-lg
      group-hover:shadow-primary-l3/70`
   
   export let onClick:any;
   export let onCheck:any;
</script>

<style>
   span.hamburgerTransition {
      transition: 
         background-color 300ms cubic-bezier(0, 0, 0.2, 1), 
         transform 300ms cubic-bezier(0.00, 1.89, 0.52, 2.25);
   }
</style>

<Button 
   color="transparent" on:click={onClick}
   size="square-md" rounded flat class="group flex items-center justify-center">
   <label for="check" class="flex flex-col justify-center items-end w-5 relative cursor-pointer">
      <input type="checkbox" id="check" bind:checked={onCheck} on:click={onClick}
            class="hidden peer"/>
      <span class="hamburgerTransition
               {color} rounded-xl h-[3px] w-1/2 
               my-[1.5px] mx-0 ease-x
               peer-checked:-translate-x-[8.5px] peer-checked:translate-y-[1.5px]
               peer-checked:origin-bottom 
               peer-checked:rotate-45"/>
      <span class="hamburgerTransition
               {color} rounded-xl h-[3px] w-full
               mx-0 my-[1.5px]
               peer-checked:origin-top 
               peer-checked:-rotate-45"/>
      <span class="hamburgerTransition
               {color} rounded-xl h-[3px] w-3/4
               my-[1.5px] mx-0 
               peer-checked:-translate-x-[1.5px] peer-checked:-translate-y-[3.5px]
               peer-checked:w-1/2 
               peer-checked:origin-bottom 
               peer-checked:rotate-45"/>
   </label>
</Button>