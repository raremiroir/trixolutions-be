<script lang="ts">
   import LL from "$i18n/i18n-svelte";

	import { Tooltip, Button } from "$comp";
	import Icon from "@iconify/svelte";

   export let formEmpty:any;
   export let resetForm:any;

</script>
<Tooltip
	title={$LL.base.form.content.reset_form()}
	color="error"
	placement="bottom-2 right-12"
	flyY={0}
	flyX={12}
>
	<Button
		on:click={resetForm}
		ariaLabel={$LL.base.form.content.reset_form()}
		title={$LL.base.form.content.reset_form()}
		size="square-md"
		color="bg-error hover:bg-error-dark"
		disabled={formEmpty}
	>
		<Icon icon="mdi:restore" class="text-gray-50 w-6 h-6" />
	</Button>
</Tooltip>
