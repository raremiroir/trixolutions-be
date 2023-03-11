<script lang="ts">
    // Import i18n
    import LL from "$i18n/i18n-svelte";
    import { locales } from "$i18n/i18n-util";
    import type { Locales } from "$i18n/i18n-types";

    const pageName = 'job_offers'

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
    import { Main, Section, Breadcrumbs, Accordeon, AccordeonItem, H1, Text } from "$comp";

    let active:any = null;
 </script>
 
 
 <Main cta>
    <Breadcrumbs currentIcon="icon-park-outline:necktie" />
    <Section name={$LL.other.job_offers.title().toLowerCase()}>
       <H1 slot="title">
            {$LL.other.job_offers.title()}
        </H1>
        
        <Accordeon bind:active>
            <AccordeonItem id={1} title={$LL.other.job_offers.no_offers.title()} titleSmaller>
                <Text>
                    {@html $LL.other.job_offers.no_offers.text()}
                </Text>
            </AccordeonItem>
        </Accordeon>
       
    </Section>
 </Main>