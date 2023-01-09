<script lang="ts">
	import LL from '$i18n/i18n-svelte'
   import { fade } from "svelte/transition";
   import { clickOutside } from "$lib/actions";
   import { firstLetterCase } from "$utils";

	import Icon from "@iconify/svelte";
   import { Title } from "$comp/core";
   import { Tooltip } from "$comp/common";
	import CloseModalBtn from './CloseModalBtn.svelte';
	import ModalContent from './ModalContent.svelte';

   export let icon = '';

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
         <ModalContent closeModal={() => closeModal()} {icon}>
            <slot name="title-prepend" slot="title-prepend"/>
            <slot name="title" slot="title"/>
            <slot/>
         </ModalContent>
   </div>
{/if}