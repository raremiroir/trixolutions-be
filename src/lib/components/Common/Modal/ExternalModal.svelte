<script lang="ts">
	import LL from '$i18n/i18n-svelte'
   import { fade } from "svelte/transition";
   import { clickOutside } from "$lib/actions";
   
   import { currentModal } from '$src/lib/stores';
	import ModalContent from './ModalContent.svelte';

   export let id:number = 1;

   const openModal = (id:number) => { 
      $currentModal = id;
   }
   const closeModal = () => { 
      $currentModal = 0;
   }

   export let trigger = false;
   export let content = false;
</script>

{#if trigger}
   <!-- Trigger -->
   <div 
      class="h-full"
      on:click|stopPropagation={openModal(id)}
      on:keydown={openModal(id)}>
      <slot name="trigger">Open Modal</slot>
   </div>
{/if}

{#if content}
   {#if $currentModal === id && $currentModal !== 0}
      <!-- Background -->
      <div class="
            w-full h-full z-99
            fixed top-0 bottom-0 left-0 right-0
         bg-black/70 bg-blend-darken
            flex items-center justify-center"
         transition:fade={{duration:200}}>

            <ModalContent closeModal={() => closeModal()}>
               <slot name="title-prepend" slot="title-prepend"/>
               <slot name="title" slot="title"/>
               <slot/>
            </ModalContent>
      </div>
   {/if}
{/if}