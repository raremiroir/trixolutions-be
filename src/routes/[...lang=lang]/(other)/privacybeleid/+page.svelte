<script lang="ts">
    import LL from "$i18n/i18n-svelte";
    
    // Import Components
    import { Main, SectionWrapper, Title, Breadcrumbs } from "$comp";

    let active:any = null;
 </script>
 
 
 <Main cta>
    <Breadcrumbs />
    <SectionWrapper name='privacy-policy'>
       <Title slot="title" type='h1'>
            Privacybeleid
        </Title>
        
        Hier komt een privacybeleid.
       
    </SectionWrapper>
 </Main>