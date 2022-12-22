<!--      -->
<!--  JS  -->
<!--      -->
<script>
   // Import Components
   import Title    from '$comp/Common/Text/Title.svelte';
	import Image from '../Base/Media/Image.svelte';
   
   // Import Image
   import IMGw400    from '$img/stock/Kracht-Van-Gezonde-Teams_400w_Stock.webp';
   import IMGw600    from '$img/stock/Kracht-Van-Gezonde-Teams_600w_Stock.webp';
   import IMGw800    from '$img/stock/Kracht-Van-Gezonde-Teams_800w_Stock.webp';
   import IMGw1080   from '$img/stock/Kracht-Van-Gezonde-Teams_1080w_Stock.webp';
   
   
   // Set title
   export let title = 'De Kracht van Gezonde Teams';
   // Set image sources
   export let img400 = IMGw400;
   export let img600 = IMGw600;
   export let img800 = IMGw800;
   export let img1080 = IMGw1080;
   // Set image alt
   export let imgAlt = 'No Alt';
   // Set height of hero 
   export let height = '';


	
</script>

<!--      -->
<!-- HTML -->
<!--      -->

<div class="w-full h-fit relative z-0">
   
   <Image 
      w400={img400} w600={img600} w800={img800} w1080={img1080}
      alt="{imgAlt}"
      klass="object-cover object-center w-full {height ? height : 'h-156 lg:h-160'}"
   />

   <div class="
         w-full h-full 
         bg-black/50 mix-blend-multiply
         absolute top-0
         flex items-center">
      <br/>
   </div>
   <div class="
         w-full h-full 
         absolute top-0
         pt-20
         flex items-center">
      <div class="w-3/4 mx-auto flex flex-col gap-4">
         <Title type="h1" color="text-gray-100/90">
            {title}
         </Title>
         <slot/>
      </div>
   </div>

</div>