<script lang="ts">
    // Import i18n
    import { locales } from "$i18n/i18n-util";
    import type { Locales } from "$i18n/i18n-types";
    import LL from "$i18n/i18n-svelte";
    
    const pageName = 'working_genius';
    
    // Define current page slug
    import { currentPageMap } from "$lib/stores";
    import { pagesPerLocale } from "$lib/constants/pages";
    locales.forEach((locale:Locales, key) => {
        $currentPageMap[key] = {
            locale: locale,
            slug: pagesPerLocale[pageName][locale]
        }
    })

    // Import components
    import { Text, List, ListItem, H2 } from '$comp';
	import { IntroSection } from '../../components/explore';
    
    // Import data
    export let data;
    const pageData = data.data[0];

    // Import stores
    import { currentHero, currentIcon, currentReference } from "$lib/stores";
	import { titleCase } from "$src/lib/utils";
    // Set page props
    $: $currentHero = `${pageData.hero_img.folder}/${pageData.hero_img.name}.${pageData.hero_img.type}`
    $: $currentIcon = `mdi:head-cog-outline`
    $: $currentReference = `working_genius`
    
</script>

<IntroSection title={titleCase($LL.nav.explore.training_leadership_teamcoaching.items.working_genius.title())} imgSrc={$currentHero} imgMode='contain' imgClass="bg-primary">
    <H2 slot="title" small>
        {$LL.pages_explore.training_leadership_teamcoaching.working_genius.title_alt()}
    </H2>

    <List>
        <Text>
            {@html $LL.pages_explore.training_leadership_teamcoaching.working_genius.intro.intro()}
        </Text><br/>

        {#each Array.from($LL.pages_explore.training_leadership_teamcoaching.working_genius.intro.list) as item}
            <ListItem transp>
                {@html item()}
            </ListItem>
        {/each}
    </List><br/>
    <Text>
        {@html $LL.pages_explore.training_leadership_teamcoaching.working_genius.intro.text()}
    </Text>
</IntroSection>