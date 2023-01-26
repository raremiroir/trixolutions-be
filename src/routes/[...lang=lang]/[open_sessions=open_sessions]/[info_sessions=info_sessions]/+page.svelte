<script lang="ts">
   // Import components
   import { 
      Main, Section, Breadcrumbs, 
      Text, Button, H2, H3, Tag,
      Card, Hero, Modal, 
      SessionSubscribeForm,
	  SEO,
	  Reveal,
   } from "$comp";
   
   // Import website config
	import { website } from "$src/lib/config/website";
   
   // Import i18n
   import LL, { locale } from "$i18n/i18n-svelte";
   
   // Import utils
   import { formatDateMonthFull, formatTime, formatUrl, titleCase} from "$utils";
	
   // Import data
	import type { PageData } from "../gratis-open-infosessies/$types";
   export let data:PageData;
   let sessions = Object(data.sessions);
   let sessionDates = Object(data.sessionDates);

   // Define current page slug
   import { currentPageMap } from "$lib/stores";
   $currentPageMap = [
      {locale: 'en', slug: 'open-sessions/free-open-info-sessions'},
      {locale: 'fr', slug: 'sessions-ouvertes/sessions-info-gratuites-ouvertes'},
      {locale: 'nl', slug: 'open-sessies/gratis-open-infosessies'}
   ];

   // SEO
	let pageSlug = formatUrl($LL.sessions.info.title_alt());
   let { author, siteUrl } = website;
	let breadcrumbs = [
      { name: titleCase($LL.sessions.info.title()), slug: `/${$locale}/${pageSlug}/` }
   ];
	
   let entityMeta = {
		url: `${siteUrl}/${$locale}/${pageSlug}`,
		faviconWidth: 512, faviconHeight: 512,
		caption: author,
	};

</script>

<SEO 
	slug="{$locale}/{pageSlug}"
	datePublished = '2023-01-11T12:31:00.000+0100'
	lastUpdated = '2023-01-11T12:31:00.000+0100'
	title="{titleCase($LL.sessions.info.title())}"
	metadescription="{titleCase($LL.sessions.info.title())} - {titleCase($LL.sessions.info.intro.title())}"
	
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
         <div class="grid grid-cols-2 gap-8">
            {#each sessions as session}
               <Reveal>
                  <Card label="{formatDateMonthFull(session.starts_on)}" labelPrimary>
                     <H3 slot="title" smallest>
                        {titleCase($LL.sessions.info.title_single())}
                     </H3>
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
   
                  <SessionSubscribeForm session="info_session" {sessionDates}/>
               
               </Modal>
            </Reveal>
         </div>
   </Section>
</Main>