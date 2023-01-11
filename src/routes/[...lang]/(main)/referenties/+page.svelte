<script>
	// Import components
	import { Main, SectionWrapper, Title, Breadcrumbs, TwicPic } from '$comp';

	import LL from '$i18n/i18n-svelte';

	import Video from '$src/lib/components/Common/Media/Video.svelte';
	// Import Video
	import cegeka_video from '$lib/assets/videos/referentiefilmpje-cegeka-min.mp4';
	import cegeka_thumbnail from '$lib/assets/videos/referentiefilmpje-cegeka-thumbnail-720.webp';
	// Import images

   let references = [
		{ src: 'vulkoprin-logo.png', alt: 'Vulkoprin Logo' },
		{ src: 'kunlabora-logo.png', alt: 'Kunlabora Logo' },
		{ src: 'molenbergnatie-logo.png', alt: 'Molenbergnatie Logo' },
		{ src: 'christelijke_mutualiteit-logo.png', alt: 'Christelijke Mutualiteit Logo' },
		{ src: 'acerta-logo.png', alt: 'Acerta Logo' },
		{ src: 'staci-logo.png', alt: 'Staci Logo' },
		{ src: 'bouwunie-logo.png', alt: 'Bouwunie Logo' },
		{ src: 'parker-logo.png', alt: 'Parker Logo' },
		{ src: 'wijngaardnatie-logo.png', alt: 'Wijngaardnatie Logo' },
		{ src: 'oz-logo.png', alt: 'Onafhankelijk Ziekenfonds Logo' },
		{ src: 'clearxperts-logo.png', alt: 'clearXperts Logo' },
		{ src: 'cibo-logo.png', alt: 'cibo Logo' },
		{ src: 'immopoint-logo.png', alt: 'Immo Point Logo' },
		{ src: 'cegeka-logo.png', alt: 'Cegeka Logo' },
		{ src: 'media_markt-logo.png', alt: 'Media Markt Logo' },
		{ src: 'baloise-logo.png', alt: 'Baloise Logo' },
		{ src: 'livitas-logo.png', alt: 'Livitas Logo' },
		{ src: 'basf-logo.png', alt: 'BASF Logo' },
		{ src: 'infradata-logo.png', alt: 'Infradata Logo' },
		{ src: 'sogeti-logo.png', alt: 'Sogeti Logo' },
		{ src: 'makro-logo.jpg', alt: 'Makro Logo' },
		{ src: 'bureau_veritas-logo.png', alt: 'Bureau Veritas Logo' },
		{ src: 'bnp_paribas_fortis-logo.png', alt: 'BNP Paribas Fortis Logo' },
		{ src: 'lotus-logo.png', alt: 'Lotus Logo' },
		{ src: 'deloitte-logo.png', alt: 'Deloitte Logo' },
		{ src: 'delhaize-logo.png', alt: 'Delhaize Logo' },
		{ src: 'metro-logo.png', alt: 'Metro Logo' },
		{ src: 'q8-logo.png', alt: 'Q8 Logo' },
		{ src: 'isolatie_verhoeven-logo.png', alt: 'Isolatie Verhoeven Logo' },
		{ src: 'ethias-logo.png', alt: 'Ethias Logo' },
		{ src: 'stef_proost_immo-logo.png', alt: 'Stef Proost Immobiliën Logo' },
		{ src: 'eozen-logo.png', alt: 'EoZen Logo' },
		{ src: 'kbc-logo.png', alt: 'KBC Logo' },
		{ src: 'axa-logo.png', alt: 'AXA Logo' },
		{ src: 'comparex-logo.png', alt: 'Comparex Logo' },
		{ src: 'belfius-logo.png', alt: 'Belfius Logo' },
		{ src: 'port_of_antwerp-logo.png', alt: 'Port of Antwerp Logo' },
		{ src: 'michelin-logo.png', alt: 'Michelin Logo' },
		{ src: 'ibm-logo.png', alt: 'IBM Logo' },
		{ src: 'lastek-logo.png', alt: 'Lastek Logo' },
		{ src: 'grand_optical-logo.png', alt: 'Grand Optical Logo' },
		{ src: 'tessenderlo_group-logo.png', alt: 'Tessenderlo Group Logo' },
		{ src: 'dpd-logo.png', alt: 'dpd Logo', height: 'h-6 sm:h-1 md:h-10 xl:h-12 2xl:h-14' }
	];
</script>

<Breadcrumbs />
<Main cta>
	<SectionWrapper name="references">
		<Title slot="title" type="h1">{$LL.pages.references.title()}</Title>
		<div class="w-full mx-auto">
			<Video src={cegeka_video} poster={cegeka_thumbnail} />
		</div>
	</SectionWrapper>

	<SectionWrapper name="our-team">
		<div class="flex flex-wrap justify-between items-center gap-8">
			{#each references as img}
            <TwicPic 
               alt={img.alt}
               src="references/{img.src}" 
               mode="contain" eager
               ratio="2:1"/>
			{/each}
		</div>
	</SectionWrapper>
</Main>
