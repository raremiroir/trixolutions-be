<script>

	import { Modal, TwicPic } from "$src/lib/components/common";
	import { Button, P, Title } from "$src/lib/components/core";

</script>
<Modal icon="ph:student-bold">
   <Button slot="trigger" block outlined center bold size="lg" icon="ph:student-bold">
      Uw Trainer
   </Button>
   
   <Title slot="title" type="h3" small>Uw Trainers</Title>
   <div class="grid grid-cols-12 gap-4 w-full mx-auto">
      <div class="col-span-4 items-center justify-center">
         <div class="flex flex-col">
            <Title type="subheader" italic>Tom van Dorst</Title>
            <hr/>
            <P large>
               Tom van Dorst is een gedreven trainer en coach, en CEO van Trixolutions. <br/>
               Hij is een echte expert op het vlak van Lencioni.
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