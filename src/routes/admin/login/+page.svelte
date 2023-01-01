<script lang="ts">
	import { page } from '$app/stores';
	import { locale } from '$src/i18n/i18n-svelte';

	import Account from '../Account.svelte';
	import Auth from '../Auth.svelte';
</script>

<svelte:head>
	<title>Admin Panel - Login</title>
	<meta name="description" content="Trixolutions Admin Panel - Login" />
</svelte:head>

<div class="flex flex-col items-center h-full w-full">
	{#if !$page.data.session}
		<Auth/>	
	{:else}
		<Account session="{$page.data.session}" />
	{/if}
</div>