<script lang='ts'>

	// Import Swiper styles
	import { HeroInner } from '../Hero/hero';
	import { SplideSlide } from '@splidejs/svelte-splide';

	// Set extra classes
	let klass = ''
	export { klass as class };
	// Set img source
	export let imgSrc = '';
	// Set img sourceset
	export let imgSrcset = '';
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
	<HeroInner {...heroProps} large customImg>
		<div 
			slot="img"
			class="h-160 md:h-180 w-full"
			>
			<img 
				src="{imgSrc}"
				srcset="{imgSrcset}"
				alt="{imgAlt}"
				decoding="auto" loading="eager"
				aria-labelledby="trixolutions-hero"
				class="w-full h-full blur-md brightness-[40%] object-cover"
			/>
		</div>
		<slot name="title" slot="title">Title</slot>
		<slot/>
	</HeroInner>
</SplideSlide>