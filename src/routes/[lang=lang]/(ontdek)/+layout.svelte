<script lang="ts">
	// Import Components
	import { Footer, Navbar, Main, Title, Breadcrumbs, Hero, SEO } from "$comp";
	import "$src/app.postcss";

	// Import i18n
	import LL, { locale } from "$i18n/i18n-svelte";
	import { getBaseEntity } from "$src/lib/utils/seo";

	// Import stores
	import { currentHero, currentIcon, currentReference } from "$lib/stores";

	$: $currentHero;
	$: $currentIcon;
	$: $currentReference;

	$: currentTitle = $LL.nav.explore.training_leadership_teamcoaching.items[$currentReference].title();
	$: currentDesc = $LL.nav.explore.training_leadership_teamcoaching.items[$currentReference].description();
	$: currentSlug = $LL.nav.explore.training_leadership_teamcoaching.items[$currentReference].slug();

	// SEO
	$: openGraph = {
      title: currentTitle,
      description: currentDesc,
		slug: currentSlug,
   }
   $: schemaOrg = {
      entity: getBaseEntity($currentReference, ['explore', 'training_leadership_teamcoaching', 'items']),
      sessions: [],
   }

</script>

<SEO {openGraph} {schemaOrg} />


<div class="app bg-gray-50">
	<header> 
		<Navbar/>
		<Hero  
		imgSrc="{$currentHero}" imgAlt="{currentTitle}"
		>
			 <div slot="title">
				  <Title type="h1" color="text-gray-100">{currentTitle}</Title>
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