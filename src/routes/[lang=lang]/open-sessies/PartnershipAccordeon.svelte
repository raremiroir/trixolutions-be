<script lang="ts">

   import { Title, P, Blockquote, List, ListItem } from "$comp/core";
   import { Accordeon, AccordeonItem } from "$comp/content";
   import { TwicPic } from "$comp/common";

   import LL from "$src/i18n/i18n-svelte";
   import { breakpoints } from "$src/lib/stores";

   let innerWidth:number;
   $: innerWidth;
   let ratio = '1'
   $: if (innerWidth < $breakpoints.xs) { ratio = "2:1"; }  
      else if (innerWidth < $breakpoints.sm) { ratio = "2:1"; } 
      else if (innerWidth < $breakpoints.md) { ratio = "3:1"; } 
      else if (innerWidth < $breakpoints.lg) { ratio = "3:1"; } 
      else if (innerWidth < $breakpoints.xl) { ratio = "1"; } 
      else if (innerWidth < $breakpoints.xxl) { ratio = "1"; }
      else { ratio = "1"}
</script>

<svelte:window bind:innerWidth={innerWidth} />

<ul class="flex flex-col gap-4">
   <Accordeon>
      <li>
         <AccordeonItem id={1} title={$LL.components.open_sessions_accordeon.first.title()} titleSmaller>
            <div class="flex flex-col gap-2">
               <Title type="h4" smaller>{$LL.components.open_sessions_accordeon.first.content_title()}</Title>
               <P large>
                  {@const firstItemContentFirst = $LL.components.open_sessions_accordeon.first.first()}
                  {#each firstItemContentFirst as item}
                     {@html item}
                  {/each}
               </P>
               <Blockquote author="Patrick Lencioni">
                  {$LL.components.open_sessions_accordeon.first.quote()}
               </Blockquote>
               <P large>
                  {@const firstItemContentLast = $LL.components.open_sessions_accordeon.first.last()}
                  {#each firstItemContentLast as item}
                     {@html item}
                  {/each}
                  De kracht van een gezond team zit voornamelijk in de vaardigheid van teamleden 
                  om <strong>vertrouwen</strong> op te bouwen, met elkaar <strong>respectvolle conflicten</strong> te kunnen hebben, 
                  <strong>betrokkenheid bij het team</strong> te voelen, elkaar <strong>aansprakelijk</strong> te durven stellen en 
                  <strong>resultaatgericht</strong> te kunnen werken.
               </P>
            </div>
         </AccordeonItem>
      </li>
      <li>
         <AccordeonItem id={2} title={$LL.components.open_sessions_accordeon.second.title()} titleSmaller>
            <div class="flex flex-col gap-2">
               <Title type="h4" smaller>{$LL.components.open_sessions_accordeon.second.content_title()}:</Title>
               <div class="flex flex-col-reverse lg:flex-row w-full justify-between">
                  <List class="w-full lg:w-8/12">
                     <P large class="lg:hidden">{$LL.components.open_sessions_accordeon.second.list_title()}</P>
                     {@const secondItemList = $LL.components.open_sessions_accordeon.second.list()}
                     {#each secondItemList as item}
                        <ListItem large>{item}</ListItem>
                     {/each}
                  </List>
                  <div class="w-full lg:w-4/12">
                     <TwicPic 
                        src="lencioni-assets/pyramid-lencioni-graphic.png"
                        mode="contain"
                        alt="Lencioni Pyramide"
                        {ratio}
                     />
                  </div>
               </div>
            </div>
         </AccordeonItem>
      </li>
   </Accordeon>
</ul>