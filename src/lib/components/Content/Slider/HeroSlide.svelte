<script lang='ts'>

	// Import Swiper styles
	import { HeroInner } from '../Hero/hero';
	import { SplideSlide } from '@splidejs/svelte-splide';

	// Set extra classes
	let klass = ''
	export { klass as class };
	// Set img sources
	export let imgSrc = '';
	// Set img alt
	export let imgAlt = 'No Alt'
	
	export let heroProps = {
		titleSmall: false,
		titleSmaller: false,
		titleSmallest: false,
		titleFake: false
	}
</script>

<SplideSlide class="!h-full w-full {klass} hover:cursor-grab active:cursor-grabbing">
	<HeroInner {imgSrc} {imgAlt} {...heroProps} large>
		<slot name="title" slot="title">Title</slot>
		<slot/>
	</HeroInner>
</SplideSlide>