<script lang="ts">
   // Define current page slug
   import { currentPageMap } from "$lib/stores";
   $currentPageMap = [
       {locale: 'en', slug: 'terms-conditions-sme-portfolio'},
       {locale: 'fr', slug: 'conditions-generales-portefeuille-pme'},
       {locale: 'nl', slug: 'algemene-voorwaarden-kmo-portfolio'}
    ];

    // Import Components
    import { Main, Section, Breadcrumbs, Accordeon, AccordeonItem, H1, Text, List, ListItem } from "$comp";

    // Import i18n
    import LL from "$i18n/i18n-svelte";
    
    let active:any = null;
</script>

<Main cta>
    <Breadcrumbs currentIcon="mdi:paper-check-outline" />
    <Section name="algemene-voorwaarden-kmo-portfolio">
       <H1 slot="title" smallest>
            {$LL.nav.others.terms_kmo.title()}
        </H1>
        <Accordeon bind:active>
            {#each Object.entries($LL.other.terms_kmo) as [key, item]}
                <AccordeonItem id={Number(key)+1} title={item.title()} titleSmaller>

                    {#if item.text}
                        <Text>{@html item.text()}</Text>
                    {/if}

                    {#if item.list}
                        <List>
                            {#each Object.entries(item.list) as [listItemKey, listItem]}
                                <ListItem>{listItem()}</ListItem>
                            {/each}
                        </List>
                    {/if}

                    {#if item.list_ordered}
                        <List ordered>
                            {#each Object.entries(item.list_ordered) as [listItemKey, listItem]}
                                <ListItem>{listItem()}</ListItem>
                            {/each}
                        </List>
                    {/if}

                    {#if item.text2}
                        <br/><Text>{@html item.text2()}</Text>
                    {/if}

                </AccordeonItem>
            {/each}
        </Accordeon>
       
    </Section>
 </Main>