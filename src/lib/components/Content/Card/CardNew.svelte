<script lang="ts">
	import { Button, H3, Tag, Text, Link, Div } from "$comp";
	import CardAuthor from "./CardAuthor.svelte";

   // Define card height
   export let height = 'h-96 sm:h-108 md:h-132 lg:h-140 xl:h-132 2xl:h-132 3xl:h-140'
   export let bodyHeight = '';
   export let imgHeight = '';

   // Define Card Title
   export let title:string;
   // Define card img if needed
   export let img = 'home/beslissende-voorsprong-2.webp';
   export let alt = title;
   export let imgFit = 'object-cover'
   // Setting imgPos WILL make img positioning absolute!!
   export let imgPos = ''

   // Add link to card if needed
   export let href = '';

   // Define badges if needed
   export let badge = ''
   export let second_badge = ''

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

   // Reverse image/body order
   export let reverse = false;

   // Predefined classes
   const transition = 'transition-all duration-300 ease-in-out'

   // Define wrap component
   const wrapComp = href !== '' ? Link : Div;

</script>


<!-- Outer Wrap -->
<svelte:component
   {href} fill
   this={wrapComp}
   wrap ariaLabel={title}>
   <!-- Card Wrap -->
   <div
      class="
         group relative {transition}
         w-full min-w-min {height}
         shadow-lg {hoverFull || hoverMinimal ? 'hover:shadow-black/30' : ''}
         { hoverFull || hoverMinimal ? 'sm:hover:-translate-y-1 lg:hover:-translate-y-2' : '' }
         { href !== '' ? 'cursor-pointer' : 'cursor-default' }
         !rounded-2xl !overflow-hidden">
      <!-- Image Wrap -->
      {#if img}
         <div
            class="
               top-0 {transition}
               w-full flex
               bg-white
               { imgHeight ? imgHeight
               : `h-1/2 sm:h-[40%] 3xl:h-1/2 ${hoverFull ? 'group-hover:h-3/5 sm:group-hover:h-[50%] 3xl:group-hover:h-[60%]' : ''}`
               }
               z-0">
   
            <img
               srcset=" https://trixolutions.imgix.net/{img}?auto=enhance&q=80&fm=webp&w=1024&h=1&fit=clip 1024w,
                        https://trixolutions.imgix.net/{img}?auto=enhance&q=80&fm=webp&w=640&h=1&fit=clip 640w,
                        https://trixolutions.imgix.net/{img}?auto=enhance&q=80&fm=webp&w=480&h=1&fit=clip 480w,"
               src="https://trixolutions.imgix.net/{img}?fit=clip&auto=enhance&q=80&fm=webp&w=1&h=.3"
               sizes="(min-width: 36em) 33.3vw, 100vw"
               title={alt}
               loading="eager"
               alt={alt}
               class="
                  {transition} {imgFit} rounded-t-2xl
                  h-full w-full {imgPos ? 'absolute rounded-2xl' : ''} {imgPos}
                  {hoverFull || hoverMinimal ? 'opacity-60 group-hover:opacity-90' : 'opacity-70'}">
         </div>
      {/if}
   
   
      <!-- Body Wrap -->
      <div
         class="
            absolute {transition}
            bottom-0
            z-2
            bg-white
            w-full
            { bodyHeight ? bodyHeight
            : `h-1/2 sm:h-[60%] 3xl:h-1/2 ${hoverFull ? 'group-hover:h-2/5 sm:group-hover:h-[50%] 3xl:group-hover:h-[40%]' : ''}`
            }
            flex flex-col justify-between
            p-6 {hoverFull ? 'group-hover:py-2 lg:group-hover:py-4' : ''}
            backdrop-blur-lg">
   
         <!-- Content Wrap -->
         <div class="">
   
            <!-- Header Wrap -->
            <div class="flex flex-row justify-between items-center">
               <!-- Title -->
               <slot name="title"><H3 smaller thin>{@html title}</H3></slot>
               <!-- End Title -->
   
               <!-- Badges -->
               {#if badge}
                  <div class="">
                     <Tag secondary lowercase rounded small>{@html badge}</Tag>
                     {#if second_badge}
                        <Tag outlined lowercase rounded small>{@html second_badge}</Tag>
                     {/if}
                  </div>
               {/if}
               <!-- End Badges -->
            </div>
            <!-- End Header Wrap -->
   
            <div class="my-1 {hoverFull ? 'group-hover:m-0' : ''} {transition}">
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
   </div>
   <!-- End Card Wrap -->
</svelte:component>