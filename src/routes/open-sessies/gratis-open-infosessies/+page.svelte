<script lang="ts">
	import Button           from "$comp/Core/Button/Button.svelte";
	import Main             from "$comp/Base/Wrapper/Main.svelte";
   import SectionWrapper   from "$comp/Base/Wrapper/SectionWrapper.svelte";
	import Breadcrumbs      from "$src/lib/components/Core/Breadcrumbs/Breadcrumbs.svelte";
	import Card             from "$comp/Common/Card/Card.svelte";
	import P                from "$comp/Common/Text/P.svelte";
	import Tag              from "$comp/Common/Text/Tag.svelte";
	import Title            from "$comp/Common/Text/Title.svelte";
	import Hero 	         from "$comp/Hero/Hero.svelte";

   import { formatDateMonthFull, formatTime, formatDateShort } from "$lib/utils";
	import supabase from "$src/lib/db";
   
   const getData = async () => {
      const {data, error} = await supabase
         .from('sessions')
         .select(`
            *,
            trainer (
               first_name,
               last_name
            )
         `);

      if (error) throw new Error(error.message);

      console.log(data);
      return data;
   }

</script>

<header>
   <Hero height="h-92" imgSrc="Kracht_Gezonde_Teams" imgAlt="No Alt">
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

   <SectionWrapper name="infosessies-praktische-info">»
      <Title type="h2" slot="title">Praktische Info</Title>
      <div class="grid grid-cols-2 gap-8">
         {#await getData()}
            Loading...
         {:then data} 
         <!-- <pre>{JSON.stringify($pageResult, null, 2)}</pre> -->
            {#each data as session}
               {#if session.type === 'info_session'}
                  <Card label="{formatDateMonthFull(session.starts_on)}" labelPrimary titleType="h3" titleSmallest>
                     <span slot="title">Online Infosessie</span>
                     <div class="flex flex-col gap-4 w-full">
                        <div class="flex flex-row justify-between w-full">
                           <Tag outlined>
                              {session.trainer.first_name} {session.trainer.last_name}
                           </Tag>
                           <Tag primary>
                              {formatTime(session.starts_on)} - {formatTime(session.ends_on)}
                           </Tag>
                        </div>
                        <Button size="lg" color="primary">
                           Inschrijven
                        </Button>
                     </div>
                  </Card>
               {/if}
            {/each}
         {:catch error}
            {error}
         {/await}
      </div>
      <div class="m-0 px-0 py-16 w-full flex justify-center items-center">
         <Button size="xxl">
            Inschrijven voor Infosessie
         </Button>
      </div>
   </SectionWrapper>
</Main>