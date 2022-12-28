<script lang="ts">
	import LL, { setLocale, locale } from '$i18n/i18n-svelte'

	export let data;
    console.log(data);
	
	// at the very top, set the locale before you access the store and before the actual rendering takes place
	setLocale(data.locale)

	// Import Components
	import "$src/app.postcss";
	import Dashboard from '$src/lib/components/Admin/Dashboard.svelte';
	import Icon from '@iconify/svelte';


</script>


<div class="min-h-full bg-gray-50">
    <nav class="dui-navbar bg-white border-b">
        <div class="flex-1">
            <a href="/" class="dui-btn dui-btn-ghost normal-case text-xl">
            Trixolutions Dashboard
            </a>
        </div>
        <div class="flex-none">
            {#if !data.user}
                <div class="dui-dropdow dui-dropdown-end">
                    <a href="./login" class="dui-btn dui-btn-primary dui-btn-outline">Login</a>
                    <a href="./register" class="dui-btn dui-btn-primary dui-btn-outline">Register</a>
                </div>
            {:else}
                <div class="dui-dropdown dui-dropdown-end mr-4">
                    <a href="/something/new" class="dui-btn dui-btn-primary dui-btn-outline">
                        Go there
                    </a>
                </div>
                <div class="dui-dropdown dui-dropdown-end">
                    <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
                    <!-- svelte-ignore a11y-label-has-associated-control -->
                    <label tabindex="0" class="dui-btn dui-btn-ghost dui-btn-circle dui-avatar">
                        <div class="w-10 rounded-full">
                            <img src="https://placeimg.com/80/80/people" alt="User avatar">
                        </div>
                    </label>
                    <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
                    <ul 
                        tabindex="0" 
                        class="
                            dui-menu dui-menu-compact 
                            dui-dropdown-content 
                            mt-3 p-2 bg-white
                            text-info font-medium font-body
                            rounded-box w-52">
                        <li class="hover:text-info-d">
                            <a href="/">
                                <Icon icon="material-symbols:account-circle-outline" class="h-auto w-6" />
                                Mijn Account
                            </a>
                        </li>
                        <li class="hover:text-info-d">
                            <form action="\logout" method="POST">
                                <button type="submit" class="w-full text-start flex items-center gap-3">
                                    <Icon icon="material-symbols:logout-rounded" class="h-auto w-6" />
                                    Uitloggen
                                </button>
                            </form>
                        </li>
                    </ul>
                </div>
            {/if}
        </div>
    </nav>

    {#if !data.user}
        Create an account.
    {:else}
        <Dashboard/>
    {/if}

    <slot />

</div>