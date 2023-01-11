<script>
   import { page } from '$app/stores';
	import { Alert, Button, Footer, Link, Main, Navbar, SectionWrapper, Title } from '$comp';
	import { formatUrl } from '$src/lib/utils';
   import { locale } from '$i18n/i18n-svelte';

   const {
      status,
      error: { message },
   } = $page;
   
   const title = `${status}: ${message}`
</script>

<svelte:head>
   <title>{title}</title>
</svelte:head>

<Navbar />

<Main>
   <SectionWrapper name="{formatUrl(title)}">
      <div class="flex justify-center items-center flex-col w-full" slot="title">
         {#if status === 404}
            <Title type="h1" innerClass="!text-[240px]">
               {status}
            </Title>
            <Title type="fake-h1">
               {message}
            </Title>
         {/if}
      </div>
      {#if status === 404}
         <Alert preset="error">
            Helaas. De pagina waar je naar zocht werd niet gevonden. <br/>
            Keer terug naar de homepagina via onderstaande knop, of gebruik de navigatiebalk.
         </Alert>
         <div class="w-full flex items-center justify-center">
            <Link href="/{$locale}/">
               <Button 
                  color="primary" size="xxl" 
                  icon="material-symbols:home-outline-rounded"
                  iconClass="w-10 h-10 text-gray-50 group-hover:text-white">
                  Terug naar Homepagina
               </Button>
            </Link>
         </div>
      {/if}
   </SectionWrapper>
</Main>

<Footer />