<script lang="ts">
   // Define current page slug
   import { currentPageMap } from "$lib/stores";
   $currentPageMap = [
       {locale: 'en', slug: 'terms-conditions-sme-portfolio'},
       {locale: 'fr', slug: 'conditions-generales-portefeuille-pme'},
       {locale: 'nl', slug: 'algemene-voorwaarden-kmo-portfolio'}
    ];

    // Import Components
    import { Main, Section, Breadcrumbs, Accordeon, AccordeonItem, H1, Text } from "$comp";

    // Import i18n
    import LL from "$i18n/i18n-svelte";
    
    import type { PageData } from "../../$types";
    export let data: PageData;

    let active:any = null;
</script>

<Main cta>
    <Breadcrumbs />
    <Section name="algemene-voorwaarden">
       <H1 slot="title" smallest>
            {$LL.nav.others.terms_kmo.title()}
        </H1>
        <Accordeon bind:active>
            {#each Object.entries($LL.pages.others.terms_kmo.items) as [key, item]}
                <AccordeonItem id={Number(key)+1} title={item.title()} titleSmaller>
                    <Text>
                        {#each Object.entries(item.content) as [contentKey, content]}
                            {@html content()}
                        {/each}
                    </Text>
                </AccordeonItem>
            {/each}
        </Accordeon>
       
    </Section>
 </Main>