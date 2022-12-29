<script lang="ts">
   // IMPORT IMAGES
      // placeholder
      import placehold  from '$img/placeholder_green.png?w=1536;1280;768;640&format=webp;avif;jpeg&srcset'
      // stock
      import BV         from  '$img/stock/Beslissende_Voorsprong_Stock.webp?w=1536;1280;768;640&format=webp;avif;jpeg&srcset';
      import BV2        from  '$img/stock/Beslissende_Voorsprong_2_Stock.webp?w=1536;1280;768;640&format=webp;avif;jpeg&srcset';
      import ITP        from  '$img/stock/Ideale_Teamplayer_Stock.webp?w=1536;1280;768;640&format=webp;avif;jpeg&srcset';
      import KGT        from  '$img/stock/Kracht_Van_Gezonde_Teams_Stock.webp?w=1536;1280;768;640&format=webp;avif;jpeg&srcset';
      import CTC        from  '$img/stock/Lencioni_CtC_Stock.webp?w=1536;1280;768;640&format=webp;avif;jpeg&srcset';
      import VD         from  '$img/stock/Vergaderen_Is_Dodelijk_Stock.webp?w=1536;1280;768;640&format=webp;avif;jpeg&srcset';
      import WG         from  '$img/stock/Working_Genius_Stock.webp?w=1536;1280;768;640&format=webp;avif;jpeg&srcset';
      // lencioni assets
      import pyramid    from '$img/lencioni/pyramide/pyramid-lencioni-1.png?w=1536;1280;768;640&format=webp;avif;jpeg&srcset'
      // team
      import tom_color  from '$img/team/Tom-Color_1080w.webp?w=1536;1280;768;640&format=webp;avif;jpeg&srcset'
      import tom        from '$img/team/Tom-BW_1080w.webp?w=1536;1280;768;640&format=webp;avif;jpeg&srcset'
      import christoph  from '$img/team/Christoph_1080w.webp?w=1536;1280;768;640&format=webp;avif;jpeg&srcset'
      import frederik   from '$img/team/Frederik_1080w.webp?w=1536;1280;768;640&format=webp;avif;jpeg&srcset'
      import tamara     from '$img/team/Tamara_1080w.webp?w=1536;1280;768;640&format=webp;avif;jpeg&srcset'
      
      
      export let imgSrc = 'placeholder';
      let convertedSrc;
      switch (imgSrc) {
         case 'Beslissende_Voorsprong':   convertedSrc = BV;         break;
         case 'Beslissende_Voorsprong_2': convertedSrc = BV2;        break;
         case 'Ideale_Teamplayer':        convertedSrc = ITP;        break;
         case 'Kracht_Gezonde_Teams':     convertedSrc = KGT;        break;
         case 'Lencioni_CtC':             convertedSrc = CTC;        break;
         case 'Vergaderen_Is_Dodelijk':   convertedSrc = VD;         break;
         case 'Working_Genius':           convertedSrc = WG;         break;
         
         case 'tom_color':                convertedSrc = tom_color;  break;
         case 'tom':                      convertedSrc = tom;        break;
         case 'christoph':                convertedSrc = christoph;  break;
         case 'frederik':                 convertedSrc = frederik;   break;
         case 'tamara':                   convertedSrc = tamara;     break;

         case 'lencioni_pyramid':         convertedSrc = pyramid;    break;
         
         case 'placeholder':              convertedSrc = placehold;  break;
         default: convertedSrc = imgSrc; break;
      }

   import { onMount } from "svelte";
   import { browser } from "$app/environment";
   import { Image } from '@rodneylab/sveltekit-components'
	import { each } from "svelte/internal";
	import { lazyLoad } from "$lib/scripts/lazyload";


   export let alt = '';
   export let klass = '';
   export let imgClass = '';
   export let height = 'h-full';
   export let width = 'w-full';
   export let imgFit = 'object-cover';
   export let imgPos = 'object-center';

   // Eager loading ? (standard lazy)
   export let eager = false;





   const srcArr = convertedSrc.split(', ');
   // console.log(srcArr);
   
   const sources = [
      { type: 'image/webp', srcset: [{src: '', size: ''},] },
      { type: 'image/avif', srcset: [{src: '', size: ''},] },
      { type: 'image/jpeg', srcset: [{src: '', size: ''},] },
   ]

   for (let index = 0; index < srcArr.length; index++) {
      const source = srcArr[index];
      const splitSource = source.split(' ');
      
      if (index % 3 === 0) {
         sources[0].srcset.push({
            src: splitSource[0],
            size: splitSource[1].replaceAll('w', '')
         });
      } else if ((index - 1) % 3 === 0) {
         sources[1].srcset.push({
            src: splitSource[0],
            size: splitSource[1].replaceAll('w', '')
         });
      } else if ((index + 1) % 3 === 0) {
         sources[2].srcset.push({
            src: splitSource[0],
            size: splitSource[1].replaceAll('w', '')
         });
      }
   }

   // console.log(sources);
   const fallback = sources[0].srcset[4].src;
</script>

<div class="{klass} overflow-hidden {width} {height}">
   <picture>
      {#each sources as source}
         {#each source.srcset as item}
            <source 
               srcset="{item.src}" 
               type="{source.type}" 
               media="(min-width: {item.size}px)"
               />
         {/each}
      {/each}
      <!-- <source srcset="{sources[0].srcset[4].src}" type="{sources[0].type}" media="(min-width: 0px)" /> -->
      <img 
         src={fallback}
         loading="{eager ? 'eager' : 'lazy'}"
         class=" 
            opacity-100
            transition-all duration-300 ease-in
            {imgFit} {imgPos} {imgClass}
            h-full w-full
            "
         {alt}
           />
   </picture>
</div>