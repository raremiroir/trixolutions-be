<script>
	import { getContext } from 'svelte';
	import { TABS } from './Tabs.svelte';
	import { slide } from 'svelte/transition';

	const panel = {};
	const { registerPanel, selectedPanel } = getContext(TABS);

	registerPanel(panel);
</script>

{#if $selectedPanel === panel}
	<div 
		in:slide={{duration:500}} out:slide={{duration:500}}
		class="bg-primary/15 shadow-xl
		font-medium text-primary-d2
		py-4 px-8">
		<slot></slot>
	</div>
{/if}