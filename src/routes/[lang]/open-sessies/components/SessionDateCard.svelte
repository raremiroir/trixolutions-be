<script lang="ts">
	import LL from "$i18n/i18n-svelte";
	import { formatDateShort, formatTime, formatYear, titleCase } from "$utils";

	import { Card, H4, Text } from "$comp";
	import Icon from "@iconify/svelte";

   export let session:any;

</script>
<Card
	equalHeight
	class="  last-of-type:col-span-full md:last-of-type:col-span-1
            last-of-type:w-1/2 md:last-of-type:w-full
            last-of-type:mx-auto"
>
	<div slot="title" class="flex items-center justify-center w-full h-fit gap-2">
		<Icon
			icon="material-symbols:calendar-month-rounded"
			class="w-10 h-10 p-[5px] text-white bg-primary/90 rounded-full"
		/>
		<H4 class="uppercase pt-[5px]" small>
			{#if session.is_full}
				{titleCase($LL.sessions.is_full())}
			{:else}
				<div class="flex flex-col gap-0 leading-none">
					{formatDateShort(session.starts_on)} - {formatDateShort(session.ends_on)}<br />
					<span class="text-xl font-medium m-0">{formatYear(session.starts_on)}</span>
				</div>
			{/if}
		</H4>
	</div>
	<div />
	<div slot="append-outer" class="w-full flex items-center justify-center">
		<Text center class="w-full text-2xl">
			{formatTime(session.starts_on)} - {formatTime(session.ends_on)}
		</Text>
	</div>
</Card>
