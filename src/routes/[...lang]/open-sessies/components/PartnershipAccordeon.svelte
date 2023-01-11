<script lang="ts">

   import { Title, P, Blockquote, List, ListItem, Accordeon, AccordeonItem, TwicPic } from "$comp";

   import LL from "$i18n/i18n-svelte";
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
         <AccordeonItem 
            id={1} 
            title={$LL.components.open_sessions_accordeon.first.title()} titleSmaller
            icon="mdi:partnership-outline">
            <div class="flex flex-col gap-2">
               <Title type="h4" smaller>{$LL.components.open_sessions_accordeon.first.content_title()}</Title>
               <P large>
                  {#each Object.entries($LL.components.open_sessions_accordeon.first.first) as [key, item]}
                     {@html item()}
                  {/each}
               </P>
               <Blockquote author="Patrick Lencioni">
                  {$LL.components.open_sessions_accordeon.first.quote()}
               </Blockquote>
               <P large>
                  {#each Object.entries($LL.components.open_sessions_accordeon.first.last) as [key, item]}
                     {@html item()}
                  {/each}
               </P>
            </div>
         </AccordeonItem>
      </li>
      <li>
         <AccordeonItem 
            id={2} 
            title={$LL.components.open_sessions_accordeon.second.title()} titleSmaller
            icon="uil:comment-question">
            <div class="flex flex-col gap-2">
               <Title type="h4" smaller>{$LL.components.open_sessions_accordeon.second.content_title()}:</Title>
               <div class="flex flex-col-reverse lg:flex-row w-full justify-between">
                  <List class="w-full lg:w-8/12">
                     <P large class="lg:hidden">{$LL.components.open_sessions_accordeon.second.list_title()}</P>
                     {#each Object.entries($LL.components.open_sessions_accordeon.second.list) as [key, item]}
                        <ListItem large>{item()}</ListItem>
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