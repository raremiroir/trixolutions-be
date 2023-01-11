<script>
   import LL from "$src/i18n/i18n-svelte";
	import { titleCase } from "$src/lib/utils";

   import { Title, Button, Reveal, Modal, ContactForm } from "$comp";
	import Icon from "@iconify/svelte";

</script>

<Reveal>
   <div class="w-full flex flex-row items-center justify-center h-fit pt-2 pb-16 divide-x-4 divide-primary/30 divide-dashed">
      <div class="w-1/2 flex items-center justify-center">
         <Modal width="min-w-fit max-w-[80%] xl:max-w-[40%]">
            <Button
               slot="trigger" 
               size="xl" 
               block>
               <div class="flex items-center justify-center gap-2">
                  <Icon icon="mdi:email-fast-outline" class="text-gray-50 h-6 w-6" />
                  {titleCase($LL.pages.contact.btn.contact_us())}!
               </div>
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
               size="xl">
               <div class="flex items-center justify-center gap-2">
                  <Icon icon="mdi:newspaper-plus" class="text-gray-50 h-6 w-6" />
                  {$LL.pages.contact.newsletter.subscribe()}!
               </div>
            </Button>
   
            <Title slot="title" type="h3" small>{$LL.pages.contact.newsletter.subtitle()}!</Title>
   
            Abonneer
         </Modal>
      </div>
   </div>
</Reveal>