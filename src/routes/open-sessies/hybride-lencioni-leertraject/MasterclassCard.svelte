<script>
   import { Title, P, List, ListItem, Button } from "$comp/core";
   import { Card } from "$comp/common";

   import { _ } from "svelte-i18n";
   import { formatPrice } from "$utils";

   export let session;

</script>

{#if session.type == 'level_1_basic' || session.type == 'level_1_full' }
   {@const sessionData = 
      session.type === 'level_1_basic' 
         ? Object($_('open_sessions.level_1.basic'))
      : session.type === 'level_1_full'
         ? Object($_('open_sessions.level_1.full'))
      : ''}
   <Card link="/" equalHeight>
      <Title 
         slot="title" type="h2" smallest 
         class="text-center flex flex-col gap-0 justify-center w-full m-0 p-0">
         <span class="text-[18px] uppercase font-normal m-0 p-0">
            {$_('open_sessions.level_1.traject')}<br/>
         </span>
         <span class="leading-tight lg:whitespace-nowrap">
            {sessionData.title}<br class="lg:hidden"/> {$_('open_sessions.level_1.two_day')}
         </span>
      </Title>
      <P class="sm:h-90 md:h-50 lg:h-48 xl:h-40 2xl:h-36">
         {#each sessionData.intro as item}
            {@html item}
         {/each}
      </P>
      <List title class="rounded-lg overflow-hidden border-2 border-primary">
         <div 
            slot="title" 
            class="
               text-gray-50 bg-primary 
               py-2 font-body font-normal
               w-full text-center
               flex items-center justify-center flex-col
               ">
            <span>€ {formatPrice(session.price)}</span>
            <span class="text-sm font-thin">{$_('open_sessions.level_1.access_time')}</span>
         </div>

         {@const features = $_('open_sessions.level_1.features')}
         {#each features as feature, key}
            {#if sessionData.features[key] === true}
               <ListItem icon="check">{feature}</ListItem>
            {:else if sessionData.features[key] === false}
               <ListItem icon="cancel" disabled>{feature}</ListItem>
            {/if}
         {/each}

      </List>
      <Button size="xl" class="flex flex-col w-full lg:w-4/5 mx-auto" block>
         <span class="font-light">{$_('open_sessions.level_1.subscribe_to_session')}</span>
         <span>{sessionData.title} {$_('open_sessions.level_1.two_day')}</span>
      </Button>
   </Card>
{/if}