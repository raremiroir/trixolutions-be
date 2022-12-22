<script>

   export let src = '';
   export let alt = '';

   // Lazy load image?
   export let lazy = false;
   // Extra classes on image wrap
   export let klass = '';

   // Set image position (default object-center)
   export let objectPos = '';
   // Set image fitting (default object-cover)
   export let objectFit = '';

   // Set height
   export let height = '';

   // Set sources for srcset
   export let w400 = '';
   export let w600 = '';
   export let w800 = '';
   export let w1080 = '';
</script>

{#if w400 && w600 && w800 && w1080}
   <img 
      srcset="{w400} 400w, {w600} 600w, {w800} 800w, {w1080} 1080w"
      sizes="(max-width: 600px) 400w, (max-width: 800px) 600w, (max-width: 1200px) 800w, (min-width: 1201px) 1080w"
      {src} {alt} loading={lazy ? 'lazy' : 'eager'}
      class="{height ? height : 'h-60'} object-cover {objectPos ? objectPos : 'object-center'} w-full {klass}"
   />
{:else}
   <img 
      {src} {alt} loading={lazy ? 'lazy' : 'eager'}
      class="{height ? height : 'h-60'} {objectFit ? objectFit : 'object-cover'} {objectPos ? objectPos : 'object-center'} w-full {klass}"
   />
{/if}

