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
   import acerta from '$img/references/acerta-logo.png'; 
   import axa from '$img/references/axa-logo.png'; 
   import baloise from '$img/references/baloise-logo.png'; 
   import basf from '$img/references/basf-logo.png'; 
   import belfius from '$img/references/belfius-logo.png'; 
   import fortis from '$img/references/bnp_paribas_fortis-logo.png'; 
   import bouwunie from '$img/references/bouwunie-logo.png'; 
   import bureauveritas from '$img/references/bureau_veritas-logo.png'; 
   import cegeka from '$img/references/cegeka-logo.png'; 
   import cm from '$img/references/christelijke_mutualiteit-logo.png'; 
   import cibo from '$img/references/cibo-logo.png'; 
   import clearxperts from '$img/references/clearxperts-logo.png'; 
   import comparex from '$img/references/comparex-logo.png'; 
   import delhaize from '$img/references/delhaize-logo.png'; 
   import deloitte from '$img/references/deloitte-logo.png'; 
   import dpd from '$img/references/dpd-logo.png'; 
   import eozen from '$img/references/eozen-logo.png'; 
   import ethias from '$img/references/ethias-logo.png'; 
   import grandoptical from '$img/references/grand_optical-logo.png'; 
   import ibm from '$img/references/ibm-logo.png'; 
   import immopoint from '$img/references/immopoint-logo.png'; 
   import infradata from '$img/references/infradata-logo.png'; 
   import isoverhoeven from '$img/references/isolatie_verhoeven-logo.png'; 
   import kbc from '$img/references/kbc-logo.png'; 
   import kunlabora from '$img/references/kunlabora-logo.png'; 
   import lastek from '$img/references/lastek-logo.png'; 
   import livitas from '$img/references/livitas-logo.png'; 
   import lotus from '$img/references/lotus-logo.png'; 
   import makro from '$img/references/makro-logo.jpg'; 
   import mediamarkt from '$img/references/media_markt-logo.png'; 
   import metro from '$img/references/metro-logo.png'; 
   import michelin from '$img/references/michelin-logo.png'; 
   import molenberg from '$img/references/molenbergnatie-logo.png'; 
   import oz from '$img/references/oz-logo.png'; 
   import parker from '$img/references/parker-logo.png'; 
   import portantwerp from '$img/references/port_of_antwerp-logo.png'; 
   import q8 from '$img/references/q8-logo.png'; 
   import sogeti from '$img/references/sogeti-logo.png'; 
   import staci from '$img/references/staci-logo.png'; 
   import spimmo from '$img/references/stef_proost_immo-logo.png'; 
   import tessgroup from '$img/references/tessenderlo_group-logo.png'; 
   import vulkoprin from '$img/references/vulkoprin-logo.png'; 
   import wgn from '$img/references/wijngaardnatie-logo.png'; 
	import Video from "$src/lib/components/Base/Media/Video.svelte";
	import Breadcrumbs from "$src/lib/components/Core/Breadcrumbs/Breadcrumbs.svelte";

   let references = [
      {
         src: vulkoprin,
         alt: 'Vulkoprin Logo',
         height: 'h-6 sm:h-8 md:h-10 xl:h-12 2xl:h-14'
      }, 
      {
         src: kunlabora,
         alt: 'Kunlabora Logo',
         height: 'h-6 sm:h-8 md:h-10 xl:h-12 2xl:h-14'
      }, 
      {
         src: molenberg,
         alt: 'Molenbergnatie Logo',
         height: 'h-6 sm:h-8 md:h-10 xl:h-12 2xl:h-14'
      }, 
      {
         src: cm,
         alt: 'Christelijke Mutualiteit Logo',
         height: 'h-6 sm:h-8 md:h-10 xl:h-12 2xl:h-14'
      }, 
      {
         src: acerta,
         alt: 'Acerta Logo',
         height: 'h-6 sm:h-8 md:h-10 xl:h-12 2xl:h-14'
      }, 
      {
         src: staci,
         alt: 'Staci Logo',
         height: 'h-6 sm:h-8 md:h-10 xl:h-12 2xl:h-14'
      },
      {
         src: bouwunie,
         alt: 'Bouwunie Logo',
         height: 'h-6 sm:h-8 md:h-10 xl:h-12 2xl:h-14'
      }, 
      {
         src: parker,
         alt: 'Parker Logo',
         height: 'h-6 sm:h-8 md:h-10 xl:h-12 2xl:h-14'
      }, 
      {
         src: wgn,
         alt: 'Wijngaardnatie Logo',
         height: 'h-6 sm:h-8 md:h-10 xl:h-12 2xl:h-14'
      }, 
      {
         src: oz,
         alt: 'Onafhankelijk Ziekenfonds Logo',
         height: 'h-6 sm:h-8 md:h-10 xl:h-12 2xl:h-14'
      }, 
      {
         src: clearxperts,
         alt: 'clearXperts Logo',
         height: 'h-6 sm:h-8 md:h-10 xl:h-12 2xl:h-14'
      }, 
      {
         src: cibo,
         alt: 'cibo Logo',
         height: 'h-6 sm:h-8 md:h-10 xl:h-12 2xl:h-14'
      }, 
      {
         src: immopoint,
         alt: 'Immo Point Logo',
         height: 'h-6 sm:h-8 md:h-10 xl:h-12 2xl:h-14'
      }, 
      {
         src: cegeka,
         alt: 'Cegeka Logo',
         height: 'h-6 sm:h-8 md:h-10 xl:h-12 2xl:h-14'
      }, 
      {
         src: mediamarkt,
         alt: 'Media Markt Logo',
         height: 'h-6 sm:h-8 md:h-10 xl:h-12 2xl:h-14'
      }, 
      {
         src: baloise,
         alt: 'Baloise Logo',
         height: 'h-6 sm:h-8 md:h-10 xl:h-12 2xl:h-14'
      }, 
      {
         src: livitas,
         alt: 'Livitas Logo',
         height: 'h-6 sm:h-8 md:h-10 xl:h-12 2xl:h-14'
      }, 
      {
         src: basf,
         alt: 'BASF Logo',
         height: 'h-6 sm:h-8 md:h-10 xl:h-12 2xl:h-14'
      }, 
      {
         src: infradata,
         alt: 'Infradata Logo',
         height: 'h-6 sm:h-8 md:h-10 xl:h-12 2xl:h-14'
      }, 
      {
         src: sogeti,
         alt: 'Sogeti Logo',
         height: 'h-6 sm:h-8 md:h-10 xl:h-12 2xl:h-14'
      }, 
      {
         src: makro,
         alt: 'Makro Logo',
         height: 'h-6 sm:h-8 md:h-10 xl:h-12 2xl:h-14'
      }, 
      {
         src: bureauveritas,
         alt: 'Bureau Veritas Logo',
         height: 'h-6 sm:h-8 md:h-10 xl:h-12 2xl:h-14'
      },
      {
         src: fortis,
         alt: 'BNP Paribas Fortis Logo',
         height: 'h-6 sm:h-8 md:h-10 xl:h-12 2xl:h-14'
      }, 
      {
         src: lotus,
         alt: 'Lotus Logo',
         height: 'h-6 sm:h-8 md:h-10 xl:h-12 2xl:h-14'
      }, 
      {
         src: deloitte,
         alt: 'Deloitte Logo',
         height: 'h-6 sm:h-8 md:h-10 xl:h-12 2xl:h-14'
      }, 
      {
         src: delhaize,
         alt: 'Delhaize Logo',
         height: 'h-6 sm:h-8 md:h-10 xl:h-12 2xl:h-14'
      }, 
      {
         src: metro,
         alt: 'Metro Logo',
         height: 'h-6 sm:h-8 md:h-10 xl:h-12 2xl:h-14'
      }, 
      {
         src: q8,
         alt: 'Q8 Logo',
         height: 'h-6 sm:h-8 md:h-10 xl:h-12 2xl:h-14'
      },
      {
         src: isoverhoeven,
         alt: 'Isolatie Verhoeven Logo',
         height: 'h-6 sm:h-8 md:h-10 xl:h-12 2xl:h-14'
      }, 
      {
         src: ethias,
         alt: 'Ethias Logo',
         height: 'h-6 sm:h-8 md:h-10 xl:h-12 2xl:h-14'
      }, 
      {
         src: spimmo,
         alt: 'Stef Proost Immobiliën Logo',
         height: 'h-6 sm:h-8 md:h-10 xl:h-12 2xl:h-14'
      }, 
      {
         src: eozen,
         alt: 'EoZen Logo',
         height: 'h-6 sm:h-8 md:h-10 xl:h-12 2xl:h-14'
      }, 
      {
         src: kbc,
         alt: 'KBC Logo',
         height: 'h-6 sm:h-8 md:h-10 xl:h-12 2xl:h-14'
      }, 
      {
         src: axa,
         alt: 'AXA Logo',
         height: 'h-6 sm:h-8 md:h-10 xl:h-12 2xl:h-14'
      }, 
      {
         src: comparex,
         alt: 'Comparex Logo',
         height: 'h-6 sm:h-8 md:h-10 xl:h-12 2xl:h-14'
      }, 
      {
         src: belfius,
         alt: 'Belfius Logo',
         height: 'h-6 sm:h-8 md:h-10 xl:h-12 2xl:h-14'
      }, 
      {
         src: portantwerp,
         alt: 'Port of Antwerp Logo',
         height: 'h-6 sm:h-8 md:h-10 xl:h-12 2xl:h-14'
      }, 
      {
         src: michelin,
         alt: 'Michelin Logo',
         height: 'h-6 sm:h-8 md:h-10 xl:h-12 2xl:h-14'
      }, 
      {
         src: ibm,
         alt: 'IBM Logo',
         height: 'h-6 sm:h-8 md:h-10 xl:h-12 2xl:h-14'
      },
      {
         src: lastek,
         alt: 'Lastek Logo',
         height: 'h-6 sm:h-8 md:h-10 xl:h-12 2xl:h-14'
      }, 
      {
         src: grandoptical,
         alt: 'Grand Optical Logo',
         height: 'h-6 sm:h-8 md:h-10 xl:h-12 2xl:h-14'
      }, 
      {
         src: tessgroup,
         alt: 'Tessenderlo Group Logo',
         height: 'h-6 sm:h-8 md:h-10 xl:h-12 2xl:h-14'
      }, 
      {
         src: dpd,
         alt: 'dpd Logo',
         height: 'h-6 sm:h-8 md:h-10 xl:h-12 2xl:h-14'
      }

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
            <img 
               src={img.src} alt="{img.alt}" 
               class="w-auto {img.height}"
               />
         {/each}
      </div>
   </SectionWrapper>
</Main>