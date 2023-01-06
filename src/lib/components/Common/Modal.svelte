<script lang="ts">
   import { _ } from "svelte-i18n";
   import { fade } from "svelte/transition";
   import { clickOutside } from "$lib/actions";
   import { firstLetterCase } from "$utils";

	import Icon from "@iconify/svelte";
   import { Title } from "$comp/core";
   import { Tooltip } from "$comp/common";


   let isOpen = false;
   const openModal = () => { isOpen = true }
   const closeModal = () => { isOpen = false }
</script>


<!-- Trigger -->
<div 
   class=""
   on:click|stopPropagation={openModal}
   on:keydown={openModal}>
   <slot name="trigger">Open Modal</slot>
</div>


{#if isOpen}
   <!-- Background -->
   <div class="
         w-full h-full z-99
         fixed top-0 bottom-0 left-0 right-0
       bg-black/70 bg-blend-darken
         flex items-center justify-center"
        transition:fade={{duration:200}}>

         <!-- Box -->
         <div 
            use:clickOutside on:click_outside={closeModal}
            class="
               w-fit h-fit 
               min-h-[12rem] min-w-[12rem]
               mx-auto p-4
               rounded-2xl shadow-2xl shadow-black/70
               bg-white">
            
            <!-- Header Wrap -->
            <div class="px-2 w-full flex justify-between items-center gap-8">
               <div class="pt-2">
                  <slot name="title-prepend" />
                  <slot name="title">
                     <Title type="h3" small>
                        Modal Title
                     </Title>
                  </slot>
               </div>
               <div class="h-8 w-8">
                  <Tooltip
                     color="error"
                     title={firstLetterCase($_('base.btn.close'))}
                     placement="bottom-9 left-1/2 -translate-x-1/2">
                     <div 
                        class="w-full h-full"
                        on:click|stopPropagation={closeModal}
                        on:keydown={closeModal}>
                        <Icon 
                           icon="material-symbols:close-rounded" 
                           class="
                              cursor-pointer
                              rounded-full h-full w-full
                              bg-error/70 hover:bg-error
                              hover:shadow-sm
                              text-white p-1
                              transition-all duration-200 ease-in-out
                              "/>
                     </div>
                  </Tooltip>
               </div>
            </div>
            <hr class="border-2 border-primary/70"/>

         </div>
   </div>
{/if}