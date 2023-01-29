<script lang="ts">
    // Define current page slug
   import { currentPageMap } from "$lib/stores";
   $currentPageMap = [
      {locale: 'en', slug: '5-dysfunctions-teamwork'},
      {locale: 'fr', slug: '5-dysfonctions-travail-equipe'},
      {locale: 'nl', slug: '5-frustraties-teamwerk'}
   ];
    import { P, Title, List, ListItem, Blockquote, Accordeon, AccordeonItem } from '$comp';
	
    import IntroSection from '../../IntroSection.svelte';
	import IndepthSection from '../../IndepthSection.svelte';
	
    import ContentCard from '../../ContentCard.svelte';
	import ContentCardGrid from './ContentCardGrid.svelte';
	import ContentFlipper from './ContentFlipper.svelte';
    
    // Import utils and stores
    import { currentHero, currentTitle } from '$src/lib/stores';
    
    //  Import data
    export let data;
    const pageData = data.data[0];

    let heroImgSrc = `${pageData.hero_img.folder}/${pageData.hero_img.name}.${pageData.hero_img.type}`
    $currentHero = heroImgSrc;
    $currentTitle = pageData.title.nl;

    // Set 'active' variable for accordeon component
	let active:any = null;

</script>

<IntroSection title={pageData.title.nl} imgSrc={heroImgSrc} imgMode='contain'>
    <div class="" slot="title">
        <Title type="h2" small>
            Het Model - {pageData.title.nl}
        </Title>
        <Title type="subheader">by Patrick Lencioni</Title>
    </div>

    <P large>
        Of je het nu leuk vindt of niet, alle teams zijn potentieel 
        disfunctioneel.<br/>
        Dat is onvermijdelijk omdat ze uit feilbare, onvolmaakte 
        mensen bestaan.<br/>
        Van het basketbalveld tot de executive suite, politiek en 
        onduidelijkheid zijn meer regel dan uitzondering.<br/>
        Het disfunctioneren onder ogen zien en focussen op teamwerk 
        is echter vooral van cruciaal belang aan de top van een 
        organisatie, omdat het executive team de toon zet voor hoe 
        alle werknemers met elkaar samenwerken.<br/>
    </P><br/>
    <P large>
        Een voormalige klant, de oprichter van een miljardenbedrijf, 
        beschreef de kracht van teamwerk het beste toen hij me eens vertelde:
    </P>
    <Blockquote>
        Als je alle mensen in de organisatie in dezelfde richting 
        zou kunnen laten roeien, zou je elke sector en elke markt 
        kunnen domineren tegenover eender welke concurrentie.
    </Blockquote>


    <ContentCardGrid slot="append">
        <ContentCard 
            id="1" title="Gebrek aan Vertrouwen" 
            class="col-span-1 sm:col-span-1 lg:col-span-2">
                De angst om kwetsbaar te zijn bij teamleden verhindert 
                dat er vertrouwen wordt opgebouwd binnen het team.
        </ContentCard>
        <ContentCard 
            id="2" title="Angst voor Conflicten" 
            class="col-span-1 sm:col-span-1 lg:col-span-2">
            De wens om kunstmatige harmonie te bewaren, onderdrukt 
            het ontstaan van productieve, ideologische conflicten.
        </ContentCard>
        <ContentCard 
            id="3" title="Gebrek aan Betrokkenheid" 
            class="col-span-1 sm:col-span-1 lg:col-span-2">
            Het gebrek aan duidelijkheid of buy-in verhindert teamleden 
            om beslissingen te nemen waar ze zich aan houden.
        </ContentCard>
        <ContentCard 
            id="4" title="Aansprakelijkheid Vermijden" 
            class="col-span-1 sm:col-span-1 lg:col-span-3">
            De behoefte om interpersoonlijk ongemak te vermijden, weerhoudt 
            teamleden ervan elkaar aansprakelijkheid te houden voor hun 
            gedrag en prestaties.
        </ContentCard>
        <ContentCard 
            id="5" title="Geen Aandacht voor de Resultaten" 
            class="col-span-1 sm:col-span-2 lg:col-span-3">
            Het nastreven van individuele doelen en persoonlijke status 
            vermindert de focus op het collectieve succes.
        </ContentCard>
    </ContentCardGrid>
</IntroSection>


<IndepthSection title={pageData.title.nl}>
    <span slot="title">Teamfrustraties Overwinnen</span>
    <Accordeon bind:active>
        <AccordeonItem id={1} title="1. De Frustraties Aanpakken" titleSmaller>
            <List>
                <P large>
                    Om je team te verbeteren en het disfunctioneren waarmee je wordt 
                    geconfronteerd beter te begrijpen, stel je jezelf deze eenvoudige vragen:
                </P>
                <ListItem large>Geven teamleden openlijk en gemakkelijk hun mening?</ListItem>
                <ListItem large>Zijn teamvergaderingen boeiend en productief?</ListItem>
                <ListItem large>Komt het team snel tot beslissingen en voorkomt het dat het vastloopt door consensus?</ListItem>
                <ListItem large>Confronteren teamleden elkaar over hun tekortkomingen?</ListItem>
                <ListItem large>Offeren teamleden hun eigen belangen op voor het welzijn van het team?</ListItem>
            </List>
            <P>
                Hoewel geen enkel team perfect is en zelfs de beste teams soms worstelen 
                met een of meer van deze problemen, werken de beste organisaties er constant 
                aan om ervoor te zorgen dat hun antwoorden ‘ja’ zijn.<br/>
                Als je veel van deze vragen met ‘nee’ hebt beantwoord, heeft jouw team 
                wellicht wat werk nodig.<br/>
                <br/>
                De eerste stap om politiek en onduidelijkheid binnen jouw team te verminderen, 
                is begrijpen dat er vijf frustraties zijn en dat de frustraties die van 
                toepassing zijn, één voor één moeten worden aangepakt.
            </P>
        </AccordeonItem>
        <AccordeonItem id={2} title="2. De Frustraties" titleSmaller>
            <P large>
                Bekijk de <strong>frustraties die gebonden zijn aan de 5 lagen</strong>, en klik erop 
                om nog is te zien wat de laag precies inhoudt.<br/><br/>
            </P>
            <ContentCardGrid>
                <ContentFlipper 
                    height="min-h-[250px] sm:min-h-[320px] md:min-h-[280px] lg:min-h-[340px] xl:min-h-[300px] 2xl:min-h-[280px]"
                    id="1" title="Gebrek aan Vertrouwen"
                    class="col-span-1 sm:col-span-1 lg:col-span-2">
                    <P large slot="front">
                        Dit gebeurt wanneer teamleden terughoudend zijn om zich kwetsbaar op te 
                        stellen tegenover elkaar en niet bereid zijn hun fouten, zwakheden of 
                        behoeften toe te geven. Zonder een bepaald comfortniveau onder de 
                        teamleden is een basis van vertrouwen onmogelijk.
                    </P>
                    <P large slot="back">
                        De angst om kwetsbaar te zijn bij teamleden verhindert 
                        dat er vertrouwen wordt opgebouwd binnen het team.
                    </P>
                </ContentFlipper>
                <ContentFlipper 
                    height="min-h-[300px] sm:min-h-[400px] md:min-h-[340px]  lg:min-h-[420px] xl:min-h-[350px] 2xl:min-h-[300px]"
                    id="2" title="Angst voor Conflicten"
                    class="col-span-1 sm:col-span-1 lg:col-span-2">
                    <P large slot="front">
                        Teams die geen vertrouwen hebben, zijn niet in staat om 
                        ongefilterd en gepassioneerd te discussiëren over 
                        belangrijke kwesties, waardoor situaties ontstaan waarin 
                        teamconflicten gemakkelijk kunnen veranderen in verhulde 
                        discussies en achterklap. In een werkomgeving waar teamleden 
                        hun mening niet openlijk uiten, worden slechte beslissingen 
                        genomen.
                    </P>
                    <P large slot="back">
                        De wens om kunstmatige harmonie te bewaren, onderdrukt het 
                        ontstaan van productieve, ideologische conflicten.
                    </P>
                </ContentFlipper>
                <ContentFlipper 
                    height="min-h-[260px] sm:min-h-[300px] md:min-h-[280px] xl:min-h-[300px] 2xl:min-h-[280px]"
                    id="3" title="Gebrek aan Betrokkenheid"
                    class="col-span-1 sm:col-span-1 lg:col-span-2">
                    <P large slot="front">
                        Zonder conflicten is het moeilijk voor teamleden om zich 
                        aan de beslissingen te houden, waardoor een omgeving ontstaat 
                        waarin dubbelzinnigheid heerst. Gebrek aan richting en 
                        betrokkenheid kan werknemers, met name topmedewerkers, 
                        misnoegd maken.
                    </P>
                    <P large slot="back">
                        Het gebrek aan duidelijkheid of buy-in verhindert teamleden 
                        om beslissingen te nemen waar ze zich aan houden.
                    </P>
                </ContentFlipper>
                <ContentFlipper 
                    height="min-h-[260px] md:min-h-[280px] xl:min-h-[220px]"
                    id="4" title="Aansprakelijkheid Vermijden"
                    class="col-span-1 sm:col-span-1 lg:col-span-3">
                    <P large slot="front">
                        Wanneer teams geen duidelijk actieplan hebben, aarzelen 
                        zelfs de meest gefocuste en gedreven individuen om hun 
                        collega’s te bellen over activiteiten en gedragingen die 
                        contraproductief kunnen lijken voor het algemene welzijn 
                        van het team.
                    </P>
                    <P large slot="back">
                        De behoefte om interpersoonlijk ongemak te vermijden, 
                        weerhoudt teamleden ervan elkaar aansprakelijkheid te houden 
                        voor hun gedrag en prestaties.
                    </P>
                </ContentFlipper>
                <ContentFlipper
                    height="min-h-[280px] md:min-h-[220px] xl:min-h-[260px] 2xl:min-h-[230px]"
                    id="5" title="Geen Aandacht voor de Resultaten"
                    class="col-span-1 sm:col-span-2 lg:col-span-3">
                    <P large slot="front">
                        Teamleden hebben van nature de neiging om hun eigen behoeften 
                        (ego, loopbaanontwikkeling, erkenning, enz.) boven de collectieve 
                        doelen van het team te stellen wanneer individuen niet 
                        aansprakelijk worden gehouden. Als een team de prestatiegerichtheid 
                        uit het oog heeft verloren, lijdt het hele bedrijf er uiteindelijk onder.
                    </P>
                    <P large slot="back">
                        Het nastreven van individuele doelen en persoonlijke status 
                        vermindert de focus op het collectieve succes.
                    </P>
                </ContentFlipper>
            </ContentCardGrid>
        </AccordeonItem>
        <AccordeonItem id={3} title="3. De Beloningen" titleSmaller>
            <P large>
                Het streven naar een functioneel, samenhangend team is een van de weinige 
                resterende concurrentievoordelen voor organisaties die zich op een krachtige 
                manier willen onderscheiden.<br/>
                Functionele teams vermijden het om tijd te verspillen door over de verkeerde 
                kwesties te praten en keer op keer terug te komen op dezelfde onderwerpen 
                vanwege een gebrek aan buy-in. Functionele teams nemen ook kwalitatief betere 
                beslissingen en bereiken meer in minder tijd en met minder afleiding en 
                frustratie. Bovendien verlaten “A”-spelers zelden organisaties waar ze deel 
                uitmaken van een samenhangend team.<br/>
                <br/>
                Succesvol teamwerk gaat niet over het beheersen van subtiele, gesofisticeerde 
                theorieën, maar over het omarmen van gezond verstand met een ongebruikelijk 
                niveau van discipline en volharding.<br/>
                Ironisch genoeg zijn teams succesvol omdat ze buitengewoon menselijk zijn. 
                Door de onvolkomenheden van hun menselijkheid te erkennen, overwinnen leden 
                van functionele teams de natuurlijke neigingen die teamwerk zo moeilijk maken.
            </P>
        </AccordeonItem>
    </Accordeon>
</IndepthSection>