<script lang="ts">
	import Icon from "@iconify/svelte";

   import LL from "$i18n/i18n-svelte"
	import { fade } from "svelte/transition";

   export let showOnPx = 200;

   let hidden = true;

   let scrollY: number;
 
   function goTop() {
     document.body.scrollIntoView();
   }
 
   function scrollContainer() {
     return document.documentElement || document.body;
   }

   $: if (scrollY > showOnPx) {
       hidden = false;
    } else {
       hidden = true;
   }


   const transition = "transition-all duration-300 ease-in-out"
 </script>
 
 <svelte:window bind:scrollY={scrollY} />
 

 {#if !hidden}
   <div 
      transition:fade={{ duration: 200 }}
      role="button"
      title="{$LL.base.btn.back_to_top()}"
      class="
         opacity-80 hover:opacity-100 
         fixed w-14 h-14
         { transition }
         rounded-full shadow-md
         99 right-5 bottom-5 group
         bg-primary-d1 hover:bg-primary-d3
         select-none cursor-pointer
         flex items-center justify-center
         " 
      on:click={goTop} 
      on:keydown={goTop}>
      <Icon
         icon="material-symbols:keyboard-double-arrow-up-rounded"
         class="text-gray-50 group-hover:text-gray-100 h-10 w-10 { transition }"
      />
   </div>
 {/if}