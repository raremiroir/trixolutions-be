<script>
   import { onMount } from "svelte";

   export let src = '';
   export let srcset = '';
   export let sizes = '';
   export let alt = '';
   export let caption = false;
   // Lazy load image?
   export let lazy = false;

   // Extra classes on image wrap
   export let klass = '';
   // Extra classes on image
   export let imgClass = '';

   // Does the image load before mount?
   export let loadPriority = false;

   let loaded = false;
   let failed = false;
   let loading = false;

   onMount(() => {
      const img = new Image()
      img.src= src;
      loading = true;

      img.onload = () => {
         loading: false;
         loaded = true;
      }
      img.onerror = () => {
         loading = false;
         failed = true;
      }
   })
</script>

<figure class="{klass}">
   {#if loadPriority}
      <img 
         loading="{lazy ? 'lazy' : 'eager'}"
         {srcset} {sizes}
         {src} {alt} class="h-full w-full {imgClass}"
      />
   {:else}
      {#if loaded}
         <img 
            loading="{lazy ? 'lazy' : 'eager'}"
            {srcset} {sizes}
            {src} {alt} class="h-full w-full {imgClass}"
         />
      {:else if failed}
      <img src="https://icon-library.com/images/not-found-icon/not-found-icon-6.jpg" alt="Not Found" class={klass} />
      {:else if loading}                                                                          
         <img src="https://c.tenor.com/On7kvXhzml4AAAAi/loading-gif.gif" alt="Loading" class={klass}>
      {/if}
   {/if}
   {#if caption} 
      <figcaption class="text-sm mx-auto text-center opacity-70 italic my-0 pt-2"><slot name="caption"/></figcaption>
   {/if}
</figure>