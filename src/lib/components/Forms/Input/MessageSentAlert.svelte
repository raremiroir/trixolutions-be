<script lang="ts">
   import LL from "$src/i18n/i18n-svelte";
	import { firstLetterCase, titleCase } from "$src/lib/utils";


	import { Alert } from "$comp";

   export let resetForm:any;

</script>
<Alert 
   onClick={resetForm}
   preset="success-outlined" small
   class="
      transition-all duration-200 ease-in-out
      cursor-pointer hover:bg-success-d hover:text-gray-50
      shadow-md hover:shadow-lg shadow-success-d/30 hover:shadow-success-d/50">
   {titleCase($LL.base.form.content.sent_success())}! <br/>
   {firstLetterCase($LL.base.form.content.send_another_one())}?
</Alert>