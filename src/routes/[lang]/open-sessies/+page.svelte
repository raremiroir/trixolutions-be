<script lang="ts">
   // Import components
   import { Main, Section, Button, Breadcrumbs, Tag, Card, Image, H1, H2, Text } from "$comp";
	import SessionTypeCard from "./SessionTypeCard.svelte";
   
   // Import i18n
   import LL from "$i18n/i18n-svelte";
   
   // Import utils
	import { titleCase } from "$src/lib/utils";
	import Cardd from "$src/lib/components/Content/Cardd.svelte";

   const cardProps = { fill: true, badgeOnTop: true, isLink: true }
   
</script>

<Main cta>
   <Breadcrumbs currentIcon="mdi:account-school-outline"/>
   <Section name="open-workshops">
      <H1 slot="title">{titleCase($LL.sessions.open_sessions())}</H1>

      <ul class="m-0 flex flex-col gap-8">

         <Cardd 
            imgPos="responsive-l" {...cardProps}
            title="Gratis Online Open Infosessies" 
            badge="Online Infosessie"
            btn={{title: 'Schrijf me in!', href: '/', ariaLabel: 'inschrijven voor gratis online open infosessie'}}
            second_btn={{title: 'Meer info', href: '/', ariaLabel: 'meer info over de gratis online open infosessies'}}
            href="/" 
         >
            <H2 smallest slot="title">
               Gratis Online Open Infosessies
            </H2>
            <Text>
               Een gratis, open infosessie over onze veelzijdige Lencioni 
               Teamcoaching Opleiding. Aarzel niet en schrijf je in!
            </Text>
         </Cardd>

         <Cardd 
            imgPos="responsive-r" {...cardProps}
            title="Hybride Lencioni Leertraject" 
            badge="Opleiding in Teamcoaching" second_badge="Hybride Traject"
            btn={{title: 'Schrijf me in!', href: '/', ariaLabel: 'inschrijven voor Hybride Lencioni Leertraject'}}
            second_btn={{title: 'Meer info', href: '/', ariaLabel: 'meer info over het Hybride Lencioni Leertraject'}}
            label="Leertraject&nbsp<b>Met</b>&nbspTweedaagse Masterclass"
            second_label="Leertraject&nbsp<b>Zonder</b>&nbspTweedaagse Masterclass"
            href="/" 
         >
            <H2 smallest slot="title">
               Hybride Lencioni Leertraject
            </H2>
            <Text>
               Jouw <strong>hybride Lencioni Leertraject</strong> om je, via online en fysieke leermomenten, te verdiepen en bekwamen als 
               <em>Lencioni Teamcoach</em>, is klaar.
            </Text>
         </Cardd>

         <Cardd 
            imgPos="responsive-l" {...cardProps} 
            title="Lencioni DeepDive - Level 2" 
            badge="Advanced Opleiding" second_badge="Lencioni DeepDive"
            btn={{title: 'Schrijf me in!', href: '/', ariaLabel: 'inschrijven voor Lencioni DeepDive'}}
            second_btn={{title: 'Meer info', href: '/', ariaLabel: 'meer info over de Lencioni DeepDive'}}
            href="/" 
         >
            <H2 smallest slot="title">
               Lencioni DeepDive
            </H2>
            <Text class="max-w-xl">
               In 1 dag gaan we dieper in op de 4 andere succesvolle modellen van Patrick Lencioni en The Table Group.<br/><br/>
               <p class="text-sm italic">
                  Naast zijn piramide uit de ‘De 5 Frustraties van Teamwork’ die we verdiepen in de Lencioni Coach-the-Coach 
                  Masterclass – Level 1, heeft Lencioni immers nog enkele heel krachtige modellen en methodieken uitgebracht 
                  die coaches en consultants kunnen inzetten in teambegeleidings- en teamcoachingtrajecten.
               </p>
            </Text>
         </Cardd>
      </ul>
      

   </Section>
</Main>