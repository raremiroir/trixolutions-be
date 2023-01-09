<script>

	import { Modal } from "$src/lib/components/common";
	import { Button, Title } from "$src/lib/components/core";

</script>
<Modal icon='mdi:map-marker-radius'>
   <Button slot="trigger" block outlined center bold size="lg" icon="mdi:map-marker-radius">
      Locatie
   </Button>
   <Title slot="title" type="h3" small>Locatie</Title>
   <div class="relative text-right h-full w-full">
      <div class="overflow-hidden bg-none h-full w-full">
         <iframe 
            title="Locatie Hybride Trixolutions Lencioni Tweedaagse Masterclass"
            class="w-full min-w-full h-120"
            id="gmap_canvas" 
            src="https://maps.google.com/maps?q=Domein%20Martinus&t=&z=9&ie=UTF8&iwloc=&output=embed" 
            frameborder="0" scrolling="no" 
            marginheight="0" marginwidth="0"></iframe>
      </div>
   </div>
</Modal>