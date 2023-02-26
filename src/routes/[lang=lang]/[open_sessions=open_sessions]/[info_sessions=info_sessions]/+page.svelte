<script lang="ts">
   // Define current page slug
   import { currentPageMap } from "$lib/stores";
   $currentPageMap = [
      {locale: 'en', slug: 'open-sessions/free-open-info-sessions'},
      {locale: 'fr', slug: 'sessions-ouvertes/sessions-info-gratuites-ouvertes'},
      {locale: 'nl', slug: 'open-sessies/gratis-open-infosessies'}
   ];

   // Import components
   import { 
      Main, Section, Breadcrumbs, 
      Text, Button, H2, H3, Tag,
      Hero, Modal, CardBase,
	   SEO, Reveal, Form
   } from "$comp";
   
   // Import website config
	import { website } from "$src/lib/config/website";
   // Import i18n
   import LL, { locale } from "$i18n/i18n-svelte";
   // Import utils
   import { formatDateMonthFull, formatTime, titleCase} from "$utils";
	

   // Import data
	import type { PageData } from "./$types";
   export let data:PageData;
   // Get info sessions
   let sessions = Object(data.sessions);
   // Get info session dates
   let sessionDates = Object(data.sessionDates);


   // SEO
   $: pageSlug = `/${$locale}/${$LL.nav.open_sessions.items.info_sessions.slug()}`
   $: pageTitle = $LL.nav.open_sessions.items.info_sessions.title()
   $: pageDesc = $LL.nav.open_sessions.items.info_sessions.description()

   let { author, siteUrl } = website;
	$: breadcrumbs = [{ name: pageTitle, slug: pageSlug }];
	
   $: entityMeta = {
		url: `${siteUrl}${pageSlug}`,
		faviconWidth: 512, faviconHeight: 512,
		caption: author,
	};

</script>

<SEO 
	slug="{pageSlug}"
	datePublished = '2023-01-11T12:31:00.000+0100'
	lastUpdated = '2023-01-11T12:31:00.000+0100'
	title="{pageTitle}"
	metadescription="{pageDesc}"
	{breadcrumbs} {entityMeta}
/>

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
                     ariaLabel="{$LL.sessions.info.title_single()} - {formatDateMonthFull(session.starts_on)}"
                     title={titleCase($LL.sessions.info.title_single())}
                     badge="{formatDateMonthFull(session.starts_on)}" badgesTop
                     height="h-[148px] sm:h-40  md:h-[164px]">
                     <H3 smaller thin slot="title" class="sm:whitespace-nowrap">{titleCase($LL.sessions.info.title_single())}</H3>
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
   
                  <Form 
                     formType="session_sub"
                     sessionType="info_session"
                     submitText={$LL.sessions.info.subscribe()}
                     {sessionDates}
                  />
               
               </Modal>
            </Reveal>
         </div>
   </Section>
</Main>