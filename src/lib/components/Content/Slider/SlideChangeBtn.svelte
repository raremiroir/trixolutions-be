<script lang="ts">
	import Icon from "@iconify/svelte";
	import { Tooltip, Button } from "$comp";

   import LL from "$i18n/i18n-svelte";

   export let prev = false;
   export let next = false;	

	export let small = false;
	export let reverseTooltip = false;

</script>
<Tooltip
	title="{prev ? `${$LL.base.slide.prev()}` : next ? `${$LL.base.slide.next()}` : 'set next/prev' }"
	class="z-2"
	placement="
		{ prev && reverseTooltip || next && !reverseTooltip ? small ? 'right-14' : 'right-28'
		: next && reverseTooltip || prev && !reverseTooltip ? small ? 'left-14' : 'left-28' : 'left-28' }
		bottom-1/2 translate-y-1/2"
	flyY={0}
	flyX={ prev && reverseTooltip || next && !reverseTooltip ? small ? 14 : 24
		  : next && reverseTooltip || prev && !reverseTooltip ? small ? -14 : -24 : 24 }
	>
	<Button
		ariaLabel={prev ? `${$LL.base.slide.prev()}` : next ? `${$LL.base.slide.next()}` : 'set next/prev' }
		title={prev ? `${$LL.base.slide.prev()}` : next ? `${$LL.base.slide.next()}` : 'set next/prev' }
		color="primary"
		size="px-8 py-8"
		flat circle
		icon='material-symbols:arrow-right-alt-rounded'
		iconClass="text-white w-12 h-12 {prev ? 'rotate-180' : ''}"
		class="flex items-center justify-center z-3 mx-6"
	/>
</Tooltip>
