<script lang="ts">
    // Define current page slug
    import { currentPageMap } from "$lib/stores";
    $currentPageMap = [
        {locale: 'en', slug: 'ideal-team-player'},
        {locale: 'fr', slug: 'coequipier-ideal'},
        {locale: 'nl', slug: 'ideale-teamplayer'}
    ];
    // Import components
    import { 
        Text, Accordeon, AccordeonItem, Tab, 
        TabList, TabPanel, Tabs, H2, Subheader, H4 
    } from '$comp';
    import { IntroSection, IndepthSection } from '../../components/explore';
    
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
    $: $currentIcon = `icon-park-outline:gold-medal`
    $: $currentReference = 'ideal_teamplayer';

    // Set 'active' variable for accordeon component
	let active:any = null;

</script>

<IntroSection title={titleCase($LL.nav.explore.training_leadership_teamcoaching.items.ideal_teamplayer.title())} imgSrc={$currentHero}>
    <div class="" slot="title">
        <H2 small>
            {$LL.pages_explore.training_leadership_teamcoaching.base.the_model()} - {titleCase($LL.nav.explore.training_leadership_teamcoaching.items.ideal_teamplayer.title())}
        </H2>
        <Subheader>{$LL.pages_explore.training_leadership_teamcoaching.base.by_lencioni()}</Subheader>
    </div>

    <Text>
        {@html $LL.pages_explore.training_leadership_teamcoaching.ideal_teamplayer.intro.first()}
    </Text>

    <Text slot="append" class="w-full md:w-4/5 lg:w-2/3 mx-auto">
        {@html $LL.pages_explore.training_leadership_teamcoaching.ideal_teamplayer.intro.second()}
    </Text>
</IntroSection>

<IndepthSection title={titleCase($LL.nav.explore.training_leadership_teamcoaching.items.ideal_teamplayer.title())}>
    <span slot="title">{@html $LL.pages_explore.training_leadership_teamcoaching.ideal_teamplayer.in_depth.title()}</span>
    <Accordeon bind:active>
        <AccordeonItem id={1} title={$LL.pages_explore.training_leadership_teamcoaching.ideal_teamplayer.in_depth.accordeon_items.first.title()} titleSmaller>
            <H4 smaller>
                {$LL.pages_explore.training_leadership_teamcoaching.ideal_teamplayer.in_depth.accordeon_items.first.subtitle()}
            </H4>
            <Tabs>
                <TabList>

                    {#each Array.from($LL.pages_explore.training_leadership_teamcoaching.ideal_teamplayer.in_depth.accordeon_items.first.tabs.items) as item}
                        <Tab>
                            {@html item()}
                        </Tab>
                    {/each}

                </TabList>
                {#each Array.from($LL.pages_explore.training_leadership_teamcoaching.ideal_teamplayer.in_depth.accordeon_items.first.tabs.panels) as panel}
                    <TabPanel>
                        {@html panel()}
                    </TabPanel>
                {/each}
            </Tabs>
            <Text>
                {@html $LL.pages_explore.training_leadership_teamcoaching.ideal_teamplayer.in_depth.accordeon_items.first.text()}
            </Text>
        </AccordeonItem>
        <AccordeonItem id={2} title={$LL.pages_explore.training_leadership_teamcoaching.ideal_teamplayer.in_depth.accordeon_items.second.title()} titleSmaller>
            <Text>
                {@html $LL.pages_explore.training_leadership_teamcoaching.ideal_teamplayer.in_depth.accordeon_items.second.text()}
            </Text>
        </AccordeonItem>
    </Accordeon>
</IndepthSection>