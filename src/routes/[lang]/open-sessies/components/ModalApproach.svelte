<script>

	import { Modal, Button, Text, H3 } from "$comp";
   import LL from "$i18n/i18n-svelte";
   import { titleCase } from "$lib/utils";

</script>
<Modal icon="mdi:tools">
   <Button ariaLabel={titleCase($LL.sessions.approach())} slot="trigger" block outlined bold size="lg" icon="mdi:tools">
      {titleCase($LL.sessions.approach())}
   </Button>
   <H3 slot="title" small>{titleCase($LL.sessions.approach())}</H3>
   <slot/>
</Modal>