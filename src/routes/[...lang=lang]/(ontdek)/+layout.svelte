<script lang="ts">
	// Import Components
	import { Footer, Navbar, Main, Title, Breadcrumbs, Hero } from "$comp";
	import "$src/app.postcss";

	// Import stores
	import { currentHero, currentTitle } from "$lib/stores";
	$: $currentHero;
	$: $currentTitle;

</script>


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

	<Breadcrumbs/>
	<Main cta partnership noMargin>
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