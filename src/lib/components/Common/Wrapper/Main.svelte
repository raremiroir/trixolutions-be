
<script lang="ts">
   // Import Components
   import { Accordeon, AccordeonItem, CtA, H4, List, ListItem, Reveal, Subheader, Text } from "$comp";
   import { Section } from ".";
	import PageTransition from "../../Utils/PageTransition.svelte";

   import LL from "$i18n/i18n-svelte";
	import Subtitle from "../../Core/Title/Subtitle.svelte";

   // Define extra classes
   let klass = '';
   export { klass as class };
   
   // If main does not have margin, set to tru
   export let noMargin = false;

   // Add partnership section?
   export let partnership = false;
   // Add CTA section?
   export let cta = false;

   // Active accordeon
   let active:any = null;
</script>

<PageTransition>
   <main 
      class="
         overflow-x-hidden w-full mb-20
         {noMargin ? 'mt-6' : 'mt-24'}
         {klass}"
   >
         
      <slot/>
   
      {#if partnership}
         <Section name="about-partnership">
   
            <Reveal>
               <Accordeon bind:active>
                  <AccordeonItem 
                     id={1} titleType='h2' titleSmallest 
                     title="{$LL.base.foot_accordeon.about_trix_lencioni.title()}">
                     <Text>
                        {@html $LL.base.foot_accordeon.about_trix_lencioni.text()}
                     </Text>
                  </AccordeonItem>
                  <AccordeonItem 
                     id={2} titleType='h2' titleSmallest 
                     title="{$LL.base.foot_accordeon.digital_coaching.title()}">
                        <H4 smaller>{$LL.base.foot_accordeon.digital_coaching.sub()}</H4><br/>
                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                           {#each Object.values($LL.base.foot_accordeon.digital_coaching.options) as option}
                              <List>
                                 <Subheader smaller>{option.title()}</Subheader>
                                 {#each Array.from(option.items) as item}
                                    <ListItem>{item()}</ListItem>
                                 {/each}
                              </List>
                           {/each}
                        </div>
                  </AccordeonItem>
               </Accordeon>
            </Reveal>
   
         </Section>
      {/if}
   
      {#if cta}
         <Section name="call-to-action">
            <Reveal bottom slow>
               <CtA />
            </Reveal>
         </Section>
      {/if}
   </main>
</PageTransition>