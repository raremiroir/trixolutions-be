<script lang="ts">

   import { formatDateMonthFull, formatTime, formatDateShort, titleCase, firstLetterCase, formatDateFull } from "$utils";
	import supabase from "$src/lib/db";

   import LL from "$i18n/i18n-svelte";   
   import { 
      Main, SectionWrapper, Breadcrumbs, 
      Title, P, Tag, Button, 
      Card, Hero, Alert, Modal, 
      SessionSubscribeForm 
   } from "$comp";

   
   let sessionDates:any = [];

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

      data.forEach(session => {
         if (session.type === 'info_session') {
            sessionDates.push(formatDateFull(session.starts_on));
         }
      });
      
      return data;
   }

</script>

<header>
   <Hero imgSrc="home/kracht-gezonde-teams.webp" imgAlt="No Alt">
      <span slot="title">
         {titleCase($LL.sessions.info.title())}
      </span>
   </Hero>
</header>

<Main noMargin>
   <Breadcrumbs/>
   
   <SectionWrapper name="gratis-online-open-infosessies">
      <Title type="h2" slot="title" large>{$LL.sessions.info.intro.title()}</Title>

      <P large>
         {#each Object.entries($LL.sessions.info.intro.content) as [key, item]}
            {@html item()}
         {/each}
      </P>

   </SectionWrapper>

   <SectionWrapper name="infosessies-praktische-info">
      <Title type="h2" slot="title">{titleCase($LL.sessions.practical())}</Title>
      {#await getData()}
         <Alert>
            {firstLetterCase($LL.base.db.loading())}...
         </Alert>
      {:then data} 
         <div class="grid grid-cols-2 gap-8">
            {#each data as session}
               {#if session.type === 'info_session'}
                  <Card label="{formatDateMonthFull(session.starts_on)}" labelPrimary>
                     <Title slot="title" type="h3" smallest>
                        {titleCase($LL.sessions.info.title())}
                     </Title>
                     <div class="flex flex-row justify-between w-full">
                        <Tag outlined>
                           <span class="text-xs italic">{titleCase($LL.sessions.info.trainer())}:</span><br/>
                           {session.trainer.first_name} {session.trainer.last_name}
                        </Tag>
                        <Tag primary>
                           <span class="text-xs italic">{titleCase($LL.sessions.info.time())}:</span><br/>
                           {formatTime(session.starts_on)} - {formatTime(session.ends_on)}
                        </Tag>
                     </div>
                  </Card>
               {/if}
            {/each}
         </div>
         <div class="m-0 px-0 py-16 w-full flex justify-center items-center">
            <Modal width="min-w-fit w-3/4 max-w-[80%] xl:max-w-[40%]">
               <Button 
                  slot="trigger"
                  size="xxl" icon="mdi:pen-plus" 
                  iconClass="
                  h-10 w-10 
                  text-primary group-hover:text-primary-d2
                  mr-2 mt-0.5 px-1 pb-1 pt-[5px]
                  rounded-full bg-gray-50">
                  {titleCase($LL.sessions.subscribe_to())}
                  {titleCase($LL.sessions.info.single())}
               </Button>
            
               <Title slot="title" type="h3" small>{titleCase($LL.pages.contact.btn.contact_us())}!</Title>   

               <SessionSubscribeForm session="info_session" {sessionDates}/>
            
            </Modal>
         </div>
      {:catch error}
         {error}
      {/await}
   </SectionWrapper>
</Main>