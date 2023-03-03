<script>
	import Icon from "@iconify/svelte";
	import { fade, fly } from "svelte/transition";
import Input from "./Input.svelte";

   export let checked = false;
   $: checked;
   export let name = '';
   export let required = false;
   export let disabled = false;

   export let size = 'md';

   let value = checked ? "1" : "0";
   const toggleChecked = () => {
      if (disabled) return;
      value = value === "1" ? "0" : "1";
      checked = value === "1";
   }

   const transition = "transition-all duration-300 ease-in-out"
</script>


<div
   on:click|preventDefault={() => toggleChecked()}
   on:keydown|preventDefault={() => toggleChecked()}
   class="
      flex flex-row items-center gap-1 group
      { disabled ? 'opacity-60 cursor-default' : 'opacity-100 cursor-pointer' }">

   <div 
      class="
         border border-primary-d3 rounded-full 
         { checked ? 'bg-success-d/50' : 'bg-error/50' }
         { transition }
         { size === 'sm' ? `w-9 h-5`
         : size === 'md' ? `w-10 h-6`
         : ''}  
         shadow-md
         shadow-black/30 group-hover:shadow-black/40
         relative">
      <div class="
            bg-primary 
            { size === 'sm' ? `w-[18px] h-[18px] ${ disabled ? '' : 'group-active:w-6'}`
            : size === 'md' ? `w-[22px] h-[22px] ${ disabled ? '' : 'group-active:w-7'}`
            : ''} 
            
            top-0 
            rounded-full absolute flex items-center justify-center
            {transition}
            { checked ? `translate-x-4 ${ disabled ? '' : 'group-active:translate-x-[10px]' }` 
            : 'translate-x-0'}
            ">
         {#if checked}
               <Icon
                  class="text-white"
                  icon="ic:round-check"
               />
         {:else}
               <Icon
                  class="text-white"
                  icon="ic:round-close"
               />
         {/if}
      </div>

   </div>
   <Input
      class="hidden" 
      type="checkbox"
      bind:value
      {name}
      {required} {disabled}
   />
   <label 
      for={name} 
      class="
         text-primary-d2 font-medium 
         { size === 'sm' ? 'text-base' 
         : size === 'md' ? 'text-lg'	: ''}
         pt-0.5 
         { disabled ? 'opacity-60 cursor-default' : 'opacity-100 cursor-pointer' }
         ">
      <slot/>
   </label>
</div>