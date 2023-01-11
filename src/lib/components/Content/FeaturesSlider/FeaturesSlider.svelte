<script lang="ts">
	// import Swiper core and required modules
	import { Navigation, A11y, Pagination, Grid } from 'swiper';
	// Import Swiper component
	import { Swiper } from 'swiper/svelte';
	// Import Swiper styles
	import 'swiper/css/bundle';
	import 'swiper/css/navigation';
	import 'swiper/css/grid';
	import 'swiper/css/pagination';

	// Import custom components
	import Icon 	from '@iconify/svelte';
	import { SlideChangeBtn } from '$comp';

	// Define swiper variable
	let swiper:any;

   const pagination = {
      clickable: true,
      renderBullet: function (index, className) {
         return `<span class="
                        cursor-pointer rounded-full
                        !h-8 !w-8 pr-0.5 pt-1 mx-1
                        !bg-primary hover:!bg-primary-l1
                        text-white flex
                        transition-all duration-300 ease-in-out
                        shadow-sm shadow-black/70 hover:!shadow-md
                        font-body font-semibold 
                        ` 
                  + className + `">` 
                  + (index + 1) + '</span>';      
      }
   };

	// 'swiper' event emitted when swiper instance argument
	const onSwiper = (e:any) => {
		[swiper] = e.detail;
		// console.log(swiper);
	}
</script>

<div class="
      bg-transparent relative my-0
      left-1/2 -translate-x-1/2 
      w-full md:w-[93vw]">
	<Swiper
      slidesPerView={1}
      grid={{ rows: 2, fill: 'row' }}
      spaceBetween={0}
      breakpoints={{
         520: {
            slidesPerView: 1,
            spaceBetween: 0,
            grid: { rows: 2, fill: 'row' }
         },
         640: {
            slidesPerView: 2,
            spaceBetween: 0,
            grid: { rows: 2, fill: 'row' }
         },
         768: {
            slidesPerView: 3,
            spaceBetween: 0,
            grid: { rows: 2, fill: 'row' }
         },
         1024: {
            slidesPerView: 3,
            spaceBetween: 0,
            grid: { rows: 2, fill: 'row' }
         },
         1280: {
            slidesPerView: 4,
            spaceBetween: 0,
            grid: { rows: 2, fill: 'row' }
         },
         1536: {
            slidesPerView: 4,
            spaceBetween: 0,
            grid: { rows: 2, fill: 'row' }
         }
      }}
		on:swiper={onSwiper}
		modules={[ Pagination, A11y, Grid ]}
		grabCursor
      {pagination}
	>
		<div slot="container-start" 
			  class="
            absolute z-20
            shadow-lg
            bg-transparent rounded-full
            bottom-1 left-1/2 -translate-x-52 
            hidden md:flex 
            flex-row items-center 
            ">
         <SlideChangeBtn {swiper} small prev reverseTooltip />
		</div>
	
		<slot/>
		
		<div slot="container-end"
           class="
            absolute z-20
            shadow-lg
            bg-transparent rounded-full
            bottom-1 right-1/2 translate-x-52 
            hidden md:flex 
            flex-row items-center 
            ">
			  <SlideChangeBtn {swiper} small next reverseTooltip />
		</div>
	</Swiper>
</div>


