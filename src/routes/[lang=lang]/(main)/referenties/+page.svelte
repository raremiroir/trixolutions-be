<script>
   // Import components
	import SectionWrapper from "$src/lib/components/Base/Wrapper/SectionWrapper.svelte";
	import Title from "$src/lib/components/Common/Text/Title.svelte";
	import P from "$src/lib/components/Common/Text/P.svelte";
	import Main from "$src/lib/components/Base/Wrapper/Main.svelte";
	import Image from "$src/lib/components/Base/Media/Image.svelte";
	import Card from "$src/lib/components/Common/Card/Card.svelte";

   // Import Video
   import cegeka_video from '$lib/videos/referentiefilmpje-cegeka-min.mp4'
   import cegeka_thumbnail from '$lib/videos/referentiefilmpje-cegeka-thumbnail-720.webp'
   // Import images
   import acerta        from '$img/references/acerta-logo.png?w=1536;1280;768;640&format=webp;avif;jpeg&srcset'; 
   import axa           from '$img/references/axa-logo.png?w=1536;1280;768;640&format=webp;avif;jpeg&srcset'; 
   import baloise       from '$img/references/baloise-logo.png?w=1536;1280;768;640&format=webp;avif;jpeg&srcset'; 
   import basf          from '$img/references/basf-logo.png?w=1536;1280;768;640&format=webp;avif;jpeg&srcset'; 
   import belfius       from '$img/references/belfius-logo.png?w=1536;1280;768;640&format=webp;avif;jpeg&srcset'; 
   import fortis        from '$img/references/bnp_paribas_fortis-logo.png?w=1536;1280;768;640&format=webp;avif;jpeg&srcset'; 
   import bouwunie      from '$img/references/bouwunie-logo.png?w=1536;1280;768;640&format=webp;avif;jpeg&srcset'; 
   import bureauveritas from '$img/references/bureau_veritas-logo.png?w=1536;1280;768;640&format=webp;avif;jpeg&srcset'; 
   import cegeka        from '$img/references/cegeka-logo.png?w=1536;1280;768;640&format=webp;avif;jpeg&srcset'; 
   import cm            from '$img/references/christelijke_mutualiteit-logo.png?w=1536;1280;768;640&format=webp;avif;jpeg&srcset'; 
   import cibo          from '$img/references/cibo-logo.png?w=1536;1280;768;640&format=webp;avif;jpeg&srcset'; 
   import clearxperts   from '$img/references/clearxperts-logo.png?w=1536;1280;768;640&format=webp;avif;jpeg&srcset'; 
   import comparex      from '$img/references/comparex-logo.png?w=1536;1280;768;640&format=webp;avif;jpeg&srcset'; 
   import delhaize      from '$img/references/delhaize-logo.png?w=1536;1280;768;640&format=webp;avif;jpeg&srcset'; 
   import deloitte      from '$img/references/deloitte-logo.png?w=1536;1280;768;640&format=webp;avif;jpeg&srcset'; 
   import dpd           from '$img/references/dpd-logo.png?w=1536;1280;768;640&format=webp;avif;jpeg&srcset'; 
   import eozen         from '$img/references/eozen-logo.png?w=1536;1280;768;640&format=webp;avif;jpeg&srcset'; 
   import ethias        from '$img/references/ethias-logo.png?w=1536;1280;768;640&format=webp;avif;jpeg&srcset'; 
   import grandoptical  from '$img/references/grand_optical-logo.png?w=1536;1280;768;640&format=webp;avif;jpeg&srcset'; 
   import ibm           from '$img/references/ibm-logo.png?w=1536;1280;768;640&format=webp;avif;jpeg&srcset'; 
   import immopoint     from '$img/references/immopoint-logo.png?w=1536;1280;768;640&format=webp;avif;jpeg&srcset'; 
   import infradata     from '$img/references/infradata-logo.png?w=1536;1280;768;640&format=webp;avif;jpeg&srcset'; 
   import isoverhoeven  from '$img/references/isolatie_verhoeven-logo.png?w=1536;1280;768;640&format=webp;avif;jpeg&srcset'; 
   import kbc           from '$img/references/kbc-logo.png?w=1536;1280;768;640&format=webp;avif;jpeg&srcset'; 
   import kunlabora     from '$img/references/kunlabora-logo.png?w=1536;1280;768;640&format=webp;avif;jpeg&srcset'; 
   import lastek        from '$img/references/lastek-logo.png?w=1536;1280;768;640&format=webp;avif;jpeg&srcset'; 
   import livitas       from '$img/references/livitas-logo.png?w=1536;1280;768;640&format=webp;avif;jpeg&srcset'; 
   import lotus         from '$img/references/lotus-logo.png?w=1536;1280;768;640&format=webp;avif;jpeg&srcset'; 
   import makro         from '$img/references/makro-logo.jpg?w=1536;1280;768;640&format=webp;avif;jpeg&srcset'; 
   import mediamarkt    from '$img/references/media_markt-logo.png?w=1536;1280;768;640&format=webp;avif;jpeg&srcset'; 
   import metro         from '$img/references/metro-logo.png?w=1536;1280;768;640&format=webp;avif;jpeg&srcset'; 
   import michelin      from '$img/references/michelin-logo.png?w=1536;1280;768;640&format=webp;avif;jpeg&srcset'; 
   import molenberg     from '$img/references/molenbergnatie-logo.png?w=1536;1280;768;640&format=webp;avif;jpeg&srcset'; 
   import oz            from '$img/references/oz-logo.png?w=1536;1280;768;640&format=webp;avif;jpeg&srcset'; 
   import parker        from '$img/references/parker-logo.png?w=1536;1280;768;640&format=webp;avif;jpeg&srcset'; 
   import portantwerp   from '$img/references/port_of_antwerp-logo.png?w=1536;1280;768;640&format=webp;avif;jpeg&srcset'; 
   import q8            from '$img/references/q8-logo.png?w=1536;1280;768;640&format=webp;avif;jpeg&srcset'; 
   import sogeti        from '$img/references/sogeti-logo.png?w=1536;1280;768;640&format=webp;avif;jpeg&srcset'; 
   import staci         from '$img/references/staci-logo.png?w=1536;1280;768;640&format=webp;avif;jpeg&srcset'; 
   import spimmo        from '$img/references/stef_proost_immo-logo.png?w=1536;1280;768;640&format=webp;avif;jpeg&srcset'; 
   import tessgroup     from '$img/references/tessenderlo_group-logo.png?w=1536;1280;768;640&format=webp;avif;jpeg&srcset'; 
   import vulkoprin     from '$img/references/vulkoprin-logo.png?w=1536;1280;768;640&format=webp;avif;jpeg&srcset'; 
   import wgn           from '$img/references/wijngaardnatie-logo.png?w=1536;1280;768;640&format=webp;avif;jpeg&srcset'; 


	import Video         from "$src/lib/components/Base/Media/Video.svelte";
	import Breadcrumbs   from "$src/lib/components/Core/Breadcrumbs/Breadcrumbs.svelte";

   let references = [
      { src: vulkoprin,    alt: 'Vulkoprin Logo' }, 
      { src: kunlabora,    alt: 'Kunlabora Logo' }, 
      { src: molenberg,    alt: 'Molenbergnatie Logo' }, 
      { src: cm,           alt: 'Christelijke Mutualiteit Logo' }, 
      { src: acerta,       alt: 'Acerta Logo' }, 
      { src: staci,        alt: 'Staci Logo' },
      { src: bouwunie,     alt: 'Bouwunie Logo' }, 
      { src: parker,       alt: 'Parker Logo' }, 
      { src: wgn,          alt: 'Wijngaardnatie Logo' }, 
      { src: oz,           alt: 'Onafhankelijk Ziekenfonds Logo' }, 
      { src: clearxperts,  alt: 'clearXperts Logo' }, 
      { src: cibo,         alt: 'cibo Logo' }, 
      { src: immopoint,    alt: 'Immo Point Logo' }, 
      { src: cegeka,       alt: 'Cegeka Logo' }, 
      { src: mediamarkt,   alt: 'Media Markt Logo' }, 
      { src: baloise,      alt: 'Baloise Logo' }, 
      { src: livitas,      alt: 'Livitas Logo' }, 
      { src: basf,         alt: 'BASF Logo' }, 
      { src: infradata,    alt: 'Infradata Logo' }, 
      { src: sogeti,       alt: 'Sogeti Logo' }, 
      { src: makro,        alt: 'Makro Logo' }, 
      { src: bureauveritas, alt: 'Bureau Veritas Logo' },
      { src: fortis,       alt: 'BNP Paribas Fortis Logo' }, 
      { src: lotus,        alt: 'Lotus Logo' }, 
      { src: deloitte,     alt: 'Deloitte Logo' }, 
      { src: delhaize,     alt: 'Delhaize Logo' }, 
      { src: metro,        alt: 'Metro Logo' }, 
      { src: q8,           alt: 'Q8 Logo' },
      { src: isoverhoeven, alt: 'Isolatie Verhoeven Logo' }, 
      { src: ethias, alt: 'Ethias Logo' }, 
      { src: spimmo, alt: 'Stef Proost Immobiliën Logo' }, 
      { src: eozen, alt: 'EoZen Logo' }, 
      { src: kbc, alt: 'KBC Logo' }, 
      { src: axa, alt: 'AXA Logo' }, 
      { src: comparex, alt: 'Comparex Logo' }, 
      { src: belfius, alt: 'Belfius Logo' }, 
      { src: portantwerp, alt: 'Port of Antwerp Logo' }, 
      { src: michelin, alt: 'Michelin Logo' }, 
      { src: ibm, alt: 'IBM Logo' },
      { src: lastek, alt: 'Lastek Logo' }, 
      { src: grandoptical, alt: 'Grand Optical Logo' }, 
      { src: tessgroup, alt: 'Tessenderlo Group Logo' }, 
      { src: dpd, alt: 'dpd Logo',
        height: 'h-6 sm:h-1 md:h-10 xl:h-12 2xl:h-14' }

   ]
</script>

<Breadcrumbs/>
<Main cta>
   <SectionWrapper name="references">
      <Title slot="title" type='h1'>Referenties</Title>
      <div class="w-full mx-auto">
         <Video src={cegeka_video} poster={cegeka_thumbnail}/>
      </div>
   </SectionWrapper>

   <SectionWrapper name="our-team">
      <div class="flex flex-wrap justify-between items-center gap-8">
         {#each references as img}
            <Image
               imgSrc={img.src} alt="{img.alt}" 
               height="{img.height ? img.height : 'h-6 sm:h-8 md:h-10 xl:h-12 2xl:h-14'}" width="w-auto"
               />
         {/each}
      </div>
   </SectionWrapper>
</Main>