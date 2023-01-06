<script lang="ts">
	import { fade } from "svelte/transition";
   // Import utils
	import { formatUrl } from "$src/lib/utils";
   // Import components
	import Icon from "@iconify/svelte";
   import { Tooltip } from "$comp/common";
   import { Button, P } from "$comp/core";
	import ValidationError from "./ValidationError.svelte";



   export let label = "Label"
   export let name = "name"
   export let value = '';
   export let placeholder = '';
   export let description = '';
   export let type = "text"
   export let errors:any;

   export let required = false;
   
   const handleInput = e => {
    // in here, you can switch on type and implement
    // whatever behaviour you need
    value = type.match(/^(number|range)$/)
      ? +e.target.value
      : e.target.value;
   }

   let inputFocused = false;
</script>

<div class="flex flex-col w-full my-1">

   <label 
      for={name}
      class="text-primary font-body">
      <div class="w-full flex justify-between items-center">
         <span>
            <span class="
                  {errors ? 'text-error font-semibold' 
                          : 'text-primary font-normal'}"
               >
               {label}
            </span>
            {#if errors}
            <span class="
                  { required ? 'text-error' : 'text-primary'} 
                    text-xs font-body">
               *
            </span>
            {/if}
         </span>
         {#if !required}
            <span class="text-primary italic text-xs font-body">(Optional)</span>
         {/if}
      </div>
   </label>
   <div 
      class="
         m-0 p-0 w-full
         rounded-md overflow-hidden
         border-2 
         transition-all duration-200 ease-in-out
         h-12
         { errors ? inputFocused ? 'border-error' : 'border-error/50'
                  : inputFocused ? 'border-primary' : 'border-gray-50' }
         { inputFocused ? 'bg-gray-50/30' : 'bg-gray-50 ' }
         flex flex-row justify-between items-center
         ">
      <input 
         on:focus={() => inputFocused = true}
         on:blur={() => inputFocused = false}
         id={name} 
         {type} {value} 
         {placeholder}
         on:input={handleInput}
         on:change
         class="
            font-body w-full h-full
            font-semibold focus:font-normal
            border-none ring-none
            transition-all duration-200 ease-in-out
            bg-transparent
            text-primary focus:text-primary-d2
            placeholder:text-gray-400 placeholder:font-light
            autofill:!bg-transparent"
         />
         {#if value !== ''}
            <div 
               transition:fade={{duration:100}}
               class="
                  h-full w-fit p-0.5
                  flex items-center 
                  border-l-2 px-2
                  border-gray-100
                  ">
               <Tooltip 
                  title="Clear Value" color="error" small
                  placement="bottom-0 right-6" flyX={16} flyY={0}>
                  <div class="h-5 w-5">
                     <Button 
                        on:click={() => value = ''} 
                        size="w-full h-full" 
                        rounded 
                        color="bg-error/50 text-gray-50 hover:bg-error">
                        <Icon icon="material-symbols:close-rounded" class="h-full w-full"/>
                     </Button>
                  </div>
               </Tooltip>
            </div>
         {/if}
   </div>
   {#if description}
      <P>{description}</P>
   {/if}
   {#if errors}
      <ValidationError>{errors}</ValidationError>
   {/if}
</div>

<style lang="postcss">
</style>