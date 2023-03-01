<script lang="ts">
	import { Splide, SplideTrack } from '@splidejs/svelte-splide';
	import '@splidejs/svelte-splide/css/core';

	import SlideChangeBtn from '$comp/Content/Slider/SlideChangeBtn.svelte';
	export let visibleHeading = false;
	export let label: string;

	const heroSlideOptions = {
		pagination: false,
		cover: true,
		loop: true,
		focus: 'center',
		rewind: true,
		drag: 'free',
		snap: true,
		padding: '0',
		autoplay: true,
	};

	let mySlider: any;

</script>

<Splide
	bind:this={mySlider}
	options={ heroSlideOptions }
	aria-label={visibleHeading ? '' : label}
	aria-labelledby={visibleHeading ? label : ''}
	hasTrack={false}
	class="w-full h-fit relative bg-transparent py-2 rounded-2xl"
>
	<div
		class="
         custom-wrapper
         w-full h-full -mt-2
         flex flex-col justify-between"
	>
		<!-- Navigation Arrows -->
		<div class="splide__arrows h-full w-full relative">
			<button class="splide__arrow splide__arrow--prev absolute hidden sm:block bottom-12 left-2 z-2">
				<SlideChangeBtn prev />
			</button>
				<!-- Slides -->
				<SplideTrack class="h-full bg-primary z-0">
					<slot />
				</SplideTrack>
			<button class="splide__arrow splide__arrow--next absolute hidden sm:block bottom-12 right-2 z-2">
				<SlideChangeBtn next />
			</button>
		</div>
	

		<!-- Scrollbar -->
		<div class="splide__progress">
			<div class="splide__progress__bar" />
		</div>

		
	</div>
</Splide>