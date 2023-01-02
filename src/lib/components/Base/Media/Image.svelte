<script lang="ts">
   // IMPORT IMAGES
      // placeholder
      import placeholder   from '$img/placeholder/placeholder.png?w=1536;1280;768;640&format=webp;avif;jpeg&srcset'
      // lencioni assets
      import pyramid       from '$img/lencioni/pyramid-lencioni-graphic.png?w=1536;1280;768;640&format=webp;avif;jpeg&srcset'
      // team
      import tom_color     from '$img/team/tom-color.webp?w=1536;1280;768;640&format=webp;avif;jpeg&srcset'
      import tom           from '$img/team/tom-bw.webp?w=1536;1280;768;640&format=webp;avif;jpeg&srcset'
      import christoph     from '$img/team/christoph-bw.webp?w=1536;1280;768;640&format=webp;avif;jpeg&srcset'
      import frederik      from '$img/team/frederik-bw.webp?w=1536;1280;768;640&format=webp;avif;jpeg&srcset'
      import tamara        from '$img/team/tamara-bw.webp?w=1536;1280;768;640&format=webp;avif;jpeg&srcset'
      // stock
      import BV            from '$img/home/beslissende-voorsprong.webp?w=1536;1280;768;640&format=webp;avif;jpeg&srcset';
      import BV2           from '$img/home/beslissende-voorsprong-2.webp?w=1536;1280;768;640&format=webp;avif;jpeg&srcset';
      import ITP           from '$img/home/ideale-teamplayer.webp?w=1536;1280;768;640&format=webp;avif;jpeg&srcset';
      import KGT           from '$img/home/kracht-gezonde-teams.webp?w=1536;1280;768;640&format=webp;avif;jpeg&srcset';
      import CTC           from '$img/home/lencioni-ctc.webp?w=1536;1280;768;640&format=webp;avif;jpeg&srcset';
      import VD            from '$img/home/vergaderen-dodelijk.webp?w=1536;1280;768;640&format=webp;avif;jpeg&srcset';
      import WG            from '$img/home/working-genius.webp?w=1536;1280;768;640&format=webp;avif;jpeg&srcset';
      // blog post stock photos
      import BP1           from '$img/blog/vertrouwen-bakermat-succes.webp?w=1536;1280;768;640&format=webp;avif;jpeg&srcset'
      import BP2           from '$img/blog/laat-haters-haten.webp?w=1536;1280;768;640&format=webp;avif;jpeg&srcset'
      import BP3           from '$img/blog/reboarding-what.webp?w=1536;1280;768;640&format=webp;avif;jpeg&srcset'
      import BP4           from '$img/blog/maak-eigen-elearning.webp?w=1536;1280;768;640&format=webp;avif;jpeg&srcset'
      import BP5           from '$img/blog/beslissingen-nemen-team.webp?w=1536;1280;768;640&format=webp;avif;jpeg&srcset'
      import BP7           from '$img/blog/managen-virtuele-teams.webp?w=1536;1280;768;640&format=webp;avif;jpeg&srcset'
      import BP8           from '$img/blog/sturen-op-output.webp?w=1536;1280;768;640&format=webp;avif;jpeg&srcset'
      import BP9           from '$img/blog/oplossing-time-management.webp?w=1536;1280;768;640&format=webp;avif;jpeg&srcset'
      import BP10          from '$img/blog/lencioni-herkenbaar-zeker.webp?w=1536;1280;768;640&format=webp;avif;jpeg&srcset'
      import BP12          from '$img/blog/softskills-opleidingen.webp?w=1536;1280;768;640&format=webp;avif;jpeg&srcset'
      import BP14          from '$img/blog/pv-belangrijker-dan-ooit.webp?w=1536;1280;768;640&format=webp;avif;jpeg&srcset'
      import BP15          from '$img/blog/rotte-appel.webp?w=1536;1280;768;640&format=webp;avif;jpeg&srcset'
      import BP17          from '$img/blog/iedereen-niemand-manager.webp?w=1536;1280;768;640&format=webp;avif;jpeg&srcset'
      import BP19          from '$img/blog/adviseur-klant-vraagstuk.webp?w=1536;1280;768;640&format=webp;avif;jpeg&srcset'
      import BP20          from '$img/blog/aandacht-persoonlijke-rel.webp?w=1536;1280;768;640&format=webp;avif;jpeg&srcset'
      import BP21          from '$img/blog/aanpassen-dan-afwijken.webp?w=1536;1280;768;640&format=webp;avif;jpeg&srcset'
      import BP22          from '$img/blog/aanspreken-moeilijker-leiding.webp?w=1536;1280;768;640&format=webp;avif;jpeg&srcset'
      import BP24          from '$img/blog/niet-delegeren.webp?w=1536;1280;768;640&format=webp;avif;jpeg&srcset'
      import BP25          from '$img/blog/belonen-effect-kwaliteit.webp?w=1536;1280;768;640&format=webp;avif;jpeg&srcset'
      import BP26          from '$img/blog/gebruik-content-sales.webp?w=1536;1280;768;640&format=webp;avif;jpeg&srcset'
      import BP27          from '$img/blog/oogcontact-contact.webp?w=1536;1280;768;640&format=webp;avif;jpeg&srcset'
      import BP28          from '$img/blog/starters-geweldige-presentatie.webp?w=1536;1280;768;640&format=webp;avif;jpeg&srcset'
      import BP29          from '$img/blog/eerst-leiden-dan-anderen.webp?w=1536;1280;768;640&format=webp;avif;jpeg&srcset'
      import BP30          from '$img/blog/model-business-intelligence.webp?w=1536;1280;768;640&format=webp;avif;jpeg&srcset'
      
      export let imgSrc = 'placeholder';
      let convertedSrc;
      let converted = true;
      switch (imgSrc) {
         
         case 'tom-color':                      convertedSrc = tom_color;  break;
         case 'tom-bw':                         convertedSrc = tom;        break;
         case 'christoph-bw':                   convertedSrc = christoph;  break;
         case 'frederik-bw':                    convertedSrc = frederik;   break;
         case 'tamara-bw':                      convertedSrc = tamara;     break;
         
         case 'pyramid-lencioni-graphic':       convertedSrc = pyramid;    break;
         
         case 'beslissende-voorsprong':         convertedSrc = BV;         break;
         case 'beslissende-voorsprong-2':       convertedSrc = BV2;        break;
         case 'ideale-teamplayer':              convertedSrc = ITP;        break;
         case 'kracht-gezonde-teams':           convertedSrc = KGT;        break;
         case 'lencioni-ctc':                   convertedSrc = CTC;        break;
         case 'vergaderen-dodelijk':            convertedSrc = VD;         break;
         case 'working-genius':                 convertedSrc = WG;         break;
         
         case 'vertrouwen-bakermat-succes':     convertedSrc = BP1;         break;
         case 'laat-haters-haten':              convertedSrc = BP2;         break;
         case 'reboarding-what':                convertedSrc = BP3;         break;
         case 'maak-eigen-elearning':           convertedSrc = BP4;         break;
         case 'beslissingen-nemen-team':        convertedSrc = BP5;         break;
         case 'managen-virtuele-teams':         convertedSrc = BP7;         break;
         case 'sturen-op-output':               convertedSrc = BP8;         break;
         case 'oplossing-time-management':      convertedSrc = BP9;         break;
         case 'lencioni-herkenbaar-zeker':      convertedSrc = BP10;         break;
         case 'softskills-opleidingen':         convertedSrc = BP12;         break;
         case 'pv-belangrijker-dan-ooit':       convertedSrc = BP14;         break;
         case 'rotte-appel':                    convertedSrc = BP15;         break;
         case 'iedereen-niemand-manager':       convertedSrc = BP17;         break;
         case 'adviseur-klant-vraagstuk':       convertedSrc = BP19;         break;
         case 'aandacht-persoonlijke-rel':      convertedSrc = BP20;         break;
         case 'aanpassen-dan-afwijken':         convertedSrc = BP21;         break;
         case 'aanspreken-moeilijker-leiding':  convertedSrc = BP22;         break;
         case 'niet-delegeren':                 convertedSrc = BP24;         break;
         case 'belonen-effect-kwaliteit':       convertedSrc = BP25;         break;
         case 'gebruik-content-sales':          convertedSrc = BP26;         break;
         case 'oogcontact-contact':             convertedSrc = BP27;         break;
         case 'starters-geweldige-presentatie': convertedSrc = BP28;         break;
         case 'eerst-leiden-dan-anderen':       convertedSrc = BP29;         break;
         case 'model-business-intelligence':    convertedSrc = BP30;         break;
         
         case 'placeholder':                    convertedSrc = placeholder;  break;
         default: 
            convertedSrc = imgSrc; 
            converted = false;
            break;
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

   // If you want to import your own special image link through the component
   export let customSource = false;

   // Eager loading ? (standard lazy)
   export let eager = false;

   
   const sources = [
      { type: 'image/webp', srcset: [{src: '', size: ''},] },
      { type: 'image/avif', srcset: [{src: '', size: ''},] },
      { type: 'image/jpeg', srcset: [{src: '', size: ''},] },
   ]
   let fallback:any;

      if (converted || customSource) {
         const srcArr = convertedSrc.split(', ');
         // console.log(srcArr);
         
      
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
         fallback = sources[0].srcset[4].src;
      }
</script>

<div class="{klass} overflow-hidden {width} {height}">
   {#if converted || customSource}
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
   {/if}
</div>