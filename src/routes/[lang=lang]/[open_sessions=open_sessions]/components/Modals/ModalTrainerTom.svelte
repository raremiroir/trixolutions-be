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
   <div class="grid grid-cols-1 md:grid-cols-2 gap-4 w-fit mx-auto">
      <div class="col-span-1 flex flex-col gap-2">
         <Subheader italic>{titleCase($LL.sessions.your_trainer.tom())}</Subheader>
         <hr/>
         <Text>{@html $LL.sessions.your_trainer.content()}</Text>
      </div>
      <div class="col-span-1">
         <Image 
            alt="Tom van Dorst - Trixolutions CEO / Trainer / Coach"
            src="team/tom-bw.webp"  
            class="w-full max-w-lg h-auto"/>
         </div>
      </div>
</Modal>