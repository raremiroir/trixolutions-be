<script lang="ts">
   // Import i18n
   import { locales } from "$i18n/i18n-util";
   import type { Locales } from "$i18n/i18n-types";
   import LL from "$i18n/i18n-svelte";
   
   const pageName = 'meetings_deadly';
   
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
    import { Text, Accordeon, AccordeonItem, H2 } from '$comp';

    import { IntroSection, IndepthSection } from '../../components/explore';
	import MeetingContentCard from './MeetingContentCard.svelte';
    
    // Import data
    export let data;
    const pageData = data.data[0];

    // Import stores
    import { currentHero, currentIcon, currentReference } from "$lib/stores";
	import { titleCase } from "$src/lib/utils";
    // Set page props
    $: $currentHero = `${pageData.hero_img.folder}/${pageData.hero_img.name}.${pageData.hero_img.type}`
    $: $currentIcon = `fa6-solid:users-slash`
    $: $currentReference = 'meetings_deadly'
    
    // Set 'active' variable for accordeon component
	let active:any = null;

</script>

<IntroSection title={titleCase($LL.nav.explore.training_leadership_teamcoaching.items.meetings_deadly.title())} imgSrc={$currentHero}>
    <H2 small slot="title">
        {titleCase($LL.nav.explore.training_leadership_teamcoaching.items.meetings_deadly.title())}
    </H2>

    <Text>
        {@html $LL.pages_explore.training_leadership_teamcoaching.meetings_deadly.intro()}
    </Text>
</IntroSection>

<IndepthSection title={titleCase($LL.nav.explore.training_leadership_teamcoaching.items.meetings_deadly.title())}>
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