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

    import { IntroSection, IndepthSection } from '../../components/explore';
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

</script>

<IntroSection title={$currentTitle} imgSrc={$currentHero}>
    <H2 small slot="title">
        {$currentTitle}
    </H2>

    <Text>
        {@html $LL.pages_explore.training_leadership_teamcoaching.meetings_deadly.intro()}
    </Text>
</IntroSection>

<IndepthSection title={$currentTitle}>
    <span slot="title">
        {@html $LL.pages_explore.training_leadership_teamcoaching.meetings_deadly.title()} - 
        <span class="italic font-semibold">{@html $LL.pages_explore.training_leadership_teamcoaching.meetings_deadly.in_depth.subtitle()}</span>
    </span>
    <Accordeon bind:active>
        <Text>
            {@html $LL.pages_explore.training_leadership_teamcoaching.meetings_deadly.in_depth.accordeon_title()}
        </Text>

        {#each Array($LL.pages_explore.training_leadership_teamcoaching.meetings_deadly.in_depth.accordeon_items) as value}
            {#each Object.keys(value) as key}
                <AccordeonItem id={Number(key) + 1} title="{Number(key) + 1}. {value[key].title()}" titleSmaller>
                    <MeetingContentCard 
                        listItems={Array.from((value[key].keys))} 

                        timespan={value[key].timespan()}
                        target={value[key].target()}
                        target_desc={value[key].target_desc()}
                        >
                        {@html value[key].text()}
                    </MeetingContentCard>
                </AccordeonItem>
            {/each}
        {/each}
    </Accordeon>
</IndepthSection>