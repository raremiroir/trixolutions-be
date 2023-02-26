<script lang="ts">

	import { SplideSlide } from "@splidejs/svelte-splide";
   import { Image } from '$comp';

   export let title:string;
   export let src:string;

</script>
<SplideSlide
	class="
      transition-all duration-300 ease-out
		flex justify-center items-center
      group hover:bg-gray-900 active:scale-95 mx-4"
>
	<Image
		alt={title} src={src} eager
		class="group-hover:opacity-90 cursor-pointer "
		imgClass="h-24 w-auto"
	/>
</SplideSlide>
