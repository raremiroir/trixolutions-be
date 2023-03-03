<script lang="ts">
	import { Button, H3, Tag, Text, Link, Div, Article } from "$comp";
	import CardAuthor from "./CardAuthor.svelte";

   // Define card height
   export let height = 'h-96 sm:h-108 md:h-132 lg:h-140 xl:h-132 2xl:h-132 3xl:h-140'
   export let bodyHeight = '';
   export let imgHeight = '';

   // Define Card Title
   export let title:string;
   // Define card img if needed
   export let img = '';
   export let alt = title;
   export let imgFit = 'object-cover'
   // Setting imgPos WILL make img positioning absolute!!
   export let imgPos = ''

   // Make wrap article
   export let article = false;
   const wrapArticle = article ? Article : Div;

   // Add link to card if needed
   export let href = '';
   // Define aria label
   export let ariaLabel = title;

   // Define badges if needed
   export let badge = ''
   export let second_badge = ''
   // Put badges on top of title
   export let badgesTop = false;

   // Add author (leave blank for no author)
   export let author = {name: '', img: '', date: ''}

   // Define card btn - or leave empty for no btn
   export let btn = {title: '', href: '', ariaLabel: ''}
   // Define second card btn - or leave empty for no btn
   export let second_btn = {title: '', href: '', ariaLabel: ''}

   // Define level of effects (full | minimal | none)
   export let hoverFx = 'full'
   const hoverMinimal = hoverFx === 'minimal' ? true : false;
   const hoverFull = hoverFx === 'full' ? true : false;

   // Get grayer bg
   export let altBg = false;

   // Set direction of card
   export let direction = 'col';

   // Predefined classes
   const transition = 'transition-all duration-300 ease-in-out'

   // Define wrap component
   const wrapComp = href !== '' ? Link : Div;

   let klass = '';
   export { klass as class };

</script>


<!-- Outer Wrap -->
<svelte:component
   {href} fill
   this={wrapComp}
   wrap {ariaLabel}
   class={klass}>
   <!-- Card/Article Wrap -->
   <svelte:component
      this={wrapArticle}
      class="
         group {transition}
         w-full min-w-min
         flex
         { direction === 'row' ? 'md:relative flex-col md:flex-row' : `flex-col relative` } 
         { !img ? '' : `${ height }`}
         shadow-lg {hoverFull || hoverMinimal ? 'hover:shadow-black/30' : '' }
         { hoverFull || hoverMinimal ? 'sm:hover:-translate-y-1 lg:hover:-translate-y-2 active:-translate-y-1' : '' }
         !rounded-2xl !overflow-hidden">
      <!-- Image Wrap -->
      {#if img}
         <div
            class="
               { transition }
               flex { altBg ? 'bg-gray-50' : 'bg-white' }
               w-full h-1/2
               { imgHeight ? imgHeight
               : direction === 'row' ? 'md:h-full md:w-1/3'
               : `sm:h-[40%] 3xl:h-1/2 ${ hoverFull ? 'group-hover:h-3/5 sm:group-hover:h-[50%] 3xl:group-hover:h-[60%]' : '' }`
               }
               { hoverFull ? 'group-hover:h-3/5' : '' }
               overflow-hidden z-0">
   
            <img
               srcset=" https://trixolutions.imgix.net/{ img }?auto=enhance&q=80&fm=webp&w=1024&h=1&fit=clip 1024w,
                        https://trixolutions.imgix.net/{ img }?auto=enhance&q=80&fm=webp&w=640&h=1&fit=clip 640w,
                        https://trixolutions.imgix.net/{ img }?auto=enhance&q=80&fm=webp&w=480&h=1&fit=clip 480w,"
               src="https://trixolutions.imgix.net/{ img }?fit=clip&auto=enhance&q=80&fm=webp&w=1&h=.3"
               sizes="(min-width: 36em) 33.3vw, 100vw"
               title={alt}
               loading="eager"
               alt={alt}
               class="
                  { transition } { imgFit }
                  h-full w-full 
                  rounded-t-2xl
                  { direction === 'row' ? 'md:rounded-l-2xl md:rounded-tr-none' : '' }
                  { imgPos && direction !== 'row' ? 'absolute rounded-2xl' : '' } { imgPos }
                  { hoverFull || hoverMinimal ? 'opacity-60 group-hover:opacity-90' : 'opacity-70' }">
         </div>
      {/if}
   
   
      <!-- Body Wrap -->
      <div
         class="
            { transition }
            { direction === 'row' || !img ? '' : 'bottom-0 absolute' }
            z-2
            { altBg ? 'bg-gray-50' : 'bg-white' }
            w-full h-1/2 
            { img ? bodyHeight ? bodyHeight
                  : direction === 'row' ? 'md:h-full md:w-2/3'
                  : `sm:h-[60%] 3xl:h-1/2 ${ hoverFull ? 'sm:group-hover:h-[50%] 3xl:group-hover:h-[40%]' : '' }`
            : 'h-full w-full' }
            { hoverFull ? 'group-hover:h-2/5 group-hover:py-2 lg:group-hover:py-4' : '' }
            flex flex-col justify-between
            py-2 px-1 xs:p-2 sm:p-4 md:p-6 
            backdrop-blur-lg">
   
         <!-- Content Wrap -->
         <div class="">
   
            <!-- Header Wrap -->
            <div class="
                  flex 
                  { badgesTop ? 'flex-col items-start gap-1 lg:gap-2' : 'flex-row items-center' }
                  justify-between
                  ">
               <!-- Title -->
               <div class="{ badgesTop ? 'order-last' : 'order-first' } w-full">
                  <slot name="title">
                     <H3 smaller thin class="!font-extrabold sm:font-bold ">
                        {@html title}
                     </H3>
                  </slot>
               </div>
               <!-- End Title -->
   
               <!-- Badges -->
               {#if badge}
                  <div class="
                        flex flex-col xs:flex-row gap-1
                        { badgesTop ? 'order-first' : 'order-last' }">
                     <Tag secondary lowercase rounded small>{@html badge}</Tag>
                     {#if second_badge}
                        <Tag outlined lowercase rounded small>{@html second_badge}</Tag>
                     {/if}
                  </div>
               {/if}
               <!-- End Badges -->
            </div>
            <!-- End Header Wrap -->
   
            <div class="my-1 { hoverFull ? 'group-hover:m-0' : '' } { transition }">
               <slot><Text>If a dog chews shoes whose shoes does he choose?</Text></slot>
            </div>
            <!-- End Text Wrap -->
   
         </div>
         <!-- End Content Wrap -->
   
         <!-- Append Wrap -->
         <div class="">
            <!-- Upper Append -->
            <div class="">
   
               <slot name="append"/>
   
            </div>
            <!-- End Upper Append -->
            <!-- Lower Append -->
            <div class="flex flex-row w-full justify-between">
   
               <!-- Author -->
               {#if author.name}
                  <CardAuthor {author} />
               {/if}
               <!-- End Author -->
               <!-- Buttons -->
               {#if btn.title}
                  <div class="flex flex-row justify-end gap-2">
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
               <!-- End Buttons -->
   
            </div>
            <!-- End Lower Append -->
   
         </div>
         <!-- End Append Wrap -->
      </div>
      <!-- End Body Wrap -->
   </svelte:component>
   <!-- End Card Wrap -->
</svelte:component>