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
    import LL from '$i18n/i18n-svelte';
    
    //  Import data
    export let data;
    const pageData = data.data[0];
    
    // Import stores
    import { currentHero, currentTitle } from "$lib/stores";
    // Set page props
    $: $currentTitle = $LL.nav.explore.training_leadership_teamcoaching.items[pageData.name].title()
    $: $currentHero = `${pageData.hero_img.folder}/${pageData.hero_img.name}.${pageData.hero_img.type}`

    // Set 'active' variable for accordeon component
	let active:any = null;

    $: accordeonItems = [
        {
            title: $LL.pages.main.training_leadership_teamcoaching.decisive_lead.intro_accordeon[0].title(),
            intro: $LL.pages.main.training_leadership_teamcoaching.decisive_lead.intro_accordeon[0].intro(),
            list: {
                intro: $LL.pages.main.training_leadership_teamcoaching.decisive_lead.intro_accordeon[0].list.intro(),
                items: [
                    $LL.pages.main.training_leadership_teamcoaching.decisive_lead.intro_accordeon[0].list.items[0](),
                    $LL.pages.main.training_leadership_teamcoaching.decisive_lead.intro_accordeon[0].list.items[1](),
                    $LL.pages.main.training_leadership_teamcoaching.decisive_lead.intro_accordeon[0].list.items[2](),
                    $LL.pages.main.training_leadership_teamcoaching.decisive_lead.intro_accordeon[0].list.items[3](),
                    $LL.pages.main.training_leadership_teamcoaching.decisive_lead.intro_accordeon[0].list.items[4](),
                ],
            }
        },
        {
            title: $LL.pages.main.training_leadership_teamcoaching.decisive_lead.intro_accordeon[1].title(),
            intro: $LL.pages.main.training_leadership_teamcoaching.decisive_lead.intro_accordeon[1].intro(),
            list: {
                intro: $LL.pages.main.training_leadership_teamcoaching.decisive_lead.intro_accordeon[1].list.intro(),
                items: [
                    $LL.pages.main.training_leadership_teamcoaching.decisive_lead.intro_accordeon[1].list.items[0](),
                    $LL.pages.main.training_leadership_teamcoaching.decisive_lead.intro_accordeon[1].list.items[1](),
                    $LL.pages.main.training_leadership_teamcoaching.decisive_lead.intro_accordeon[1].list.items[2](),
                    $LL.pages.main.training_leadership_teamcoaching.decisive_lead.intro_accordeon[1].list.items[3](),
                    $LL.pages.main.training_leadership_teamcoaching.decisive_lead.intro_accordeon[1].list.items[4](),
                    $LL.pages.main.training_leadership_teamcoaching.decisive_lead.intro_accordeon[1].list.items[5](),
                ],
            }
        },
        {
            title: $LL.pages.main.training_leadership_teamcoaching.decisive_lead.intro_accordeon[2].title(),
            intro: $LL.pages.main.training_leadership_teamcoaching.decisive_lead.intro_accordeon[2].intro(),
            list: {
                intro: $LL.pages.main.training_leadership_teamcoaching.decisive_lead.intro_accordeon[2].list.intro(),
                items: [
                    $LL.pages.main.training_leadership_teamcoaching.decisive_lead.intro_accordeon[2].list.items[0](),
                    $LL.pages.main.training_leadership_teamcoaching.decisive_lead.intro_accordeon[2].list.items[1](),
                    $LL.pages.main.training_leadership_teamcoaching.decisive_lead.intro_accordeon[2].list.items[2](),
                    $LL.pages.main.training_leadership_teamcoaching.decisive_lead.intro_accordeon[2].list.items[3](),
                    $LL.pages.main.training_leadership_teamcoaching.decisive_lead.intro_accordeon[2].list.items[4](),
                ],
            }
        },
        {
            title: $LL.pages.main.training_leadership_teamcoaching.decisive_lead.intro_accordeon[3].title(),
            intro: $LL.pages.main.training_leadership_teamcoaching.decisive_lead.intro_accordeon[3].intro(),
            list: {
                intro: $LL.pages.main.training_leadership_teamcoaching.decisive_lead.intro_accordeon[3].list.intro(),
                items: [
                    $LL.pages.main.training_leadership_teamcoaching.decisive_lead.intro_accordeon[3].list.items[0](),
                    $LL.pages.main.training_leadership_teamcoaching.decisive_lead.intro_accordeon[3].list.items[1](),
                    $LL.pages.main.training_leadership_teamcoaching.decisive_lead.intro_accordeon[3].list.items[2](),
                    $LL.pages.main.training_leadership_teamcoaching.decisive_lead.intro_accordeon[3].list.items[3](),
                ],
            }
        },
    ];
</script>


<IntroSection title={$currentTitle} imgSrc={$currentHero}>
    <div class="" slot="title">
        <Title type="h2" small>
            {$LL.pages.main.training_leadership_teamcoaching.base.the_model()} - {$currentTitle}
        </Title>
        <Title type="subheader">{$LL.pages.main.training_leadership_teamcoaching.base.by_lencioni()}</Title>
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
                    {item.list.intro}
                    {#each Array.from(item.list.items) as listItem}
                        <ListItem>{listItem}</ListItem>
                    {/each}
                </List>
            </AccordeonItem>
        {/each}
    </Accordeon>
</IntroSection>
