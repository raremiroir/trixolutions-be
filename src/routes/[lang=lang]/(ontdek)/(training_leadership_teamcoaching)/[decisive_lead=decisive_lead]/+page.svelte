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
    import { IntroSection } from '../../components/explore';

    // Import i18n
    import LL, { locale } from '$i18n/i18n-svelte';
    
    //  Import data
    export let data;
    const pageData = data.data[0];

    // Import stores
    import { currentHero, currentIcon, currentReference } from "$lib/stores";
	import { titleCase } from "$src/lib/utils";

    // Set page props
    $: $currentHero = `${pageData.hero_img.folder}/${pageData.hero_img.name}.${pageData.hero_img.type}`
    $: $currentIcon = `iconoir:leaderboard-star`;
    $: $currentReference = 'decisive_lead';

    // Set 'active' variable for accordeon component
	let active:any = null;
    $: active;
</script>

<IntroSection 
    title={titleCase($LL.pages_explore.training_leadership_teamcoaching.decisive_lead.title())} 
    imgSrc={$currentHero} 
    imgWidth="w-full { active ? 'lg:w-3/12' : 'lg:w-5/12'}"
    contentWidth="w-full { active ? 'lg:w-9/12' : 'lg:w-7/12'}"
    >
    <div class="" slot="title">
        <Title type="h2" small>
            {$LL.pages_explore.training_leadership_teamcoaching.base.the_model()} - {titleCase($LL.pages_explore.training_leadership_teamcoaching.decisive_lead.title())}
        </Title>
        <Title type="subheader">{$LL.pages_explore.training_leadership_teamcoaching.base.by_lencioni()}</Title>
    </div>

    <Accordeon class="w-full" 
        bind:active>

        {#each Array($LL.pages_explore.training_leadership_teamcoaching.decisive_lead.intro_accordeon) as value, key}
            {#each Object.keys(value) as key}
                <AccordeonItem id={Number(key) + 1}
                    title='{Number(key) + 1}. {value[key].title()}' titleSmallest>
                    <Text>
                        {@html value[key].intro()}
                    </Text><br/>
                    <List>
                        <Text color="text-primary-d1">{value[key].list.intro()}</Text>
                        {#each Array.from(value[key].list.items) as listItem}
                            <ListItem>{listItem()}</ListItem>
                        {/each}
                    </List>
                </AccordeonItem>
            {/each}
        {/each}
    </Accordeon>
</IntroSection>
