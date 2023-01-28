<script lang="ts">

	import { SplideSlide } from "@splidejs/svelte-splide";
   import { Image } from '$comp';

   export let title:string;
   export let src:string;

</script>
<SplideSlide
	class="
      transition-all duration-300 ease-out
      group hover:bg-gray-900 active:scale-95"
>
	<Image
		alt={title}
		src={src}
		eager
		mode="cover"
		placeholder="preview"
		ratio="3:2"
		class="group-hover:opacity-90 cursor-pointer "
	/>
</SplideSlide>
