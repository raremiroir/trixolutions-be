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

   let klass = '';
   export { klass as class };
   export let imgClass = '';
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
         <img 
            {alt}
            class={imgClass}
            srcset=" https://trixolutions.imgix.net/{src}?auto=enhance&q=80&fm=webp&w=1024&h=680&fit=crop 1024w,
                     https://trixolutions.imgix.net/{src}?auto=enhance&q=80&fm=webp&w=640&h=420&fit=crop 640w,
                     https://trixolutions.imgix.net/{src}?auto=enhance&q=80&fm=webp&w=480&h=320&fit=crop 480w,"
            src="https://trixolutions.imgix.net/{src}?fit=clip&auto=enhance&q=80&fm=webp&w=1&h=.3"
            sizes="(min-width: 36em) 33.3vw, 100vw"
            loading="{eager ? 'eager' : 'lazy'}"
            aria-labelledby="img-caption">
      {/if}
   
   </picture>

   <figcaption id="img-caption" class="{caption ? '' : 'hidden'}">{alt}</figcaption>
 </figure>
 