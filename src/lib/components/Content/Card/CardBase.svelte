<script lang="ts">
	import { 
         Article, Div, Link, 
         H3, Image, Button, Tag
      } from "$comp";
   
   import { breakpoints } from "$lib/constants/breakpoints";

   // =====================================================
   // CARD ACCESSIBILITY PROPS
   export let ariaLabel:string;

   // Define card title
   export let title:string;
   // Define card width
   export let width = 'w-96';

   // Define img src of leave blank for no img
   export let img = '';
   // Define img position (top - bottom - left - right - resp-l - resp-r)
   export let imgPos = 'top'
   
   // If the card is wrapped in a link, enter the link here
   export let href = '';
   // Should the card be wrapped in an article element?
   export let article = false;

   // Add author (leave blank for no author)
   export let author = {name: '', img: '', date: ''}


   // Define card btn - or leave empty for no btn
   export let btn = {title: '', href: '', ariaLabel: ''}
   // Define second card btn - or leave empty for no btn
   export let second_btn = {title: '', href: '', ariaLabel: ''}
   
   // Add badge to card header if needed
   export let badge = ''
   // Add second badge to card header if needed
   export let second_badge = ''
   // Put badges above title
   export let badgesTop = false;

   // Remove card hover effects:
   export let noHoverFx = false;
   // Remove card active effects:
   export let noActiveFx = false;
   // Remove all card effects:
   export let noFx = false;
   
   // Is the card compact ?
   export let compact = false;
   // Is the card compact on small screens?
   export let compactResponsive = false;
   // Card can't be compact and compactResponsive at the same time
   if (compactResponsive) compact = false;

   // =====================================================
   // Handle card link, if link is entered
   const linkComp = href !== '' ? Link : Div;
   // Handle article wrap
   const articleComp = article ? Article : Div;

   let innerWidth:number;
   $: innerWidth;

   let hovered = false
   $: hovered;

   // DEFINE BASE CLASSES
   const transitionClass = 'transition-all duration-500 ease-in-out'

   const imgProps = {
      alt: title,
      src: img,
      eager: true, slow: true,
      placeholder: 'preview',
      ratio: 'auto',
   }
</script>

<svelte:window bind:innerWidth={innerWidth} />

<!-- List Wrap -->
<li 
   on:mouseenter={() => hovered = true}
   on:mouseleave={() => hovered = false}
   on:focus={() => hovered = true}
   on:blur={() => hovered = false}
   class="
      {width === 'fit' ? 'w-fit' : width === 'full' ? 'w-full' : width}">

   <!-- Link or Div -->
   <svelte:component
      this={linkComp}
      wrap {href} {ariaLabel}>
      
      <!-- Card Wrap (= Article or Div) -->
      <svelte:component
         this={articleComp}
         class="
            {transitionClass}
            { href !== '' ? 'cursor-pointer' : 'cursor-default' }
            { noHoverFx || noFx ? ''  : `hover:-translate-y-1 hover:shadow-xl hover:shadow-black/10` }
            { noActiveFx || noFx ? ''  : `active:translate-y-1 active:shadow-xl active:shadow-black/20` }
            flex 
            { imgPos === 'top' ? 'flex-col' 
            : imgPos === 'bottom' ? 'flex-col-reverse'
            : imgPos === 'left' ? 'flex-row'
            : imgPos === 'right' ? 'flex-row-reverse'
            : imgPos === 'resp-l' ? 'flex-col sm:flex-row'
            : imgPos === 'resp-r' ? 'flex-col sm:flex-row-reverse'
            : 'flex-col'}
            items-start 
            justify-start
            rounded-2xl overflow-hidden shadow-lg
            bg-white 
            ">

            <!-- Show image if image is defined -->
            {#if img !== ''}
               {#if imgPos === 'top' || imgPos === 'bottom'}
                  <Image 
                     {...imgProps} mode="contain" position="top"
                     class="z-2 w-full { hovered && !noHoverFx && !noFx ? `scale-110 -translate-y-1 ${compact ? 'h-50' : compactResponsive ? 'h-50 md:h-60' : 'h-60'}` : `${compact ? 'h-44' : compactResponsive ? 'h-44 md:h-50' : 'h-50'}` }"
                  />
               {:else if imgPos === 'resp-l' || imgPos === 'resp-r'}
                  <Image 
                     {...imgProps}
                     mode="{ innerWidth < breakpoints.md ? 'cover' : 'contain' }" 
                     position="{ innerWidth < breakpoints.md ? 'top' : 'top' }"
                     class="z-2 w-full h-48 sm:h-56 md:h-58 lg:h-60 xl:h-72 2xl:h-80"
                  />
               {:else if imgPos === 'left' || imgPos === 'right'}
                  <Image {...imgProps} mode="cover" position="" class="h-full" />
               {/if}
            {/if}

            <!-- Body of card -->
            <div class="
                  z-3 { transitionClass }
                  flex flex-col justify-between 
                  { imgPos === 'top' || imgPos === 'bottom' 
                     ? `h-fit 
                        ${ hovered 
                           ? `${ compact ? 'gap-1' 
                              : compactResponsive ? 'gap-1 md:gap-4' 
                              : 'gap-4'}` 
                           : `${ compact ? 'gap-7' 
                              : compactResponsive ? 'gap-7 md:gap-12' 
                              : 'gap-12'}`}` 
                  : imgPos === 'resp-l' || imgPos === 'resp-r' 
                     ? `h-fit sm:h-48 md:h-58 lg:h-60 xl:h-72 2xl:h-80
                        ${ compact ? 'gap-2' : compactResponsive ? 'gap-2 sm:gap-4' : 'gap-4' }`
                     : 'h-48 md:h-58 lg:h-60 xl:h-72 2xl:h-80'} 
                  w-full
                  { compact ? 'p-2' : compactResponsive ? 'p-2 md:p-4' : 'p-4' }">

               <!-- Main Wrap -->
               <div class="
                     flex flex-col { transitionClass }
                     { imgPos === 'top' || imgPos === 'bottom' 
                        ? hovered && !noHoverFx && !noFx 
                           ? `gap-0`
                           : `${ compact || compactResponsive ? `gap-2 ${ compactResponsive ? 'md:gap-4' : '' }` : `gap-4` }`
                     : imgPos === 'resp-l' || imgPos === 'resp-r'
                        ? `${ compact || compactResponsive ? `gap-2 ${ compactResponsive ? 'md:gap-4' : '' }` : `gap-4` }`
                     : imgPos === 'left' || imgPos === 'right'
                        ? ''
                     : '' }">
                  <!-- Header Wrap -->
                  <div class="
                        flex justify-between { transitionClass }
                        { compact ? 'gap-1' : compactResponsive ? 'gap-2 md:gap-2' : 'gap-2'}
                        { badgesTop ? 'flex-col-reverse items-start' : 'flex-row items-center'}">
                     <!-- Title -->
                     <div class="">
                        <slot name="title"><H3 smaller thin>{@html title}</H3></slot>
                     </div>

                     <!-- Badges -->
                     {#if badge}
                        <div class="
                              flex flex-row { transitionClass }
                              { compact ? 'gap-1' : compactResponsive ? 'gap-1 md:gap-2' : 'gap-2'} 
                              justify-end items-center">
                           <Tag secondary lowercase rounded small>{@html badge}</Tag>
                           {#if second_badge}
                              <Tag outlined lowercase rounded small>{@html second_badge}</Tag>
                           {/if}
                        </div>
                     {/if}
                  </div>

                  <!-- Text Wrap -->
                  <div class="">
                     <slot>If a dog chews shoes whose shoes does he choose?</slot>
                  </div>
               </div>

               <!-- Append Wrap (actions) -->
               <div class="flex flex-col">

                  <slot name="append"/>
                  
                  <!-- Footer of append Wrap -->
                  <div class="flex flex-row justify-between items-center">

                     <!-- Author -->
                     <div class="flex flex-row text-start justify-start items-center gap-1 lg:gap-2">
                        {#if author.name}
                           <Image 
                              alt={author.name}
                              src={author.img} 
                              mode="cover" position="top" 
                              ratio="1" class="h-8 w-8 2xl:h-10 2xl:w-10 rounded-full"
                              intrinsic="600x400"/>
                           <div class="flex flex-col gap-0">
                              <div class="text-xs 2xl:text-sm font-semibold text-gray-800">{author.name}</div>
                              <span class="text-xs 2xl:text-sm text-gray-500 italic">{author.date}</span>
                           </div>
                        {/if}
                     </div>

                     <!-- Buttons -->
                     {#if btn.title}
                        <div class="
                              flex flex-row justify-end 
                              { transitionClass }
                              { compact ? 'gap-1' : compactResponsive ? 'gap-1 md:gap-2' : 'gap-2'}">
                           <Button
                              color="primary" size="md" slow
                              href={btn.href} ariaLabel={btn.ariaLabel} >
                              {@html btn.title}
                           </Button>
                           {#if second_btn.title}
                              <Button
                                 color="primary" outlined size="md" slow
                                 href={second_btn.href} ariaLabel={second_btn.ariaLabel} >
                                 {@html second_btn.title}
                              </Button>
                           {/if}
                        </div>
                     {/if}

                  </div>
               </div>

            </div>

      </svelte:component>

   </svelte:component>

</li>