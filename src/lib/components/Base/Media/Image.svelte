<script>

   export let src = '';
   export let alt = '';

   // Lazy load image?
   export let lazy = false;
   // Extra classes on image wrap
   export let klass = '';

   // Choose image
   export let img = '';
   // Set image position (default object-center)
   export let objectPos = '';

   // Set height
   export let height = '';

   // Set sources for srcset
   export let w400 = 'http://via.placeholder.com/400x300'
   export let w600 = 'http://via.placeholder.com/600x450'
   export let w800 = 'http://via.placeholder.com/800x600'
   export let w1080 = 'http://via.placeholder.com/1080x810'
</script>

<img 
   srcset="{w400} 400w, {w600} 600w, {w800} 800w, {w1080} 1080w"
   sizes="(max-width: 600px) 400w, (max-width: 800px) 600w, (max-width: 1200px) 800w, (min-width: 1201px) 1080w"
   {src} {alt} loading={lazy ? 'lazy' : 'eager'}
   class="{height ? height : 'h-60'} object-cover {objectPos ? objectPos : 'object-center'} {klass}"
/>

