<!-- MODAL COMPONENT -->
<!-- 
   EXTERNAL MODAL MODE:
      Define two external modals, one with trigger prop and one with content prop,
      but both with same id prop
      => Don't use two modals with the same id on one page
 -->

 <script lang="ts">
   import { fade } from "svelte/transition";
   
   import { currentModal } from '$src/lib/stores';
	import ModalContent from './ModalContent.svelte';

   export let id:number = 0;
   export let icon = '';

   export let width = '';
   export let height = '';

   export let trigger = false;
   export let content = false;

</script>

{#if trigger}
   <!-- Trigger -->
   <div 
      class="h-fit"
      on:click|stopPropagation={() => $currentModal = id}
      on:keydown={() => $currentModal = id}>
      <slot name="trigger">Open Modal</slot>
   </div>
{/if}

{#if content && $currentModal === id}
   <!-- Background -->
   <div class="
         cursor-zoom-out
         w-full h-full z-99
         fixed top-0 bottom-0 left-0 right-0
      bg-black/70 bg-blend-darken
         flex items-center justify-center"
      transition:fade={{duration:200}}>

         <ModalContent 
            closeModal={() => $currentModal = 0} 
            {icon} {width} {height}
         >
            <slot name="title-prepend" slot="title-prepend"/>
            <slot name="title" slot="title"/>
            <slot/>
         </ModalContent>
   </div>
{/if}