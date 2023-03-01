<script lang="ts">
    // Import components
    import { Text, List, ListItem } from "$comp";
	import { ContentCard } from "../../components/explore";

    // Import i18n
    import LL from "$i18n/i18n-svelte";

    export let listItems:any = [];

    export let timespan:string;
    export let target:string;
    export let target_desc:string;

    $: cardTypes = [
        {
            icon: 'material-symbols:nest-clock-farsight-analog-outline-rounded',
            title: $LL.pages_explore.training_leadership_teamcoaching.meetings_deadly.in_depth.key_titles.timespan(),
            content: 'timespan'
        },
        {
            icon: 'mingcute:target-line',
            title: $LL.pages_explore.training_leadership_teamcoaching.meetings_deadly.in_depth.key_titles.target(),
            content: 'target'
        },
        {
            icon: 'material-symbols:key-outline-rounded',
            title: $LL.pages_explore.training_leadership_teamcoaching.meetings_deadly.in_depth.key_titles.keys_success(),
            content: 'list',
        },
    ]
</script>

<Text>
   <slot/>
</Text>
<div class="grid grid-cols-3 gap-4 xl:gap-8 mt-4">
    
    {#each cardTypes as card, key}
        <div class="
                col-span-3
                { card.content === 'timespan' ? `sm:col-span-1` : card.content === 'target'   ? `sm:col-span-2` : card.content === 'list'     ? `sm:col-span-3` : ``}
                lg:col-span-1
                ">
            <ContentCard icon={card.icon} title={card.title} altBg>
                {#if card.content === 'list'}
                    <List>
                        {#each listItems as item}
                            <ListItem transp>{item()}</ListItem>
                        {/each}
                    </List>
                {:else if card.content === 'timespan'}
                    <b>{timespan}</b>
                {:else if card.content === 'target'}
                    <b>{@html target}</b> <br/>
                    {@html target_desc}
                {/if}
            </ContentCard>
        </div>
    {/each}
</div>