<script>
   // Import components
   import { Modal, Image, Button, Text, H3, Subheader } from "$comp";
   // Import i18n
   import LL from "$i18n/i18n-svelte";
   // Import constants
	import { titleCase } from "$utils";

</script>

<Modal icon="ph:student-bold">
   <Button ariaLabel={titleCase($LL.sessions.your_trainer.title())} slot="trigger" block outlined bold size="lg" icon="ph:student-bold">
      {titleCase($LL.sessions.your_trainer.title())}
   </Button>
   
   <H3 slot="title" small>{titleCase($LL.sessions.your_trainer.title())}</H3>
   <div class="grid grid-cols-12 gap-4 w-full mx-auto">
      <div class="col-span-4 items-center justify-center">
         <div class="flex flex-col">
            <Subheader italic>{titleCase($LL.sessions.your_trainer.tom())}</Subheader>
            <hr/>
            <Text>{@html $LL.sessions.your_trainer.content()}</Text>
         </div>
      </div>
      <div class="col-span-8">
         <Image 
            alt="Tom van Dorst - Trixolutions CEO / Trainer / Coach"
            src="team/tom-bw.webp" 
            mode="cover" position="top" 
            ratio="3:2" class="w-full h-auto"/>
         </div>
      </div>
</Modal>