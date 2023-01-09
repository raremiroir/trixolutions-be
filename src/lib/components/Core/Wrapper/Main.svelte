<script lang="ts">

   import { CtA } from "$comp/common";
   import { Accordeon, AccordeonItem } from "$comp/content";
   import { SectionWrapper } from "./wrapper";


   let klass = '';
   export { klass as class };
   
   export let noMargin = false;

   // Add partnership section?
   export let partnership = false;
   // Add CTA section?
   export let cta = false;

   let active:any = null;
</script>

<main 
   class="
      overflow-x-hidden w-full
      {noMargin ? 'mt-6' : 'mt-24'}
      mb-20
      {klass}">
   <slot/>

   {#if partnership}
      <SectionWrapper name="about-partnership">
         <Accordeon bind:active>
            <AccordeonItem id={1}
               titleType='h2' titleSmallest 
               title="Over Trixolutions en Patrick Lencioni">
                  Bla bla
            </AccordeonItem>
            <AccordeonItem id={2}
               titleType='h2' titleSmallest 
               title="Mogelijkheden tot (digitale) Opleiding en Coaching">
                  Bla bla
            </AccordeonItem>
         </Accordeon>
      </SectionWrapper>
   {/if}
	{#if cta}
      <SectionWrapper name="call-to-action">
         <CtA></CtA>
      </SectionWrapper>
   {/if}
</main>