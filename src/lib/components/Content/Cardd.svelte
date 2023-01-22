<script lang="ts">
   // Import components
	import { Button, Div, H3, Image, Link } from "..";
   // Import stores
   import { breakpoints } from "$lib/constants/breakpoints";
	import { string } from "yup/lib/locale";
	import Article from "../Core/Article.svelte";

   // =========================================================

   // Define img src
   export let img = ''
   // Define img position -- top - bottom - left - right - responsive-l - responsive-r
   export let imgPos = 'top'

   // Define card title (& img alt)
   // Or set this as alt and use slot 'title' to create a custom title to override this one
   export let title = 'Card Title'
   // Define aria label
   export let ariaLabel:string;

   // Define card badge - or leave empty for no badge
   export let badge = ''
   // Define second card badge - or leave empty for no badge
   export let second_badge = ''
   // Put badge above title
   export let badgeOnTop = false
   // Define card label - or leave empty for no label
   export let label = ''
   // Define second card label - or leave empty for no label
   export let second_label = ''

   // Define card btn - or leave empty for no btn
   export let btn = {title: '', href: '', ariaLabel: ''}
   // Define second card btn - or leave empty for no btn
   export let second_btn = {title: '', href: '', ariaLabel: ''}

   // Add an author and date
   export let author = '';
   export let authorImg = '';
   export let date = '';

   // Compact card (less padding in body)
   export let compact = false;
   // Compact card only on small screens (less padding in body)
   export let compactResponsive = false;
   // Remove img
   export let noImg = false;

   // Center text in card
   export let centerText = false;

   // Disable card hover effects
   export let noHoverFx = false;
   // Enable if card serves as link
   export let isLink = false;
   // Enable if card is link and needs href
   export let href = '';
   const cardOuterComp = href ? Link : Div;
   // Enable if card is article
   export let article = false;
   const cardComp = article ? Article : Div;


   // Fit card width to content?
   export let fit = false
   // Fill card width to parent content?
   export let fill = false
   // Define card height
   export let height = ''
   // Fill card height?
   export let equalHeight = false

   // Define preset if needed
   // --> DefHover, none
   export let preset = 'none'

   // =========================================================
   
   // Change image ratio according to breakpoint
   let innerWidth:number;
   let ratio = '1'
   $: if (innerWidth < breakpoints.xs) { 
      if (imgPos === 'top' || imgPos === 'bottom' || imgPos === 'responsive-l' || imgPos === 'responsive-r') {
         ratio = "2:1" 
      }
   } else if (innerWidth < breakpoints.sm) {  
      if (imgPos === 'top' || imgPos === 'bottom' || imgPos === 'responsive-l' || imgPos === 'responsive-r') {
         ratio = "5:2" 
      }
   } else if (innerWidth < breakpoints.md) {  
      if (imgPos === 'top' || imgPos === 'bottom' || imgPos === 'responsive-l' || imgPos === 'responsive-r') {
         ratio = "5:2" 
      }
   } else if (innerWidth < breakpoints.lg) {  
      if (imgPos === 'top' || imgPos === 'bottom') {
         ratio = "7:4" 
      } else if (imgPos === 'responsive-l' || imgPos === 'responsive-r' || imgPos === 'left' || imgPos === 'right') {
         ratio = "1" 
      }
   } else if (innerWidth < breakpoints.xl) {  
      if (imgPos === 'top' || imgPos === 'bottom') {
         ratio = "5:2" 
      } else if (imgPos === 'responsive-l' || imgPos === 'responsive-r' || imgPos === 'left' || imgPos === 'right') {
         ratio = "7:5" 
      }
   } else if (innerWidth < breakpoints.xxl) {  
      if (imgPos === 'top' || imgPos === 'bottom') {
         ratio = "3:1" 
      } else if (imgPos === 'responsive-l' || imgPos === 'responsive-r' || imgPos === 'left' || imgPos === 'right') {
         ratio = "5:3" 
      }
   } else {  
      if (imgPos === 'top' || imgPos === 'bottom') {
         ratio = "4:1"; 
      } else if (imgPos === 'responsive-l' || imgPos === 'responsive-r' || imgPos === 'left' || imgPos === 'right') {
         ratio = "5:3" 
      }
   }

   let hovered = false
   $: hovered;

   let cardHeight = 0;
   let cardHeightClass = '';
   if (preset === 'DefHover') {
      cardHeightClass = 'h-[330px] md:h-[464px]'
      cardHeight = 464;
   }
   let imgHeight:number;
   $: cardHeight;
   $: imgHeight;

   const heightInNum = (Number(height.substring(3, (height.length - 3))))
   if (typeof heightInNum === 'number') {
      let customHeight = true;
      console.log(heightInNum - imgHeight);
   }
</script>


<svelte:window bind:innerWidth={innerWidth} />
<li
   on:mouseenter={() => hovered = true}
   on:mouseleave={() => hovered = false}
   on:focus={() => hovered = true}
   on:blur={() => hovered = false}
   class="
      { fit ? 'w-fit' : fill ? 'w-full' : '' }
      { preset ? cardHeightClass : height ? height : equalHeight ? 'h-full' : '' }
   ">
   <!-- Outer Wrap -->
   <svelte:component
      this={cardOuterComp}
      wrap {ariaLabel} {href}
      class="
         { fit ? 'w-fit' : fill ? 'w-full' : '' } 
         { height ? height : equalHeight ? 'h-full' : '' }
      "
      >
      <!-- Card -->
      <svelte:component
         this={cardComp}
         class="
            dui-card 
            { compact ? 'dui-card-compact' : '' }  
            transition-all duration-500 ease-in-out
            overflow-hidden rounded-2xl
            
            { fit ? 'w-fit' : fill ? 'w-full' : '' } 
            { height ? height : equalHeight ? 'h-full' : '' }
      
            { imgPos === 'left' || imgPos === 'right' ? 'dui-card-side' 
            : imgPos === 'responsive-l' || imgPos === 'responsive-r' ? 'md:dui-card-side' 
            : ''}
      
            { isLink ? 'cursor-pointer' : 'cursor-default' }
            
            shadow-xl bg-white 
            { noHoverFx ? '' 
               : `hover:-translate-y-1 active:translate-y-0.5
                  hover:shadow-2xl hover:shadow-black/50 active:shadow-black/50 focus:shadow-black/50
                  hover:bg-[#f8f8f7] active:bg-[#f8f8f7]`}
            ">
      
         {#if !noImg}
         <div
            bind:clientHeight={imgHeight} 
            class="
               { hovered && !noHoverFx ? 'h-56' : 'h-40' } 
               overflow-hidden
               transition-all duration-500 ease-in-out
               { imgPos === 'top'          ? '' 
               : imgPos === 'bottom'       ? ''
               : imgPos === 'left'         ? ''
               : imgPos === 'right'        ? ''
               : imgPos === 'responsive-l' || imgPos === 'responsive-r' ? 'md:max-w-lg'
               : ''}
               { imgPos === 'top' || imgPos == 'left' || imgPos == 'responsive-l' ? 'order-first' 
               : imgPos === 'bottom' || imgPos == 'right' ? 'order-last '
               : imgPos === 'responsive-r' ? 'order-first md:order-last'
               : ''}"
             >
            <!-- Image -->
            <Image 
                  alt={title}
                  src={img} eager
                  mode="contain" position="top"
                  placeholder="preview"
                  ratio="auto" slow
                  class="h-full w-full { hovered && !noHoverFx ? 'scale-110 md:translate-y-2 ' : '' }"
               />
         </div>
         {/if}
      
         <!-- Body -->
         <div class="
               dui-card-body flex justify-between
               transition-all duration-500 ease-in-out
               { compact ? 'gap-2' : 'gap-4 pt-6 pb-8 px-8'}
               { compactResponsive ? 'gap-2 !p-4 lg:gap-4 lg:!pt-6 lg:!pb-8 lg:!px-8' : ''}
               { centerText ? 'items-center text-center' : '' }
               { imgPos === 'top' ? 'order-last flex-col' 
               : imgPos === 'bottom' ? 'order-first flex-col'
               : ''}
               ">
           
               <!-- Title & Content Wrap -->
            <div class="">
               <!-- Title -->
              <span class="dui-card-title justify-between { centerText || badgeOnTop ? 'flex-col' : '' }">
                  <div class="w-full { centerText || badgeOnTop ? 'order-last' : 'order-first' }">
                     <slot name="title"><H3 smaller thin>{@html title}</H3></slot>
                  </div>
                  {#if badge}
                     <div class="
                           flex gap-2 
                           { badgeOnTop ? 'justify-start w-full' : 'justify-end w-fit' }
                           { centerText || badgeOnTop ? 'order-first' : 'order-last' }">
                        <div class="dui-badge dui-badge-secondary">{@html badge}</div>
                        {#if second_badge}
                           <div class="dui-badge dui-badge-primary">{@html second_badge}</div>
                        {/if}
                     </div>  
                  {/if}
               </span>
              
              <!-- Content -->
              <div class="">
                 <slot>If a dog chews shoes whose shoes does he choose?</slot>
              </div>
            </div>
           
           <!-- Actions -->
           {#if btn.title && btn.href && btn.ariaLabel}
            <div class="dui-card-actions items-end flex-col">
               {#if label}
                  <div class="flex flex-col gap-2 ">
                     <div class="dui-badge dui-badge-primary dui-badge-outline">{@html label}</div>
                     {#if second_label}
                     <div class="dui-badge dui-badge-primary dui-badge-outline">{@html second_label}</div>
                     {/if}
                  </div>  
               {/if}
               <div class="dui-card-actions items-center {author ? 'justify-between w-full' : 'justify-end'} flex-row">
                  
                  {#if author}
                     <div class="flex flex-row text-start justify-start items-center gap-1 lg:gap-2">
                        <Image 
                           alt={author}
                           src={authorImg} 
                           mode="cover" position="top" 
                           ratio="1" class="h-8 w-8 2xl:h-10 2xl:w-10 rounded-full"
                           intrinsic="600x400"/>
                        <div class="flex flex-col gap-0">
                           <div class="text-xs 2xl:text-sm font-semibold text-gray-800">{author}</div>
                           <span class="text-xs 2xl:text-sm text-gray-500 italic">{date}</span>
                        </div>
                     </div>
                  {/if}
                  
                  <Button
                     color="primary" size="md"
                     href={btn.href} ariaLabel={btn.ariaLabel} >
                     {@html btn.title}
                  </Button>
                  {#if second_btn.title && second_btn.href && second_btn.ariaLabel}
                     <Button
                        color="primary" outlined size="md"
                        href={second_btn.href} ariaLabel={second_btn.ariaLabel} >
                        {@html second_btn.title}
                     </Button>
                  {/if}
               </div>
            </div>
           {/if}
         
         </div>
       
      </svelte:component>
   </svelte:component>
</li>