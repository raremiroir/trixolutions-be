<script lang="ts">
	// Import Components
	import { Footer, Navbar, Main, Title, Breadcrumbs, Hero, SEO } from "$comp";
	import "$src/app.postcss";

	// Import i18n
	import LL, { locale } from "$i18n/i18n-svelte";

	// Import website config
	import { website } from "$src/lib/config/website";
	// Import stores
	import { currentHero, currentTitle, currentDesc, currentSlug, currentIcon } from "$lib/stores";
	$: $currentHero;
	$: $currentTitle;
	$: $currentDesc;
	$: $currentSlug;
	$: $currentIcon;

	// SEO
    const { author, siteUrl } = website;
    $: breadcrumbs = [{ name: $currentTitle, slug: $currentSlug }];

    $: featuredImage = {
        url: String($currentHero), alt: $currentDesc,
        width: 672, height: 448,
        caption: $currentDesc,
    };
    $: ogImage = { url: String($currentHero), alt: $currentDesc, };
	// const ogSquareImage = { url: ogSquareImageSrc, alt: featuredImageAlt, };
	
    $: entityMeta = {
		url: `${siteUrl}${$currentSlug}`,
		faviconWidth: 512, faviconHeight: 512,
		caption: author,
	};

</script>

<SEO 
	slug="{$currentSlug}"
	datePublished = '2023-01-11T12:31:00.000+0100'
	lastUpdated = '2023-01-11T12:31:00.000+0100'
	title="{$currentTitle}"
	metadescription="{$currentDesc}"
	{breadcrumbs} {entityMeta}
    {ogImage} {featuredImage}
/>


<div class="app bg-gray-50">
	<header> 
		<Navbar/>
		<Hero  
		imgSrc="{$currentHero}" imgAlt="{$currentTitle}"
		>
			 <div slot="title">
				  <Title type="h1" color="text-gray-100">{$currentTitle}</Title>
			 </div>
		</Hero>
	</header>

	<Main cta partnership noMargin>
		<Breadcrumbs 
			beforeDefined
			currentIcon={$currentIcon} 
			beforeIcon="ph:users-four"
			before={$LL.nav.explore.training_leadership_teamcoaching.title_short()}
			beforeUrl="/{$locale}#{$LL.nav.explore.training_leadership_teamcoaching.slug()}"
			/>
		<slot/>
	</Main>
	

	<Footer />
</div>

<style global>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}
</style>