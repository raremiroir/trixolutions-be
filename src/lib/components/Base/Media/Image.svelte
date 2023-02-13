<script lang="ts">

   export let src:string = '';
   export let alt:string;

   export let customSrc = false;

   if (customSrc) src = '';

   // eager loading
   export let eager = false;
   
   // show figcaption
   export let caption = false;

   let klass = '';
   export { klass as class };
</script>

<figure>
   <picture
      class="
         transition-all duration-300 ease-in-out
         {klass}
      ">
      {#if customSrc}
         <slot/>
      {:else}
         <source srcset="https://trixolutions.imgix.net/{src}?w=300&q=90" media="(max-width: 320px)">
         <source srcset="https://trixolutions.imgix.net/{src}?w=700&q=90" media="(max-width: 768px)">
         <source srcset="https://trixolutions.imgix.net/{src}?w=1000&q=90" media="(max-width: 1024px)">
         <source srcset="https://trixolutions.imgix.net/{src}?w=1200&q=90" media="(min-width: 1025px; max-width: 1535px)">
         <source srcset="https://trixolutions.imgix.net/{src}?w=2000&q=90" media="(min-width: 1536px)">

         <img src="https://trixolutions.imgix.net/{src}?q=70" {alt}
               loading="{eager ? 'eager' : 'lazy'}" decoding="async"
               sizes="(max-width: 600px) 100vw, 50vw"
               srcset="medium.jpg 500w, large.jpg 1000w"
               aria-labelledby="img-caption">
      {/if}
   
   </picture>

   <figcaption id="img-caption" class="{caption ? '' : 'hidden'}">{alt}</figcaption>
 </figure>
 