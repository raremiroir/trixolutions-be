<script>
   // Import Components
   import Button           from "$comp/Core/Button/Button.svelte";
	import Main             from "$comp/Base/Wrapper/Main.svelte";
	import SectionWrapper   from "$comp/Base/Wrapper/SectionWrapper.svelte";
	import Card             from "$comp/Common/Card/Card.svelte";
	import Link             from "$comp/Common/Link/Link.svelte";
	import Title            from "$comp/Common/Text/Title.svelte";
	import P                from "$comp/Common/Text/P.svelte";
	import Hero             from "$comp/Hero/Hero.svelte";
	import Slide            from "$comp/Other/Slider/Slide.svelte";

   // Import Images
   import KVGT400    from '$img/stock/Kracht-Van-Gezonde-Teams_400w_Stock.webp'
   import KVGT600    from '$img/stock/Kracht-Van-Gezonde-Teams_600w_Stock.webp'
   import KVGT800    from '$img/stock/Kracht-Van-Gezonde-Teams_800w_Stock.webp'
   import KVGT1080   from '$img/stock/Kracht-Van-Gezonde-Teams_1080w_Stock.webp'
   
   import BV2400     from '$img/stock/Beslissende-Voorsprong_2_400w_Stock.webp'
   import BV2600     from '$img/stock/Beslissende-Voorsprong_2_600w_Stock.webp'
   import BV2800     from '$img/stock/Beslissende-Voorsprong_2_800w_Stock.webp'
   import BV21080    from '$img/stock/Beslissende-Voorsprong_2_1080w_Stock.webp'

   import WG400      from '$img/stock/Working-Genius_400w_Stock.webp'
   import WG600      from '$img/stock/Working-Genius_600w_Stock.webp'
   import WG800      from '$img/stock/Working-Genius_800w_Stock.webp'
   import WG1080     from '$img/stock/Working-Genius_1080w_Stock.webp'

   let heroHeight="h-180"
</script>

<header>
   <Hero slider>
      <Slide hero 
         imgAlt="Trixolutions Lencioni - De Kracht van Gezonde Teams" height={heroHeight}
         img400={KVGT400} img600={KVGT600} img800={KVGT800} img1080={KVGT1080}>
         <span slot="title">De Kracht van Gezonde Teams</span>
         <div class="flex flex-col gap-2">
            <Title type='subheader' color="text-gray-50">
              Opleiding in Teamcoaching
            </Title>
            <P thickness="font-semibold" color="text-gray-200" large>
               De kracht van een gezond team zit voornamelijk in de vaardigheid 
               van teamleden om vertrouwen op te bouwen, met elkaar respectvolle 
               conflicten te kunnen hebben, betrokkenheid bij het team te voelen, 
               elkaar aansprakelijk te durven stellen en resultaatgericht te kunnen werken.
            </P>
            <P thickness="font-bold" color="text-gray-50" large>
               Nieuwe data!! In samenwerking met de Table Group van Lencioni bundelen 
               we al onze Lencioni-expertise rond het succes model “De 5 frustraties 
               van teamwork”, in een tweedaagse Masterclass Coach-the-Coach opleiding.<br/> 
               Zie hier voor de data!
            </P>
         </div>
         <div class="flex flex-row gap-4">
            <Button size="lg" color="transparent" outlined>Meer Info</Button>
            <Button size="lg" color="primary">Over Trixolutions</Button>
         </div>
      </Slide>

      <Slide hero 
         titleType='fake-h1' titleSmall imgPos="object-top" height={heroHeight}
         imgAlt="Trixolutions Lencioni - De Beslissende Voorsprong"
         img400={BV2400} img600={BV2600} img800={BV2800} img1080={BV21080}>
         <span slot="title">Neem als Organisatie of Team de ❛Beslissende Voorsprong❜ van Patrick Lencioni!</span>
         <div class="flex flex-col gap-2">
            <Title type='subheader' color="text-gray-50">
              Opleiding in Teamcoaching
            </Title>
            <P thickness="font-semibold" color="text-gray-200" large>
               ❛De grootste voorsprong en competitief voordeel die een bedrijf kan nemen,
               is het creëren en hebben van een gezonde organisatie- en teamcultuur.❜<br/>
               ~ Patrick Lencioni
            </P>
         </div>
         <div class="flex flex-row gap-4">
            <Button size="lg" color="transparent" outlined>Meer Info</Button>
         </div>
      </Slide>

      <Slide hero 
         titleType='fake-h1' imgPos="object-top" height={heroHeight}
         imgAlt="Trixolutions Lencioni - The 6 Types of Working Genius"
         img400={WG400} img600={WG600} img800={WG800} img1080={WG1080}>
         <span slot="title">The 6 Types of Working Genius</span>
         <div class="flex flex-col gap-2">
            <Title type='subheader' color="text-gray-50">
              Het Laatste Succes Assessment van Patrick Lencioni!
            </Title>
            <P thickness="font-semibold" color="text-gray-200" large>
               ❛Als je succesvol, tevreden en voldaan wil zijn als persoon, 
               teamlid of teamleader, moet je jouw energiebronnen en talenten
               aanspreken. Wat natuurlijk niet lukt als je die niet kent.❜
            </P>
         </div>
         <div class="flex flex-row gap-4">
            <Button size="lg" color="transparent" outlined>Meer Info</Button>
         </div>
      </Slide>
      
   </Hero>
</header>

<Main noMargin>
   <SectionWrapper name="digitale-opleidingstoppers">
      <Title slot="title" type="h2">Digitale Opleidingstoppers!</Title>
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
         
         <Card link="/" equalHeight titleSmaller titleType="h3">
            <span slot="title">Train-the-Virtual-Trainer</span>
            Op een attractieve en interactieve manier deelnemers betrekken en engageren in digitale opleidingen, 
            workshops en meetings is een nieuwe belangrijke vaardigheid geworden.<br/><br/>
            In onze Trixolutions Virtual Classroom begeleiden we onze deelnemers in de knepen van het vak! 
            <Link underlineOnHover
               slot="append-inner" href="/"
               klass='my-2 font-bold'>
               Meer Info
            </Link>
         </Card>
         
         <Card link="/" equalHeight titleSmaller titleType="h3">
            <span slot="title">De 5 Frustraties van Virtuele Teams</span>
            In het begin gaat dat digitaal samenwerken goed…. Iedereen op Zoom en MS TEAMS (Skype). 
            Van de virtuele koffiepauzes tot aan de virtuele apero’s probeert elk team in de beginperiode zijn plan te trekken.
            Maar dan komt het besef dat het virtueel samenwerken toch niet vanzelf gaat, het loopt anders, 
            moeilijker en de eerste barsten beginnen te ontstaan…
            <Link underlineOnHover
               slot="append-inner" href="/"
               klass='my-2 font-bold'>
               Meer Info
            </Link>
         </Card>
         
         <Card link="/" equalHeight titleSmaller titleType="h3">
            <span slot="title">Hybride Werken</span>
            Is jouw organisatie ook druk bezig met een post-corona werkbeleid te schrijven en te organiseren? 
            En is er 1 woord dat terugkomt: ‘hybride’? <br/><br/>
            Het nieuwe hybride werken vraagt om een vernieuwde aanpak, vaardigheden en bouwstenen. 
            Dit programma van 9 interactieve sessies bekwaamt je als werknemer, teamlid, 
            teamlead of manager in de vaardigheden en bouwstenen die je nodig hebt om succesvol te zijn in 
            de toekomst van het ‘nieuwe Hybride werken’.
            <Link underlineOnHover
               slot="append-inner" href="/"
               klass='my-2 font-bold bottom-0'>
               Meer Info
            </Link>
         </Card>
         
      </div>
   </SectionWrapper>
</Main>