<script>
   // Import components
	import Image from "$comp/Base/Media/Image.svelte";
	import Title from "$comp/Common/Text/Title.svelte";

   // Define images
   export let img400 = '';
   export let img600 = '';
   export let img800 = '';
   export let img1080 = '';
   // Set image alt
   export let imgAlt = 'No alt';
   // Set image position
   export let imgPos = 'object-center';

   // Define height of hero slide (all slides should be same height) (default = h-160)
   export let height = ''

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
<Image
	w400={img400} w600={img600} w800={img800} w1080={img1080}
	alt={imgAlt}
   objectPos={imgPos}
	klass="w-full {height ? height : 'h-156 lg:h-160'}"
/>

<!-- Image Overlay -->
<div class="
      w-full h-full 
      bg-black/50 mix-blend-multiply
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
