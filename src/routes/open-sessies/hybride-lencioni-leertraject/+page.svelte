<script lang="ts">
   import { Main, SectionWrapper, Title, P, Breadcrumbs, List, ListItem, Button } from "$comp/core";
   import { Hero, Card } from "$comp/common";
   import { Accordeon, AccordeonItem } from "$comp/content";
   import Image            from "$src/lib/components/Common/Media/Image.svelte";
	
   import { formatDateMonthFull, formatPrice, titleCase } from "$utils";

   import { _ } from "svelte-i18n";

	import Icon from "@iconify/svelte";
	import PartnershipAccordeon from "../PartnershipAccordeon.svelte";
	import MasterclassCard from "./MasterclassCard.svelte";

   export let data;
   let pageData = Object(data.data);
   console.log(pageData);

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

   <SectionWrapper name="infosessies-praktische-info">
      <div class="flex flex-row gap-4">

         {#each pageData as session}
            <MasterclassCard {session} />
         {/each}

      </div>
   </SectionWrapper>
</Main>