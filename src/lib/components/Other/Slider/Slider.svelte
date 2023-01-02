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
	import Button 	from '$comp/Core/Button/Button.svelte';
	import Tooltip from '$comp/Common/Tooltip/Tooltip.svelte';
	import Icon 	from '@iconify/svelte';

	// Define swiper variable
	let swiper:any;

	// 'swiper' event emitted when swiper instance argument
	const onSwiper = (e:any) => {
		[swiper] = e.detail;
		console.log(swiper);
	}

	// Slide to next
	const nextSlide = () => swiper.slideNext(300, true);
	// Slide to previous
	const prevSlide = () => swiper.slidePrev(300, true);
	
</script>

<div class="bg-primary-d2">
	<Swiper
		on:swiper={onSwiper}
		modules={[ Autoplay, Scrollbar, A11y]}
		spaceBetween={0}
		grabCursor
		loop={true}
		slidesPerView={1}
		scrollbar={{ draggable: true }}
		autoplay={{ delay: 4000 }}
	>
		<div slot="container-start" 
			  class="absolute bottom-1/2 translate-y-1/2 left-10 z-2 flex-row hidden md:flex">
			<Tooltip 
				title="Vorige Slide"
				klass="z-2"
				placement="left-20 bottom-1/2 translate-y-1/2"
				flyY={0} flyX={-20}>
				<Button
					color="primary-alt"
					on:click={() => prevSlide()}
					size="square-2xl" flat
					klass="flex items-center justify-center z-3"
					>
					<div class="
							w-full h-full p-1 
							rounded-full 
							bg-primary group-hover:bg-primary-l1
							flex items-center justify-center
							group-active:scale-90 group-active:bg-primary-l2 
							transition-all duration-300 ease-out">
						<Icon icon="material-symbols:arrow-right-alt-rounded" rotate="180deg" color="#fff" width="60" />
					</div>
				</Button>
			</Tooltip>
		</div>
	
		<slot/>
		
		<div slot="container-end"
			  class="absolute bottom-1/2 translate-y-1/2 right-10 z-2 hidden md:flex flex-row">
			<Tooltip 
			  title="Volgende Slide"
			  klass="z-2"
			  placement="right-20 bottom-1/2 translate-y-1/2"
			  flyY={0} flyX={20}>
			  <Button
				  color="primary-alt"
				  on:click={() => nextSlide()}
				  size="square-2xl" flat
				  klass="flex items-center justify-center"
				  >
				  <div class="
						  w-full h-full p-1 
						  rounded-full 
						  bg-primary group-hover:bg-primary-l1
						  flex items-center justify-center
						  group-active:scale-90 group-active:bg-primary-l2 
						  transition-all duration-300 ease-out">
					  <Icon icon="material-symbols:arrow-right-alt-rounded" color="#fff" width="60" />
				  </div>
			  </Button>
			</Tooltip>
		</div>
	</Swiper>
</div>
