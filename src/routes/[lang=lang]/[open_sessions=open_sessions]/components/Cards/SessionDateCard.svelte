<script lang="ts">
	import LL from "$i18n/i18n-svelte";
	import { titleCase } from "$utils";

	import { CardBase, H4, Tag } from "$comp";
	import Icon from "@iconify/svelte";

   export let session:any;

	let klass = '';
	export { klass as class };

	export let cardProps = {
      href: '',
      article: false,

      hoverFx: 'minimal',
   }

	const startDate = new Date(session.starts_on).toLocaleDateString($LL.code(), { day: '2-digit', month: '2-digit' });
	const endDate = new Date(session.ends_on).toLocaleDateString($LL.code(), { day: '2-digit', month: '2-digit' });
	const startTime = new Date(session.starts_on).toLocaleTimeString($LL.code(), { hour: '2-digit', minute: '2-digit' });
	const endTime = new Date(session.ends_on).toLocaleTimeString($LL.code(), { hour: '2-digit', minute: '2-digit' });

</script>
<CardBase
	title="{startDate} - {endDate}"
	{...cardProps}
	class="{klass} group"
>
	<div slot="title" class="flex items-center justify-center w-full h-fit gap-2">
		<Icon
			icon="material-symbols:calendar-month-rounded"
			class="w-10 h-10 p-[5px] text-white {session.is_full ? 'bg-error/70' : 'bg-primary/90'} rounded-full"
		/>
		<H4 class="uppercase pt-[5px] {session.is_full ? 'text-error/70' : ''}" smaller>
			<div class="flex flex-col gap-0 leading-none">
				{startDate} - {endDate}<br />
				<span class="text-lg font-medium m-0">
					{new Date(session.starts_on).getFullYear()}
					{#if session.is_full}
						- {titleCase($LL.sessions.is_full())}
					{/if}
				</span>
			</div>
		</H4>
	</div>
	<div />
	<div slot="append" class="w-full flex items-center justify-center">
		<Tag 
			outlined 
			class="
				w-full text-lg italic text-center
				opacity-60 group-hover:opacity-100 
				transition-all duration-200 ease-in-out
				border-gray-700 !text-gray-700">
			{startTime} - {endTime}
		</Tag>
	</div>
</CardBase>
