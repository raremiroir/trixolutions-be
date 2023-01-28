<script lang="ts">
   // Import components
   import { Main, Section, Breadcrumbs, H1 } from "$comp";
	import SessionTypeCard from "./SessionTypeCard.svelte";
   
   // Import i18n
   import LL, { locale } from "$i18n/i18n-svelte";
   
   // Import utils
	import { titleCase } from "$src/lib/utils";

   // Define current page slug
   import { currentPageMap } from "$lib/stores";
   $currentPageMap = [
      {locale: 'en', slug: 'open-sessions'},
      {locale: 'fr', slug: 'sessions-ouvertes'},
      {locale: 'nl', slug: 'open-sessies'}
   ];
   
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

   const cardProps = { fill: true, badgeOnTop: true, isLink: true }
   
</script>

<Main cta>
   <Breadcrumbs currentIcon="mdi:account-school-outline"/>
   <Section name="open-workshops">
      <H1 slot="title">{titleCase($LL.sessions.open_sessions())}</H1>
      <ul class="m-0 flex flex-col gap-8">
         {#each session_types as session, key}
            <SessionTypeCard
               title={session.title}
               badge={session.badge}
               second_badge={session.second_badge}
               href={session.link}
               img={session.img}
               imgPos={key === 1 ? 'resp-r' : 'resp-l'}
               btn={{title: 'Meer Info', href: session.link, ariaLabel: $LL.base.btn.more_info()}}
            >
               {@html session.text}
            </SessionTypeCard>
         {/each}
      </ul>
   </Section>
</Main>