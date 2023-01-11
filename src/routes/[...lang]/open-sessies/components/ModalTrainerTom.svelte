<script>
   import LL from "$i18n/i18n-svelte";
	import { titleCase } from "$utils";
	import { Modal, TwicPic, Button, P, Title } from "$comp";

</script>
<Modal icon="ph:student-bold">
   <Button slot="trigger" block outlined center bold size="lg" icon="ph:student-bold">
      {titleCase($LL.sessions.your_trainer.title())}
   </Button>
   
   <Title slot="title" type="h3" small>{titleCase($LL.sessions.your_trainer.title())}</Title>
   <div class="grid grid-cols-12 gap-4 w-full mx-auto">
      <div class="col-span-4 items-center justify-center">
         <div class="flex flex-col">
            <Title type="subheader" italic>{titleCase($LL.sessions.your_trainer.tom())}</Title>
            <hr/>
            <P large>
               {@html $LL.sessions.your_trainer.content()}
            </P>
         </div>
      </div>
      <div class="col-span-8">
         <TwicPic 
            alt="Tom van Dorst - Trixolutions CEO / Trainer / Coach"
            src="team/tom-bw.webp" 
            mode="cover" position="top" 
            ratio="3:2" class="w-full h-auto"/>
         </div>
      </div>
</Modal>