<script lang="ts">
   import LL from "$src/i18n/i18n-svelte";

	import { firstLetterCase } from "$utils";
   
	import Icon from "@iconify/svelte";
	import { Tooltip } from "../../common";

   export let onClick:any;

</script>
<div class="h-8 w-8">
   <Tooltip
      color="error"
      title={firstLetterCase($LL.base.btn.close())}
      placement="bottom-9 left-1/2 -translate-x-1/2">
      <div 
         class="w-full h-full"
         on:click|stopPropagation={onClick}
         on:keydown={onClick}>
         <Icon 
            icon="material-symbols:close-rounded" 
            class="
               cursor-pointer
               rounded-full h-full w-full
               bg-error/70 hover:bg-error
               hover:shadow-sm
               text-white p-1
               transition-all duration-200 ease-in-out
               "/>
      </div>
   </Tooltip>
</div>