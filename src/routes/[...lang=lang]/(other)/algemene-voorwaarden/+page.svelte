<script lang="ts">
    import LL from "$i18n/i18n-svelte";
    
    // Import Components
    import { Main, SectionWrapper, Title, P, Breadcrumbs, Accordeon, AccordeonItem } from "$comp";

    let active:any = null;
 </script>
 
 
 <Main cta>
    <Breadcrumbs />
    <SectionWrapper name="vacatures">
       <Title slot="title" type='h1'>
            {$LL.other.job_offers.title()}
        </Title>
        <Accordeon bind:active>
            {#each Object.entries($LL.other.terms_conditions) as [key, item]}
                <AccordeonItem id={Number(key)+1} title={item.title()} titleSmaller>
                    <P large>
                        {#each Object.entries(item.content) as [contentKey, content]}
                            {@html content()}
                        {/each}
                    </P>
                </AccordeonItem>
            {/each}
        </Accordeon>
       
    </SectionWrapper>
 </Main>