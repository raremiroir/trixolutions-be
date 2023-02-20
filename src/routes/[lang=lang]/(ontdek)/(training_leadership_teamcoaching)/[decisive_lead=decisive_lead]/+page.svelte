<script lang="ts">
    // Define current page slug
   import { currentPageMap } from "$lib/stores";
   $currentPageMap = [
      {locale: 'en', slug: 'decisive-lead'},
      {locale: 'fr', slug: 'avantage-decisif'},
      {locale: 'nl', slug: 'beslissende-voorsprong'}
   ];

    // Import components
    import { Title, Text, Accordeon, AccordeonItem, List, ListItem} from '$comp';
	import IntroSection from '../../IntroSection.svelte';

    // Import i18n
    import LL, { locale } from '$i18n/i18n-svelte';
    
    //  Import data
    export let data;
    const pageData = data.data[0];

    // Import stores
    import { currentHero, currentTitle, currentDesc, currentSlug, currentIcon } from "$lib/stores";

    // Set page props
    $: $currentTitle = $LL.nav.explore.training_leadership_teamcoaching.items[pageData.name].title()
    $: $currentHero = `${pageData.hero_img.folder}/${pageData.hero_img.name}.${pageData.hero_img.type}`
    $: $currentDesc = $LL.nav.explore.training_leadership_teamcoaching.items[pageData.name].description()
    $: $currentSlug = `/${$locale}/${$LL.nav.explore.training_leadership_teamcoaching.items[pageData.name].slug()}`
    $: $currentIcon = `iconoir:leaderboard-star`;

    // Set 'active' variable for accordeon component
	let active:any = null;

    // Get localized 'accordion items' from i18n library
    let accordeonItems:any = []
    $: for (let i = 0; i < Array.from($LL.pages_explore.training_leadership_teamcoaching.decisive_lead.intro_accordeon).length; i++) {
        
        let listItems:any = [];
        for (let x = 0; x < Array.from($LL.pages_explore.training_leadership_teamcoaching.decisive_lead.intro_accordeon[i].list.items).length; x++) {
            listItems[x] = $LL.pages_explore.training_leadership_teamcoaching.decisive_lead.intro_accordeon[i].list.items[x]()
        }

        accordeonItems[i] = {
            title: $LL.pages_explore.training_leadership_teamcoaching.decisive_lead.intro_accordeon[i].title(),
            intro: $LL.pages_explore.training_leadership_teamcoaching.decisive_lead.intro_accordeon[i].intro(),
            list: {
                intro: $LL.pages_explore.training_leadership_teamcoaching.decisive_lead.intro_accordeon[i].list.intro(),
                items: listItems
            },
        }
    } 
</script>

<IntroSection title={$currentTitle} imgSrc={$currentHero}>
    <div class="" slot="title">
        <Title type="h2" small>
            {$LL.pages_explore.training_leadership_teamcoaching.base.the_model()} - {$currentTitle}
        </Title>
        <Title type="subheader">{$LL.pages_explore.training_leadership_teamcoaching.base.by_lencioni()}</Title>
    </div>

    <Accordeon class="w-full" 
        bind:active>

        {#each accordeonItems as item, key}
            <AccordeonItem id={Number(key) + 1}
                title='{Number(key) + 1}. {item.title}' titleSmallest>
                <Text>
                    {@html item.intro}
                </Text><br/>
                <List>
                    <Text color="text-primary-d1">{item.list.intro}</Text>
                    {#each Array.from(item.list.items) as listItem}
                        <ListItem>{listItem}</ListItem>
                    {/each}
                </List>
            </AccordeonItem>
        {/each}
    </Accordeon>
</IntroSection>
