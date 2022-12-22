<script>
   // Import Components
	import SectionWrapper from "$src/lib/components/Base/Wrapper/SectionWrapper.svelte";
	import Card from "$src/lib/components/Common/Card/Card.svelte";
   import Button from "$src/lib/components/Common/Button/Button.svelte";
	import Link from "$src/lib/components/Common/Link/Link.svelte";
	import Hero from "$src/lib/components/Hero/Hero.svelte";
	import Title from "$src/lib/components/Common/Text/Title.svelte";
	import Main from "$src/lib/components/Base/Wrapper/Main.svelte";
	import P from "$src/lib/components/Common/Text/P.svelte";

   // Import Images

</script>

<header>
   <Hero imgAlt="De Kracht van Gezonde Teams">
      <div class="flex flex-col gap-2">
         <Title type='subheader' color="text-gray-50">
           Opleiding in Teamcoaching
         </Title>
         <P thickness="font-semibold" color="text-gray-200">
            De kracht van een gezond team zit voornamelijk in de vaardigheid 
            van teamleden om vertrouwen op te bouwen, met elkaar respectvolle 
            conflicten te kunnen hebben, betrokkenheid bij het team te voelen, 
            elkaar aansprakelijk te durven stellen en resultaatgericht te kunnen werken.
         </P>
         <P thickness="font-bold" color="text-gray-50">
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
   </Hero>
</header>

<Main noMargin>
   <SectionWrapper name="digitale-opleidingstoppers">
      <Title slot="title" type="h2">Digitale Opleidingstoppers!</Title>
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
         
         <Card title="Train-the-Virtual-Trainer" link="/" equalHeight>
            Op een attractieve en interactieve manier deelnemers betrekken en engageren in digitale opleidingen, 
            workshops en meetings is een nieuwe belangrijke vaardigheid geworden.<br/><br/>
            In onze Trixolutions Virtual Classroom begeleiden we onze deelnemers in de knepen van het vak! 
            <Link underlineOnHover
               slot="append-inner" href="/"
               klass='my-2 font-bold'>
               Meer Info
            </Link>
         </Card>
         
         <Card title="De 5 Frustraties van Virtuele Teams" link="/" equalHeight>
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
         
         <Card title="Hybride Werken" link="/" equalHeight>
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