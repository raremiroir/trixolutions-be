<script lang="ts">
    import LL from "$src/i18n/i18n-svelte";
    
    // Import Components
    import { Main, SectionWrapper, Title, P, Breadcrumbs } from "$comp/core";
	import { Accordeon, AccordeonItem } from "$src/lib/components/content";

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