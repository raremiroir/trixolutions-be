<script lang="ts">
   // Import components
   import { Button, H3, List, ListItem, Modal, SessionSubForm, Text, Subtitle } from "$comp";
   import { PricingCard, SessionSubFormHybridBasic } from '../open-sessies';


   // Import i18n
   import LL from "$i18n/i18n-svelte";
   // Import utils
	import { firstLetterCase, titleCase } from "$src/lib/utils";

   // Request session to display
   export let session:any;
   console.log(session);

   // Request session dates to display
   export let sessionDates:any;
   // Add extra classes
   let klass = '';
   export { klass as class };


   const sessionType = 
      session.type === 'level_1_basic' ? 'l1_basic'
      : session.type === 'level_1_full'? 'l1_full'
      : session.type === 'level_2'? 'l2' : '';

   
   $: title = 
      sessionType === 'l1_basic' 
         ? `${titleCase($LL.sessions.level_1.title_short())} ${titleCase($LL.base.word.without())} <br/>${titleCase($LL.sessions.level_1.two_day())}`
      : sessionType === 'l1_full'
         ? `${titleCase($LL.sessions.level_1.title_short())} ${titleCase($LL.base.word.with())} <br/>${titleCase($LL.sessions.level_1.two_day())}`
      : sessionType === 'l2'
         ? `${titleCase($LL.sessions.level_2.title())} <br/>${titleCase($LL.sessions.level_2.level2())}`
      : ``;
   $: btn = 
      sessionType === 'l1_basic' 
         ? `${titleCase($LL.base.word.without())} ${titleCase($LL.sessions.level_1.two_day())}`
      : sessionType === 'l1_full'
         ? `${titleCase($LL.base.word.with())} ${titleCase($LL.sessions.level_1.two_day())}`
      : sessionType === 'l2'
         ? `${titleCase($LL.sessions.level_2.title())} ${titleCase($LL.sessions.level_2.level2())}`
      : ``;

   $: subtitle = sessionType === 'l1_basic' || sessionType === 'l1_full' ? 
      titleCase($LL.sessions.level_1.traject()) : titleCase($LL.sessions.level_2.advanced_coaching());

   $: sub = titleCase($LL.sessions.level_1.access_time());

   $: intro = 
      sessionType === 'l1_basic' 
         ? $LL.sessions.level_1.basic.intro()
      : sessionType === 'l1_full'
         ? $LL.sessions.level_1.full.intro()
      : sessionType === 'l2'
         ? $LL.sessions.level_2.intro()
      : ``


</script>


<PricingCard price={session.price} class={klass}>
   <span slot="subtitle">{subtitle}</span>
   <span slot="title">{@html title}</span>
   <span slot="sub">{sub}</span>

   <Text slot="intro">{@html intro}</Text>

   <List slot="features" class="">
      {#each Object.entries($LL.sessions.level_1.features) as [key, feature]}
         <ListItem 
            small 
            icon={ session.level_1_features_enabled[Number(key)] ? 'check' : 'cancel' }
            disabled={ !session.level_1_features_enabled[Number(key)] }
            class="even:bg-gray-200/30 pr-2"
            >
            {feature()}
         </ListItem>
      {/each}
   </List>

   <Modal width="min-w-fit w-3/4 max-w-[80%] xl:max-w-[40%]" slot="btn" trigger id={session.id}>
      <Button slot="trigger"
         ariaLabel="{titleCase($LL.sessions.subscribe_to())} {titleCase($LL.sessions.info.single())}"
         size="px-4 lg:px-6 h-20 lg:px-10 lg:h-24 rounded-xl text-lg xl:text-xl xl:gap-6 2xl:gap-8" 
         block 
         class="flex flex-row w-full lg:w-4/5 mx-auto" 
         icon="mdi:pen-plus"
         iconClass="h-5 w-5 mr-2 text-gray-50 group-hover:text-white">
         <div class="flex flex-col">
            <span class="font-normal text-sm md:text-base xl:text-lg">{$LL.sessions.subscribe_to()} {$LL.sessions.level_1.traject()}</span>
            <span>{@html btn}</span>
         </div>
      </Button>
   </Modal>

</PricingCard>

<Modal content id={session.id}>
   <H3 slot="title" small>
      {titleCase($LL.sessions.subscribe_to())} 
      {#if sessionType === 'l1_basic' || sessionType === 'l1_full'}
         {titleCase($LL.sessions.level_1.traject())}!
      {:else if sessionType === 'l2'}
         {titleCase($LL.sessions.level_2.deepdive())}!
      {/if}
   </H3>   
   <Subtitle small italic>
      {firstLetterCase($LL.sessions.sign_up_to())} {$LL.sessions.level_1.the_traject()} <strong>{@html btn}</strong></Subtitle>

   {#if sessionType === 'l1_basic'}
      <SessionSubFormHybridBasic/>
   {:else if sessionType === 'l1_full' }
      <SessionSubForm 
         sessions={sessionDates}
         submitText={titleCase($LL.sessions.level_1.subscribe())}
         sessionTitle={titleCase($LL.sessions.level_1.title())}
      />
   {:else if sessionType === 'l2'}
      <SessionSubForm 
         sessions={sessionDates}
         submitText={titleCase($LL.sessions.level_2.subscribe())}
         sessionTitle="{titleCase($LL.sessions.level_2.title())} - {titleCase($LL.sessions.level_2.level2())}"
      />
   {/if}
</Modal>