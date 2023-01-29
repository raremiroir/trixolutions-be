<script lang="ts">
    // Define current page slug
    import { currentPageMap } from "$lib/stores";
    $currentPageMap = [
        {locale: 'en', slug: 'ideal-team-player'},
        {locale: 'fr', slug: 'coequipier-ideal'},
        {locale: 'nl', slug: 'ideale-teamplayer'}
    ];
    // Import components
    import { Title, Text, Accordeon, AccordeonItem, Tab, TabList, TabPanel, Tabs } from '$comp';
	import IntroSection from '../../IntroSection.svelte';
	import IndepthSection from '../../IndepthSection.svelte';
    
    //  Import data
    export let data;
    const pageData = data.data[0];

    let heroImgSrc = `${pageData.hero_img.folder}/${pageData.hero_img.name}.${pageData.hero_img.type}`
    // Set 'active' variable for accordeon component
	let active:any = null;

</script>

<IntroSection title={pageData.title.nl} imgSrc={heroImgSrc} imgMode='cover'>
    <div class="" slot="title">
        <Title type="h2" small>
            Het Model - {pageData.title.nl}
        </Title>
        <Title type="subheader">by Patrick Lencioni</Title>
    </div>

    <Text>
        Met voldoende tijd, geduld en aandacht van een goede manager kan 
        bijna iedereen leren een teamspeler te worden. Daar ben ik van 
        overtuigd.<br/>
        <br/>
        Sommige mensen zijn wel beter in teamwork dan anderen. Dit zijn 
        mensen die onmiddellijk waarde toevoegen in een teamomgeving en 
        veel minder coaching en management nodig hebben om op een zinvolle 
        manier bij te dragen.<br/>
        <br/>
        Er zijn dus twee logische vragen. Hoe zien deze mensen eruit? 
        En hoe vinden we ze? Het blijkt dat ze drie kenmerken gemeen hebben: 
        ze zijn bescheiden, hongerig en slim.
    </Text>

    <Text slot="append" class="w-full md:w-4/5 lg:w-2/3 mx-auto">
        Alvorens ik elk van deze kenmerken uitleg, wil ik eerst uitleggen 
        hoe deze theorie tot stand is gekomen. <br/>
        Zoals zoveel van mijn ideeën, kwam dit naar boven als resultaat van 
        mijn werk met klanten in de afgelopen twintig jaar. <br/>
        Telkens wanneer ik met CEO’s en hun leiderschapsteams werkte om 
        kernwaarden te identificeren, werd 
        mij vaak gevraagd naar de waarden van mijn eigen bedrijf, The Table 
        Group. Wanneer we onze drie waarden onthulden, vroegen veel van onze 
        klanten of ze die waarden ook voor zichzelf konden overnemen.<br/>
        <br/>
        Natuurlijk zeiden we “nee” en legden we uit dat ze zelf concepten 
        moesten bedenken die hun unieke geschiedenis en cultuur weerspiegelden. 
        Wij waren een bedrijf dat gericht was op teamwerk en bekend stond om 
        The Five Dysfunctions of a Team, dus de waarden bescheiden, hongerig 
        en slim waren logisch voor ons. Wat we niet beseften, was dat onze 
        klanten, die bijna allemaal bezig waren met teamwork, aangetrokken 
        werden tot onze waarden omdat dat de bouwstenen waren van echte 
        teamspelers. Toen we dat eenmaal beseften, was het idee voor dit 
        boek geboren.
    </Text>
</IntroSection>

<IndepthSection title={pageData.title.nl}>
    <span slot="title">Hoe Herken je de Ideale Teamspeler</span>
    <Accordeon bind:active>
        <AccordeonItem id={1} title="De Drie Kenmerken" titleSmaller>
            <Title type="h4" smaller>
                De drie kenmerken lijken vrij eenvoudig, maar vereisen enige uitleg:
            </Title>
            <Tabs>
                <TabList>
                    <Tab>
                        Bescheiden
                    </Tab>
                    <Tab>
                        Hongerig
                    </Tab>
                    <Tab>
                        Emotioneel Intelligent
                    </Tab>
                </TabList>
                <TabPanel>
                    Het <em>eerste en belangrijkste kenmerk</em> van een ideale teamspeler 
                    is <strong>bescheidenheid</strong>.<br/>
                    Een bescheiden werknemer is iemand die zich meer <strong>bekommert om 
                    het succes van het team</strong> dan erkenning te krijgen voor zijn of 
                    haar bijdragen.<br/>
                    <br/>
                    Mensen die niet bescheiden zijn, mensen die onevenredig veel 
                    aandacht vragen, zijn gevaarlijk voor een team.<br/>
                    Bescheiden teamspelers zijn niet bang om de vaardigheden en 
                    talenten die ze in het team aanbrengen eerlijk te erkennen, 
                    maar <b>nooit op een trotse of opschepperige manier</b>.
                </TabPanel>
                <TabPanel>
                    Het <em>volgende kenmerk</em> van een ideale teamspeler is 
                    <strong>honger, </strong> de wens om <strong>hard te 
                    werken en alles te doen wat nodig is </strong> om het 
                    team te helpen slagen.<br/>
                    <br/>
                    Hongerige werknemers hoeven bijna nooit door een manager gepusht te 
                    worden om harder te werken, omdat ze 
                    <strong>gemotiveerd en ijverig </strong> zijn.<br/>
                    Ze bieden zich vrijwillig aan om hiaten op te vullen, <strong>meer 
                    verantwoordelijkheden</strong> op zich te nemen en zoeken gretig 
                    naar nieuwe manieren om bij te dragen aan het team.
                </TabPanel>
                <TabPanel>
                    Het <em>laatste kenmerk</em> van een teamspeler heeft niets met 
                    intelligentie te maken, maar wel met <strong>wijs omgaan met 
                    mensen.</strong><br/>
                    <br/>
                    Slimme werknemers begrijpen de nuances van teamdynamiek en 
                    weten hoe hun <strong>woorden en daden anderen 
                    beïnvloeden.</strong><br/>
                    Hun <strong>goed beoordelingsvermogen</strong> en intuïtie 
                    helpen hen om op de meest effectieve manier met anderen 
                    om te gaan.
                </TabPanel>
            </Tabs>
            <Text>
                Hoe eenvoudig deze drie concepten ook zijn, de sleutel tot dit alles is 
                <strong>de unieke combinatie van de drie kenmerken</strong> die iemand 
                tot een ideale teamspeler maken.<br/>
                Als zelfs maar één van deze eigenschappen ontbreekt, kunnen er 
                problemen ontstaan.<br/>
                <br/>
                Een bescheiden en hongerige werknemer die niet slim is met mensen kan 
                bijvoorbeeld veel bereiken, maar zal vaak een spoor van interpersoonlijke 
                vernieling achter zich laten.<br/>
                Een persoon die slim en bescheiden is, maar niet hongerig, zal teamleden 
                frustreren door alleen te doen wat nodig is en zal constant gevraagd worden 
                om meer te doen.<br/>
                <br/>
                Tot slot kan een teamlid dat hongerig en slim, maar echt niet bescheiden is, 
                een verwoestende impact hebben op een team.<br/>
                Dit type weet zich te profileren als een goedbedoelende collega, terwijl hij 
                vooral denkt aan zijn eigen behoeften. Tegen de tijd dat de teamleden dit 
                doorkrijgen, zijn mensen gemanipuleerd en getekend.<br/>
                <br/>
                <em>Hoe werf je ideale teamspelers aan?</em> Je moet vooral weten waar je op 
                moet letten en dat je op niet-traditionele manieren moet zoeken.<br/>
                <em>En hoe zit het met werknemers die al in het team zitten en een of meer 
                van de kenmerken missen?</em> Om hen te helpen verbeteren, moet je ervoor 
                zorgen dat ze de concepten begrijpen en weten waar ze tekortschieten.<br/>
                <br/>
                Dit eenvoudige model introduceren bij teams en hen toelaten zichzelf te 
                beoordelen, is al een goede stap naar verbetering.
            </Text>
        </AccordeonItem>
        <AccordeonItem id={2} title="Mooi Resultaat" titleSmaller>
            <Text>
                De impact van teamleden die waarde hechten aan en blijk geven van nederigheid, 
                honger en intelligentie, kan niet genoeg worden benadrukt. De meeste teams die 
                het moeilijk hebben, hebben niet zozeer een gebrek aan kennis of competenties, 
                maar hebben geen toegang tot die kennis en competenties vanwege disfunctioneel 
                gedrag. Een team met allemaal mensen die bescheiden, hongerig en slim zijn, zal 
                deze disfuncties snel en gemakkelijk overwinnen, waardoor ze meer gedaan kunnen 
                krijgen in minder tijd en met veel minder afleiding. Ik hoop dat deze aanpak 
                leiders zal helpen bij het aanwerven, herkennen en ontwikkelen van ideale 
                teamspelers in hun organisaties.
            </Text>
        </AccordeonItem>
    </Accordeon>
</IndepthSection>