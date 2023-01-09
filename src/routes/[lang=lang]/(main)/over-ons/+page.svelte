<script lang="ts">
   import { breakpoints } from "$lib/stores";
	import supabase from "$src/lib/db";
   import LL, { locale } from "$src/i18n/i18n-svelte";
	import { firstLetterCase } from "$src/lib/utils";

   // Import Components
   import { Main, SectionWrapper, Title, P } from "$comp/core";
   import { Card, TwicPic, Alert } from "$comp/common";
	import MemberCard from "./MemberCard.svelte";



   const getData = async () => {
      const {data, error} = await supabase
         .from('team_members')
         .select(`*, img(name, folder, type)`)
         .order('order', { ascending: true });
      if (error) throw new Error(error.message);
      return data;
   }
      
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
            {#each Object.entries($LL.pages.about.intro) as [key, item]}
               {@html item()}
            {/each}
         </P>
      </div>
   </SectionWrapper>

   <SectionWrapper name="our-team">
      <Title type="h2">{$LL.pages.about.team.title()}</Title>

      <ul class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
         {#await getData()}
            <Alert>{firstLetterCase($LL.base.db.loading())}</Alert>
         {:then data} 
            {#each data as member}
               <MemberCard
                  src="{member.img.folder}/{member.img.name}.{member.img.type}" 
                  alt="{member.first_name} {member.last_name} - {$locale === 'fr' ? member.job.fr : $locale === 'en' ? member.job.en : member.job.nl}"
                  name="{member.first_name} {member.last_name}"
                  position={member.unique_name === 'christoph' || member.unique_name === 'frederik' ? 'top' : ''}>
                  <Title type="subtitle" smaller italic>{$locale === 'fr' ? member.job.fr : $locale === 'en' ? member.job.en : member.job.nl}</Title>
               </MemberCard>
            {/each}
         {:catch error}
            <div class="flex flex-col gap-0">
               <Alert preset="error">{firstLetterCase($LL.base.db.error_loading())}:</Alert>
               <Alert preset="error-outlined">{error}:</Alert>
            </div>
         {/await}
   </SectionWrapper>
</Main>