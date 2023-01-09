<script lang="ts">
   import { Main, SectionWrapper, Breadcrumbs, Title, P, Tag, Button } from "$comp/core";
   import { Card, Hero, Alert } from "$comp/common";

   import { formatDateMonthFull, formatTime, formatDateShort, titleCase, firstLetterCase } from "$utils";
	import supabase from "$src/lib/db";

   import LL from "$src/i18n/i18n-svelte";
   
   const getData = async () => {
      const {data, error} = await supabase
         .from('sessions')
         .select(`
            *,
            trainer (
               first_name,
               last_name
            )
         `);

      if (error) throw new Error(error.message);

      // console.log(data);
      return data;
   }
</script>

<header>
   <Hero imgSrc="home/kracht-gezonde-teams.webp" imgAlt="No Alt">
      <span slot="title">
         {titleCase($LL.open_sessions.info.title())}
      </span>
   </Hero>
</header>

<Main noMargin>
   <Breadcrumbs/>
   
   <SectionWrapper name="gratis-online-open-infosessies">
      <Title type="h2" slot="title" large>{$LL.open_sessions.info.intro.title()}</Title>

      <P large>
         {#each Object.entries($LL.open_sessions.info.intro.content) as [key, item]}
            {@html item()}
         {/each}
      </P>

   </SectionWrapper>

   <SectionWrapper name="infosessies-praktische-info">
      <Title type="h2" slot="title">{titleCase($LL.open_sessions.practical())}</Title>
      <div class="grid grid-cols-2 gap-8">
         {#await getData()}
            <Alert>
               {firstLetterCase($LL.base.db.loading())}...
            </Alert>
         {:then data} 
            {#each data as session}
               {#if session.type === 'info_session'}
                  <Card label="{formatDateMonthFull(session.starts_on)}" labelPrimary>
                     <Title slot="title" type="h3" smallest>
                        {titleCase($LL.open_sessions.info.single())}
                     </Title>
                     <div class="flex flex-col gap-4 w-full">
                        <div class="flex flex-row justify-between w-full">
                           <Tag outlined>
                              <span class="text-xs italic">{titleCase($LL.open_sessions.info.trainer())}:</span><br/>
                              {session.trainer.first_name} {session.trainer.last_name}
                           </Tag>
                           <Tag primary>
                              <span class="text-xs italic">{titleCase($LL.open_sessions.info.time())}:</span><br/>
                              {formatTime(session.starts_on)} - {formatTime(session.ends_on)}
                           </Tag>
                        </div>
                        <Button size="lg" color="primary">
                           {firstLetterCase($LL.open_sessions.subscribe())}
                        </Button>
                     </div>
                  </Card>
               {/if}
            {/each}
         {:catch error}
            {error}
         {/await}
      </div>
      <div class="m-0 px-0 py-16 w-full flex justify-center items-center">
         <Button 
            size="xxl" icon="mdi:pen-plus" 
            iconClass="
               h-10 w-10 
               text-primary group-hover:text-primary-d2
               mr-2 mt-0.5 px-1 pb-1 pt-[5px]
               rounded-full bg-gray-50">
            {titleCase($LL.open_sessions.subscribe_to())}
            {titleCase($LL.open_sessions.info.single())}
         </Button>
      </div>
   </SectionWrapper>
</Main>