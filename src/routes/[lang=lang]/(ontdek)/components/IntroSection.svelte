<script lang="ts">
    import { formatUrl } from "$utils";
    
    import { Section, Image, Reveal } from "$comp";
    
   export let title:string;
   export let imgSrc:string;
   export let imgWidth = "w-full lg:w-5/12"
   export let contentWidth = "w-full lg:w-7/12"

    export let imgClass = '';

    const transition = 'transition-all duration-300 ease-in-out'

</script>

<Reveal>
    <Section name={`${formatUrl(title)}-intro`}>
       
       <slot name="title" slot="title"/>
    
       <div class="
           flex flex-col lg:flex-row gap-4
           transition-all duration-300 ease-in-out">
           <div class="
                   border-4 border-primary rounded-xl 
                   shadow-lg {imgWidth} {transition}
                   overflow-hidden h-fit {imgWidth}">
               <Image 
                   alt={title}
                   src={imgSrc}
                   imgClass=""
                   class="
                    w-full h-auto sm:max-h-88
                    flex items-center justify-center 
                    {imgClass}"/>
           </div>
    
           <div class="{contentWidth} {transition}">
                <slot/>
           </div>
       </div>
       <slot name="append"/>
    </Section>
</Reveal>