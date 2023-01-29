<script lang="ts">
    // Define current page slug
    import { currentPageMap } from "$lib/stores";
    $currentPageMap = [
        {locale: 'en', slug: 'ideal-team-player'},
        {locale: 'fr', slug: 'coequipier-ideal'},
        {locale: 'nl', slug: 'ideale-teamplayer'}
    ];
    // Import components
    import { Text, Accordeon, AccordeonItem, Tab, TabList, TabPanel, Tabs, H2, Subheader, H4 } from '$comp';
	import IntroSection from '../../IntroSection.svelte';
	import IndepthSection from '../../IndepthSection.svelte';
    
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
    $: $currentIcon = `icon-park-outline:gold-medal`

    // Set 'active' variable for accordeon component
	let active:any = null;

    let firstAccTabItems:any = [];
    $: for (let i = 0; i < Array.from($LL.pages.main.training_leadership_teamcoaching.ideal_teamplayer.in_depth.accordeon_items.first.tabs.items).length; i++) {
        firstAccTabItems[i] = $LL.pages.main.training_leadership_teamcoaching.ideal_teamplayer.in_depth.accordeon_items.first.tabs.items[i]()
    } 
    let firstAccTabPanels:any = [];
    $: for (let i = 0; i < Array.from($LL.pages.main.training_leadership_teamcoaching.ideal_teamplayer.in_depth.accordeon_items.first.tabs.panels).length; i++) {
        firstAccTabPanels[i] = $LL.pages.main.training_leadership_teamcoaching.ideal_teamplayer.in_depth.accordeon_items.first.tabs.panels[i]()
    } 

</script>

<IntroSection title={$currentTitle} imgSrc={$currentHero} imgMode='cover'>
    <div class="" slot="title">
        <H2 small>
            {$LL.pages.main.training_leadership_teamcoaching.base.the_model()} - {$currentTitle}
        </H2>
        <Subheader>{$LL.pages.main.training_leadership_teamcoaching.base.by_lencioni()}</Subheader>
    </div>

    <Text>
        {@html $LL.pages.main.training_leadership_teamcoaching.ideal_teamplayer.intro.first()}
    </Text>

    <Text slot="append" class="w-full md:w-4/5 lg:w-2/3 mx-auto">
        {@html $LL.pages.main.training_leadership_teamcoaching.ideal_teamplayer.intro.second()}
    </Text>
</IntroSection>

<IndepthSection title={pageData.title.nl}>
    <span slot="title">{@html $LL.pages.main.training_leadership_teamcoaching.ideal_teamplayer.in_depth.title()}</span>
    <Accordeon bind:active>
        <AccordeonItem id={1} title={$LL.pages.main.training_leadership_teamcoaching.ideal_teamplayer.in_depth.accordeon_items.first.title()} titleSmaller>
            <H4 smaller>
                {$LL.pages.main.training_leadership_teamcoaching.ideal_teamplayer.in_depth.accordeon_items.first.subtitle()}
            </H4>
            <Tabs>
                <TabList>
                    {#each firstAccTabItems as item}
                        <Tab>
                            {@html item}
                        </Tab>
                    {/each}
                </TabList>
                {#each firstAccTabPanels as panel}
                    <TabPanel>
                        {@html panel}
                    </TabPanel>
                {/each}
            </Tabs>
            <Text>
                {@html $LL.pages.main.training_leadership_teamcoaching.ideal_teamplayer.in_depth.accordeon_items.first.text()}
            </Text>
        </AccordeonItem>
        <AccordeonItem id={2} title={$LL.pages.main.training_leadership_teamcoaching.ideal_teamplayer.in_depth.accordeon_items.second.title()} titleSmaller>
            <Text>
                {@html $LL.pages.main.training_leadership_teamcoaching.ideal_teamplayer.in_depth.accordeon_items.second.text()}
            </Text>
        </AccordeonItem>
    </Accordeon>
</IndepthSection>