<script>
	import Image from "$src/lib/components/Base/Media/Image.svelte";
	import Main from "$src/lib/components/Base/Wrapper/Main.svelte";
import SectionWrapper from "$src/lib/components/Base/Wrapper/SectionWrapper.svelte";
	import Breadcrumbs from "$src/lib/components/Common/Breadcrumbs/Breadcrumbs.svelte";
	import Button from "$src/lib/components/Common/Button/Button.svelte";
	import Card from "$src/lib/components/Common/Card/Card.svelte";
	import P from "$src/lib/components/Common/Text/P.svelte";
	import Tag from "$src/lib/components/Common/Text/Tag.svelte";
	import Title from "$src/lib/components/Common/Text/Title.svelte";
	import Hero from "$src/lib/components/Hero/Hero.svelte";

   import { formatDateMonthFull } from "$src/utils";

   let infosessie_data = [
      {
         date: '02/12/2022',
         start: '11:00',
         end: '11:45',
         coach: 'Tom van Dorst',
      },
      {
         date: '13/01/2023',
         start: '11:00',
         end: '11:45',
         coach: 'Tom van Dorst',
      },
   ]
   let deepdive_data = [
      {
         date: '05/12/2022',
         start: '09:00',
         end: '17:00',
         coach: 'Tom van Dorst',
      },
   ]

</script>

<header>
   <Hero title="Gratis Online Open Infosessies" height="h-92" />
</header>

<Main noMargin>
   <Breadcrumbs/>
   
   <SectionWrapper name="gratis-online-open-infosessies">
      <Title type="h2" slot="title" large>Teamcoaching met Lencioni</Title>

      <P large>
         Trixolutions is partner van de Table Group van Patrick Lencioni. 
         We zijn geaccrediteerd om, niet enkel zijn gedachtegoed, verschillende 
         modellen en assessments in te zetten in bedrijven, maar ook om de 
         beroemde Lencioni Coach-the-Coach opleidingen te organiseren. <br/>
         Meer dan 110 coaches mochten we zo al op de markt loslaten!<br/>
         <br/>
         In deze gratis online infosessie verdiepen we op zijn meest beroemde 
         model uit “De 5 Frustraties van Teamwork” en hoe deze juist in te 
         zetten in teams en bedrijven. We verdiepen en lichten onze tweedaagse 
         Masterclass “Lencioni Coach-the-Coach” (Level 1) toe alsook zijn 
         andere modellen rond “De Beslissende Voorsprong”, “De Ideale Teamplayer” 
         en “The 6 Types of Working Genius”.<br/>
         <br/>
         Meer informatie nodig of inschrijven voor één van de gratis open 
         infosessies? Vragen? Klik dan op onderstaande knop en vul het formulier in.
      </P>

   </SectionWrapper>

   <SectionWrapper name="infosessies-praktische-info">
      <Title type="h2" slot="title">Praktische Info</Title>
      <div class="grid grid-cols-2 gap-8">
         {#each infosessie_data as session}
            <Card label="{formatDateMonthFull(session.date)}" labelPrimary titleType="h3" titleSmallest>
               <span slot="title">Online Infosessie</span>
               <div class="flex flex-col gap-4 w-full">
                  <div class="flex flex-row justify-between w-full">
                     <Tag large outlined>
                        {session.date} || {session.start} - {session.end}
                     </Tag>
                     <Tag large outlined>
                        {session.coach}
                     </Tag>
                  </div>
                  <Button size="lg" color="primary">
                     Inschrijven
                  </Button>
               </div>
            </Card>
         {/each}
      </div>
      <div class="m-0 px-0 py-16 w-full flex justify-center items-center">
         <Button size="xxl">
            Inschrijven voor Infosessie
         </Button>
      </div>
   </SectionWrapper>
</Main>