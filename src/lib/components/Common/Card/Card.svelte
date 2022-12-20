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
   
   // Import images
   import BVw400  from '$img/stock/Beslissende-Voorsprong_400w_Stock.webp';
   import BVw600  from '$img/stock/Beslissende-Voorsprong_600w_Stock.webp';
   import BVw800  from '$img/stock/Beslissende-Voorsprong_800w_Stock.webp';
   import BVw1080 from '$img/stock/Beslissende-Voorsprong_1080w_Stock.webp';


   // Choose title
   export let title = "";
   // Choose type of title
   export let titleType = "h3";
   
   // If card is link, enter url
   export let link = '';

   // Make cards in row equal height
   export let equalHeight = false;

   // Choose image
   export let img = 'beslissende-voorsprong'
   // Set image alt
   export let imgAlt = 'No alt';
   // Set image object position (default object-center)
   export let imgPos = '';
   // Set image object height (default h-60)
   export let imgHeight = '';
   // Add extra classes to img
   export let imgClass = '';

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
   <Image {img} alt={imgAlt} objectPos={imgPos} height={imgHeight} klass="{imgClass}" />
   
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