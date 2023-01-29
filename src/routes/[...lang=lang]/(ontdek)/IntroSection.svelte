<script lang="ts">
    import { formatUrl } from "$utils";
    import { breakpoints } from "$lib/constants/breakpoints";
    
    import { Section, Image } from "$comp";
    
   export let title:string;
   export let imgSrc:string;
   export let imgMode = 'cover';
   export let imgWidth = "w-full lg:w-5/12"
   export let contentWidth = "w-full lg:w-7/12"

   // innerWidth stores current screen width
   let innerWidth:number;
    $: innerWidth
    // Image ratio depends on screen width
    let ratio = '7:5'
    $: if (innerWidth < breakpoints.xs) { ratio = "2:1"; }  
        else if (innerWidth < breakpoints.sm) { ratio = "7:3"; } 
        else if (innerWidth < breakpoints.md) { ratio = "2:1"; } 
        else if (innerWidth < breakpoints.lg) { ratio = "5:2"; } 
        else if (innerWidth < breakpoints.xl) { ratio = "12:11"; } 
        else if (innerWidth < breakpoints.xxl) { ratio = "8:6"; }
        else { ratio = "7:5"}

    export let imgClass = '';

</script>

<svelte:window bind:innerWidth />

<Section name={`${formatUrl(title)}-intro`}>
   
   <slot name="title" slot="title"/>

   <div class="
       flex flex-col lg:flex-row gap-4
       transition-all duration-300 ease-in-out ">
       <div class="
               border-4 border-primary rounded-xl 
               shadow-lg 
               overflow-hidden h-fit
               transition-all duration-300 ease-in-out
               {imgWidth}">
           <Image 
               alt={title}
               src={imgSrc}
               mode="{imgMode}" position="top" 
               {ratio} class={imgClass}/>
       </div>

       <div class="{contentWidth}">
               <slot/>
       </div>
   </div>

   <slot name="append"/>

</Section>