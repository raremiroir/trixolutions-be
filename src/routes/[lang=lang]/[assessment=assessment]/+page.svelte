<script>
	// Define current page slug
   import { currentPageMap } from "$lib/stores";
   $currentPageMap = [
      {locale: 'en', slug: 'team-assessment'},
      {locale: 'fr', slug: 'evaluation-d-equipe'},
      {locale: 'nl', slug: 'team-assessment'}
   ];
	
	// Import components
	import { Main, Section, Breadcrumbs, Image, Video, SEO, Reveal, H1, Button } from '$comp';
	
	// Import website config
	import { website } from '$src/lib/config/website';
	// Import i18n
	import LL, { locale } from '$i18n/i18n-svelte';

   // SEO
   $: pageSlug = `/${$locale}/${$LL.nav.references.slug()}`
   $: pageTitle = $LL.nav.references.title()
   $: pageDesc = $LL.nav.references.description()
   let { author, siteUrl } = website;
	$: breadcrumbs = [{ name: pageTitle, slug: pageSlug }];
	
   $: entityMeta = {
		url: `${siteUrl}${pageSlug}`,
		faviconWidth: 512, faviconHeight: 512,
		caption: author,
	};

	let hasStarted = false;
	let hasEnded = false;
</script>


<SEO 
	slug="{pageSlug}"
	datePublished = '2023-01-11T12:31:00.000+0100'
	lastUpdated = '2023-01-11T12:31:00.000+0100'
	title="{pageTitle}"
	metadescription="{pageDesc}"
	{breadcrumbs} {entityMeta}
/>



<Main cta>
	<Breadcrumbs currentIcon="mdi:handshake-outline" />
	<Section name="references">
		<H1 slot="title">Lencioni Team Assessment</H1>
	</Section>

	<!-- TODO: Fix image grid + add reveal -->
	<Section name="our-team">
		<div class="flex flex-wrap justify-center items-center gap-1 sm:gap-2 md:gap-3 xl:gap-6">

		{#if hasStarted === false}
			<div on:click={() => hasStarted = true}
				  on:keydown={() => hasStarted = true}>
				<Button 
					color="primary"
					size="xxxl"
					ariaLabel="Start Assessment"
					icon="healthicons:i-exam-multiple-choice"
					class="gap-6"> 
					Start Assessment
				</Button>
			</div>
		{:else if hasStarted === true}
			<div class="">
				Assessment here
			</div>
		{/if}

		</div>
	</Section>
</Main>
