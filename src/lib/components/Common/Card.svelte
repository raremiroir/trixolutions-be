<!--      -->
<!--  JS  -->
<!--      -->
<script lang="ts">
	// Import components
   import { Div, Link, Tag, Article } from "$comp";

   let klass = '';
   export { klass as class };

   // Choose direction of card
   export let direction = 'col';
   // Compact layout
   export let compact = false;
   
   // If card is link, enter url
   export let link = '';
   // If card is not link, but still needs effects on hover, make true
   export let hoverFx = false;
   // If card is article
   export let article = false;
   
   // If card has label, enter here
   export let label = '';
   // Extra label props (see component)
   export let labelPrimary = false;
   export let labelSm = false;
   export let labelLg = false;

   // Make cards in row equal height
   export let equalHeight = false;

   let wrapComp = Div;
   let outerWrapComp = Div;
   // If article isnt specified, make div
   outerWrapComp = article ? Article : Div;
   // If link isnt specified, make div
   wrapComp = link ? Link : Div;

   export let textCenter = false;

   // Make animation fast
   export let fast = false;
   
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
      rounded-xl shadow-lg
      bg-white
      {link || hoverFx ? `hover:bg-gray-100 active:bg-gray-200 hover:shadow-xl hover:shadow-gray-900/30 cursor-pointer` : ''}
      transition-all {fast ? 'duration-300' : 'duration-500'} ease-in-out
      {equalHeight ? 'h-full' : 'h-fit'}
      max-w-full min-w-full
      {klass}
      ">
      <!-- Outer Wrap -->
      <svelte:component
         this={outerWrapComp} 
         class="
            flex gap-0 items-start
            justify-between w-full
            transition-all {fast ? 'duration-300' : 'duration-500'} ease-in-out
            bg-white rounded-xl overflow-hidden
            {link || hoverFx ? ` group-hover:bg-gray-100 group-active:bg-gray-200 group-hover:shadow-xl group-hover:shadow-gray-900/30 cursor-pointer` : ''}
            {equalHeight ? 'h-full' : 'h-fit'}
            { direction === 'row' ? 'flex-row' 
            : direction === 'row-reverse' ? 'flex-row-reverse' 
            : 'flex-col'} ">

         <slot name="prepend-outer"/>
         
         <!-- Content Wrap -->
         <div class="
               flex flex-col gap-0  w-full
               items-start justify-start
               { direction === 'row' ? 'flex-row' 
               : direction === 'row-reverse' ? 'flex-row-reverse'
               : 'flex-col'}">
            <div class="
                  { direction === 'row' ? 'w-1/2' 
                  : direction === 'col' ? 'w-full' 
                  : 'w-fit'} overflow-hidden
                  rounded-t-lg z-0 
                  transition-all {fast ? 'duration-300' : 'duration-500'} ease-in-out
                  { hoverFx ? 'h-full group-hover:h-[40%]' : 'max-h-fit'}
                  { link ? `group-hover:brightness-75 group-hover:-mt-2 sm:group-hover:-mt-3` : ''}">
               <slot name="image"/>
            </div>
            
             <!-- Inner Wrap -->
            <div class="
                  {compact ? 'py-2 px-3' : 'py-6 px-4' }
                  transition-all {fast ? 'duration-300' : 'duration-500'} ease-in-out
                  bg-white h-fit
                  {link || hoverFx 
                     ? ` group-hover:bg-gray-100 group-active:bg-gray-200
                         ${compact ? 'py-2 px-3 group-hover:pt-4 group-hover:pb-0' : 'py-6 group-hover:pt-5 group-hover:pb-1 px-4' }` 
                     : `${compact ? 'py-2 px-3' : 'py-6 px-4' }`}  
                  z-3 w-full
                  {link || hoverFx ? '' : ''}
                  relative 
                  flex flex-col {textCenter ? 'items-center' : 'items-start'} 
                  justify-start
                   w-full { compact ? 'gap-1' : 'gap-4'} h-fit
                  ">
         
               <slot name="prepend-inner"/>
               
               <!-- Title Wrapper -->
               <div class="
                     m-0 p-0 w-full h-fit overflow-none 
                     flex flex-row items-start 
                     {textCenter ? 'justify-center' : 'justify-between'}
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
      
         <div class="
               pt-0 px-4 pb-4 w-full
               bg-white h-fit rounded-b-xl
               transition-all {fast ? 'duration-300' : 'duration-500'} ease-in-out
               {link || hoverFx ? ` group-hover:bg-gray-100 group-active:bg-gray-200` : ''}">
            <slot name="append-outer"/>
         </div>
      </svelte:component>
</svelte:component>




<!-- shadow -->