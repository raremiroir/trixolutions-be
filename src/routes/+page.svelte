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
   
	import Navbar from "$src/lib/components/Core/Navbar/Navbar.svelte";
	import Footer from "$src/lib/components/Core/Footer/Footer.svelte";

   import { pageResult, secondPageResult } from "$lib/stores";
	import { page } from "$app/stores";
	import Image from "$src/lib/components/Base/Media/Image.svelte";

   let heroHeight="h-160"

</script>

<header>
   <Navbar/>

   <Hero slider>
      <Slide hero 
         imgAlt="Trixolutions Lencioni - De Kracht van Gezonde Teams" 
         height="{heroHeight}"
         imgSrc='Kracht_Gezonde_Teams'>
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
         imgSrc='Beslissende_Voorsprong_2'>
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
         imgSrc='Working_Genius'>
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

<Main noMargin cta>
   <!-- {#each $pageResult as category}
      <SectionWrapper name="{String(category['name_nl']).replaceAll(' ', '-').replaceAll('“', '').replaceAll('”', '').replaceAll('(', '').replaceAll(')', '').toLowerCase()}">
         <Title slot="title" type="h2">{category['name_nl']}</Title>



         <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {#each $secondPageResult as item}
               {#if item['expand']['category']['name_nl'] === category['name_nl']}
                  <Card link="/" equalHeight titleSmaller titleType="h3">
                     <span slot="title">{item['title_nl']}</span>

                     <div slot="image">
                        {#if item['expand']['img']['type'] === 'local'}
                           <img src={`${$page.url.origin}/src/lib/images${item['expand']['img']['src']}?run`} alt="no alt"/>
                        {:else if item['expand']['img']['type'] === 'url'}
                           <img src={`${item['expand']['img']['src']}?run`} alt="no alt"/>
                        {/if}
                     </div>

                     <P klass="prose-ol:list-decimal prose-ul:list-disc prose-li:ml-6"> 
                        {#if Object(item['excerpt_nl']).first !== undefined}
                           {Object(item['excerpt_nl']).first} <br/> <br/>
                        {/if}
                        {#if Object(item['excerpt_nl']).second !== undefined}
                           {Object(item['excerpt_nl']).second} <br/> <br/>
                        {/if}
                        
                        
                        <ul>
                           {#each Object(item['excerpt_nl'].list) as listItem}
                              <li>{listItem}</li>
                           {/each}
                        </ul>

                        {#if Object(item['excerpt_nl']).list_2 !== undefined}
                        <br/>
                        <ol>
                           {#each Object(item['excerpt_nl'].list_2) as listItem2}
                              <li>{listItem2}</li>
                           {/each}
                        </ol>
                        {/if}
                     </P>
                     <Link underlineOnHover
                        slot="append-inner" href="/"
                        klass='my-2 font-bold'>
                        Meer Info
                     </Link>
                  </Card>
               {/if}
            {/each}
         </div>
      </SectionWrapper>
   {/each} -->
</Main>

<Footer/>