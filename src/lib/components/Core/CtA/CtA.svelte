<script>

	import Title from "../../Common/Text/Title.svelte";
import Button from "../Button/Button.svelte";

</script>


<div class="w-full flex flex-row items-center justify-center h-fit pt-2 pb-16 divide-x-4 divide-primary/30 divide-dashed">
   <div class="w-1/2 flex items-center justify-center">
      <Button size="w-2/3 h-full p-6 flex items-center justify-center text-3xl" block>
         Contacteer Ons!
      </Button>
   </div>
   <div class="w-1/2 flex items-center justify-center flex-col gap-4">
      <div class="w-2/3 text-justify">
         <Title type="h4" small klass="text-justify" >Blijf Altijd op de Hoogte!</Title>
         <Title type="subtitle" small klass="text-justify">Abonneer op onze Trixolutions Nieuwsbrief!</Title>
      </div>
      <Button size="text-center py-4 px-12">
         Schrijf Je In!
      </Button>
   </div>
</div>