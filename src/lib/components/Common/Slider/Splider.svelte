<script lang="ts">
	import { Splide, SplideSlide, SplideTrack } from '@splidejs/svelte-splide';
	import { Grid } from '@splidejs/splide-extension-grid';
	import '@splidejs/svelte-splide/css/core';

	import { TwicPic } from '$comp';

	import SlideChangeBtn from './SlideChangeBtn.svelte';
	import { onMount } from 'svelte';

	export let visibleHeading = false;
	export let label: string;

	export let slidesPerPage = 3;
	export let slidesPerMove = 1;

	export let autoplay = false;
	export let lazyload = 'nearby';

	const heroSlideOptions = {
		pagination: false,
		cover: true,
		rewind: true,
		type: 'loop',
		focus: 'center',
		drag: 'free',
		snap: true,
		gap: '0',
		padding: '0',
		autoplay: autoplay,
		breakpoints: {
			1536: { height: '16rem' },
			1280: { height: '12rem' },
			1024: { height: '10rem' },
			768: { height: '9rem' },
			640: { height: '9rem' },
			520: {
				height: '8rem',
				perPage: 1,
				perMove: 1
			}
		}
	};

	const gridSlideOptions = {
		rewind: true,
		type: 'loop',
		drag: 'free',
		snap: true,
		pagination: true,
		gap: '1rem',
		padding: '0.5rem',
		autoplay: autoplay,
		grid: {
			rows: 3,
			cols: 4,
			gap: { row: '24px', col: '24px' }
		},
		breakpoints: {
			1536: {
				height: '36rem',
				grid: {
					rows: 2,
					cols: 4,
					gap: { row: '20px', col: '20px' }
				}
			},
			1280: {
				height: '38rem',
				grid: {
					rows: 2,
					cols: 3,
					gap: { row: '16px', col: '16px' }
				}
			},
			1024: {
				height: '36rem',
				grid: {
					rows: 2,
					cols: 2,
					gap: { row: '12px', col: '12px' }
				}
			},
			768: {
				height: '34rem',
				grid: {
					rows: 2,
					cols: 2,
					gap: { row: '16px', col: '16px' }
				}
			},
			640: {
				height: '33rem',
				grid: {
					rows: 2,
					cols: 1,
					gap: { row: '12px', col: '12px' }
				}
			},
			520: {
				height: '32rem',
				perMove: 1,
				perPage: 1,
				grid: {
					rows: 2,
					cols: 1,
					gap: { row: '12px', col: '12px' }
				}
			}
		}
	};

	let mySlider: any;
	onMount(() => {
		console.log(mySlider.splide);
	});

</script>

<Splide
	on:paginationMounted={(e) => e.items.forEach( function (item) { item.button.textContent = String( item.page + 1 ) }) }
   on:mounted={ e => console.log( e.detail.splide.length ) }
   on:move={ e => console.log( 'move to', e.detail.index ) }
	bind:this={mySlider}
	options={ gridSlideOptions }
	extensions={{ Grid }}
	aria-label={visibleHeading ? '' : label}
	aria-labelledby={visibleHeading ? label : ''}
	hasTrack={false}
	class="w-full h-fit relative cursor-grab active:cursor-grabbing bg-primary/10 py-2 rounded-2xl"
   classes={{
		pagination: 'splide__pagination features-pagination',
		page      : 'splide__pagination__page features-page bg-primary w-4 h-4',
  }},
>
	<div
		class="
         custom-wrapper 
         w-full h-fit min-h-[20rem]
         flex flex-col justify-between"
	>
		<!-- Navigation Arrows -->
		<div class="splide__arrows relative">
			<button
				class="
               splide__arrow splide__arrow--prev
               absolute left-2"
			>
				<SlideChangeBtn prev />
			</button>
			<button
				class="
               splide__arrow splide__arrow--next
               absolute right-2"
			>
				<SlideChangeBtn next />
			</button>
		</div>

		<!-- Scrollbar -->
		<div class="splide__progress">
			<div class="splide__progress__bar" />
		</div>

      <ul class="splide__pagination top-0 features-pagination">
         <li role="presentation">
				<button
					class="splide__pagination__page !bg-primary !w-10 !h-10 features-page"
					type="button"
					role="tab"
					aria-controls="splide01-slide01"
					aria-label="Go to slide 1"
					aria-selected="true"
				/>
			</li>
      </ul>

		<!-- Slides -->
		<SplideTrack class="mt-8">
			<slot />
		</SplideTrack>
	</div>
</Splide>

<style>
	.splide__pagination :global() {
		counter-reset: pagination-num;
	}

	.splide__pagination__page :global(),
	.features-page :global() {
		counter-increment: pagination-num;
		content: counter(pagination-num);
	}

</style>
