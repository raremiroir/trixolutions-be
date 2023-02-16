<script>
	import { Loading } from "$comp";

    import { fade } from "svelte/transition";

    import { onDestroy, onMount } from 'svelte';

    let loaded = false;

    onMount(() => {
		loaded = true;
	});
	onDestroy(() => {
		loaded = false;
	});
</script>

{#if !loaded}
    <div 
        transition:fade={{duration: 300}}
        class="
            fixed w-screen h-screen inset-0 
            grid place-items-center
            bg-primary/70 backdrop-blur-2xl
            z-99">
    <Loading color="light"/>
    </div>
{/if}