<script lang="ts">
	import { Splide, SplideSlide, SplideTrack } from '@splidejs/svelte-splide';
	import { Grid } from '@splidejs/splide-extension-grid';
	import '@splidejs/svelte-splide/css/core';

	import { TwicPic } from '../../common';

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
		perMove: 1,
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
	on:arrowsMounted={(e) => {}}
	on:paginationMounted={(e) => {}}
   on:mounted={ e => console.log( e.detail.splide.length ) }
   on:move={ e => console.log( 'move to', e.detail.index ) }
	bind:this={mySlider}
	options={ gridSlideOptions }
	extensions={{ Grid }}
	aria-label={visibleHeading ? '' : label}
	aria-labelledby={visibleHeading ? label : ''}
	hasTrack={false}
	class="w-full relative cursor-grab active:cursor-grabbing"
>
	<div
		class="
         custom-wrapper 
         w-full h-full min-h-[20rem]
         flex flex-col justify-between"
	>
		<!-- Navigation Arrows -->
		<div class="splide__arrows relative">
			<button
				class="
               splide__arrow splide__arrow--prev
               absolute left-0"
			>
				<SlideChangeBtn prev />
			</button>
			<button
				class="
               splide__arrow splide__arrow--next
               absolute right-0"
			>
				<SlideChangeBtn next />
			</button>
		</div>

		<!-- Scrollbar -->
		<div class="splide__progress">
			<div class="splide__progress__bar" />
		</div>

		<ul
			class="splide__pagination splide__pagination--ltr splide__pagination--custom bg-primary absolute top-8"
			role="tablist"
			aria-label="Select a slide to show"
		>
			<li role="presentation">
				<button
					class="splide__pagination__page is-active bg-success"
					type="button"
					role="tab"
					aria-controls="splide01-slide01"
					aria-label="Go to slide 1"
					aria-selected="true"
				/>
			</li>
			<li role="presentation">
				<button
					class="splide__pagination__page"
					type="button"
					role="tab"
					aria-controls="splide01-slide02"
					aria-label="Go to slide 2"
					tabindex="-1"
				/>
			</li>
		</ul>

		<!-- Slides -->
		<SplideTrack class="mt-24">
			<slot />
		</SplideTrack>
	</div>
</Splide>

<style>
	.splide__pagination :global() {
		counter-reset: pagination-num;
	}

	.splide__pagination__page:before :global() {
		counter-increment: pagination-num;
		content: counter(pagination-num);
	}
</style>
