<script lang="ts">
    // Define current page slug
   import { currentPageMap } from "$lib/stores";
   $currentPageMap = [
      {locale: 'en', slug: '5-dysfunctions-teamwork'},
      {locale: 'fr', slug: '5-dysfonctions-travail-equipe'},
      {locale: 'nl', slug: '5-frustraties-teamwerk'}
   ];
   
    // Import Components
    import { 
        Text, List, ListItem, Blockquote, 
        Accordeon, AccordeonItem, H2, Subheader 
    } from '$comp';
	
    import { IntroSection, IndepthSection, ContentCard } from '../../components/explore'
	import ContentFlipper from './ContentFlipper.svelte';

    // Import i18n../../components/ContentCard.svelte
    import LL, { locale } from "$i18n/i18n-svelte";
    
    //  Import data
    export let data;
    const pageData = data.data[0];

    // Import stores
    import { 
        currentHero, currentTitle, 
        currentDesc, currentSlug, currentIcon 
    } from "$lib/stores";
    
    // Set page props
    $: $currentTitle = $LL.nav.explore.training_leadership_teamcoaching.items[pageData.name].title()
    $: $currentHero = `${pageData.hero_img.folder}/${pageData.hero_img.name}.${pageData.hero_img.type}`
    $: $currentDesc = $LL.nav.explore.training_leadership_teamcoaching.items[pageData.name].description()
    $: $currentSlug = `/${$locale}/${$LL.nav.explore.training_leadership_teamcoaching.items[pageData.name].slug()}`
    $: $currentIcon = `mdi:head-alert-outline`;

    // Set 'active' variable for accordeon component
	let active:any = null;

    // Get localized 'frustration cards' from i18n library
    let frustrationCards:any = []
    $: for (let i = 0; i < Array.from($LL.pages_explore.training_leadership_teamcoaching.dysfunctions_teamwork.cards).length; i++) {
        frustrationCards[i] = {
            title: $LL.pages_explore.training_leadership_teamcoaching.dysfunctions_teamwork.cards[i].title(),
            content: $LL.pages_explore.training_leadership_teamcoaching.dysfunctions_teamwork.cards[i].content(),
        }
    } 
    // Get localized 'first accordeon list items' from i18n library
    let firstAccListItems:any = [];
    $: for (let i = 0; i < Array.from($LL.pages_explore.training_leadership_teamcoaching.dysfunctions_teamwork.in_depth.accordeon_items.first.list.items).length; i++) {
        firstAccListItems[i] = $LL.pages_explore.training_leadership_teamcoaching.dysfunctions_teamwork.in_depth.accordeon_items.first.list.items[i]()
    } 
    // Get localized 'second accordeon cards' from i18n library
    let secondAccCards:any = [];
    $: for (let i = 0; i < Array.from($LL.pages_explore.training_leadership_teamcoaching.dysfunctions_teamwork.in_depth.accordeon_items.second.cards).length; i++) {
        secondAccCards[i] = {
            title: $LL.pages_explore.training_leadership_teamcoaching.dysfunctions_teamwork.in_depth.accordeon_items.second.cards[i].title(),
            front: $LL.pages_explore.training_leadership_teamcoaching.dysfunctions_teamwork.in_depth.accordeon_items.second.cards[i].front(),
        }
    } 

</script>

<IntroSection title={$currentTitle} imgSrc={$currentHero}>
    <div class="" slot="title">
        <H2 small>
            {$LL.pages_explore.training_leadership_teamcoaching.base.the_model()} - {$currentTitle}
        </H2>
        <Subheader>{$LL.pages_explore.training_leadership_teamcoaching.base.by_lencioni()}</Subheader>
    </div>

    <Text>
        {@html $LL.pages_explore.training_leadership_teamcoaching.dysfunctions_teamwork.intro.first()}
    </Text><br/>
    <Text>
        {@html $LL.pages_explore.training_leadership_teamcoaching.dysfunctions_teamwork.intro.second()}
    </Text>
    <Blockquote>
        {@html $LL.pages_explore.training_leadership_teamcoaching.dysfunctions_teamwork.intro.quote()}
    </Blockquote>


    <div class="
            grid 
            grid-cols-1 sm:grid-cols-2 lg:grid-cols-6
            gap-4 xl:gap-8" 
        slot="append">

        {#each frustrationCards as card, key}
            <div class="
                    col-span-1 
                    { (Number(key) + 1) === 5 ? 'sm:col-span-2' : 'sm:col-span-1'}
                    { (Number(key) + 1) >= 4 ? 'lg:col-span-3' : 'lg:col-span-2'}
                ">
                <ContentCard id={String(Number(key) + 1)} title={card.title}>
                        {@html card.content}
                </ContentCard>
            </div>
        {/each}
    </div>
</IntroSection>


<IndepthSection title={$currentTitle}>
    <span slot="title">{$LL.pages_explore.training_leadership_teamcoaching.dysfunctions_teamwork.in_depth.title()}</span>
    <Accordeon bind:active>

        <AccordeonItem id={1} title="1. {$LL.pages_explore.training_leadership_teamcoaching.dysfunctions_teamwork.in_depth.accordeon_items.first.title()}">
            <List>
                <Text>
                    {@html $LL.pages_explore.training_leadership_teamcoaching.dysfunctions_teamwork.in_depth.accordeon_items.first.list.intro()}
                </Text>
                {#each firstAccListItems as item}
                    <ListItem>{item}</ListItem>
                {/each}
            </List>
            <Text small>
                {$LL.pages_explore.training_leadership_teamcoaching.dysfunctions_teamwork.in_depth.accordeon_items.first.text()}
            </Text>
        </AccordeonItem>

        <AccordeonItem id={2} title="2. {$LL.pages_explore.training_leadership_teamcoaching.dysfunctions_teamwork.in_depth.accordeon_items.second.title()}">
            <Text>
                {@html $LL.pages_explore.training_leadership_teamcoaching.dysfunctions_teamwork.in_depth.accordeon_items.second.intro()}
            </Text>
            <div class="
                    grid 
                    grid-cols-1 sm:grid-cols-2 lg:grid-cols-6
                    gap-4 xl:gap-8" >
                {#each secondAccCards as card, key}
                <div class="
                        col-span-1 
                        { (Number(key) + 1) === 5 ? 'sm:col-span-2' : 'sm:col-span-1'}
                        { (Number(key) + 1) >= 4 ? 'lg:col-span-3' : 'lg:col-span-2'}
                    ">
                    <ContentFlipper 
                        class="w-full"
                        id={String(Number(key) + 1)} title={card.title}>
                        <Text slot="front">
                            {@html card.front}
                        </Text>
                        <Text slot="back">
                            {@html frustrationCards[key].content}
                        </Text>
                    </ContentFlipper>
                </div>
                {/each}
            </div>
        </AccordeonItem>

        <AccordeonItem id={3} title="3. {$LL.pages_explore.training_leadership_teamcoaching.dysfunctions_teamwork.in_depth.accordeon_items.third.title()}" titleSmaller>
            <Text>
                {@html $LL.pages_explore.training_leadership_teamcoaching.dysfunctions_teamwork.in_depth.accordeon_items.third.text()}
            </Text>
        </AccordeonItem>
    </Accordeon>
</IndepthSection>