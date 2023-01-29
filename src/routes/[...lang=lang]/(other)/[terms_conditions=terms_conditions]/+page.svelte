<script lang="ts">
    // Define current page slug
    import { currentPageMap } from "$lib/stores";
    $currentPageMap = [
       {locale: 'en', slug: 'terms-conditions'},
       {locale: 'fr', slug: 'conditions-generales'},
       {locale: 'nl', slug: 'algemene-voorwaarden'}
    ];

    import LL from "$i18n/i18n-svelte";
    
    // Import Components
    import { Main, Section, Breadcrumbs, Accordeon, AccordeonItem, H1, Text } from "$comp";

    let active:any = null;
 </script>
 
 
 <Main cta>
    <Breadcrumbs currentIcon="material-symbols:fact-check-outline" />
    <Section name="algemene-voorwaarden">
       <H1 slot="title">
            {$LL.nav.others.terms_conditions.title()}
        </H1>
        <Accordeon bind:active>
            {#each Object.entries($LL.other.terms_conditions) as [key, item]}
                <AccordeonItem id={Number(key)+1} title={item.title()} titleSmaller>
                    <Text>
                        {@html item.content()}
                    </Text>
                </AccordeonItem>
            {/each}
        </Accordeon>
       
    </Section>
 </Main>