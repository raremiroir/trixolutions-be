<!--      -->
<!--  JS  -->
<!--      -->
<script>
   // Import Components
   import Title    from '$comp/Common/Text/Title.svelte';
   
   // Import Image
   import IMGw400    from '$img/stock/Kracht-Van-Gezonde-Teams_400w_Stock.webp';
   import IMGw600    from '$img/stock/Kracht-Van-Gezonde-Teams_600w_Stock.webp';
   import IMGw800    from '$img/stock/Kracht-Van-Gezonde-Teams_800w_Stock.webp';
   import IMGw1080   from '$img/stock/Kracht-Van-Gezonde-Teams_1080w_Stock.webp';
	import P from '../Common/Text/P.svelte';
	import Button from '../Common/Button/Button.svelte';
	
</script>

<!--      -->
<!-- HTML -->
<!--      -->

<div class="w-full h-fit relative z-0">
   
   <img 
      srcset="{IMGw400} 400w, {IMGw600} 600w, {IMGw800} 800w, {IMGw1080} 1080w"
      sizes="(max-width: 600px) 400w, (max-width: 800px) 600w, (max-width: 1000px) 800w, (min-width:1001) 1080w"
      src="../../images/stock/Kracht-Van-Gezonde-Teams_1080w_Stock.webp"
      alt="De Kracht van Gezonde Teams"
      class="
         object-cover object-center
         w-full 
         h-120 lg:h-160
         "
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
         flex items-center">
      <div class="w-3/4 mx-auto flex flex-col gap-4">
         <Title type="h1" color="text-gray-100/90">
            De Kracht van Gezonde Teams
         </Title>
         <div class="flex flex-col gap-2">
            <Title type='subheader' color="text-gray-50">
              Opleiding in Teamcoaching 
            </Title>
            <P thickness="font-semibold" color="text-gray-200">
               De kracht van een gezond team zit voornamelijk in de vaardigheid 
               van teamleden om vertrouwen op te bouwen, met elkaar respectvolle 
               conflicten te kunnen hebben, betrokkenheid bij het team te voelen, 
               elkaar aansprakelijk te durven stellen en resultaatgericht te kunnen werken.
            </P>
            <P thickness="font-bold" color="text-gray-50">
               Nieuwe data!! In samenwerking met de Table Group van Lencioni bundelen 
               we al onze Lencioni-expertise rond het succes model “De 5 frustraties 
               van teamwork”, in een tweedaagse Masterclass Coach-the-Coach opleiding.<br/> 
               Zie hier voor de data!
            </P>
         </div>
         <div class="flex flex-row gap-4">
            <Button size="lg" color="transparent" outlined>Meer Info</Button>
            <Button size="lg" color="primary">Over Trixolutions</Button>
         </div>
      </div>
   </div>

</div>