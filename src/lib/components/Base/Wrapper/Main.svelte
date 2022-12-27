<script>
	import CtA from "$comp/Core/CtA/CtA.svelte";
	import Accordeon from "$comp/Other/Accordeon/Accordeon.svelte";
	import SectionWrapper from "./SectionWrapper.svelte";


   export let klass = '';
   export let noMargin = false;

   // Add partnership section?
   export let partnership = false;
   // Add CTA section?
   export let cta = false;
</script>

<main 
   class="
      {noMargin ? '' : 'mt-24 mb-20'}
      {klass}">
   <slot/>

   {#if partnership}
      <SectionWrapper name="about-partnership">
         <Accordeon titleType='h2' titleSmallest title="Over Trixolutions en Patrick Lencioni">
               Bla bla
         </Accordeon>
         <Accordeon titleType='h2' titleSmallest title="Mogelijkheden tot (digitale) Opleiding en Coaching">
               Bla bla
         </Accordeon>
      </SectionWrapper>
   {/if}
	{#if cta}
      <SectionWrapper name="call-to-action">
         <CtA></CtA>
      </SectionWrapper>
   {/if}
</main>