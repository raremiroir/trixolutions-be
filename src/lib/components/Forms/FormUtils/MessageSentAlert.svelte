<script lang="ts">
   import LL from "$i18n/i18n-svelte";
	import { firstLetterCase, titleCase } from "$src/lib/utils";


	import { Alert } from "$comp";

</script>
<Alert 
   color="success-outlined" small
   class="
      transition-all duration-200 ease-in-out
      cursor-pointer hover:text-gray-50
      hover:bg-success-d shadow-success-d/30 hover:shadow-success-d/50
      shadow-md hover:shadow-lg 
      ">
      <slot>
         {titleCase($LL.base.form.content.sent_success())}! <br/>
         {firstLetterCase($LL.base.form.content.send_another_one())}?
      </slot>
</Alert>