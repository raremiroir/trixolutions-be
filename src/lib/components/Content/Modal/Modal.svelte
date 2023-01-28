<!-- MODAL COMPONENT -->
<!-- 
   NORMAL MODAL MODE:
      Just use modal, use trigger-slot and add content below inside modal-component

   EXTERNAL MODAL MODE:
      Define two external modals, one with trigger prop and one with content prop,
      but both with same id prop
      => Don't use two modals with the same id on one page
 -->

<script lang="ts">
	import LL from '$i18n/i18n-svelte'
   import { fade } from "svelte/transition";
   import { clickOutside } from "$lib/actions";
   
   import { currentModal } from '$src/lib/stores';
	import ModalContent from './ModalContent.svelte';
	import { page } from '$app/stores';

   export let id:number = 0;
   export let icon = '';

   export let width = '';
   export let height = '';

   export let trigger = false;
   export let content = false;
   let isOpen = false;

   let normalModal = false;
   if (!trigger && !content) {
      normalModal = true;
   }

   const openModal = (id:number) => { 
      if (normalModal) {
         isOpen = true;
      } else if (!normalModal) {
         $currentModal = id;
      }
   }
   const closeModal = () => { 
      isOpen = false;
      $currentModal = 0;
   }

</script>

{#if trigger || normalModal}
   <!-- Trigger -->
   <div 
      class="h-fit"
      on:click|stopPropagation={openModal(id)}
      on:keydown={openModal(id)}>
      <slot name="trigger">Open Modal</slot>
   </div>
{/if}

{#if content || normalModal}
   {#if (($currentModal === id && $currentModal !== 0) && !normalModal) || (isOpen && normalModal)}
      <!-- Background -->
      <div class="
            w-full h-full z-99
            fixed top-0 bottom-0 left-0 right-0
         bg-black/70 bg-blend-darken
            flex items-center justify-center"
         transition:fade={{duration:200}}>

            <ModalContent {closeModal} {icon} {width} {height}>
               <slot name="title-prepend" slot="title-prepend"/>
               <slot name="title" slot="title"/>
               <slot/>
            </ModalContent>
      </div>
   {/if}
{/if}