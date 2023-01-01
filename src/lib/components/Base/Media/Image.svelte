<script lang="ts">
   // IMPORT IMAGES
      // placeholder
      import placehold  from '$img/placeholder_green.png?w=1536;1280;768;640&format=webp;avif;jpeg&srcset'
      // lencioni assets
      import pyramid    from '$img/lencioni/pyramide/pyramid-lencioni-1.png?w=1536;1280;768;640&format=webp;avif;jpeg&srcset'
      // team
      import tom_color  from '$img/team/Tom-Color_1080w.webp?w=1536;1280;768;640&format=webp;avif;jpeg&srcset'
      import tom        from '$img/team/Tom-BW_1080w.webp?w=1536;1280;768;640&format=webp;avif;jpeg&srcset'
      import christoph  from '$img/team/Christoph_1080w.webp?w=1536;1280;768;640&format=webp;avif;jpeg&srcset'
      import frederik   from '$img/team/Frederik_1080w.webp?w=1536;1280;768;640&format=webp;avif;jpeg&srcset'
      import tamara     from '$img/team/Tamara_1080w.webp?w=1536;1280;768;640&format=webp;avif;jpeg&srcset'
      // stock
      import BV         from  '$img/stock/Beslissende_Voorsprong_Stock.webp?w=1536;1280;768;640&format=webp;avif;jpeg&srcset';
      import BV2        from  '$img/stock/Beslissende_Voorsprong_2_Stock.webp?w=1536;1280;768;640&format=webp;avif;jpeg&srcset';
      import ITP        from  '$img/stock/Ideale_Teamplayer_Stock.webp?w=1536;1280;768;640&format=webp;avif;jpeg&srcset';
      import KGT        from  '$img/stock/Kracht_Van_Gezonde_Teams_Stock.webp?w=1536;1280;768;640&format=webp;avif;jpeg&srcset';
      import CTC        from  '$img/stock/Lencioni_CtC_Stock.webp?w=1536;1280;768;640&format=webp;avif;jpeg&srcset';
      import VD         from  '$img/stock/Vergaderen_Is_Dodelijk_Stock.webp?w=1536;1280;768;640&format=webp;avif;jpeg&srcset';
      import WG         from  '$img/stock/Working_Genius_Stock.webp?w=1536;1280;768;640&format=webp;avif;jpeg&srcset';
      // blog post stock photos
      import BP1        from '$img/stock/blog/1_vertrouwen_bakermat_succes-stock.webp?w=1536;1280;768;640&format=webp;avif;jpeg&srcset'
      import BP2        from '$img/stock/blog/2_laat_haters_haten-stock.webp?w=1536;1280;768;640&format=webp;avif;jpeg&srcset'
      import BP3        from '$img/stock/blog/3_reboarding_you_said_what-stock.webp?w=1536;1280;768;640&format=webp;avif;jpeg&srcset'
      import BP4        from '$img/stock/blog/4_maak_je_eigen_elearning_articulate-stock.webp?w=1536;1280;768;640&format=webp;avif;jpeg&srcset'
      import BP5        from '$img/stock/blog/5_beslissingen_nemen_met_team-stock.webp?w=1536;1280;768;640&format=webp;avif;jpeg&srcset'
      import BP7        from '$img/stock/blog/7_managen_virtuele_teams-stock.webp?w=1536;1280;768;640&format=webp;avif;jpeg&srcset'
      import BP8        from '$img/stock/blog/8_sturen_op_output_virtuele_teams-stock.webp?w=1536;1280;768;640&format=webp;avif;jpeg&srcset'
      import BP9        from '$img/stock/blog/9_digitale_oplossing_2_time_management.webp?w=1536;1280;768;640&format=webp;avif;jpeg&srcset'
      import BP10       from '$img/stock/blog/10_lencioni_herkenbaar_uitbreidbaar_zeker-stock.webp?w=1536;1280;768;640&format=webp;avif;jpeg&srcset'
      import BP12       from '$img/stock/blog/12_digitale_softskills_opleidingen_trixolutions-stock.webp?w=1536;1280;768;640&format=webp;avif;jpeg&srcset'
      import BP14       from '$img/stock/blog/14_waarom_psychologische_veiligheid_belangrijker_is_dan_ooit-stock.webp?w=1536;1280;768;640&format=webp;avif;jpeg&srcset'
      import BP15       from '$img/stock/blog/15_een_rotte_appel_destructieve_teamleden-stock.webp?w=1536;1280;768;640&format=webp;avif;jpeg&srcset'
      import BP17       from '$img/stock/blog/17_zelforganisatie_iedereen_niemand_manager-stock.webp?w=1536;1280;768;640&format=webp;avif;jpeg&srcset'
      import BP19       from '$img/stock/blog/19_adviseur_klant_vraagstuk-stock.webp?w=1536;1280;768;640&format=webp;avif;jpeg&srcset'
      import BP20       from '$img/stock/blog/20_samenwerken_aandacht_persoonlijke_relaties-stock.webp?w=1536;1280;768;640&format=webp;avif;jpeg&srcset'
      import BP21       from '$img/stock/blog/21_nieuw_in_team_eerst_aanpassen_dan_afwijken-stock.webp?w=1536;1280;768;640&format=webp;avif;jpeg&srcset'
      import BP22       from '$img/stock/blog/22_waarom_aanspreken_moeilijker_als_je_leidinggeeft-stock.webp?w=1536;1280;768;640&format=webp;avif;jpeg&srcset'
      import BP24       from '$img/stock/blog/24_hoe_niet_te_delegeren-stock.webp?w=1536;1280;768;640&format=webp;avif;jpeg&srcset'
      import BP25       from '$img/stock/blog/25_rijkelijk_belonen_weinig_effect_op_kwaliteit-stock.webp?w=1536;1280;768;640&format=webp;avif;jpeg&srcset'
      import BP26       from '$img/stock/blog/26_hoe_gebruik_je_content_voor_sales-stock.webp?w=1536;1280;768;640&format=webp;avif;jpeg&srcset'
      import BP27       from '$img/stock/blog/27_zonder_oogcontact_geen_contact-stock.webp?w=1536;1280;768;640&format=webp;avif;jpeg&srcset'
      import BP28       from '$img/stock/blog/28_6_starters_voor_geweldige_presentatie.webp?w=1536;1280;768;640&format=webp;avif;jpeg&srcset'
      import BP29       from '$img/stock/blog/29_leer_eerst_jezelf_leiden_dan_anderen.webp?w=1536;1280;768;640&format=webp;avif;jpeg&srcset'
      import BP30       from '$img/stock/blog/30_vijflagenmodel_business_intelligence.webp?w=1536;1280;768;640&format=webp;avif;jpeg&srcset'
      
      export let imgSrc = 'placeholder';
      let convertedSrc;
      switch (imgSrc) {
         
         case 'tom_color':                convertedSrc = tom_color;  break;
         case 'tom':                      convertedSrc = tom;        break;
         case 'christoph':                convertedSrc = christoph;  break;
         case 'frederik':                 convertedSrc = frederik;   break;
         case 'tamara':                   convertedSrc = tamara;     break;
         
         case 'lencioni_pyramid':         convertedSrc = pyramid;    break;
         
         case 'Beslissende_Voorsprong':   convertedSrc = BV;         break;
         case 'Beslissende_Voorsprong_2': convertedSrc = BV2;        break;
         case 'Ideale_Teamplayer':        convertedSrc = ITP;        break;
         case 'Kracht_Gezonde_Teams':     convertedSrc = KGT;        break;
         case 'Lencioni_CtC':             convertedSrc = CTC;        break;
         case 'Vergaderen_Is_Dodelijk':   convertedSrc = VD;         break;
         case 'Working_Genius':           convertedSrc = WG;         break;
         
         case 'vertrouwen_bakermat_succes':  convertedSrc = BP1;         break;
         case 'laat_haters_haten':           convertedSrc = BP2;         break;
         case 'reboarding_what':             convertedSrc = BP3;         break;
         case 'maak_eigen_elearning':        convertedSrc = BP4;         break;
         case 'beslissingen_nemen_team':     convertedSrc = BP5;         break;
         case 'managen_virtuele_teams':      convertedSrc = BP7;         break;
         case 'sturen_op_output':            convertedSrc = BP8;         break;
         case 'oplossing_time_management':   convertedSrc = BP9;         break;
         case 'lencioni_herkenbaar_zeker':   convertedSrc = BP10;         break;
         case 'softskills_opleidingen':      convertedSrc = BP12;         break;
         case 'pv_belangrijker_dan_ooit':    convertedSrc = BP14;         break;
         case 'rotte_appel_destructief':     convertedSrc = BP15;         break;
         case 'iedereen_niemand_manager':    convertedSrc = BP17;         break;
         case 'adviseur_klant_vraagstuk':    convertedSrc = BP19;         break;
         case 'aandacht_persoonlijke_rel':   convertedSrc = BP20;         break;
         case 'aanpassen_dan_afwijken':      convertedSrc = BP21;         break;
         case 'aanspreken_moeilijker':       convertedSrc = BP22;         break;
         case 'niet_delegeren':              convertedSrc = BP24;         break;
         case 'beloning_effect_kwaliteit':   convertedSrc = BP25;         break;
         case 'content_voor_sales':          convertedSrc = BP26;         break;
         case 'oogcontact_contact':          convertedSrc = BP27;         break;
         case 'geweldige_presentatie_start': convertedSrc = BP28;         break;
         case 'zelf_leiden_dan_anderen':     convertedSrc = BP29;         break;
         case 'model_business_intelligence': convertedSrc = BP30;         break;
         
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