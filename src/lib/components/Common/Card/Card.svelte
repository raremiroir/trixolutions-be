<!--      -->
<!--  JS  -->
<!--      -->
<script lang="ts">
	// Import components
   import Image   from "$comp/Base/Media/Image.svelte";
   import Title from "$src/lib/components/Common/Text/Title.svelte";
	import P       from "$comp/Common/Text/P.svelte";
	import Div     from "$comp/Base/Div.svelte";
	import Link    from "$comp/Common/Link/Link.svelte";
	import Button  from "$comp/Common/Button/Button.svelte";

   // Choose title
   export let title = "";
   // Choose type of title
   export let titleType = "h3";
   
   // If card is link, enter url
   export let link = '';

   // Make cards in row equal height
   export let equalHeight = false;

   let wrapComp = Div;
   // If link isnt specified, make div
   wrapComp = link ? Link : Div;
   
</script>

<!--      -->
<!-- HTML -->
<!--      -->

<!-- Outer Wrap -->
<svelte:component
   this={wrapComp}
   klass="
      group overflow-hidden
      flex flex-col gap-2 
      bg-gray-50/70
      {link ? 'hover:bg-gray-100/70 active:bg-gray-200/70 hover:shadow-xl' : ''}  
      rounded-xl shadow-lg
      {equalHeight ? 'h-full' : 'h-fit'}
      w-full
      ">
   <slot name="prepend-outer"/>
   <slot name="image"/>
   
    <!-- Inner Wrap -->
   <div class="pt-2 px-4 pb-4 flex flex-col h-full gap-1 items-start justify-start relative">

      <slot name="prepend-inner"/>

      <Title 
         type={titleType} small>
         {title}
      </Title>

      <P large>
         <slot>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus molestias maiores soluta at vel quia, beatae distinctio aliquid. Omnis, tempore?</slot>
      </P>
      
      <slot name="append-inner"/>
   </div>

   <slot name="append-outer"/>
</svelte:component>




<!-- shadow -->