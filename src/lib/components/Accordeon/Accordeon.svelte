<script>
   import { slide } from "svelte/transition";

	import Icon from "@iconify/svelte";
	import Title from "../Common/Text/Title.svelte";

   // Set title
   export let title = '';
   // Set title type
   export let titleType = 'h3'
   // Title small case
   export let titleSmall = false
   // Title smaller case
   export let titleSmaller = false
   // Title smallest case
   export let titleSmallest = false

   let accordeonOpen = false;
   const triggerAccordeon = () => {
      accordeonOpen = !accordeonOpen;
   }

</script>


<div class="flex-col flex">
   <div class="
         flex flex-row justify-between items-center 
         transition-all duration-300 ease-out
         { accordeonOpen ? 'rounded-t-xl' : 'rounded-xl'} 
         { accordeonOpen ? 'hover:border-b-primary-l1 ' : 'border-transparent'} 
         border-b-4 border-t-4 border-transparent
         cursor-pointer group
         bg-white hover:bg-white/40
         px-4 py-2 
         shadow-md hover:shadow-lg hover:shadow-black/20"
         on:click={() => triggerAccordeon()}
         on:keydown|preventDefault={() => triggerAccordeon()}
         >
      
      <div class="">
         <Title 
            type="{titleType}" 
            color="text-primary group-hover:text-primary-l1" 
            small={titleSmall} smaller={titleSmaller} smallest={titleSmallest}
            klass="pt-1">
            {title}
         </Title>
      </div>
      
      <div class="">
         <div class="
               w-fit h-fit p-1 
               rounded-full 
               bg-primary group-hover:bg-primary-l1
               group-active:scale-90 group-active:bg-primary-l2 
               { accordeonOpen ? 'rotate-90 group-active:rotate-0' : 'rotate-0 group-active:rotate-90'} 
               transition-all duration-300 ease-out">
            <Icon icon="material-symbols:arrow-right-alt-rounded" color="#fff" class=" " width="40" />
         </div>
      </div>
   </div>
   
   {#if accordeonOpen}
      <div class=" 
            transition-all duration-300 ease-out
            rounded-b-xl bg-white px-4 pt-2 pb-4 
            shadow-lg shadow-black/20"
            transition:slide>
         <slot>Something Here!</slot>
      </div>
   {/if}
</div>