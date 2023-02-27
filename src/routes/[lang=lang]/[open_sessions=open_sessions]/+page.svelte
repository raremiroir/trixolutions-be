<script lang="ts">
   // Define current page slug
   import { currentPageMap } from "$lib/stores";
   $currentPageMap = [
      {locale: 'en', slug: 'open-sessions'},
      {locale: 'fr', slug: 'sessions-ouvertes'},
      {locale: 'nl', slug: 'open-sessies'}
   ];

   // Import components
   import { Main, Section, Breadcrumbs, H1, SEO } from "$comp";
   import { SessionTypeCard } from './components/open-sessies';
   
   // Import website config
   import { website } from "$lib/config/website";
   // Import i18n
   import LL, { locale } from "$i18n/i18n-svelte";
   // Import utils
	import { titleCase } from "$src/lib/utils";

   
   $: session_types = [
      {
         title: titleCase($LL.sessions.info.title()),
         badge: titleCase($LL.sessions.info.title_short()),
         link: `/${$locale}/${$LL.nav.open_sessions.items.info_sessions.slug()}`,
         text: $LL.sessions.info.excerpt(),
         img: 'home/lencioni-ctc.webp'
      },
      {
         title: titleCase($LL.sessions.level_1.title_short()),
         badge: titleCase($LL.sessions.level_1.tag()),
         second_badge: titleCase($LL.sessions.level_1.traject_shorter()),
         link: `/${$locale}/${$LL.nav.open_sessions.items.hybrid_traject.slug()}`,
         text: $LL.sessions.level_1.excerpt(),
         img: 'home/working-genius.webp'
      },
      {
         title: titleCase($LL.sessions.level_2.title()),
         badge: titleCase($LL.sessions.level_2.advanced_coaching()),
         second_badge: titleCase($LL.sessions.level_2.title()),
         link: `/${$locale}/${$LL.nav.open_sessions.items.deepdive.slug()}`,
         text: $LL.sessions.level_2.excerpt(),
         img: 'home/working-genius.webp'
      },
   ]

   // SEO
   $: pageSlug = `/${$locale}/${$LL.nav.open_sessions.slug()}`
   $: pageTitle = $LL.nav.open_sessions.title()
   $: pageDesc = $LL.nav.open_sessions.description()

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

<Main cta>
   <Breadcrumbs currentIcon="mdi:account-school-outline"/>
   <Section name="open-workshops">
      <H1 slot="title">{titleCase($LL.sessions.open_sessions())}</H1>
      <ul class="m-0 flex flex-col gap-4 xs:gap-5 sm:gap-6 lg:gap-8">
         {#each session_types as session, key}
            <SessionTypeCard
               title={session.title}
               badge={session.badge}
               second_badge={session.second_badge}
               href={session.link}
               img={session.img}
               btn={{title: 'Meer Info', href: session.link, ariaLabel: $LL.base.btn.more_info()}}
            >
               {@html session.text}
            </SessionTypeCard>
         {/each}
      </ul>
   </Section>
</Main>