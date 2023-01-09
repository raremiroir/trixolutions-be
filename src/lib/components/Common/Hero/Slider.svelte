<script lang="ts">
	// import Swiper core and required modules
	import { Navigation, Scrollbar, A11y, Autoplay } from 'swiper';
	// Import Swiper component
	import { Swiper } from 'swiper/svelte';
	// Import Swiper styles
	import 'swiper/css';
	import 'swiper/css/navigation';
	import 'swiper/css/scrollbar';
	import 'swiper/css/autoplay';

	// Import custom components
	import Icon 	from '@iconify/svelte';
	import { SlideChangeBtn } from '$comp/common';

	// Define swiper variable
	let swiper:any;

	// 'swiper' event emitted when swiper instance argument
	const onSwiper = (e:any) => {
		[swiper] = e.detail;
		// console.log(swiper);
	}
</script>

<div class="bg-primary-d2">
	<Swiper
		on:swiper={onSwiper}
		modules={[ Autoplay, Scrollbar, A11y]}
		spaceBetween={0}
		grabCursor
		loop={false}
		slidesPerView={1}
		scrollbar={{ draggable: true }}
		autoplay={{ delay: 4000 }}
	>
		<div slot="container-start" 
			  class="absolute bottom-1/2 translate-y-1/2 left-10 z-2 flex-row hidden md:flex">
			<SlideChangeBtn {swiper} prev />
		</div>
	
		<slot/>
		
		<div slot="container-end"
			  class="absolute bottom-1/2 translate-y-1/2 right-10 z-2 hidden md:flex flex-row">
			  <SlideChangeBtn {swiper} next />
		</div>
	</Swiper>
</div>
