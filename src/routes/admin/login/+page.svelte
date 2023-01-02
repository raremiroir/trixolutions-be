<script lang="ts">
	import Icon from '@iconify/svelte';
	export let form;
</script>

<div class="flex flex-col items-center h-full w-full">
	
    <h2 class="mt-8 text-center text-4xl text-primary font-title font-bold tracking-tight">
		Login met je account
	</h2>
	
    <p class="text-center mt-1 text-primary font-medium">
		of
        <a href="./register" class="text-primary-l2 underline hover:cursor-pointer hover:text-primary-l3 hover:drop-shadow-lg transition-all duration-200 ease-linear">
            registreer
        </a> 
        als je nog geen account hebt.
	</p>

	<form action="?/login" method="POST" class="flex flex-col items-center space-y-2 w-full pt-4 text-primary-d2">
		<div class="dui-form-control w-full max-w-md">
			<label for="email" class="dui-label font-medium pb-1">
				<span class="dui-label-text text-primary-d1">E-mail</span>
			</label>
			<input type="email" name="email" class="dui-input dui-input-bordered w-full max-w-md rounded-lg" />
		</div>
		<div class="dui-form-control w-full max-w-md">
			<label for="password" class="dui-label font-medium pb-1">
				<span class="dui-label-text text-primary-d1">Wachtwoord</span>
			</label>
			<input type="password" name="password" class="dui-input dui-input-bordered w-full max-w-md rounded-lg" />
		</div>
		<div class="w-full max-w-md pt-2">
			<button type="submit" class="dui-btn dui-btn-primary w-full">Inloggen</button>
		</div>

		{#if form?.notVerified}
			<div class="dui-alert dui-alert-error shadow-lg">
				<div class="">
					<Icon icon="material-symbols:error-circle-rounded-outline" class="text-error-d w-8 h-auto" />
					<span>Je moet je e-mail verifiëren voordat je kan inloggen.</span>
				</div>
			</div>
			
		{/if}
	</form>
</div>