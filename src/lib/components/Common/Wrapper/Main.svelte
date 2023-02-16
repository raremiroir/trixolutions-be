
<script lang="ts">
   // Import Components
   import { Accordeon, AccordeonItem, CtA, Reveal } from "$comp";
   import { Section } from ".";
	import PageTransition from "../../Utils/PageTransition.svelte";

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
                     title="Over Trixolutions en Patrick Lencioni">
                        Bla bla
                  </AccordeonItem>
                  <AccordeonItem 
                     id={2} titleType='h2' titleSmallest 
                     title="Mogelijkheden tot (digitale) Opleiding en Coaching">
                        Bla bla
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