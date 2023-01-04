<script lang="ts">
    import { Title, P } from '$comp/core';
    import { Accordeon, AccordeonItem} from '$comp/content';
    
    // Import utils and stores
    import { breakpoints, currentHero, currentTitle } from '$src/lib/stores';
    
    //  Import data
	import List from '$src/lib/components/Core/List/List.svelte';
	import ListItem from '$src/lib/components/Core/List/ListItem.svelte';
	import IntroSection from '../../IntroSection.svelte';
    export let data;
    const pageData = data.data[0];

    let heroImgSrc = `${pageData.hero_img.folder}/${pageData.hero_img.name}.${pageData.hero_img.type}`
    $currentHero = heroImgSrc;
    $currentTitle = pageData.title.nl;

    // Set 'active' variable for accordeon component
	let active:any = null;

    // innerWidth stores current screen width
    let innerWidth:number;
    $: innerWidth
    // Image ratio depends on screen width
    let ratio = '7:5'
    $: if (innerWidth < $breakpoints.xs) { ratio = "2:1"; }  
        else if (innerWidth < $breakpoints.sm) { ratio = "7:3"; } 
        else if (innerWidth < $breakpoints.md) { ratio = "2:1"; } 
        else if (innerWidth < $breakpoints.lg) { ratio = "5:2"; } 
        else if (innerWidth < $breakpoints.xl) { ratio = "12:11"; } 
        else if (innerWidth < $breakpoints.xxl) { ratio = "8:6"; }
        else { ratio = "7:5"}
</script>

<svelte:window bind:innerWidth />


<IntroSection title={pageData.title.nl} imgSrc={heroImgSrc}>
    <div class="" slot="title">
        <Title type="h2" small>
            Het Model - {pageData.title.nl}
        </Title>
        <Title type="subheader">by Patrick Lencioni</Title>
    </div>

    <Accordeon class="
                { active == null 
                    ? 'w-full lg:w-7/12' 
                    : 'w-full lg:w-3/4' }" 
        bind:active>
        <AccordeonItem id={1} 
            title='1. Een Samenhangend Leiderschapsteam Opbouwen' titleSmallest>
            <P large>
                De eerste stap is ervoor zorgen dat de leiders van de organisatie zich 
                op een functionele, samenhangende manier gedragen.<br/>
                Als de mensen die verantwoordelijk zijn voor het runnen van een 
                organisatie – of dat nu een bedrijf is, een afdeling binnen dat bedrijf, 
                een startende onderneming, een restaurant, een school of een kerk – zich 
                disfunctioneel gedragen, dan zal dat disfunctioneren zich trapsgewijs 
                voortzetten in de rest van de organisatie en een rem zetten op een 
                gezonde organisatie.<br/>
                En ja, er zijn concrete stappen die een leiderschapsteam kan nemen om dit 
                te voorkomen.
            </P><br/>
            <List>
                <P large>
                    Samenhangende teams elimineren politiek en vergroten hun 
                    effectiviteit door het volgende te doen:
                </P>
                <ListItem large>Open zijn en vertrouwen opbouwen</ListItem>
                <ListItem large>Constructieve ideologische conflicten aangaan</ListItem>
                <ListItem large>Zich inzetten voor duidelijke beslissingen</ListItem>
                <ListItem large>Elkaar verantwoordelijk houden voor gedrag en prestaties</ListItem>
                <ListItem large>Focussen op collectieve resultaten</ListItem>
            </List>
        </AccordeonItem>
        <AccordeonItem id={2} 
            title='2. Helderheid Scheppen' titleSmallest>
            <P large>
                De tweede stap om een gezonde organisatie op te bouwen, 
                is ervoor zorgen dat de leden van dat leiderschapsteam 
                intellectueel op één lijn liggen rond zes eenvoudige 
                maar cruciale vragen.<br/>
                Leiders moeten duidelijk zijn over onderwerpen als waarom 
                de organisatie bestaat en wat de belangrijkste prioriteit 
                is voor de komende maanden.<br/>
                Leiders moeten eventuele hiaten tussen hen wegwerken, zodat 
                mensen een, twee of drie niveaus lager volledige duidelijkheid 
                hebben over wat ze moeten doen om de organisatie succesvol te maken.
            </P><br/>
            <List>
                <P large>
                    Gezonde organisaties verkleinen de kans op verwarring door 
                    het volgende te verduidelijken:
                </P>
                <ListItem large>Waarom bestaan we?</ListItem>
                <ListItem large>Hoe gedragen we ons?</ListItem>
                <ListItem large>Wat doen we?</ListItem>
                <ListItem large>Hoe zullen we slagen?</ListItem>
                <ListItem large>Wat is op dit moment het belangrijkste?</ListItem>
                <ListItem large>Wie moet wat doen?</ListItem>
            </List>
        </AccordeonItem>
        <AccordeonItem id={3} 
            title='3. De Helderheid Versterken' titleSmallest>
            <P large>
                Tot slot moeten leiders, naast overcommunicatie, ervoor zorgen 
                dat de antwoorden op de zes cruciale vragen herhaaldelijk worden 
                benadrukt met behulp van eenvoudige menselijke systemen.<br/>
                Dat betekent dat elk proces waarbij mensen betrokken zijn, van 
                aanwerving en ontslag tot prestatiebeheer en besluitvorming, op 
                een aangepaste manier is ontworpen om opzettelijk het unieke 
                karakter van de organisatie te ondersteunen en te benadrukken.<br/>
                <br/>
                Naast deze vier stappen is het essentieel dat een gezonde 
                organisatie beter wordt in die ene activiteit die ten grondslag 
                ligt aan alles wat ze doet: vergaderingen. Ja, vergaderingen.<br/>
                Zonder een paar eenvoudige maar fundamentele wijzigingen aan te 
                brengen in de manier waarop vergaderingen plaatsvinden, zal een 
                gezonde organisatie moeite hebben om datgene te behouden waaraan 
                ze hard heeft gewerkt om het op te bouwen.<br/>
                <br/>
                Kan een gezonde organisatie falen?<br/>
                Ja. Maar dat gebeurt bijna nooit. Echt waar. Wanneer politiek, 
                ambiguïteit, disfunctioneren en onduidelijkheid tot een minimum 
                worden beperkt, worden mensen geïnspireerd om producten te ontwerpen, 
                klanten te bedienen, problemen op te lossen en elkaar te helpen op 
                een manier waar ongezonde organisaties alleen maar van kunnen dromen.<br/>
                <br/>
                Gezonde organisaties herstellen van tegenslagen, trekken de beste 
                mensen aan, stoten de anderen af en creëren kansen die ze niet hadden 
                kunnen verwachten.<br/>
                Aan het einde van de dag, aan het einde van het kwartaal, zijn 
                werknemers gelukkiger, is het resultaat sterker en zijn leidinggevenden 
                gerust omdat ze weten dat ze hun belangrijkste verantwoordelijkheid 
                hebben vervuld: het creëren van een succesvolle omgeving.
            </P><br/>
            <List>
                <P large>
                    Organisaties verstevigen hun gezondheid door te zorgen voor 
                    consistentie in …
                </P>
                <ListItem large>Het aanwerven</ListItem>
                <ListItem large>Beheren van de prestaties</ListItem>
                <ListItem large>Beloningen en erkenning</ListItem>
                <ListItem large>Ontslag van de werknemer</ListItem>
                <ListItem large>Vergaderingen</ListItem>
            </List>
        </AccordeonItem>
        <AccordeonItem id={4} 
            title='4. Helderheid over Communiceren' titleSmallest>
            <P large>
                Pas nadat deze eerste twee stappen aan de gang zijn 
                (gedrags- en intellectuele afstemming), kan een organisatie de 
                derde stap ondernemen: de antwoorden op de zes vragen overcommuniceren. <br/>
                Leiders van een gezonde organisatie herhalen zich constant – en ik 
                bedoel constant – en benadrukken wat waar en belangrijk is. Ze maken 
                altijd de fout om te veel te zeggen in plaats van te weinig.<br/>
                Alleen al deze kwaliteit onderscheidt leiders van gezonde organisaties 
                van anderen.
            </P>
            <List>
                <P large>
                    Gezonde organisaties brengen hun werknemers op één lijn rond 
                    organisatorische duidelijkheid door kernboodschappen te communiceren via…
                </P>
                <ListItem large>Herhaling</ListItem>
                <ListItem large>Eenvoud</ListItem>
                <ListItem large>Meerdere mediums</ListItem>
                <ListItem large>Trapsgewijze berichten</ListItem>
            </List>
        </AccordeonItem>
    </Accordeon>
</IntroSection>
