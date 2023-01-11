<script>
   import LL from "$src/i18n/i18n-svelte";

	import { Modal, Button, Title } from "$comp";
	import { titleCase } from "$src/lib/utils";

</script>
<Modal icon='mdi:map-marker-radius'>
   <Button slot="trigger" block outlined center bold size="lg" icon="mdi:map-marker-radius">
      {titleCase($LL.sessions.location())}
   </Button>
   <Title slot="title" type="h3" small>{titleCase($LL.sessions.location())}</Title>
   <div class="relative text-right h-full w-full">
      <div class="overflow-hidden bg-none h-full w-full">
         <iframe 
            title="{titleCase($LL.sessions.location())} {titleCase($LL.sessions.level_1.title_alt())}"
            class="w-full min-w-full h-120"
            id="gmap_canvas" 
            src="https://maps.google.com/maps?q=Domein%20Martinus&t=&z=9&ie=UTF8&iwloc=&output=embed" 
            frameborder="0" scrolling="no" 
            marginheight="0" marginwidth="0"></iframe>
      </div>
   </div>
</Modal>