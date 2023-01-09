<script>
   import { Logo } from "$comp/common";
   import { locale } from "$src/i18n/i18n-svelte";
	import Link from "./Link.svelte";
	import Title from "./Text/Title.svelte";
</script>

<!-- Footer -->
<footer class="bg-gray-700 w-full">

   <!-- Columns wrap -->
   <div class="grid grid-cols-3 gap-16 w-3/4 mx-auto pt-12 pb-16">
      <!-- Column 1 -->
      <div class="flex flex-col gap-4 w-full">
         <div class="">
            <Logo color='fill-gray-50' xcolor='fill-white' width={250}/>
         </div>
         <div class="grid grid-cols-2 w-full gap-2">
            <div class="w-full flex flex-col gap-2">
               <h6 class="w-full border-b-2 border-gray-50">Vestiging België</h6>
               <span>
                  Krommelei 14 <br/>
                  Wijnegem - Antwerpen <br/>
                     <a href="mailto:info@trixolutions.be">info@trixolutions.be</a>
               </span>
            </div>
            <div class="w-full flex flex-col gap-2">
               <h6 class="w-full border-b-2 border-gray-50">Vestiging Nederland</h6>
               <span>
                  Krommelei 14 <br/>
                  Wijnegem - Antwerpen <br/>
                     <a href="mailto:info@trixolutions.be">info@trixolutions.be</a>
               </span>
            </div>
         </div>
      </div>
      <!-- Column 2 -->
      <div class="flex flex-col gap-4 w-full">
         <Title type="h6" class="font-bold" color="text-gray-50">Pagina's</Title>
         <Link underlineOnHover href="/{$locale}/algemene-voorwaarden">Algemene Voorwaarden</Link>
         <Link underlineOnHover href="/{$locale}/vacatures">Vacatures</Link>
         <Link underlineOnHover href="/{$locale}/privacybeleid">Privacybeleid</Link>
      </div>
   </div>

   <div class="">

   </div>
   <div class="px-1 pb-2 text-sm font-semibold tracking-wide text-center w-full">
      <hr class="border-gray-400 mb-2"/>
      Trixolutions.be - Ontworpen, ontwikkeld en beheerd door Mist Media
   </div>
</footer>