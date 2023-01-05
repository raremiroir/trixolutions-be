<script lang="ts">
   import { Main, SectionWrapper, Breadcrumbs, Title, P, Tag, Button } from "$comp/core";
   import { Card, Hero, Alert } from "$comp/common";

   import { formatDateMonthFull, formatTime, formatDateShort, titleCase, firstLetterCase } from "$utils";
	import supabase from "$src/lib/db";

   import { _ } from "svelte-i18n";
   
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

      console.log(data);
      return data;
   }

</script>

<header>
   <Hero height="h-92" imgSrc="home/kracht-gezonde-teams.webp" imgAlt="No Alt">
      <span slot="title">
         {titleCase($_('open_sessions.info.title'))}
      </span>
   </Hero>
</header>

<Main noMargin>
   <Breadcrumbs/>
   
   <SectionWrapper name="gratis-online-open-infosessies">
      <Title type="h2" slot="title" large>{$_('open_sessions.info.intro.title')}</Title>

      <P large>
         {@const introItems = $_('open_sessions.info.intro.content')}
         {#each introItems as item}
            {@html item}
         {/each}
      </P>

   </SectionWrapper>

   <SectionWrapper name="infosessies-praktische-info">
      <Title type="h2" slot="title">{titleCase($_('open_sessions.info.practical.title'))}</Title>
      <div class="grid grid-cols-2 gap-8">
         {#await getData()}
            <Alert>
               {firstLetterCase($_('base.db.loading'))}...
            </Alert>
         {:then data} 
         <!-- <pre>{JSON.stringify($pageResult, null, 2)}</pre> -->
            {#each data as session}
               {#if session.type === 'info_session'}
                  <Card label="{formatDateMonthFull(session.starts_on)}" labelPrimary>
                     <Title slot="title" type="h3 smallest">
                        {titleCase($_('open_sessions.info.single'))}
                     </Title>
                     <div class="flex flex-col gap-4 w-full">
                        <div class="flex flex-row justify-between w-full">
                           <Tag outlined>
                              {session.trainer.first_name} {session.trainer.last_name}
                           </Tag>
                           <Tag primary>
                              {formatTime(session.starts_on)} - {formatTime(session.ends_on)}
                           </Tag>
                        </div>
                        <Button size="lg" color="primary">
                           {firstLetterCase($_('open_sessions.info.btn.subscribe'))}
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
         <Button size="xxl">
            {titleCase($_('open_sessions.info.btn.subscribe_to_session'))}
         </Button>
      </div>
   </SectionWrapper>
</Main>