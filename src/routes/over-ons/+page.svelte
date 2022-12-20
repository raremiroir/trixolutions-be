<script>
	import Main             from "$src/lib/components/Base/Wrapper/Main.svelte";
   import SectionWrapper   from "$src/lib/components/Base/Wrapper/SectionWrapper.svelte";
	import Title            from "$src/lib/components/Common/Text/Title.svelte";

	import P from "$src/lib/components/Common/Text/P.svelte";
	import Card from "$src/lib/components/Common/Card/Card.svelte";
	import Image from "$src/lib/components/Base/Media/Image.svelte";


</script>

<Main>
   <SectionWrapper name="about-us">
      <Title slot="title" type='h1'>Over Ons</Title>
      <div class="grid grid-cols-3 gap-12">
         <Image 
            img="tom-color" alt="Tom van Dorst - CEO Trixolutions"
            klass="rounded-xl shadow-md" 
            height="h-full"
         />
         <P klass="col-span-2 h-fit" large>
            Trixolutions is als enige in de Benelux lid van de 
            Table Group van Patrick Lencioni. (CAPA Pro)<br/>
            <br/>
            We zijn een dynamisch trainingskantoor met een sterke focus 
            op teamcoaching en leiderschapsvaardigheden met de Lencioni 
            inzichten, ervaring en methodieken.<br/>
            <br/>
            Reeds jaren worden we in de Lencioni CAPA Pro Academy op 
            wekelijkse basis begeleid, gecoacht en getraind in de 
            verschillende Lencioni modellen, assessment en toepassingen 
            door Patrick Lencioni en zijn consultants zelf.<br/>
            <br/>
            In samenwerking met The Table Group zetten we de modellen, 
            assessments, inzichten en methodieken om naar de Nederlandse en 
            Vlaamse markt, cultuur en taal.<br/>
            <br/>
            Door deze kennis, gecombineerd met meer dan 200 teamtrajecten 
            op de teller en meer dan 100 afgestudeerde Lencioni Coaches 
            op de Belgische en Nederlandse markt, zijn we de ideale 
            partner om jouw Lencioni kennis te verhogen naar het hoogste niveau!
         </P>
      </div>
   </SectionWrapper>

   <SectionWrapper name="our-team">
      <Title type="h2">Ons Team</Title>

      <div class="grid grid-cols-2 lg:grid-cols-3 gap-8">
         <Card 
            imgHeight="h-80"
            img="tom-bw" imgAlt="Tom van Dorst - CEO Trixolutions"
            title="Tom van Dorst" titleType="h3">
            CEO / Trainer / Coach
         </Card>
         <Card 
            imgHeight="h-80"
            img="tamara" imgAlt="Tamara - Trixolutions Office Manager"
            title="Tamara" titleType="h3">
            Office Manager
         </Card>
         <Card 
            imgHeight="h-80"
            img="tamara" imgAlt="Roger - Trixolutions Trainer / Actor"
            title="Roger" titleType="h3">
            Trainer / Acteur
         </Card>
         <Card 
            imgHeight="h-80"
            img="tamara" imgAlt="Kelly - Trixolutions Trainer / Facilitator"
            title="Kelly" titleType="h3">
            Trainer / Facilitator
         </Card>
         <Card 
            imgHeight="h-80" imgPos="object-top"
            img="christoph" imgAlt="Christoph - Trixolutions Trainer / Facilitator"
            title="Christoph" titleType="h3">
            Trainer / Facilitator
         </Card>
         <Card 
            imgHeight="h-80" imgPos="object-top"
            img="frederik" imgAlt="Frederik - Trixolutions Senior Trainer"
            title="Christoph" titleType="h3">
            Senior Trainer
         </Card>
      </div>

   </SectionWrapper>
</Main>