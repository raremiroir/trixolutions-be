<script lang="ts">
    // Define current page slug
    import { currentPageMap } from "$lib/stores";
    $currentPageMap = [
       {locale: 'en', slug: 'vacancies'},
       {locale: 'fr', slug: 'postes-vacants'},
       {locale: 'nl', slug: 'vacatures'}
    ];

    import LL from "$i18n/i18n-svelte";
    
    // Import Components
    import { Main, SectionWrapper, Title, P, Breadcrumbs, Accordeon, AccordeonItem } from "$comp";

    let active:any = null;
 </script>
 
 
 <Main cta>
    <Breadcrumbs />
    <SectionWrapper name={$LL.other.job_offers.title().toLowerCase()}>
       <Title slot="title" type='h1'>
            {$LL.other.job_offers.title()}
        </Title>
        
        <Accordeon bind:active>
            <AccordeonItem id={1} title={$LL.other.job_offers.no_offers.title()} titleSmaller>
                <P large>
                    {@html $LL.other.job_offers.no_offers.text()}
                </P>
            </AccordeonItem>
        </Accordeon>
       
    </SectionWrapper>
 </Main>