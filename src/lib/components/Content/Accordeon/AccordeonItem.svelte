<script lang="ts">
   import { getContext } from "svelte";
   import { slide } from "svelte/transition";

   import { Title } from "$comp";
	import Icon from "@iconify/svelte";

   // set id
   export let id:number;
   // Set title
   export let title:string;
   // Set title type
   export let titleType = ''
   // Title small case
   export let titleSmall = false
   // Title smaller case
   export let titleSmaller = false
   // Title smallest case
   export let titleSmallest = false

   // Set icon if needed
   export let icon = ''

   let isHovered = false
   let isFocused = false

   const active = getContext("context");
   $: isCurrentActive = $active === id;

   const onClickHandler = () => {
      if (isCurrentActive) { $active = null }
      else { $active = id }
   }

   const transition = "transition-all duration-300 ease-in-out"
</script>


<div class="
      flex-col flex 
      rounded-xl overflow-hidden
      {transition}
      shadow-md hover:shadow-lg hover:shadow-black/20">
   <div class="
         flex flex-row justify-between items-center 
         {transition} group
         { isCurrentActive ? 'border-b-primary/50 hover:border-b-primary-l1 ' : 'border-transparent'} 
         border-b-4 border-t-4 border-transparent
         cursor-pointer
         bg-white group-hover:bg-white/40
         px-4 py-2 "
         on:click={() => onClickHandler()}
         on:keydown|preventDefault={() => onClickHandler()}
         on:mouseenter={() => isHovered = true}
         on:mouseleave={() => isHovered = false}
         >
      
      <div class="flex items-center justify-start gap-2 {transition}">
         {#if icon !== ''}
            <Icon 
               {icon} 
               class="
                  w-10 h-10 bg-transparent 
                  transition-all duration-300 ease-in-out
                  text-primary group-hover:text-primary-l1" 
            />
         {/if}
         <Title 
            type="{titleType ? titleType : 'h3'}" 
            color="text-primary group-hover:text-primary-l1" 
            small={titleSmall} smaller={titleType ? titleSmaller : true} smallest={titleSmallest}
            class="{icon ? 'pt-2' : 'pt-1'}">
            {title}
         </Title>
      </div>
      
      <div class="">
         <div class="
               w-fit h-fit p-1 
               rounded-full 
               bg-primary group-hover:bg-primary-l1
               group-active:scale-90 group-active:bg-primary-l2 
               { isCurrentActive ? 'rotate-90 group-active:rotate-0' : 'rotate-0 group-active:rotate-90'} 
               {transition}">
            <Icon 
               icon="material-symbols:arrow-right-alt-rounded" 
               color="#fff" 
               class="h-auto w-6 md:w-8 lg:w-10" 
               />
         </div>
      </div>
   </div>
   
   {#if isCurrentActive}
      <div class=" 
            {transition}
            rounded-b-xl bg-white px-4 pt-2 pb-4 
            shadow-lg shadow-black/20"
            transition:slide>
         <slot>Something Here!</slot>
      </div>
   {/if}
</div>