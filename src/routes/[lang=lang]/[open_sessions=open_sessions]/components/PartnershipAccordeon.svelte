<script lang="ts">
   // Import components
   import { H4, Text, List, ListItem, Accordeon, AccordeonItem, Image, Blockquote } from "$comp";
   // Import i18n
   import LL from "$i18n/i18n-svelte";
</script>

<ul class="flex flex-col gap-4">
   <Accordeon>
      <li>
         <AccordeonItem id={1} title={$LL.components.open_sessions_accordeon.first.title()} icon="mdi:partnership-outline">
            <div class="flex flex-col gap-2">
               <H4 smaller>{$LL.components.open_sessions_accordeon.first.content_title()}</H4>
               <Text>{@html $LL.components.open_sessions_accordeon.first.first()}</Text>
               <Blockquote author="Patrick Lencioni">{$LL.components.open_sessions_accordeon.first.quote()}</Blockquote>
               <Text>{@html $LL.components.open_sessions_accordeon.first.last()}</Text>
            </div>
         </AccordeonItem>
      </li>
      <li>
         <AccordeonItem id={2} title={$LL.components.open_sessions_accordeon.second.title()} icon="uil:comment-question">
            <div class="flex flex-col gap-2">
               <H4 smaller>{$LL.components.open_sessions_accordeon.second.content_title()}:</H4>
               <div class="flex flex-col-reverse lg:flex-row w-full justify-between">
                  <List class="w-full lg:w-8/12">
                     <Text class="lg:hidden">{$LL.components.open_sessions_accordeon.second.list_title()}</Text>
                     {#each Object.entries($LL.components.open_sessions_accordeon.second.list) as [key, item]}
                        <ListItem>{item()}</ListItem>
                     {/each}
                  </List>
                  <div class="w-full lg:w-4/12">
                     <Image 
                        src="lencioni/pyramid-lencioni-graphic.png"
                        alt="Lencioni Pyramide"
                        class="my-2 w-full flex items-center justify-center"
                        imgClass="w-full h-44 sm:h-60 md:h-76 lg:h-auto"
                     />
                  </div>
               </div>
            </div>
         </AccordeonItem>
      </li>
   </Accordeon>
</ul>