<script lang="ts">
    // Define current page slug
    import { currentPageMap } from "$lib/stores";
    $currentPageMap = [
        {locale: 'en', slug: '6-types-working-genius'},
        {locale: 'fr', slug: '6-types-working-genius'},
        {locale: 'nl', slug: '6-types-working-genius'}
    ];
    // Import components
    import { Text, List, ListItem, H2 } from '$comp';
	import IntroSection from '../../IntroSection.svelte';

    // Import i18n
    import LL, { locale } from "$i18n/i18n-svelte";
    
    // Import data
    export let data;
    const pageData = data.data[0];

    // Import stores
    import { currentHero, currentTitle, currentDesc, currentSlug, currentIcon } from "$lib/stores";
    // Set page props
    $: $currentTitle = $LL.nav.explore.training_leadership_teamcoaching.items[pageData.name].title()
    $: $currentHero = `${pageData.hero_img.folder}/${pageData.hero_img.name}.${pageData.hero_img.type}`
    $: $currentDesc = $LL.nav.explore.training_leadership_teamcoaching.items[pageData.name].description();
    $: $currentSlug = `/${$locale}/${$LL.nav.explore.training_leadership_teamcoaching.items[pageData.name].slug()}`;
    $: $currentIcon = `mdi:head-cog-outline`

    // Get localized 'intro list items' from i18n library
    let introListItems:any = []
    $: for (let i = 0; i < Array.from($LL.pages.main.training_leadership_teamcoaching.working_genius.intro.list).length; i++) {
        introListItems[i] =  $LL.pages.main.training_leadership_teamcoaching.working_genius.intro.list[i]()
    } 

</script>

<IntroSection title={$currentTitle} imgSrc={$currentHero} imgMode='contain' imgClass="bg-primary">
    <H2 slot="title" small>
        {$LL.pages.main.training_leadership_teamcoaching.working_genius.title_alt()}
    </H2>

    <List>
        <Text>
            {@html $LL.pages.main.training_leadership_teamcoaching.working_genius.intro.intro()}
        </Text><br/>
        {#each introListItems as item}
            <ListItem>
                {@html item}
            </ListItem>
        {/each}
    </List><br/>
    <Text>
        {@html $LL.pages.main.training_leadership_teamcoaching.working_genius.intro.text()}
    </Text>
</IntroSection>