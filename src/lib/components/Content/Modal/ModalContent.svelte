<script lang="ts">
	import { clickOutside } from '$lib/actions';
	import Icon from '@iconify/svelte';
	import { Title } from '$comp';
	import CloseModalBtn from './CloseModalBtn.svelte';

	export let closeModal: any;
   export let icon = '';

   export let width = '';
   export let height = '';
</script>

<!-- Box -->
<div
	use:clickOutside
	on:click_outside={closeModal}
	class="
   {width ? width : 'w-fit min-w-[60%] xl:min-w-[40%] max-w-[90%] xl:max-w-[75%]'}
   {height ? height : 'h-fit max-h-[80%]'} 
   cursor-default
   overflow-y-auto overflow-x-hidden
   mx-auto pb-4 px-4 pt-2
   rounded-2xl shadow-2xl shadow-black/70
   bg-white flex flex-col justify-between"
>
   <div class="flex flex-col justify-start">
      <!-- Header Wrap -->
      <div class="w-full flex justify-between items-center gap-8">
         <div class="pt-2 flex flex-row justify-start items-center gap-2">
            {#if icon}
               <Icon {icon} class="w-10 h-10 text-primary" />   
            {/if}
            <slot name="title-prepend" />
            <div class="{icon ? 'pt-1' : ''}">
               <slot name="title">
                  <Title type="h3" small>Modal Title</Title>
               </slot>
            </div>
         </div>
         
         <CloseModalBtn onClick={closeModal} />
      </div>
   
      <hr class="border-2 border-primary/70" />
   
      <div class="py-4 px-1">
         <slot />
      </div>
   </div>

	<hr class="border-2 border-primary/70" />
</div>
