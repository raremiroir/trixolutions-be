<script lang="ts">
   // Define current page slug
   import { currentPageMap } from "$lib/stores";
   $currentPageMap = [
      {locale: 'en', slug: 'privacy-policy'},
      {locale: 'fr', slug: 'politique-de-confidentialite'},
      {locale: 'nl', slug: 'privacybeleid'}
   ];

    import LL from "$i18n/i18n-svelte";
    
    // Import Components
    import { Main, Breadcrumbs, Section, H1 } from "$comp";

    let active:any = null;
 </script>
 
 
 <Main cta>
    <Breadcrumbs />
    <Section name='privacy-policy'>
       <H1 slot="title">
            Privacybeleid
        </H1>
        
        Hier komt een privacybeleid.
       
    </Section>
 </Main>