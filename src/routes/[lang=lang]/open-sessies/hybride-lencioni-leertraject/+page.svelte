<script lang="ts">
   import { Main, SectionWrapper, Title, P, Breadcrumbs, List, ListItem, Button } from "$comp/core";
   import { Hero, Card } from "$comp/common";
   import { Accordeon, AccordeonItem } from "$comp/content";
   import Image            from "$src/lib/components/Common/Media/Image.svelte";
	
   import { date } from "svelte-i18n";
   import { formatDateFull, formatDateMonthFull, formatDateShort, formatTime, formatYear, titleCase } from "$utils";

   import { _ } from "svelte-i18n";

	import Icon from "@iconify/svelte";
	import PartnershipAccordeon from "../PartnershipAccordeon.svelte";
	import MasterclassCard from "./MasterclassCard.svelte";

   export let data;
   let pageData = Object(data.sessionTypes);
   let sessionData = Object(data.sessionData);
   console.log(sessionData);

</script>

<header>
   <Hero titleSmall imgSrc="home/working-genius.webp" imgAlt="No alt">
      <span slot="title">{titleCase($_('open_sessions.level_1.title'))}</span>   
   </Hero>
</header>

<Main noMargin cta>
   <Breadcrumbs/>
   
   <SectionWrapper name="hybride-lencioni-leertraject">
      <P large>
         {@const introContent = $_('open_sessions.level_1.intro.content')}
         {#each introContent as item}
            {@html item}
         {/each}
      </P>
      <PartnershipAccordeon />
   </SectionWrapper>

   <SectionWrapper name="hybride-lencioni-leertraject-features">
      <div class="flex flex-row gap-4">

         {#each pageData as session}
            <MasterclassCard {session} />
         {/each}

      </div>
   </SectionWrapper>

   <SectionWrapper name="hybride-lencioni-leertraject-praktische-info">
      <div class="flex flex-row w-full gap-16 items-center justify-start" slot="title">
         <Title type="h2" small>
            Praktische Info:
         </Title>
         <div class="">
            <Title type="subheader" smaller italic>
               Hybride Lencioni Teamcoaching Leertraject
            </Title>
            <Title type="h3" smaller thin>
               Mét Tweedaagse Masterclass
            </Title>
         </div>
      </div>
      
      <div class="grid grid-cols-2 md:grid-cols-3 gap-4 xl:gap-8">
         {#each sessionData as session}
            {#if session.type == "level_1_full"}
               <Card class="
                     last-of-type:col-span-full md:last-of-type:col-span-1
                     last-of-type:w-1/2 md:last-of-type:w-full
                     last-of-type:mx-auto"
               >
                  <div slot="title" 
                     class="flex items-center justify-center w-full h-fit gap-2">
                     <Icon 
                        icon="material-symbols:calendar-month-rounded" 
                        class="w-10 h-10 p-[5px] text-white bg-primary/90 rounded-full" />
                     <Title type="h4" class="uppercase pt-[5px]" small>
                        {#if session.is_full}
                           Volzet
                        {:else}
                           <div class="flex flex-col gap-0 leading-none">
                              {formatDateShort(session.starts_on)} - {formatDateShort(session.ends_on)}<br/>
                              <span class="text-xl font-medium m-0">{formatYear(session.starts_on)}</span>
                           </div>
                        {/if}
                     </Title>
                  </div>

                  <P large center class="w-full text-2xl">
                     {formatTime(session.starts_on)} - {formatTime(session.ends_on)}
                  </P>
               </Card>


            {/if}
         {/each}
      </div>
   </SectionWrapper>
</Main>