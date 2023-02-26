<script>

	import { Modal, Button, Text, Link, H3 } from "$comp";
   import { titleCase } from "$utils";
   import LL, { locale } from "$i18n/i18n-svelte";

</script>


<Modal icon="mdi:account-group-outline">
   <Button ariaLabel={$LL.sessions.audience()} slot="trigger" block outlined bold size="lg" icon="mdi:account-group-outline">
      {titleCase($LL.sessions.audience())}
   </Button>
   <H3 slot="title" small>{titleCase($LL.sessions.audience())}</H3>
   <slot/>
</Modal>