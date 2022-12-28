<script>
	import Button           from "$comp/Core/Button/Button.svelte";
	import Main             from "$comp/Base/Wrapper/Main.svelte";
   import SectionWrapper   from "$comp/Base/Wrapper/SectionWrapper.svelte";
   import Image            from "$comp/Base/Media/Image.svelte";
	import Breadcrumbs      from "$src/lib/components/Core/Breadcrumbs/Breadcrumbs.svelte";
	import Card             from "$comp/Common/Card/Card.svelte";
	import List             from "$comp/Common/List/List.svelte";
	import ListItem         from "$comp/Common/List/ListItem.svelte";
	import Blockquote       from "$comp/Common/Text/Blockquote.svelte";
	import P                from "$comp/Common/Text/P.svelte";
	import Tag              from "$comp/Common/Text/Tag.svelte";
	import Title            from "$comp/Common/Text/Title.svelte";
	import Accordeon        from "$comp/Other/Accordeon/Accordeon.svelte";
	import Hero             from "$comp/Hero/Hero.svelte";
	import Tabs             from "$comp/Other/Tabs/Tabs.svelte";

   import { formatDateMonthFull } from "$lib/utils";

   import lencioni_pyramid from '$img/lencioni/pyramide/pyramid-lencioni-1.png'
	import Link from "$src/lib/components/Common/Link/Link.svelte";
	import Icon from "@iconify/svelte";

   let lencioni_features = [
      {content: 'Toegang tot het Hybride Lencioni Traject voor 12 maanden', firstCheck: true},
      {content: 'Regelmatige Updates', firstCheck: true},
      {content: 'Integratie in een leergroep met 8 andere deelnemers', firstCheck: false},
      {content: 'Intake', firstCheck: false},
      {content: 'TWEEDAAGSE FYSIEKE MASTERCLASS onder begeleiding van een Trixolutions/Lencioni Expert', firstCheck: false},
      {content: 'Certificaat', firstCheck: false},
      {content: 'Je wordt toegevoegd aan de Lencioni CAPA Group (Consultants and Practitioners Alliance) op LinkedIn', firstCheck: false},
      {content: 'Je wordt toegevoegd aan de Trixolutions/Lencioni Coach-the-Coach Groep/LEVEL 1 op LinkedIn', firstCheck: false},
      {content: '15 Kartonnen Lencioni Piramides', firstCheck: false},
      {content: 'Toegang tot het volwaardige Lencioni Team Assessment + facilitator instructies', firstCheck: false},
      {content: 'Toegang tot het volwaardige Lencioni Personal Assessment + facilitator instructies', firstCheck: true},
      {content: 'Toegang tot het Lencioni Werkboek', firstCheck: true},
      {content: 'Toegang tot de 10+ Lencioni Bijlages bij het werkboek', firstCheck: true},
      {content: 'Een uur opvolgcoaching met een Trixolutions/Lencioni Expert', firstCheck: true},
      {content: 'Toegang tot de DeepDive – Laag “Vertrouwen”', firstCheck: true},
      {content: 'Toegang tot de DeepDive – Laag “Respectvolle Conflicten”', firstCheck: true},
      {content: 'Toegang tot de DeepDive – Laag “Team Betrokkenheid”', firstCheck: true},
      {content: 'Toegang tot de DeepDive – Laag “Aansprakelijkheid”', firstCheck: true},
      {content: 'Toegang tot de DeepDive – Laag “Resultaatgerichtheid”', firstCheck: true},
      {content: 'Jaarlijks te verlengen voor €490,00', firstCheck: true},
   ]

</script>

<header>
   <Hero height="h-92" titleSmall>
      <span slot="title">Trixolutions / Lencioni Hybride Teamcoaching Leertraject</span>   
   </Hero>
</header>

<Main noMargin>
   <Breadcrumbs/>
   
   <SectionWrapper name="hybride-lencioni-leertraject">
      <P large>
         Jouw <strong>hybride Lencioni Leertraject</strong> om je, via <strong>online en fysieke leermomenten</strong>, 
         te verdiepen en <strong>bekwamen als Lencioni Teamcoach</strong>, is klaar.<br/>
         <br/>
         Trixolutions werkt al 15 jaar intensief met alle modellen, methodieken 
         en inzichten van The Table Group van Patrick Lencioni. <br/>
         Als enige in de Benelux zijn we ook gecertificeerde partner (CAPAPro) 
         van Patrick Lencioni. Dit wil zeggen dat we wekelijks <strong>door Patrick zelf 
         getraind en gecoached worden</strong> in de vele modellen, assessments en oefeningen, 
         en in de Table Group CAPAPro Academy toegang hebben tot honderden filmpjes, 
         virtuele trainingen, speciale podcasts, facilitator instructies, etc.<br/>
         <br/>
         We hebben alle onze Lencioni wijsheid en kennis in <strong>2 mogelijke 
         leertrajecten</strong> gegoten:
      </P>
      <ul class="flex flex-col gap-4">
         <li>
            <Accordeon title="Het Partnership tussen Trixolutions en Patrick Lencioni" titleSmaller>
               <div class="flex flex-col gap-2">
                  <Title type="h4" smaller>Trixolutions is als enige in de Benelux lid van de Table Group van Patrick Lencioni. (CAPA Pro)</Title>
                  <P large>
                     We worden in de Lencioni CAPA Pro Academy op wekelijkse basis begeleid, gecoacht en 
                     getraind in de verschillende Lencioni modellen, assessment en toepassingen door 
                     Patrick Lencioni en zijn consultants zelf.<br/>
                     Deze kennis, gecombineerd met meer dan 200 teamtrajecten op de teller, zijn we de 
                     ideale partner om jouw Lencioni kennis te verhogen naar het hoogste niveau.
                  </P>
                  <Blockquote author="Patrick Lencioni">
                     Niet de operationele en strategische sterktes van een team zijn doorslaggevend … 
                     maar wel de kracht en gezondheid van dit team zullen hét ultieme competitief voordeel zijn in de toekomst …
                  </Blockquote>
                  <P large>
                     De kracht van een gezond team zit voornamelijk in de vaardigheid van teamleden 
                     om <strong>vertrouwen</strong> op te bouwen, met elkaar <strong>respectvolle conflicten</strong> te kunnen hebben, 
                     <strong>betrokkenheid bij het team</strong> te voelen, elkaar <strong>aansprakelijk</strong> te durven stellen en 
                     <strong>resultaatgericht</strong> te kunnen werken.
                  </P>
               </div>
            </Accordeon>
         </li>
         <li>
            <Accordeon title="Welke Vragen zullen We voor Je Oplossen?" titleSmaller>
               <div class="flex flex-col gap-2">
                  <Title type="h4" smaller>In deze opleiding zal je antwoorden vinden op vragen als:</Title>
                  <div class="flex flex-row w-full justify-between">
                     <List klass="w-7/12">
                        <ListItem large>Hoe werk ik aan een gezonde teamcultuur met dit model?</ListItem>
                        <ListItem large>Hoe verkoop ik een Lencioni traject aan mijn (interne) klant?</ListItem>
                        <ListItem large>Hoe creëer ik voldoende "goesting" of "burning platform" om een Lencioni traject te starten?</ListItem>
                        <ListItem large>Hoe ontwikkel ik een Lencioni teamcoaching traject?</ListItem>
                        <ListItem large>Wat zijn de verschillende stappen in een Lencioni teamcoachingstraject?</ListItem>
                        <ListItem large>Welke Lencioni oefeningen zijn er (extra) om met teams in de verschillende lagen van de Piramide te werk te gaan?</ListItem>
                        <ListItem large>Met welke andere “modellen” kan de Piramide gecombineerd worden?</ListItem>
                        <ListItem large>Hoe zet ik het volledige Lencioni Team Assessment juist in?</ListItem>
                        <ListItem large>Hoe gebruik ik het Lencioni Persoonlijk Teamlid Assessment?</ListItem>
                        <ListItem large>Welke vaardigheden heeft een Lencioni Teamcoach juist nodig?</ListItem>
                        <ListItem large>Welke Lencioni Tools en materiaal is er en kan ik inzetten?</ListItem>
                        <ListItem large>Waar kan ik hulp vinden als ik vastloop in een teamtraject?</ListItem>
                        <ListItem large>...</ListItem>
                     </List>
                     <div class="w-5/12">
                        <Image src={lencioni_pyramid} alt="Pyramide van Lencioni" height="h-80" objectFit="object-contain"/>
                     </div>
                  </div>
               </div>
            </Accordeon>
         </li>
      </ul>
   </SectionWrapper>

   <SectionWrapper name="infosessies-praktische-info">
      <div class="flex flex-row gap-4">

         <Card link="/" equalHeight titleSmallest titleType="h2" centerTitle>
            <span 
               slot="title" 
               class="text-center flex flex-col gap-0 justify-center w-full m-0 p-0">
               <span class="text-[18px] uppercase font-normal m-0 p-0">
                  Leertraject
               </span>
               <span class="leading-tight lg:whitespace-nowrap">
                  Zonder<br class="lg:hidden"/> Tweedaagse Masterclass
               </span>
            </span>
            <P klass="sm:h-90 md:h-50 lg:h-48 xl:h-40 2xl:h-36">
               Dit leertraject raden we aan als je al redelijk goed met de Piramide 
               aan de slag kan en vooral naar verdieping en extra inspiratie zoekt 
               op vlak van zijn assessments, speciale oefeningen, bruggen met andere 
               modellen, podcasts, Lencioni filmpjes….<br/>
               Dit is de 'do it yourself' aanpak, wél met een uur coaching van onze 
               Trixolutions/Lencioni expert inbegrepen.<br/>
               Wil je daarna toch wel meedoen aan de tweedaagse Masterclass? Dat kan! 
               Enkel het verschil in prijs rekenen we dan aan.
            </P>
            <List title klass="rounded-lg overflow-hidden border-2 border-primary">
               <div 
                  slot="title" 
                  class="
                     text-gray-50 bg-primary 
                     py-2 font-body font-normal
                     w-full text-center
                     flex items-center justify-center flex-col
                     ">
                  <span>€ 690,00</span>
                  <span class="text-sm font-thin">12 Maanden Toegang</span>
               </div>

               {#each lencioni_features as item}
                  {#if item.firstCheck}
                     <ListItem icon="check">{item.content}</ListItem>
                  {:else}
                     <ListItem icon="cancel" disabled>{item.content}</ListItem>
                  {/if}
               {/each}

            </List>
            <Button size="xl" klass="flex flex-col w-4/5 mx-auto" block>
               <span class="font-light">INSCHRIJVEN VOOR LEERTRAJECT</span>
               <span>ZONDER TWEEDAAGSE MASTERCLASS</span>
            </Button>
         </Card>

         <Card link="/" equalHeight titleSmallest titleType="h2" centerTitle>
            <span slot="title" class="text-center flex flex-col gap-0 justify-center w-full m-0 p-0">
               <span class="text-[18px] uppercase font-normal m-0 p-0">Leertraject</span>
               <span class="leading-tight lg:whitespace-nowrap">Mét<br class="lg:hidden"/> Tweedaagse Masterclass</span>
            </span>
            <P klass="sm:h-90 md:h-50 lg:h-48 xl:h-40 2xl:h-36">
               Dit extensieve leertraject raden we aan als je geen of een beperkte 
               kennis van de Piramide van Lencioni hebt.<br/> 
               We gaan immers in detail door het Lencioni Werkboek en leren je een 
               Lencioni traject opbouwen en uitrollen, verdiepende kennis en 
               oefeningen in de verschillende lagen van de Piramide, hoe de 
               assessments in te zetten.<br/>
               In deze module zit ook een uur opvolgcoaching inbegrepen, alsook 
               15 Lencioni Piramides én een Trixolutions/Lencioni Certificaat!
            </P>
            <List title klass="rounded-lg overflow-hidden border-2 border-primary">
               <div 
                  slot="title" 
                  class="
                     text-gray-50 bg-primary 
                     py-2 font-body font-normal
                     w-full text-center
                     flex items-center justify-center flex-col
                     ">
                  <span>€ 1.390,00</span>
                  <span class="text-sm font-thin">12 Maanden Toegang</span>
               </div>

               {#each lencioni_features as item}
                  <ListItem icon="check">{item.content}</ListItem>
               {/each}

            </List>
            <Button size="xl" klass="flex flex-col w-4/5 mx-auto" block>
               <span class="font-light">INSCHRIJVEN VOOR LEERTRAJECT</span>
               <span>MÉT TWEEDAAGSE MASTERCLASS</span>
            </Button>
         </Card>         

      </div>
   </SectionWrapper>
</Main>