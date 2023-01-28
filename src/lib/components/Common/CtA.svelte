<script>
   import LL from "$i18n/i18n-svelte";
	import { titleCase } from "$src/lib/utils";

   import { Title, Button, Reveal, Modal, Subtitle, H3, H4, Form, MailchimpForm } from "$comp";
	import Icon from "@iconify/svelte";

</script>

<Reveal>
   <div class="w-full flex flex-row items-center justify-center h-fit pt-2 pb-16 divide-x-4 divide-primary/30 divide-dashed">
      <div class="w-1/2 flex items-center justify-center">
         <Modal width="min-w-fit max-w-[80%] xl:max-w-[40%]">
            <Button ariaLabel="{titleCase($LL.pages.contact.btn.contact_us())}" slot="trigger" size="xl" block>
               <div class="flex items-center justify-center gap-2">
                  <Icon icon="mdi:email-fast-outline" class="text-gray-50 h-6 w-6" />
                  {titleCase($LL.pages.contact.btn.contact_us())}!
               </div>
            </Button>
   
            <H3 slot="title" small>{titleCase($LL.pages.contact.btn.contact_us())}!</H3>
            
            <!-- <ContactForm /> -->

            <Form 
               formType="contact"
               sessionType=''
               submitText={$LL.base.form.content.send_msg()}
            />
            
   
         </Modal>
      </div>
      <div class="w-1/2 flex items-center justify-center flex-col gap-4">
         <div class="w-2/3 text-center">
            <H4 small >{$LL.pages.contact.newsletter.up_to_date()}!</H4>
            <Subtitle small>{$LL.pages.contact.newsletter.subtitle()}!</Subtitle>
         </div>
         <Modal>
            <Button ariaLabel="{$LL.pages.contact.newsletter.subscribe()}" slot="trigger" size="xl">
               <div class="flex items-center justify-center gap-2">
                  <Icon icon="mdi:newspaper-plus" class="text-gray-50 h-6 w-6" />
                  {$LL.pages.contact.newsletter.subscribe()}!
               </div>
            </Button>
   
            <H3 slot="title" small>{$LL.pages.contact.newsletter.subtitle()}!</H3>
            <MailchimpForm />

         </Modal>
      </div>
   </div>
</Reveal>