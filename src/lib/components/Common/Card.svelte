<!--      -->
<!--  JS  -->
<!--      -->
<script lang="ts">
	// Import components
   import { Div, Link, Tag } from "$comp/core";

   let klass = '';
   export { klass as class };

   // Choose direction of card
   export let direction = 'col';
   
   // If card is link, enter url
   export let link = '';
   
   // If card has label, enter here
   export let label = '';
   // Extra label props (see component)
   export let labelPrimary = false;
   export let labelSm = false;
   export let labelLg = false;

   // Make cards in row equal height
   export let equalHeight = false;

   let wrapComp = Div;
   // If link isnt specified, make div
   wrapComp = link ? Link : Div;

   export let textCenter = false;
   
</script>

<!--      -->
<!-- HTML -->
<!--      -->

<!-- Wrap -->
<svelte:component
   href='{link}'
   this={wrapComp}
   class="
      group overflow-hidden
      bg-white
      {link ? ` hover:bg-gray-200/70 active:bg-gray-200/70
                  hover:shadow-xl hover:shadow-gray-900/30` 
            : ''}  
      rounded-xl shadow-lg
      transition-all duration-300 ease-in-out
      {equalHeight ? 'h-full' : 'h-fit'}
      w-full
      {klass}
      ">
      <!-- Outer Wrap -->
      <div class="
         flex gap-0 items-start
         justify-between w-full
         {equalHeight ? 'h-full' : 'h-fit'}
         { direction === 'row' ? 'flex-row' 
         : direction === 'row-reverse' ? 'flex-row-reverse'
         : 'flex-col'} ">

         <slot name="prepend-outer"/>
         
         <!-- Content Wrap -->
         <div class="
               flex flex-col gap-2  w-full
               items-start justify-start
               { direction === 'row' ? 'flex-row' 
               : direction === 'row-reverse' ? 'flex-row-reverse'
               : 'flex-col'}">
            <div class="
                  { direction === 'row' ? 'w-1/2' 
                  : direction === 'col' ? 'w-full' 
                  : 'w-fit'} overflow-hidden
                  rounded-t-lg
                  z-0 max-h-fit
                  transition-all duration-300 ease-in-out
                  { link ? `group-hover:brightness-75 group-hover:-mt-2 sm:group-hover:-mt-3` : ''}">
               <slot name="image"/>
            </div>
            
             <!-- Inner Wrap -->
            <div class="
                  py-2 px-4 
                  transition-all duration-300 ease-in-out
                  z-3 w-full
                  {link ? 'group-hover:mt-2 sm:group-hover:mt-3' : ''}
                  relative 
                  flex flex-col {textCenter ? 'items-center' : 'items-start'} 
                  justify-start
                   w-full gap-4 h-fit
                  ">
         
               <slot name="prepend-inner"/>
               
               <!-- Title Wrapper -->
               <div class="
                     m-0 p-0 w-full h-fit overflow-none 
                     flex flex-row items-start 
                     {textCenter ? 'justify-center' : 'justify-start'}
                     ">
                  <slot name="title"/>
         
                  {#if label}
                     <Tag primary={labelPrimary} small={labelSm} large={labelLg}>{label}</Tag>
                  {/if}
               </div>
         
               <slot>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus molestias maiores soluta at vel quia, beatae distinctio aliquid. Omnis, tempore?</slot>
         
               
               
               <slot name="append-inner"/>
            </div>
         </div>
      
         <div class="pt-0 px-4 pb-4">
            <slot name="append-outer"/>
         </div>
      </div>
</svelte:component>




<!-- shadow -->