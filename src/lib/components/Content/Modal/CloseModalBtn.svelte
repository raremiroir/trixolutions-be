<script lang="ts">
   import LL from "$i18n/i18n-svelte";

	import { firstLetterCase } from "$utils";
   
	import { Button, Tooltip } from "$comp";

   export let onClick:any;

</script>
<div 
   on:click={onClick}
   on:keydown={onClick}   
   class="h-8 w-8">
      <Button
         title={firstLetterCase($LL.base.btn.close())}
         ariaLabel="Close"
         color="error"
         size="sm" square
         icon="material-symbols:close-rounded" />
</div>