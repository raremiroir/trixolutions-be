<script lang="ts">
   // Import Alert component
	import { Alert } from "../..";
   
   // Import utils
   import { firstLetterCase } from "$utils";

   // Import i18n
   import LL from "$i18n/i18n-svelte";


   // Define error
   export let error:any;
</script>

<div class="flex flex-col gap-0">
   <Alert color="error">
      {firstLetterCase($LL.base.db.error_loading())}:
   </Alert>
   <Alert color="error-outlined">
      {error}
   </Alert>
</div>