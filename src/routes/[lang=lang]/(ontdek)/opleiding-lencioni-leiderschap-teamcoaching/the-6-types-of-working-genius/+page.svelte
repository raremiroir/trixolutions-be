<script lang="ts">
    import { P, Title, List, ListItem } from '$comp/core';
	import IntroSection from '../../IntroSection.svelte';
    
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

<IntroSection title={pageData.title.nl} imgSrc={heroImgSrc} imgMode='contain' imgClass="bg-primary">
    <Title slot="title" type="h2" small>
        De 6 Intrinsieke Werkwaarden
    </Title>

    <List>
        <P large>
            Teveel mensen in deze wereld werken tegen hun zin omdat ze hun persoonlijke 
            en innerlijke vermogens niet kennen. Hierdoor doen ze niet het werk dat hen 
            energie en plezier geeft en belanden ze in jobs en projecten die hun vermoeien 
            en demotiveren. Eigenlijk is dit een regelrechte tragedie om 2 aspecten:<br/>
        </P><br/>
        <ListItem large>
            <b>Ten eerste:</b> het zorgt ervoor dat mensen hun zelfvertrouwen en 
            plezier in het leven verliezen, wat natuurlijk voor hen een ramp is, 
            maar ook voor hun familie en vrienden. En eigenlijk voor de maatschappij 
            in zijn geheel. Dit alleen al is eigenlijk verschrikkelijk.
        </ListItem>
        <ListItem large>
            <b>Ten tweede:</b> organisaties en teams die niet inhaken op die persoonlijke 
            intrinsieke vermogens van hun teamleden zullen nooit in de buurt komen om 
            het volledige potentieel van die medewerkers te laten ontplooien en bereiken. 
            Ze zullen blijven twijfelen over het niet bereiken van doelen, effectiviteit, 
            betrokkenheid en werkplezier van die mensen.
        </ListItem>
    </List><br/>
    <P large>
        En wat eigenlijk het rampplaatje volledig maakt is dat eigenlijk dit alles te vermijden 
        is …<br/>
        <br/>
        De oplossing is dat iedereen, werknemers, managers, studenten, … hun <strong>intrinsieke 
        werkwaarden</strong> ontdekken alsook de vermogens die ze niet natuurlijk bezitten en derhalve 
        dus altijd energie zullen kosten. Om op die manier aan te haken met juiste “Working Genius”!
    </P>
</IntroSection>