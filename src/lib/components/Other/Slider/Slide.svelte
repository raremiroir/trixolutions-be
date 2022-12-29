<script lang='ts'>
	// Import Swiper Svelte components
	import { SwiperSlide } from 'swiper/svelte';

	// Import Swiper styles
	import 'swiper/css';
	import HeroInner from '$comp/Hero/HeroInner.svelte';

	// Use slide for hero?
	export let hero = false;
	
	// Set height of slide (should be equal for all slides) (default = h-160)
	export let height = 'h-160'

	// Set img sources
	export let imgSrc = '';
	// Set img alt
	export let imgAlt = 'No Alt'
	// Set img position
	export let imgPos = 'object-center'

	// Set title size
	export let titleSmall = false;
	export let titleSmaller = false;
	export let titleSmallest = false;
	// Set title type
	export let titleType = 'h1'
</script>

{#if hero}
	<SwiperSlide>
		<HeroInner 
			{imgSrc} {imgAlt} {height} {imgPos}
			{titleType} {titleSmall} {titleSmaller} {titleSmallest}>
			<slot name="title" slot="title">Title</slot>
			<slot/>
		</HeroInner>
	</SwiperSlide>
{:else}
	<SwiperSlide>
		<slot/>
	</SwiperSlide>
{/if}