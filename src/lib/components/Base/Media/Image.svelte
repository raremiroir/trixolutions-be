<script lang="ts">

   export let src:string = '';
   export let alt:string;

   $: src;

   export let customSrc = false;

   if (customSrc) src = '';

   // eager loading
   export let eager = false;
   
   // show figcaption
   export let caption = false;
   // Show title
   export let title = '';

   let klass = '';
   export { klass as class };
   export let imgClass = 'transition-all duration-300 ease-in-out';
   export let imgFit = 'object-cover'
</script>

<figure
   on:click
   on:keydown
   title={ title ? title : caption && !title ? alt : ''}
   class="
   transition-all duration-300 ease-in-out
   {klass}
   ">
   <picture>
      {#if customSrc}
         <slot/>
      {:else}
         <img 
            {alt}
            srcset="https://trixolutions.imgix.net/{src}?auto=enhance&auto=format&q=80&fm=webp&w=1&fit=max&dpr=1 x1, 
            https://trixolutions.imgix.net/{src}?auto=enhance&auto=format&q=80&fm=webp&w=1&fit=max&dpr=2 x2, 
            https://trixolutions.imgix.net/{src}?auto=enhance&auto=format&q=80&fm=webp&w=1&fit=max&dpr=3 x3"
            src="https://trixolutions.imgix.net/{src}?fit=clip&auto=enhance&auto=format&q=80&fm=webp&w=1"
            loading="{eager ? 'eager' : 'lazy'}"
            aria-labelledby="img-caption"
            class="
               {imgFit}
               {imgClass}">
      {/if}
   
   </picture>

   <figcaption id="img-caption" class="{caption ? '' : 'hidden'}">{alt}</figcaption>
 </figure>