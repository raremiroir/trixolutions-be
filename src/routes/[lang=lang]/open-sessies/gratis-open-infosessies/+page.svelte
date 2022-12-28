<script lang="ts">
	import Button           from "$comp/Core/Button/Button.svelte";
	import Main             from "$comp/Base/Wrapper/Main.svelte";
   import SectionWrapper   from "$comp/Base/Wrapper/SectionWrapper.svelte";
	import Image            from "$comp/Base/Media/Image.svelte";
	import Breadcrumbs      from "$src/lib/components/Core/Breadcrumbs/Breadcrumbs.svelte";
	import Card             from "$comp/Common/Card/Card.svelte";
	import P                from "$comp/Common/Text/P.svelte";
	import Tag              from "$comp/Common/Text/Tag.svelte";
	import Title            from "$comp/Common/Text/Title.svelte";
	import Hero 	         from "$comp/Hero/Hero.svelte";

   import { formatDateMonthFull, formatTime, formatDateShort } from "$lib/utils";
   
   import PocketBase from "pocketbase";
   import { pageResult } from "$lib/stores";
   const pb = new PocketBase('http://127.0.0.1:8090')
   
   
   async function sessionsList() {
      $pageResult =  await pb.collection('info_sessions')
                     .getFullList(200 /* batch size */, {
         sort: 'created',
         expand: 'trainer'
      });
   }
   sessionsList();
   export let data:any;

</script>

<header>
   <Hero height="h-92">
      <span slot="title">
         Gratis Online Open Infosessies
      </span>
   </Hero>
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
         <!-- <pre>{JSON.stringify($pageResult, null, 2)}</pre> -->
            {#each $pageResult as session}
               <Card label="{formatDateMonthFull(session["starts_on"])}" labelPrimary titleType="h3" titleSmallest>
                  <span slot="title">Online Infosessie</span>
                  <div class="flex flex-col gap-4 w-full">
                     <div class="flex flex-row justify-between w-full">
                        <Tag large outlined>
                           {formatDateShort(session["starts_on"])} || {formatTime(session["starts_on"])} - {formatTime(session["ends_on"])}
                        </Tag>
                        <Tag large outlined>
                           {session['expand']['trainer']['first_name']} {session['expand']['trainer']['last_name']}
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