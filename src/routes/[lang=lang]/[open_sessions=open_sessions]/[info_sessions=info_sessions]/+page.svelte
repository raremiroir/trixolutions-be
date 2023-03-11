<script lang="ts">
   // Import i18n
   import { locales } from "$i18n/i18n-util";
   import type { Locales } from "$i18n/i18n-types";
   import LL from "$i18n/i18n-svelte";
   
   const pageName = 'info_sessions';
   
   // Define current page slug
   import { currentPageMap } from "$lib/stores";
   import { pagesPerLocale } from "$lib/constants/pages";
   locales.forEach((locale:Locales, key) => {
      $currentPageMap[key] = {
         locale: locale,
         slug: pagesPerLocale[pageName][locale]
      }
   })
   
   // Import component_subscribe
   import { 
      Main, Section, Breadcrumbs, 
      Text, Button, H2, H3, Tag,
      Hero, Modal, CardBase,
      SEO, Reveal, SessionSubForm
   } from "$comp";

   // Import utils
   import { titleCase } from "$utils";


   // Import data
	import type { PageData } from "./$types";
	import { getBaseEntity } from "$src/lib/utils/seo";
   export let data:PageData;
   // Get info sessions
   $: sessions = data.sessions.filter((obj:any) => obj.type === 'info_session');
   // Get info session dates
   $: sessionDates = sessions.map((item:any) => {
      return new Date(item.starts_on).toLocaleDateString('nl-BE', { dateStyle: 'short' });
   });

   // SEO
   $: openGraph = {
      title: $LL.nav.open_sessions.items.info_sessions.title(),
      description: $LL.nav.open_sessions.items.info_sessions.description(),
		slug: $LL.nav.open_sessions.items.info_sessions.slug(),
      tags: ['info sessions', 'opleidingen', 'lencioni', 'info sessies', 'trixolutions', 'teamcoaching'],
   }
   $: schemaOrg = {
      entity: getBaseEntity('info_sessions', ['open_sessions', 'items']),
      sessions: data.sessions,
   }


</script>

<SEO {openGraph} {schemaOrg} />

<header>
   <Hero imgSrc="home/kracht-gezonde-teams.webp" imgAlt="No Alt">
      <span slot="title">
         {titleCase($LL.sessions.info.title())}
      </span>
   </Hero>
</header>

<Main noMargin>
   <Breadcrumbs currentIcon="mdi:information-outline" beforeIcon="mdi:account-school-outline"/>
   
   <Section name="gratis-online-open-infosessies">
      <H2 slot="title" large>
         <Reveal>
            {$LL.sessions.info.intro.title()}
         </Reveal>
      </H2>

      <Reveal lazy left>
         <Text>
            {@html $LL.sessions.info.intro.content()}
         </Text>
      </Reveal>

   </Section>

   <Section name="infosessies-praktische-info">
      <H2 slot="title">
         <Reveal>{titleCase($LL.sessions.practical())}</Reveal>
      </H2>
         <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            {#each sessions as session}
               <Reveal>
                  <CardBase
                     hoverFx="minimal"
                     ariaLabel="{$LL.sessions.info.title_single()} - {new Date(session.starts_on).toLocaleString($LL.code(), {day: 'numeric', month: 'long'})}"
                     title={new Date(session.starts_on).toLocaleString($LL.code(), {day: 'numeric', month: 'long'})}
                     badge="{new Date(session.starts_on).toLocaleString($LL.code(), {day: 'numeric', month: 'long'})}" badgesTop
                     height="h-[148px] sm:h-40  md:h-[164px]">
                     <H3 smaller thin slot="title" class="sm:whitespace-nowrap">{titleCase($LL.sessions.info.title_single())}</H3>
                     <div class="flex flex-row justify-between w-full">
                        <Tag outlined>
                           <span class="text-xs italic">{titleCase($LL.sessions.info.trainer())}:</span><br/>
                           {session.trainer.first_name} {session.trainer.last_name}
                        </Tag>
                        <Tag primary>
                           <span class="text-xs italic">{titleCase($LL.sessions.info.time())}:</span><br/>
                           {new Date(session.starts_on).toLocaleTimeString($LL.code(), { hour: '2-digit', minute: '2-digit' })} - {new Date(session.ends_on).toLocaleTimeString($LL.code(), { hour: '2-digit', minute: '2-digit' })}
                        </Tag>
                     </div>
                  </CardBase>
               </Reveal>
            {/each}
         </div>
         <div class="m-0 px-0 py-16 w-full flex justify-center items-center">
            <Reveal bottom slow>
               <Modal width="min-w-fit w-3/4 max-w-[80%] xl:max-w-[40%]">
                  <Button 
                     ariaLabel="{titleCase($LL.sessions.subscribe_to())} {titleCase($LL.sessions.info.single())}"
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
               
                  <H3 slot="title" small>{titleCase($LL.pages.contact.btn.contact_us())}!</H3>   
   
                  <SessionSubForm 
                     sessions={sessionDates}
                     submitText="{$LL.sessions.info.subscribe()}"
                     sessionTitle="{$LL.sessions.info.single()}"
                  />
               
               </Modal>
            </Reveal>
         </div>
   </Section>
</Main>