<script lang="ts">
    // Define current page slug
    import { currentPageMap } from "$lib/stores";
    $currentPageMap = [
        {locale: 'en', slug: 'meetings-are-deadly'},
        {locale: 'fr', slug: 'reunions-tuent'},
        {locale: 'nl', slug: 'vergaderingen-zijn-dodelijk'}
    ];

    // Import components
    import { Title, Text, Accordeon, AccordeonItem } from '$comp';
    import IntroSection from '../../IntroSection.svelte';
	import IndepthSection from '../../IndepthSection.svelte';
	import MeetingContentCard from './MeetingContentCard.svelte';
    
    //  Import data
    export let data;
    const pageData = data.data[0];

    let heroImgSrc = `${pageData.hero_img.folder}/${pageData.hero_img.name}.${pageData.hero_img.type}`

    // Set 'active' variable for accordeon component
	let active:any = null;

</script>

<IntroSection title={pageData.title.nl} imgSrc={heroImgSrc} imgMode='cover'>
    <Title type="h2" small slot="title">
        {pageData.title.nl}
    </Title>

    <Text>
        Vergaderingen horen bij ons werk, maar ze lijken vaak niet 
        veel op te leveren.<br/>
        Sterker nog, ze gelden als regelrechte energievreters. Dat 
        komt omdat we op de verkeerde manier vergaderen.<br/>
        <br/>
        In dit model met bijhorende online tool leren we je als 
        teamleader of coach organisaties en teams begeleiden in hun 
        meetingcultuur.<br/>
        Specifiek werken we op hoe je moeilijke meetings in effectieve 
        en productieve meetings kan omturnen aan de hand van de 4 types 
        van meetings.
    </Text>
</IntroSection>

<IndepthSection title={pageData.title.nl}>
    <span slot="title">
        Vergaderen is Dodelijk - 
        <span class="italic font-semibold">Maar niet met deze 4 Types van Meetings</span>
    </span>
    <Accordeon bind:active>
        <Text>
            Met deze 4 types van meetings maak je je vergaderingen niet alleen 
            productiever, maar ook efficiënter en aangenamer:
        </Text>

        <AccordeonItem id={1} title="1. Dagelijkse Check-In" titleSmaller>
            <MeetingContentCard>
                De <strong>"Daily Check-in"</strong> is een agenda-georiënteerde, administratieve 
                meeting die niet langer zou mogen duren dan vijf of tien minuten.<br/>
                Het doel van deze meeting is simpelweg om teamleden op gelijke 
                golflengten te houden en te zorgen voor een dagelijks forum waar 
                activiteitsupdates en planning besproken kunnen worden.
                <span slot="timespan">5 - 10 minuten</span>
                <span slot="target">
                    <b>Administratief:</b> <br/>
                    Hou informele conversaties met teamleden, rond relevante administratieve items.
                </span>
                <span slot="key-1">Zit niet neer</span>
                <span slot="key-2">Hou het administratief</span>
                <span slot="key-3">Zeg niet af als sommige mensen er niet zullen geraken</span>
            </MeetingContentCard>
        </AccordeonItem>

        <AccordeonItem id={2} title="2. Tactische Medewerkers" titleSmaller>
            <MeetingContentCard>
                De <strong>“Tactical Staff”</strong> is wat de meeste mensen 
                kennen als medewerkersmeetings.<br/>
                <br/>
                Ze zouden ongeveer een uur lang moeten zijn, met een speling 
                van 20 minuten, en zouden moeten focussen op de discussie rond 
                en oplossing van problemen die doelen in de nabije toekomst affecteren.
                <span slot="timespan">45 - 90 minuten</span>
                <span slot="target">
                    <b>Tactisch:</b> <br/>
                    Scorekaart herbekijken en oplossen van kritieke tactische obstakels en problemen.
                </span>

                <span slot="key-1">Plan nog niets, tot na de eerste rapportering</span>
                <span slot="key-2">Stel strategische discussies uit</span>
            </MeetingContentCard>
        </AccordeonItem>

        <AccordeonItem id={3} title="3. Adhoc Actueel" titleSmaller>
            <MeetingContentCard>
                De “Adhoc Topical” is de meest interessante soort meeting voor 
                teamleiders en de belangrijkste indicator van de strategische 
                bekwaamheid van een bedrijf.<br/>
                Het is dé adequate plek voor grote topics; degene die op lange 
                termijn een impact hebben op het bedrijf. Deze topics hebben 
                meer tijd en een andere setting nodig.<br/>
                <br/>
                Een setting waarin deelnemers kunnen brainstormen, debatteren, 
                ideeën presenteren en met elkaar kunnen overleggen om zo de 
                meest optimale lange termijnsoplossing te kunnen vinden.<br/>
                Elke strategische meeting zou niet meer dan twee onderwerpen 
                mogen bevatten. Aan elk onderdeel zou vervolgens ongeveer twee 
                uur moeten besteedt worden.

                <span slot="timespan">2 - 4 uur</span>
                <span slot="target">
                    <b>Strategisch:</b> <br/>
                    Discussieer, analyseer, brainstorm en maak een beslissing rond een 
                    kritisch probleem dat op lange termijn een grote impact zal hebben op succes.
                </span>

                <span slot="key-1">Focus op een specifiek onderwerp</span>
                <span slot="key-2">Bereid je voor</span>
                <span slot="key-3">Ga volledig op in het conflict</span>
            </MeetingContentCard>
        </AccordeonItem>

        <AccordeonItem id={4} title="4. Off-Site Review (Elk Kwartaal)" titleSmaller>
            <MeetingContentCard>
                De “Off-Site Review” gebeurt elk kwartaal en is voor teamleden 
                een opportuniteit om afstand te nemen van het bedrijf, letterlijk 
                en figuurlijk, om allerlei items opnieuw te kunnen beoordelen.<br/>
                <br/>
                Deze items includeren de interpersoonlijke prestaties van het team, 
                de strategie van het bedrijf, de prestaties van personeel van zowel 
                hoge als lage rang, motivatie, competitieve gevaren en trends in de sector.<br/>
                <br/>
                De duur van deze reviews kan variëren van het betere deel van een dag 
                tot twee volle dagen elk kwartaal.
            
                <span slot="timespan">1 - 2 dagen</span>
                <span slot="target">
                    <b>Ontwikkelend:</b> <br/>
                    Speelboek (teamontwikkeling, dynamiek en helderheid), competitief 
                    landschap, trends in de sector en sleutelpersoneel herbekijken.
                </span>

                <span slot="key-1">Ga naar buiten</span>
                <span slot="key-2">Focus op werk, limiteer sociale activiteiten</span>
                <span slot="key-3">Overstructureer of overbelast de planning niet</span>
            </MeetingContentCard>
        </AccordeonItem>
        
    </Accordeon>
</IndepthSection>