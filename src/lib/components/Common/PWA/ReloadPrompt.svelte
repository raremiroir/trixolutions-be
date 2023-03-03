<script lang="ts">
	import { useRegisterSW } from 'virtual:pwa-register/svelte';

	import LL from '$i18n/i18n-svelte';
	import { titleCase } from '$utils';

	/* 7 days */
	const intervalMS = 1000 * 60 * 60 * 24 * 7;
 
	const {
		needRefresh,
		updateServiceWorker,
		offlineReady
	} = useRegisterSW({
		onRegistered(r) {
		// uncomment following code if you want check for updates
		r && setInterval(() => {
		   console.log('Checking for sw update')
		   r.update()
		}, intervalMS)
			console.log(`SW Registered: ${r}`)
		},
		onRegisterError(error) {
			console.log('SW registration error', error)
		},
	})
	const close = () => {
		offlineReady.set(false)
		needRefresh.set(false)
	}
	$: toast = $offlineReady || $needRefresh
 </script>

{#if toast}
<div class="pwa-toast hidden" role="alert">
	<div class="message">
		{#if $offlineReady}
			<span>
				{$LL.pwa.messages.app_ready()}
			</span>
		{:else}
			<span>
				{$LL.pwa.messages.new_content()}
			</span>
		{/if}
	</div>
	{#if $needRefresh}
		<button on:click={() => updateServiceWorker(true)}>
			{titleCase($LL.base.btn.reload())}
		</button>
	{/if}
	<button on:click={close}>
		{titleCase($LL.base.btn.close())}
	</button>
</div>
{/if}

 
 <style>
	  .pwa-toast {
		position: fixed;
		right: 0;
		bottom: 0;
		margin: 16px;
		padding: 12px;
		border: 1px solid #8885;
		border-radius: 4px;
		z-index: 2;
		text-align: left;
		box-shadow: 3px 4px 5px 0 #8885;
		background-color: white;
	}
	.pwa-toast .message {
		margin-bottom: 8px;
	}
	.pwa-toast button {
		border: 1px solid #8885;
		outline: none;
		margin-right: 5px;
		border-radius: 2px;
		padding: 3px 10px;
	}
 </style>