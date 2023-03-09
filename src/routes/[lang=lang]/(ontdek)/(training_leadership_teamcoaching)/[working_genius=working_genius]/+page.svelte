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
	import { IntroSection } from '../../components/explore';

    // Import i18n
    import LL, { locale } from "$i18n/i18n-svelte";
    
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