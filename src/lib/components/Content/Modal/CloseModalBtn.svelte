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
   <Tooltip
      color="error"
      flyX={20} flyY={0}
      placement='bottom-1 right-9 '
      title={firstLetterCase($LL.base.btn.close())}>

      <Button
         ariaLabel="Close"
         color="error"
         size="sm" square
         icon="material-symbols:close-rounded" />
   </Tooltip>
</div>