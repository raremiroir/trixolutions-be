<script>
   // Import components
   import { Alert, Button, Footer, H1, Link, Main, Navbar, Section, Title } from '$comp';
   // Import i18n
   import LL, { locale } from '$i18n/i18n-svelte';
	// Import constants
   import { formatUrl } from '$utils';
   // Import page variables
   import { page } from '$app/stores';

   const status = $page.status ?? '';
   const message = $page.error ? $page.error.message : '';

   const title = `${status}: ${message}`
</script>

<svelte:head>
   <title>{title}</title>
</svelte:head>

<Navbar />

<Main>
   <Section name="{formatUrl(title)}">
      <div class="flex justify-center items-center flex-col w-full" slot="title">
         {#if status === 404}
            <H1 class="!text-[240px]">
               {status}
            </H1>
            <H1 fake>
               {message}
            </H1>
         {/if}
      </div>
      {#if status === 404}
         <Alert color="error">
            {@html $LL.base.error.not_found() }
         </Alert>
         <div class="w-full flex items-center justify-center">
            <Link ariaLabel="Terug naar Homepagina" href="/{$locale}">
               <Button 
                  ariaLabel={$LL.base.btn.back_to_home()}
                  color="primary" size="xxl" 
                  icon="material-symbols:home-outline-rounded"
                  iconClass="w-10 h-10 text-gray-50 group-hover:text-white">
                  {$LL.base.btn.back_to_home()}
               </Button>
            </Link>
         </div>
      {/if}
   </Section>
</Main>

<Footer />