<script>
   import { Main, SectionWrapper, Title, P, Breadcrumbs, List, ListItem, Blockquote } from "$comp/core";
   import { Hero } from "$comp/common";
   import { Accordeon, AccordeonItem } from "$comp/content";
   import Image            from "$src/lib/components/Common/Media/Image.svelte";
	
   import { formatDateMonthFull, formatPrice } from "$utils";

	import Icon from "@iconify/svelte";

   // export let data:any;

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
   <Hero height="h-92" titleSmall imgSrc="Working_Genius" imgAlt="No alt" imgPos="object-top">
      <span slot="title">Trixolutions / Lencioni Hybride Teamcoaching Leertraject</span>   
   </Hero>
</header>

<Main noMargin cta>
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
         <Accordeon>
            <li>
               <AccordeonItem id={1} title="Het Partnership tussen Trixolutions en Patrick Lencioni" titleSmaller>
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
               </AccordeonItem>
            </li>
            <li>
               <AccordeonItem id={2} title="Welke Vragen zullen We voor Je Oplossen?" titleSmaller>
                  <div class="flex flex-col gap-2">
                     <Title type="h4" smaller>In deze opleiding zal je antwoorden vinden op vragen als:</Title>
                     <div class="flex flex-row w-full justify-between">
                        <List class="w-7/12">
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
                           <Image imgSrc='lencioni_pyramid' alt="Pyramide van Lencioni" height="h-80" imgFit="object-contain"/>
                        </div>
                     </div>
                  </div>
               </AccordeonItem>
            </li>
         </Accordeon>
      </ul>
   </SectionWrapper>

   <SectionWrapper name="infosessies-praktische-info">
      <div class="flex flex-row gap-4">

         <!-- {#each $pageResult as item}   
            <Card link="/" equalHeight titleSmallest titleType="h2" centerTitle>
               <span 
                  slot="title" 
                  class="text-center flex flex-col gap-0 justify-center w-full m-0 p-0">
                  <span class="text-[18px] uppercase font-normal m-0 p-0">
                     Leertraject
                  </span>
                  <span class="leading-tight lg:whitespace-nowrap">
                     {Object(item.title_nl).first}<br class="lg:hidden"/> {Object(item.title_nl).second}
                  </span>
               </span>
               <P klass="sm:h-90 md:h-50 lg:h-48 xl:h-40 2xl:h-36">
                  {Object(item.excerpt_nl).first}<br/>
                  {Object(item.excerpt_nl).second}<br/>
                  {Object(item.excerpt_nl).third}
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
                     <span>€ {formatPrice(item.price)}</span>
                     <span class="text-sm font-thin">12 Maanden Toegang</span>
                  </div>

                  {#each Array(Object(item.features_nl).features) as feature}
                     {#each feature as listItem}
                        {#if listItem.checked == "true"}
                           <ListItem icon="check">{listItem.name}</ListItem>
                        {:else if listItem.checked == "false"}
                           <ListItem icon="cancel" disabled>{listItem.name}</ListItem>
                        {/if}
                     {/each}
                  {/each}

               </List>
               <Button size="xl" klass="flex flex-col w-4/5 mx-auto" block>
                  <span class="font-light">INSCHRIJVEN VOOR LEERTRAJECT</span>
                  <span>{`${String(Object(item.title_nl).first).toUpperCase()} ${String(Object(item.title_nl).second).toUpperCase()}`} </span>
               </Button>
            </Card>
         {/each} -->

      </div>
   </SectionWrapper>
</Main>