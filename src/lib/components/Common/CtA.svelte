<script>
   import LL from "$src/i18n/i18n-svelte";
	import { titleCase } from "$src/lib/utils";

   import { Title, Button } from "$comp/core";
   import { Modal } from "$comp/common";
	import ContactForm from "../Forms/ContactForm.svelte";

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
            {titleCase($LL.pages.contact.btn.contact_us())}!
         </Button>

         <Title slot="title" type="h3" small>{titleCase($LL.pages.contact.btn.contact_us())}!</Title>
         
         <ContactForm />
         

      </Modal>
   </div>
   <div class="w-1/2 flex items-center justify-center flex-col gap-4">
      <div class="w-2/3 text-center">
         <Title type="h4" small >{$LL.pages.contact.newsletter.up_to_date()}!</Title>
         <Title type="subtitle" small>{$LL.pages.contact.newsletter.subtitle()}!</Title>
      </div>
      <Modal>
         <Button
            slot="trigger" 
            size="
               text-center 
               text-lg md:text-xl lg:text-3xl
               py-3 px-2 lg:py-5 lg:px-4
               ">
               {$LL.pages.contact.newsletter.subscribe()}!
         </Button>

         <Title slot="title" type="h3" small>{$LL.pages.contact.newsletter.subtitle()}!</Title>

         Abonneer
      </Modal>
   </div>
</div>