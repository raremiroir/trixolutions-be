<script lang="ts">
   // Import components
	import Image from "$comp/Base/Media/Image.svelte";
	import Title from "$comp/Common/Text/Title.svelte";
	import TwicPic from "../Base/Media/TwicPic.svelte";

   // Define image
   export let imgSrc = '';
   // Set image alt
   export let imgAlt = 'No alt';
   // Set image position
   export let imgPos = 'object-center';
   // Set image cover
   export let imgFit = 'object-cover';

   // Define height of hero slide (all slides should be same height) (default = h-160)
   export let height = 'h-120'


   // Set type of title
   export let titleType = 'h1'
   // Small title case
   export let titleSmall = false;
   // Smaller title case
   export let titleSmaller = false;
   // Smallest title case
   export let titleSmallest = false;


</script>


<!-- Image -->
<!-- <Image eager
	alt={imgAlt}
   {imgSrc} {imgPos} {imgFit} 
   {height}
	klass="w-full"
/> -->
<TwicPic 
   alt={imgAlt}
   src="{imgSrc}" eager
   mode="cover" anchor="top"
   placeholder="preview"
   transition="fade" transitionDuration="250ms"
   transitionTimingFunction="ease-in-out"
   ratio="6:4" intrinsic="1920x1080"
/>

<!-- Image Overlay -->
<div class="
      w-full h-full 
      bg-black/50 mix-blend-multiply
      backdrop-blur-[3px]
      absolute top-0
      flex items-center">
	<br />
</div>

<!-- Content Overlay -->
<div class="
      w-full h-full 
      absolute top-0
      pt-20
      flex items-center">
	<div class="w-3/4 mx-auto flex flex-col gap-4">
		<Title 
         type="{titleType}" color="text-gray-100/90" 
         small={titleSmall} smaller={titleSmaller} smallest={titleSmallest}>
			<slot name="title">Title</slot>
		</Title>
		<slot />
	</div>
</div>
