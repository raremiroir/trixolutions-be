<script lang='ts'>
	// Import Swiper Svelte components
	import { SwiperSlide } from 'swiper/svelte';

	// Import Swiper styles
	import 'swiper/css';
	import { HeroInner } from './hero';

	// Use slide for hero?
	export let hero = false;

	// Set img sources
	export let imgSrc = '';
	// Set img alt
	export let imgAlt = 'No Alt'

	// Is the hero large?
	export let large = false;
	
	export let heroProps = {
		titleSmall: false,
		titleSmaller: false,
		titleSmallest: false,
		titleType: 'h1'
	}
</script>

<SwiperSlide>
	<HeroInner {large} {imgSrc} {imgAlt} {...heroProps}>
		<slot name="title" slot="title">Title</slot>
		<slot/>
	</HeroInner>
</SwiperSlide>