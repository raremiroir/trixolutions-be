<script lang="ts">
   // Import Components
   import { Main, SectionWrapper, Title, P } from "$comp/core";
   import { Card, TwicPic } from "$comp/common";
	import MemberCard from "./MemberCard.svelte";

   import LL from "$src/i18n/i18n-svelte";

   import { breakpoints } from "$lib/stores";
      
   let innerWidth:number;
   $: innerWidth;
   // Change image ratio according to breakpoint
   let ratio = '3:1'
   $: if (innerWidth < $breakpoints.xs) { ratio = "3:2"; } 
   else if (innerWidth < $breakpoints.sm) { ratio = "5:3"; } 
   else if (innerWidth < $breakpoints.md) { ratio = "16:9"; } 
   else if (innerWidth < $breakpoints.lg) { ratio = "2:3"; } 
   else if (innerWidth < $breakpoints.xl) { ratio = "5:6"; } 
   else if (innerWidth < $breakpoints.xxl) { ratio = "1"; } 
   else { ratio = "5:4"; }

</script>

<svelte:window bind:innerWidth={innerWidth} />

<Main cta>
   <SectionWrapper name="about-us">
      <Title slot="title" type='h1'>{$LL.pages.about.title()}</Title>
      <div class="grid grid-cols-2 xl:grid-cols-5 gap-6 md:gap-12">
         <div class="col-span-5 md:col-span-1 xl:col-span-2">
            <TwicPic
               class="rounded-xl shadow-md"
               src="team/tom-color.webp" 
               alt="Over Trixolutions"
               anchor=""
               ratio={ratio}
            />
         </div>
         <P class="col-span-5 md:col-span-1 xl:col-span-3 h-fit" large>
            {@const introItems = $LL.pages.about.intro()}
            {#each introItems as item}
               {@html item}
            {/each}
         </P>
      </div>
   </SectionWrapper>

   <SectionWrapper name="our-team">
      <Title type="h2">{$LL.pages.about.team.title()}</Title>

      <ul class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
         <MemberCard
            src="team/tom-bw.webp" alt="Tom van Dorst - CEO Trixolutions"
            name="Tom van Dorst">
            {$LL.pages.about.team.tom.job()}
         </MemberCard>
         <MemberCard
            src="team/tamara-bw.webp" alt="Tamara - Trixolutions Office Manager"
            name="Tamara">
            {$LL.pages.about.team.tamara.job()}
         </MemberCard>
         <MemberCard
            src="placeholder/placeholder.png" alt="Roger - Trixolutions Trainer / Actor"
            name="Roger">
            {$LL.pages.about.team.roger.job()}
         </MemberCard>
         <MemberCard
            src="placeholder/placeholder.png" alt="Kelly - Trixolutions Trainer / Facilitator"
            name="Kelly">
            {$LL.pages.about.team.kelly.job()}
         </MemberCard>
         <MemberCard
            src="team/christoph-bw.webp" alt="Christoph - Trixolutions Trainer / Facilitator"
            name="Christoph" position="top">
            {$LL.pages.about.team.christoph.job()}
         </MemberCard>
         <MemberCard
            src="team/frederik-bw.webp" alt="Frederik - Trixolutions Senior Trainer"
            name="Frederik" position="top">
            {$LL.pages.about.team.frederik.job()}
         </MemberCard>
      </ul>

   </SectionWrapper>
</Main>