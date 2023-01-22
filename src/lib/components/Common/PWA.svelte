<script>
	import { website } from '$lib/config/website';
	const themeColor = website.themeColor;
</script>

<svelte:head>
	<meta name="theme-color" content={themeColor} />
</svelte:head>