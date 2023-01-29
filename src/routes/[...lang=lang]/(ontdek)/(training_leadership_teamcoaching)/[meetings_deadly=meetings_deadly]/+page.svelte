<script lang="ts">
    // Define current page slug
    import { currentPageMap } from "$lib/stores";
    $currentPageMap = [
        {locale: 'en', slug: 'meetings-are-deadly'},
        {locale: 'fr', slug: 'reunions-tuent'},
        {locale: 'nl', slug: 'vergaderingen-zijn-dodelijk'}
    ];

    // Import components
    import { Text, Accordeon, AccordeonItem, H2 } from '$comp';
    import IntroSection from '../../IntroSection.svelte';
	import IndepthSection from '../../IndepthSection.svelte';
	import MeetingContentCard from './MeetingContentCard.svelte';

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
    $: $currentIcon = `fa6-solid:users-slash`

    // Set 'active' variable for accordeon component
	let active:any = null;

    // Get localized 'accordion items' from i18n library
    let accItems:any = []
    $: for (let i = 0; i < Array.from($LL.pages_explore.training_leadership_teamcoaching.meetings_deadly.in_depth.accordeon_items).length; i++) {
        let itemKeys:any = [];
        for (let x = 0; x < Array.from($LL.pages_explore.training_leadership_teamcoaching.meetings_deadly.in_depth.accordeon_items[i].keys).length; x++) {
            itemKeys[x] = $LL.pages_explore.training_leadership_teamcoaching.meetings_deadly.in_depth.accordeon_items[i].keys[x]()
        }

        accItems[i] = {
            title: $LL.pages_explore.training_leadership_teamcoaching.meetings_deadly.in_depth.accordeon_items[i].title(),
            text: $LL.pages_explore.training_leadership_teamcoaching.meetings_deadly.in_depth.accordeon_items[i].text(),
            timespan: $LL.pages_explore.training_leadership_teamcoaching.meetings_deadly.in_depth.accordeon_items[i].timespan(),
            target: $LL.pages_explore.training_leadership_teamcoaching.meetings_deadly.in_depth.accordeon_items[i].target(),
            target_desc: $LL.pages_explore.training_leadership_teamcoaching.meetings_deadly.in_depth.accordeon_items[i].target_desc(),
            keys: itemKeys,
        }
    } 

</script>

<IntroSection title={$currentTitle} imgSrc={$currentHero} imgMode='cover'>
    <H2 small slot="title">
        {$currentTitle}
    </H2>

    <Text>
        {@html $LL.pages_explore.training_leadership_teamcoaching.meetings_deadly.intro()}
    </Text>
</IntroSection>

<IndepthSection title={pageData.title.nl}>
    <span slot="title">
        {@html $LL.pages_explore.training_leadership_teamcoaching.meetings_deadly.title()} - 
        <span class="italic font-semibold">{@html $LL.pages_explore.training_leadership_teamcoaching.meetings_deadly.in_depth.subtitle()}</span>
    </span>
    <Accordeon bind:active>
        <Text>
            {@html $LL.pages_explore.training_leadership_teamcoaching.meetings_deadly.in_depth.accordeon_title()}
        </Text>

        {#each accItems as item, key}
            <AccordeonItem id={Number(key) + 1} title="{Number(key) + 1}. {item.title}" titleSmaller>
                <MeetingContentCard 
                    listItems={item.keys}
                    timespan={item.timespan}
                    target={item.target}
                    target_desc={item.target_desc}
                    >
                    {@html item.text}
                </MeetingContentCard>
            </AccordeonItem>
        {/each}
        
    </Accordeon>
</IndepthSection>