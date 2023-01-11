<script lang="ts">
	import { fade } from "svelte/transition";

   import LL from "$i18n/i18n-svelte";
   // Import utils
	import { firstLetterCase, formatUrl, titleCase } from "$src/lib/utils";
   // Import components
	import Icon from "@iconify/svelte";
   import { Tooltip, P } from "$comp";
	import ValidationError from "./ValidationError.svelte";

   import TextArea from "./TextArea.svelte";
   import Input from "./Input.svelte";
	import Select from "./Select.svelte";



   export let label:string;
   export let name:string;
   export let value = '';
   
   export let placeholder = '';
   export let description = '';
   export let required = false;
   export let disabled = false;
   export let automatic = false;

   export let type = "text"
   
   export let errors:any;

   // If Textarea
   export let rows = 6;
   
   let ariaLabel = `${label} input`;

   export let input = true;
   export let textarea = false;
   export let select = false;

   if (textarea) { input = false; }
   if (select) { input = false; }

   let inputType = 
      textarea ? TextArea 
      : select ? Select
      : input ? Input 
      : Input;
   
   const handleInput = e => {
    // in here, you can switch on type and implement
    // whatever behaviour you need
    value = type.match(/^(number|range)$/)
      ? +e.target.value
      : e.target.value;
   }

   let inputFocused = false;
</script>

<!-- Input Wrap -->
<div class="flex flex-col w-full my-1">

   <!-- Label -->
   <label 
      for={name}
      class="text-primary font-body">
      <!-- Label Inner Wrap -->
      <div class="w-full flex justify-between items-center">
         <span>
            <span class="
                  {errors ? 'text-error font-semibold' 
                          : 'text-primary font-normal'}"
               >
               {label}
            </span>
            <!-- Star for Invalid Area -->
            {#if errors}
            <span class=" { required ? 'text-error' : 'text-primary'} text-xs font-body">*</span>
            {/if}
         </span>
         <!-- Optional text for not required area -->
         {#if !required || automatic}
            <span class="text-primary italic text-xs font-body">
            {#if automatic}
               ({firstLetterCase($LL.base.form.content.automatic())})
            {/if}
            {#if !required}
               ({firstLetterCase($LL.base.form.content.optional())})
            {/if}
            </span>
         {/if}
      </div>
   </label>

   <!-- Input Wrapper -->
   <div
      class="
         m-0 p-0 w-full
         rounded-md overflow-hidden
         border-2 
         transition-all duration-200 ease-in-out
         { textarea ? 'h-40' : 'h-12'}
         { errors ? inputFocused ? 'border-error' : 'border-error/50'
                  : inputFocused ? 'border-primary' : 'border-gray-50' }
         { inputFocused ? 'bg-gray-50/30' : 'bg-gray-50 ' }
         flex flex-row justify-between items-center
         ">
      <!-- Input -->
      <svelte:component
         this={inputType}
         on:focus={() => inputFocused = true}
         on:blur={() => inputFocused = false}
         {type} {value} {required}
         {placeholder} {name} disabled={disabled || automatic}
         {ariaLabel} {rows}
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
         >
         {#if select}<option disabled selected class="hidden"></option>{/if}
         <slot/>
         </svelte:component>
         {#if value !== '' && !disabled}
            <div 
               transition:fade={{duration:150}}
               class="
                  h-full w-fit p-0.5
                  flex items-center 
                  border-l-2 px-2
                  border-gray-100
                  ">
               <Tooltip 
                  title={titleCase($LL.base.form.content.reset_value())} 
                  color="error" small
                  placement="-bottom-2 right-8" flyX={16} flyY={0}>
                  <div
                     on:click|preventDefault={() => value = ''}
                     on:keydown|preventDefault={() => value = ''}
                     class="
                        h-full w-full p-0.5 
                        shadow-sm hover:shadow-md
                        shadow-error/20 hover:shadow-error/50
                        transition-all duration-150 ease-linear
                        bg-error/50 hover:bg-error text-gray-50 
                        rounded-full cursor-pointer"
                  >
                     <Icon icon="material-symbols:close-rounded" class="h-4 w-4"/>
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