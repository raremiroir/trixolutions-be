<script>
	import { getContext } from 'svelte';
	import { TABS } from './Tabs.svelte';

	const tab = {};
	const { registerTab, selectTab, selectedTab } = getContext(TABS);

	registerTab(tab);
</script>

	<button 
		role="tab"
		class="
			border-none w-full
			transition-all duration-200 ease-out
			py-2
			flex flex-row items-center justify-center gap-2
			text-xl font-body  
			hover:bg-primary/50 hover:text-primary
	
			{ $selectedTab === tab 
			? `bg-primary/15 shadow-none
				font-extrabold text-primary-d2` 
			: `bg-gray-50/50 shadow-md
				font-semibold text-primary`}" 
		on:click={() => selectTab(tab)}>
		<slot />
	</button>

<style>
	.selected {
		border-bottom: 2px solid teal;
		color: #333;
	}
</style>
