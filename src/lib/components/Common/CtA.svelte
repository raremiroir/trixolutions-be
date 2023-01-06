<script>

   import { Title, Button } from "$comp/core";
   import { Modal } from "$comp/common";

</script>


<div class="w-full flex flex-row items-center justify-center h-fit pt-2 pb-16 divide-x-4 divide-primary/30 divide-dashed">
   <div class="w-1/2 flex items-center justify-center">
      <Modal>
         <Button
            slot="trigger" 
            size="
               flex items-center justify-center 
               w-fit lg:w-2/3 h-full 
               text-lg md:text-xl lg:text-3xl
               py-3 px-2 lg:py-5 lg:px-4
               " 
            block>
            Contacteer Ons!
         </Button>

         <Title slot="title" type="h3" small>Contacteer Ons!</Title>

         

      </Modal>
   </div>
   <div class="w-1/2 flex items-center justify-center flex-col gap-4">
      <div class="w-2/3 text-center">
         <Title type="h4" small >Blijf Altijd op de Hoogte!</Title>
         <Title type="subtitle" small>Abonneer op onze Trixolutions Nieuwsbrief!</Title>
      </div>
      <Button 
         size="
            text-center 
            text-lg md:text-xl lg:text-3xl
            py-3 px-2 lg:py-5 lg:px-4
            ">
         Schrijf Je In!
      </Button>
   </div>
</div>