<script lang="ts">
    // Import i18n
    import LL from "$i18n/i18n-svelte";
    import { locales } from "$i18n/i18n-util";
    import type { Locales } from "$i18n/i18n-types";

    const pageName = 'terms_kmo'

    // Define current page slug
    import { currentPageMap } from "$lib/stores";
    import { pagesPerLocale } from "$lib/constants/pages";
    locales.forEach((locale:Locales, key) => {
       $currentPageMap[key] = {
          locale: locale,
          slug: pagesPerLocale[pageName][locale]
       }
    })

    // Import Components
    import { Main, Section, Breadcrumbs, Accordeon, AccordeonItem, H1, Text, List, ListItem } from "$comp";
    
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