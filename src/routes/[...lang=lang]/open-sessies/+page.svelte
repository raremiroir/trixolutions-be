<script lang="ts">
   // Import components
   import { Main, Section, Button, Breadcrumbs, Tag, Image, H1, H2, Text, Card } from "$comp";
	import SessionTypeCard from "./SessionTypeCard.svelte";
   
   // Import i18n
   import LL from "$i18n/i18n-svelte";
   
   // Import utils
	import { titleCase } from "$src/lib/utils";
	import Cardd from "$src/lib/components/Content/Cardd.svelte";
   
   let session_types = [
      {
         title: titleCase($LL.sessions.info.title()),
         badge: titleCase($LL.sessions.info.title_short()),
         link: '/',
         text: 'Een gratis, open infosessie over onze veelzijdige Lencioni Teamcoaching Opleiding.<br/> Aarzel niet en schrijf je in!',
         img: 'placeholder/placeholder.png'
      },
      {
         title: titleCase($LL.sessions.level_1.title_short()),
         badge: titleCase($LL.sessions.level_1.tag()),
         second_badge: titleCase($LL.sessions.level_1.traject_shorter()),
         link: '/',
         text: 'Jouw <strong>hybride Lencioni Leertraject</strong> om je, via online en fysieke leermomenten, te verdiepen en bekwamen als <em>Lencioni Teamcoach</em>, is klaar.',
         img: 'placeholder/placeholder.png'
      },
      {
         title: titleCase($LL.sessions.level_2.title()),
         badge: titleCase($LL.sessions.level_2.advanced_coaching()),
         second_badge: titleCase($LL.sessions.level_2.title()),
         link: '/',
         text: `In 1 dag gaan we dieper in op de 4 andere succesvolle modellen van Patrick Lencioni en The Table Group.`,
         img: 'placeholder/placeholder.png'
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
               ariaLabel={session.title}
               btn={{title: 'Schrijf me in!', href: '', ariaLabel: 'inschrijven in sessie'}}
               second_btn={{title: 'Meer info', href: '', ariaLabel: 'inschrijven in sessie'}}
            >
               {@html session.text}
            </SessionTypeCard>
         {/each}
      </ul>
   </Section>
</Main>