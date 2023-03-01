<script lang="ts">
    import { formatUrl } from "$utils";
    
    import { Section, Image } from "$comp";
    
   export let title:string;
   export let imgSrc:string;
   export let imgWidth = "w-full lg:w-5/12"
   export let contentWidth = "w-full lg:w-7/12"

    export let imgClass = '';

</script>

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
               imgClass="{imgWidth}"
               class={imgClass}/>
       </div>

       <div class="{contentWidth}">
               <slot/>
       </div>
   </div>

   <slot name="append"/>

</Section>