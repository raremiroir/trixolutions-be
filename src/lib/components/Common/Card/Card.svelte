<!--      -->
<!--  JS  -->
<!--      -->
<script lang="ts">
	// Import components
	import Button  from "$comp/Core/Button/Button.svelte";
   import Image   from "$comp/Base/Media/Image.svelte";
	import Div     from "$comp/Base/Div.svelte";
   import Title   from "$comp/Common/Text/Title.svelte";
	import P       from "$comp/Common/Text/P.svelte";
	import Link    from "$comp/Common/Link/Link.svelte";
	import Tag     from "$comp/Common/Text/Tag.svelte";

   // Choose type of title
   export let titleType = "h3";
   // Center title?
   export let centerTitle = false;

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

   // Small title?
   export let titleSmall = false;
   // Smaller title?
   export let titleSmaller = false;
   // Smallest title?
   export let titleSmallest = false;

   let wrapComp = Div;
   // If link isnt specified, make div
   wrapComp = link ? Link : Div;
   
</script>

<!--      -->
<!-- HTML -->
<!--      -->

<!-- Outer Wrap -->
<svelte:component
   href='{link}'
   this={wrapComp}
   klass="
      group overflow-hidden
      flex gap-2  items-center justify-center
      { direction === 'row' ? 'flex-row' 
      : direction === 'row-reverse' ? 'flex-row-reverse'
      : 'flex-col'} 
      bg-white
      {link ? 'hover:bg-gray-100/70 active:bg-gray-200/70 hover:shadow-xl' : ''}  
      rounded-xl shadow-lg
      {equalHeight ? 'h-full' : 'h-fit'}
      w-full
      ">
   <slot name="prepend-outer"/>
   
   <div class="
         { direction === 'row' ? 'w-1/2' 
         : direction === 'col' ? 'w-full' 
         : 'w-fit'} h-full overflow-hidden">
      <slot name="image"/>
   </div>
   
    <!-- Inner Wrap -->
   <div class="pt-2 px-4 pb-4 flex flex-col h-full gap-4 items-start justify-start relative w-full">

      <slot name="prepend-inner"/>
      
      <div class="m-0 p-0 flex flex-row w-full h-fit items-center justify-between">
         <Title 
            type={titleType} 
            small={titleSmall} smaller={titleSmaller} smallest={titleSmallest} 
            klass="
               flex items-center 
               {centerTitle ? 'justify-center text-center' : ''} 
               w-full">
            <slot name="title"/>
         </Title>

         {#if label}
            <Tag primary={labelPrimary} small={labelSm} large={labelLg}>{label}</Tag>
         {/if}
      </div>

      
      <slot>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus molestias maiores soluta at vel quia, beatae distinctio aliquid. Omnis, tempore?</slot>
      
      
      <slot name="append-inner"/>
   </div>

   <slot name="append-outer"/>
</svelte:component>




<!-- shadow -->