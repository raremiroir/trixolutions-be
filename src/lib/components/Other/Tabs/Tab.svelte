<script>
	import { getContext } from 'svelte';
	import { TABS } from './Tabs.svelte';

	const tab = {};
	const { registerTab, selectTab, selectedTab } = getContext(TABS);

	registerTab(tab);
</script>

<button 
	class="
		w-full border-none
		transition-all duration-200 ease-out
		py-2
		text-xl font-body  

		{ $selectedTab === tab 
		? `bg-primary/15 shadow-none
			font-extrabold text-primary-d2` 
		: `bg-white shadow-md
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
