<script lang="ts">
    import type { PageData } from './$types';
    
    export let data: PageData;
</script>

<div class="flex flex-col items-center h-full w-full">
	
    <h2 class="mt-8 text-center text-4xl text-primary font-title font-bold tracking-tight">
		Maak een account aan
	</h2>
	
    <p class="text-center mt-1 text-primary font-medium">
		Of
        <a href="./login" class="text-primary-l2 underline hover:cursor-pointer hover:text-primary-l3 hover:drop-shadow-lg transition-all duration-200 ease-linear">
            log in
        </a> 
        met je bestaande account.
	</p>

	<form action="?/register" method="POST" class="flex flex-col items-center space-y-2 w-full pt-4 text-primary-d2">
        <div class="dui-form-control w-full grid grid-cols-2 max-w-md gap-4">
            <div class="dui-form-control w-full col-span-1">
                <label for="first_name" class="dui-label font-medium pb-1">
                    <span class="dui-label-text text-primary-d1">Voornaam</span>
                </label>
                <input type="text" name="first_name" class="dui-input dui-input-bordered w-full max-w-md rounded-lg" />
            </div>
            <div class="dui-form-control w-full col-span-1">
                <label for="last_name" class="dui-label font-medium pb-1">
                    <span class="dui-label-text text-primary-d1">Achternaam</span>
                </label>
                <input type="text" name="last_name" class="dui-input dui-input-bordered w-full max-w-md rounded-lg" />
            </div>
        </div>
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
		<div class="dui-form-control w-full max-w-md">
			<label for="passwordConfirm" class="label font-medium pb-1">
				<span class="dui-label-text text-primary-d1">Herhaal Wachtwoord</span>
			</label>
			<input type="password" name="passwordConfirm" class="dui-input dui-input-bordered w-full max-w-md rounded-lg" />
		</div>
		<div class="w-full max-w-md pt-2">
			<button type="submit" class="dui-btn dui-btn-primary w-full">Registreren</button>
		</div>
	</form>
</div>